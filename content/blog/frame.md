+++
title = "Detailed granularity of steps in a frame update."
date = 2025-03-12
template = "blog-page.html"
[taxonomies]
tags = ["prompt", "list", "frame"]
+++

# Detailed todo for a frame update.

**Frame Start & Input:**

1.  **Frame Start Marker (CPU):** Begin CPU-side frame timing.
2.  **GPU Frame Start Marker (If Applicable):** Begin GPU-side frame timing.
3.  **Input Device Polling (Keyboard):** Poll keyboard input.
4.  **Input Device Polling (Mouse):** Poll mouse input.
5.  **Input Device Polling (Gamepad 1):** Poll gamepad 1 input.
6.  **Input Device Polling (Gamepad N):** Poll gamepad N input.
7.  **Input Device Filtering (Debouncing):** Apply debouncing to input signals.
8.  **Input Device Filtering (Smoothing):** Apply smoothing to analog input.
9.  **Input Buffering (Raw Keyboard):** Store raw keyboard input.
10. **Input Buffering (Raw Mouse):** Store raw mouse input.
11. **Input Buffering (Raw Gamepad):** Store raw gamepad input.
12. **Input Translation (Key Bindings):** Translate raw keys to game actions.
13. **Input Translation (Mouse Movement):** Translate mouse movement to
    camera/player movement.
14. **Input Translation (Gamepad Axis):** Translate gamepad axis to
    movement/actions.
15. **Input Queueing (Action Events):** Queue game action events.
16. **Input Queueing (Movement Vectors):** Queue movement vectors.
17. **Input Queueing (UI Actions):** Queue UI interaction events.
18. **Game State Pre-Update (Timers):** Update game timers.
19. **Game State Pre-Update (Variables):** Update pre-frame game variables.
20. **AI Decision Making (Context Gathering):** Gather game state context for
    AI.
21. **AI Decision Making (Behavior Tree Evaluation):** Evaluate AI behavior
    trees.
22. **AI Decision Making (Pathfinding):** Perform pathfinding if necessary.
23. **AI Decision Making (Action Selection):** Select actions based on AI logic.
24. **Animation State Update (Transition Logic):** Evaluate animation transition
    logic.
25. **Animation State Update (Parameter Updates):** Update animation parameters.
26. **Game Logic Update (General Scripts):** Execute general game scripts.
27. **Game Logic Update (Entity Scripts):** Execute entity-specific scripts.
28. **Game Logic Update (System Logic):** Execute game system logic.
29. **Event Queue Processing (Game Events):** Process game events.
30. **Event Queue Processing (UI Events):** Process UI events.
31. **Broadphase Collision Detection (Spatial Partition Query):** Query spatial
    partitioning for potential collisions.
32. **Broadphase Collision Detection (Bounding Box Checks):** Perform initial
    bounding box collision checks.
33. **Spatial Partitioning Update (Dynamic Objects):** Update spatial
    partitioning for dynamic objects.
34. **Potential Collision Pair Filtering (Distance Checks):** Filter potential
    collision pairs based on distance.
35. **Potential Collision Pair Filtering (Layer Masks):** Filter potential
    collision pairs based on layer masks.
36. **Narrowphase Collision Detection (Precise Shape Checks):** Perform precise
    collision checks using shapes.
37. **Narrowphase Collision Detection (Contact Point Generation):** Generate
    contact points and normals.
38. **Collision Response (Impulse Resolution):** Apply impulse-based collision
    resolution.
39. **Collision Response (Friction Application):** Apply friction forces.
40. **Physics Simulation (Force Accumulation):** Accumulate forces on physics
    bodies.
41. **Physics Simulation (Integration - Velocity):** Integrate velocities using
    accumulated forces.
42. **Physics Simulation (Integration - Position):** Integrate positions using
    velocities.
43. **Physics State Update (Velocity Clamping):** Clamp velocities to limits.
44. **Physics State Update (Angular Velocity):** Update angular velocities.
45. **Game State Update (Movement Application):** Apply physics results to
    entity positions.
46. **Game State Update (Rotation Application):** Apply physics results to
    entity rotations.
47. **Game State Update (Scale Application):** Apply physics results to entity
    scales.
48. **Animation Blending/Interpolation (Linear Interpolation):** Perform linear
    interpolation between animation states.
49. **Animation Blending/Interpolation (Spherical Linear Interpolation):**
    Perform spherical linear interpolation for rotations.
50. **Animation Application (Bone Transformations):** Apply animation
    transformations to bone hierarchies.

