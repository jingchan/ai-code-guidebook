**SFLIP (Separated FLIP)** is a hybrid particle-grid integration method used in
the Material Point Method (MPM) to simulate materials like fluids, sand, or
hair. It improves upon traditional FLIP (Fluid Implicit Particle) by reducing
numerical viscosity (artificial damping) while maintaining stability. Let’s
break it down:

---

### 1. **FLIP vs. SFLIP**

- **Traditional FLIP**: Blends particle and grid velocities to reduce noise but
  introduces damping (like stirring honey). Formula:
  ![](<https://latex.codecogs.com/svg.latex?v_{\text{new}}%20=%20\alpha%20v_{\text{FLIP}}%20+%20(1-\alpha)v_{\text{PIC}}>)
  Where `α` is the FLIP blending ratio.

- **SFLIP (Separated FLIP)**: Decouples velocity into **impulsive** (fast
  changes) and **non-impulsive** (smooth motion) components. This separation
  preserves sharp motions (e.g., hair whipping) while avoiding damping.

---

### 2. **Why SFLIP for Hair?**

Hair requires:

- **Low viscosity**: To preserve lively, dynamic motion.
- **Stability**: To prevent explosions from large timesteps. SFLIP achieves this
  by:

1. Handling collisions/contacts as impulsive forces.
2. Using PIC (Particle-In-Cell) for smooth background motion.

---

### 3. **Key Steps in SFLIP**

Here’s how SFLIP works in the MPM stage of the paper:

#### Step 1: Particle-to-Grid (P2G)

Transfer particle data to the grid, separating velocity into components:

```wgsl
// WGSL: SFLIP Velocity Separation
@group(0) @binding(0) var<storage> particles: array<MPMParticle>;
@group(0) @binding(1) var<storage, read_write> grid: texture_storage_3d<rgba32float>;

@compute @workgroup_size(8, 8, 8)
fn p2g_sflip(@builtin(global_invocation_id) {
    let particle = particles[id.x];

    // Split velocity into impulsive (collisions) and non-impulsive (flow)
    let v_impulsive = compute_collision_velocity(particle);
    let v_non_impulsive = particle.velocity - v_impulsive;

    // Transfer separated velocities to grid
    scatter_to_grid(v_impulsive, v_non_impulsive);
}
```

#### Step 2: Grid Update

Solve grid forces while preserving impulsive components:

```wgsl
@compute @workgroup_size(8, 8, 8)
fn grid_update() {
    // Solve MPM equations for non-impulsive motion
    let v_non_impulsive_new = solve_mpm(grid.v_non_impulsive);

    // Preserve impulsive velocities (e.g., collisions)
    let v_total = v_non_impulsive_new + grid.v_impulsive;

    // Apply friction (Drucker-Prager model for sand-like hair)
    grid.v_total = apply_friction(v_total);
}
```

#### Step 3: Grid-to-Particle (G2P)

Update particles using the separated velocities:

```wgsl
@compute @workgroup_size(8, 8, 8)
fn g2p_sflip() {
    // Gather non-impulsive velocity from grid
    let v_non_impulsive = gather_from_grid();

    // Recombine with preserved impulsive velocity
    particle.velocity = v_non_impulsive + particle.v_impulsive;

    // Reset impulsive velocity for next step
    particle.v_impulsive = vec3(0.0);
}
```

---

### 4. **Code Implementation**

Here’s a simplified Rust/WGPU integration:

```rust
// Rust: SFLIP Integrator
struct SFLIPIntegrator {
    particles: Buffer, // MPMParticle array
    grid: Texture,     // 3D grid texture
    params: Buffer,    // FLIP ratio, friction, etc.
}

impl SFLIPIntegrator {
    fn step(&self, encoder: &mut CommandEncoder) {
        // 1. P2G: Split velocities
        let p2g_pass = encoder.begin_compute_pass();
        p2g_pass.set_pipeline(&self.p2g_pipeline);
        p2g_pass.dispatch_workgroups(particles.len() / 64, 1, 1);

        // 2. Grid solve
        let grid_pass = encoder.begin_compute_pass();
        grid_pass.set_pipeline(&self.grid_pipeline);
        grid_pass.dispatch_workgroups(GRID_SIZE / 8, GRID_SIZE / 8, GRID_SIZE / 8);

        // 3. G2P: Recombine velocities
        let g2p_pass = encoder.begin_compute_pass();
        g2p_pass.set_pipeline(&self.g2p_pipeline);
        g2p_pass.dispatch_workgroups(particles.len() / 64, 1, 1);
    }
}
```

---

### 5. **Why It Matters for Hair**

- **Reduces "mushy" look**: Traditional MPM adds artificial damping, making hair
  behave like wet noodles. SFLIP preserves sharp motions.
- **Efficient collisions**: Impulsive forces resolve strand-strand contact
  without expensive per-particle checks.
- **Sand model compatibility**: Works naturally with Drucker-Prager friction
  (strands clump like sand).

---

### 6. **Comparison Table**

| Method    | Pros                  | Cons                 | Use Case       |
| --------- | --------------------- | -------------------- | -------------- |
| **FLIP**  | Stable, simple        | Too damped for hair  | Water, goo     |
| **PIC**   | Low noise             | Noisy for collisions | Smoke          |
| **SFLIP** | Balanced, low damping | Slightly complex     | **Hair**, sand |

---

### 7. **Practical Tip**

In the paper’s MPM stage (Sec 3.2.2), SFLIP is used with a **low FLIP ratio**
(0.3 vs. 0.95 in fluids):

```rust
// From Table 2 in the paper
struct MPMParams {
    flip_ratio: 0.3,    // Reduced blending for less damping
    youngs_modulus: 1.2e3,
    friction_angle: 20, // Degrees (Drucker-Prager)
}
```

---

### Summary

**SFLIP** is the "secret sauce" that lets the paper’s hybrid method simulate
hair that’s both **dynamic** (like individual strands) and **stable** (no
explosions). By separating velocity components, it avoids the over-damping of
FLIP while keeping the efficiency of MPM—critical for hitting 260 FPS with 2000+
strands!
