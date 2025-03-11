Below is a comprehensive explanation and implementation guide for spectral
bloom, crafted to be self-contained and detailed, leveraging the insights from
the thinking trace while maintaining clarity and focus for the user. Spectral
bloom is a sophisticated post-processing effect in computer graphics that
enhances the realism and artistic quality of bloom by simulating how different
wavelengths of light (colors) spread uniquely. Here's how to approach it:

---

## Understanding Spectral Bloom

**Bloom** is a common post-processing effect in real-time rendering that
simulates the glow or halo around bright light sources, mimicking imperfections
in human vision or camera lenses. Standard bloom typically applies a uniform
blur to bright areas of an image and adds them back to the scene. **Spectral
bloom**, however, elevates this by incorporating the physical principle that
light of different wavelengths (represented as red, green, and blue channels in
RGB rendering) disperses differently. This creates a nuanced effect where, for
example, blue light might spread more than red, resulting in colorful halos with
a gradient-like dispersion.

The goal is to design a rendering pipeline that achieves this effect efficiently
while offering artistic control, suitable for real-time applications like games
or interactive visualizations.

---

## Core Concepts of Spectral Bloom

1. **Color Dispersion**:

   - Different wavelengths of light refract and scatter differently. In
     graphics, we simulate this by treating the red, green, and blue (RGB)
     channels independently, applying distinct blur characteristics to each.

2. **Artistic vs. Physical Accuracy**:

   - While physically accurate dispersion depends on wavelength (e.g., blue
     scatters more due to shorter wavelengths, as seen in Rayleigh scattering),
     spectral bloom prioritizes visual appeal. We can exaggerate or tweak the
     effect for artistic purposes.

3. **Implementation Goals**:
   - **Visual Quality**: Achieve a gradient-like bloom where colors separate
     (e.g., red inside, blue outside).
   - **Performance**: Ensure real-time feasibility by optimizing texture
     resolutions and shader computations.
   - **Flexibility**: Allow artists to adjust parameters like blur radii, color
     weights, and dispersion strength.

---

## Rendering Pipeline for Spectral Bloom

To implement spectral bloom, we'll use a multi-pass rendering pipeline with the
WebGPU API (via Rust and WGSL shaders), balancing quality and performance. The
pipeline consists of three main stages: thresholding, bloom texture generation,
and compositing with spectral effects.

### 1. Thresholding Pass

- **Purpose**: Extract bright areas from the scene that will contribute to the
  bloom effect.
- **Process**:
  - Render the scene to a high-dynamic-range (HDR) texture to capture bright
    light sources accurately.
  - Apply a shader that computes luminance and thresholds it, outputting only
    pixels above a certain brightness.
- **Details**:
  - Use luminance formula: `lum = 0.2126 * R + 0.7152 * G + 0.0722 * B` (based
    on human perception).
  - Scale the output to emphasize bright areas:
    `(color * (lum - threshold)) / (1.0 - threshold)`.

**WGSL Shader (Thresholding)**:

```wgsl
struct Uniforms {
    threshold: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var input_tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

@fragment
fn threshold(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let color = textureSample(input_tex, samp, uv);
    let lum = dot(color.rgb, vec3<f32>(0.2126, 0.7152, 0.0722));
    if (lum > uniforms.threshold) {
        return color * (lum - uniforms.threshold) / (1.0 - uniforms.threshold);
    }
    return vec4<f32>(0.0);
}
```

- **Output**: A bloom source texture containing only the bright areas.

### 2. Bloom Texture Generation

- **Purpose**: Create multiple blurred versions of the bloom source texture,
  each with a different radius, to simulate varying spread for each color
  channel.
- **Process**:
  - Generate three bloom textures:
    - **Bloom Small**: Small blur radius (e.g., sigma = 2).
    - **Bloom Medium**: Medium blur radius (e.g., sigma = 5).
    - **Bloom Large**: Large blur radius (e.g., sigma = 10).
  - Use separable blur techniques (horizontal then vertical passes) for
    efficiency.