**Rendering Preparation & Rendering:**

51. **Game State Post-Update (Post-Physics Logic):** Execute post-physics game
    logic.
52. **Visibility Culling (Camera Frustum Culling):** Perform camera frustum
    culling.
53. **Visibility Culling (Occlusion Culling Prepass):** Perform occlusion
    culling prepass.
54. **Visibility Culling (Occlusion Culling Query):** Perform occlusion culling
    queries.
55. **Level of Detail (LOD) Selection (Distance Calculation):** Calculate object
    distances from the camera.
56. **Level of Detail (LOD) Selection (LOD Threshold Checks):** Check LOD
    thresholds and select appropriate LOD.
57. **Material Parameter Update (Texture Updates):** Update material textures.
58. **Material Parameter Update (Color Updates):** Update material colors.
59. **Material Parameter Update (Shader Parameters):** Update shader parameters.
60. **Shadow Map Generation (Light Frustum Calculation):** Calculate light
    frustums.
61. **Shadow Map Generation (Render Shadow Maps):** Render shadow maps.
62. **Light Culling (Light Volume Checks):** Check light volumes against object
    bounding volumes.
63. **Light Culling (Light List Generation):** Generate lists of lights
    affecting each object.
64. **Render Queue Population (Opaque Objects):** Populate render queues with
    opaque objects.
65. **Render Queue Population (Transparent Objects):** Populate render queues
    with transparent objects.
66. **Render Queue Population (UI Elements):** Populate render queues with UI
    elements.
67. **Render Queue Sorting (Depth Sorting):** Sort render queues by depth.
68. **Render Queue Sorting (Material Sorting):** Sort render queues by material.
69. **Vertex Buffer Preparation (Vertex Data Assembly):** Assemble vertex data.
70. **Vertex Buffer Preparation (Attribute Interleaving):** Interleave vertex
    attributes.
71. **Index Buffer Preparation (Index Data Assembly):** Assemble index data.
72. **Uniform Buffer Update (Transform Matrices):** Update uniform buffers with
    transformation matrices.
73. **Uniform Buffer Update (Light Parameters):** Update uniform buffers with
    light parameters.
74. **Uniform Buffer Update (Material Parameters):** Update uniform buffers with
    material parameters.
75. **Texture Upload (Texture Data Transfer):** Transfer texture data to the
    GPU.
76. **Texture Upload (Texture Mipmap Generation):** Generate texture mipmaps.
77. **Render Pass Begin (Primary Render Pass):** Begin the primary render pass.
78. **Shadow Map Render Pass (Begin Shadow Render Pass):** Begin the shadow map
    render pass.
79. **Shadow Map Render Pass (Render Shadow Casters):** Render shadow casters.
80. **Shadow Map Render Pass (End Shadow Render Pass):** End the shadow map
    render pass.
81. **Geometry Rendering (Opaque Geometry Draw Calls):** Issue draw calls for
    opaque geometry.
82. **Geometry Rendering (Instanced Rendering):** Perform instanced rendering if
    applicable.
83. **Transparency Rendering (Transparent Geometry Draw Calls):** Issue draw
    calls for transparent geometry.
84. **Transparency Rendering (Blending Operations):** Perform blending
    operations.
85. **Post-Processing Effects (Color Grading):** Apply color grading.
86. **Post-Processing Effects (Bloom):** Apply bloom effect.
87. **Post-Processing Effects (Depth of Field):** Apply depth of field effect.
88. **UI Rendering (UI Draw Calls):** Issue draw calls for UI elements.
89. **Debug Rendering (Wireframe Rendering):** Render wireframe outlines.
90. **Debug Rendering (Collision Box Rendering):** Render collision boxes.
91. **Render Pass End (Primary Render Pass End):** End the primary render pass.
92. **Frame Buffer Swap (Present Frame):** Swap the front and back buffers.
93. **GPU Sync (Wait for GPU Completion):** Wait for the GPU to finish
    rendering.
94. **Audio System Update (Sound Playback):** Update the audio system and play
    sounds.
95. **Audio System Update (Sound Mixing):** Mix audio sources.
96. **Network System Update (Packet Sending):** Send network packets.
97. **Network System Update (Packet Receiving):** Receive network packets.
98. **Garbage Collection (Memory Deallocation):** Deallocate unused memory.
99. **Delta Time Calculation (Frame Time Measurement):** Calculate the time
    elapsed since the last frame.
100.  **Frame End Marker (CPU End Marker):** End the CPU-side frame timing.