- **Optimization**:
  - Render at reduced resolution (e.g., half or quarter size) since bloom is a
    low-frequency effect.
  - Apply Dual Kawase blur (a fast, multi-pass blur algorithm) or Gaussian blur
    with compute shaders for parallel processing.
- **Details**:
  - For each texture, perform two passes:
    - **Horizontal Blur**: Sample along the x-axis with a kernel weighted by the
      blur radius.
    - **Vertical Blur**: Sample along the y-axis using the result of the
      horizontal pass.

**WGSL Shader (Horizontal Blur Example)**:

```wgsl
struct Uniforms {
    blur_radius: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var input_tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

@fragment
fn horizontal_blur(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let texel_size = 1.0 / vec2<f32>(textureDimensions(input_tex));
    var result = vec4<f32>(0.0);
    let radius = i32(uniforms.blur_radius);
    var total_weight = 0.0;

    for (var i = -radius; i <= radius; i = i + 1) {
        let offset = f32(i) * texel_size.x;
        let weight = exp(-f32(i * i) / (2.0 * uniforms.blur_radius));
        result = result + textureSample(input_tex, samp, uv + vec2<f32>(offset, 0.0)) * weight;
        total_weight = total_weight + weight;
    }
    return result / total_weight;
}
```

- **Vertical Blur**: Similar, but sample along the y-axis using the horizontally
  blurred texture.
- **Output**: Three bloom textures (`blur_small`, `blur_medium`, `blur_large`)
  at reduced resolution.

### 3. Composite Pass with Spectral Bloom

- **Purpose**: Combine the original scene with the bloom textures, applying
  spectral effects by blending channels differently and adding chromatic
  aberration.
- **Process**:
  - Sample the three bloom textures.
  - Blend contributions for each color channel with specific weights:
    - Red: More from `blur_small` (less spread).
    - Green: Balanced across all levels.
    - Blue: More from `blur_large` (more spread).
  - Apply UV offsets per channel for chromatic aberration, enhancing the
    spectral effect.
  - Add the resulting bloom to the base scene texture.
- **Details**:
  - Use bilinear filtering when upsampling bloom textures to full resolution.
  - Control bloom intensity and aberration strength via uniforms.

**WGSL Shader (Composite)**:

```wgsl
struct Uniforms {
    bloom_intensity: f32,
    aberration_strength: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var base_tex: texture_2d<f32>;
@group(0) @binding(2) var blur_small_tex: texture_2d<f32>;
@group(0) @binding(3) var blur_medium_tex: texture_2d<f32>;
@group(0) @binding(4) var blur_large_tex: texture_2d<f32>;
@group(0) @binding(5) var samp: sampler;

@fragment
fn composite(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let base = textureSample(base_tex, samp, uv);
    let offset = vec2<f32>(uniforms.aberration_strength, 0.0);

    let small = textureSample(blur_small_tex, samp, uv - offset);
    let medium = textureSample(blur_medium_tex, samp, uv);
    let large = textureSample(blur_large_tex, samp, uv + offset);

    let bloom_r = small.r * 0.6 + medium.r * 0.3 + large.r * 0.1;
    let bloom_g = small.g * 0.3 + medium.g * 0.4 + large.g * 0.3;
    let bloom_b = small.b * 0.1 + medium.b * 0.3 + large.b * 0.6;

    let bloom = vec4<f32>(bloom_r, bloom_g, bloom_b, 1.0) * uniforms.bloom_intensity;
    return base + bloom;
}
```

- **Output**: Final scene with spectral bloom, featuring color-separated halos
  and subtle fringing.

---

## Rust Integration with wgpu

Here's how to set up the pipeline in Rust using the `wgpu` library:

1. **Device and Textures**:

   - Create an HDR render target for the scene (`texture_2d<f32>`).
   - Allocate bloom textures at reduced resolution (e.g., `width / 4`,
     `height / 4`).

2. **Render Pipelines**:

   - **Threshold Pipeline**: Bind the scene texture and output to the bloom
     source texture.
   - **Blur Pipelines**: For each bloom texture (small, medium, large), create
     two pipelines (horizontal and vertical blur).
   - **Composite Pipeline**: Combine the base texture and bloom textures.

3. **Uniforms**:
   - Use a uniform buffer to pass `threshold`, `blur_radius` (per texture),
     `bloom_intensity`, and `aberration_strength`.

**Example Rust Code Structure**:

```rust
use wgpu::{Device, Queue, Texture, RenderPipeline, BindGroup};

// Assuming device, queue, and surface config are initialized
struct SpectralBloom {
    threshold_pipeline: RenderPipeline,
    blur_pipelines: Vec<(RenderPipeline, RenderPipeline)>, // (horizontal, vertical) per blur level
    composite_pipeline: RenderPipeline,
    bloom_textures: Vec<Texture>, // Small, medium, large
    // Bind groups and uniforms omitted for brevity
}

impl SpectralBloom {
    fn render(&self, device: &Device, queue: &Queue, scene_texture: &Texture, output_view: &TextureView) {
        let mut encoder = device.create_command_encoder(&Default::default());

        // Thresholding pass
        {
            let mut pass = encoder.begin_render_pass(/* configure with bloom source texture */);
            pass.set_pipeline(&self.threshold_pipeline);
            // Set bind groups and draw
        }

        // Blur passes
        for (i, (horizontal, vertical)) in self.blur_pipelines.iter().enumerate() {
            // Horizontal blur
            {
                let mut pass = encoder.begin_render_pass(/* temp texture */);
                pass.set_pipeline(horizontal);
                // Draw
            }
            // Vertical blur
            {
                let mut pass = encoder.begin_render_pass(/* final bloom texture i */);
                pass.set_pipeline(vertical);
                // Draw
            }
        }

        // Composite pass
        {
            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: output_view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                ..Default::default()
            });
            pass.set_pipeline(&self.composite_pipeline);
            // Set bind groups (base + bloom textures) and draw
        }

        queue.submit(std::iter::once(encoder.finish()));
    }
}
```

---

## Optimization Strategies

1. **Reduced Resolution**:

   - Perform bloom calculations at quarter resolution and upsample with bilinear
     filtering.

2. **Separable Blurs**:

   - Use horizontal and vertical passes to reduce texture samples from O(n²) to
     O(n) per pixel.

3. **Compute Shaders**:

   - Replace fragment shaders with compute shaders for blur passes, leveraging
     parallel processing (e.g., 16x16 workgroups).

4. **Mipmap Alternative**:
   - Generate a mipmap chain from the thresholded image, blur each level, and
     sample different levels per channel in the composite pass (e.g.,
     `textureSampleLevel`).

---

## Artistic Enhancements

1. **Channel Weights**:

   - Adjust weights (e.g., `0.6, 0.3, 0.1`) via uniforms for dynamic control
     over color spread.

2. **Chromatic Aberration**:

   - Scale `aberration_strength` to exaggerate or minimize color fringing.

3. **Bloom Intensity**:

   - Multiply bloom by a uniform scalar for overall brightness.

4. **Noise Injection** (Optional):

   - Add a noise texture sample to the bloom color to break up uniform halos:
     ```wgsl
     let noise = textureSample(noise_tex, samp, uv * noise_scale).r * 0.05;
     let bloom = vec4<f32>(bloom_r, bloom_g, bloom_b, 1.0) * uniforms.bloom_intensity + noise;
     ```

5. **Color Tinting** (Optional):
   - Multiply bloom by a tint vector (e.g., `vec3<f32>(1.0, 0.9, 0.8)` for a
     warm tone).

---

## Visual Outcome

The result is an ethereal, spectral bloom effect where:

- Bright lights exhibit halos with a color gradient (e.g., red near the center,
  blue at the edges).
- Chromatic aberration adds subtle fringing, enhancing the dispersion illusion.
- The effect remains performant due to optimizations, making it viable for
  real-time rendering.

---

## Conclusion

This spectral bloom pipeline combines multi-scale blur with channel-specific
blending and chromatic aberration, offering a rich, customizable effect. By
leveraging WGSL shaders and Rust with `wgpu`, developers can integrate it into
modern rendering engines, balancing visual fidelity with real-time performance.
Adjust parameters like blur radii, weights, and offsets to tailor the effect to
specific artistic visions, from subtle realism to exaggerated fantasy glows.
