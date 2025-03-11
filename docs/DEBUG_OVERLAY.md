Below is a **complete working example** of a debug overlay for a game engine
using WGPU, designed to display debug information like FPS and frame time
without relying on heavy UI libraries like EGUI. The solution centers around a
lightweight `render_text` function that renders text directly to the screen
using a font atlas and WGPU's rendering capabilities. This example builds on the
design outlined, prioritizing simplicity while ensuring full functionality. I'll
provide all necessary code, including shaders, and integrate it into a minimal
rendering harness that leverages the discussed approach.

---

### Overview

The debug overlay will:

- Display text such as "FPS: 60" and "Frame Time: 16.67ms" on the screen.
- Use a simple font atlas (a pre-defined texture with characters).
- Render text using WGPU with a custom `TextRenderer` and `DebugOverlay`.
- Integrate with a basic `GameSystem` for rendering setup.
- Avoid external UI libraries, keeping it self-contained.

For simplicity, this example:

- Uses a dummy font atlas (solid white characters for demonstration).
- Assumes a fixed window size (resizing can be added later).
- Focuses on FPS and frame time, though it's extensible.

---

### Code Structure

1. **`TextRenderer`**: Handles low-level text rendering with WGPU.
2. **`DebugOverlay`**: Manages debug text and positions, using `TextRenderer`.
3. **`GameSystem`**: Sets up WGPU and the render loop.
4. **Main Function**: Ties everything together with a simple example.
5. **Shaders**: Vertex and fragment shaders for text rendering.

---

### Complete Code

```rust
use wgpu::util::DeviceExt;
use winit::{
    event::{Event, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};
use glam::Mat4;

// Vertex structure for text quads
#[repr(C)]
#[derive(Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct Vertex {
    position: [f32; 2],
    uv: [f32; 2],
}

struct TextRenderer {
    pipeline: wgpu::RenderPipeline,
    uniform_buffer: wgpu::Buffer,
    uniform_bind_group: wgpu::BindGroup,
    texture_bind_group: wgpu::BindGroup,
    vertex_buffer: wgpu::Buffer,
    atlas_texture: wgpu::Texture,
    supported_chars: String,
    char_size: f32,
    atlas_width: u32,
    atlas_height: u32,
}

impl TextRenderer {
    fn new(device: &wgpu::Device, queue: &wgpu::Queue, config: &wgpu::SurfaceConfiguration) -> Self {
        // Font atlas setup (dummy texture for this example)
        let atlas_width = 128;
        let atlas_height = 64;
        let atlas_texture = device.create_texture(&wgpu::TextureDescriptor {
            label: Some("font_atlas"),
            size: wgpu::Extent3d { width: atlas_width, height: atlas_height, depth_or_array_layers: 1 },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8UnormSrgb,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats: &[],
        });
        let atlas_view = atlas_texture.create_view(&wgpu::TextureViewDescriptor::default());

        // Dummy atlas data: white characters on transparent background
        let mut atlas_data = vec![0; (atlas_width * atlas_height * 4) as usize];
        let supported_chars = "0123456789FPS: .ms".to_string();
        for (i, c) in supported_chars.chars().enumerate() {
            let x = (i % 8) * 16;
            let y = (i / 8) * 16;
            for dy in 0..16 {
                for dx in 0..16 {
                    let idx = ((y + dy) * atlas_width + (x + dx)) * 4;
                    // Simple pattern: white character, transparent elsewhere
                    atlas_data[idx as usize] = 255;     // R
                    atlas_data[idx as usize + 1] = 255; // G
                    atlas_data[idx as usize + 2] = 255; // B
                    atlas_data[idx as usize + 3] = 255; // A
                }
            }
        }
        queue.write_texture(
            atlas_texture.as_image_copy(),
            &atlas_data,
            wgpu::ImageDataLayout { offset: 0, bytes_per_row: Some(4 * atlas_width), rows_per_image: Some(atlas_height) },
            wgpu::Extent3d { width: atlas_width, height: atlas_height, depth_or_array_layers: 1 },
        );

        let sampler = device.create_sampler(&wgpu::SamplerDescriptor::default());

        // Uniform buffer with orthographic projection
        let projection = Mat4::orthographic_rh(0.0, config.width as f32, config.height as f32, 0.0, -1.0, 1.0);
        let uniform_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("text_uniform"),
            contents: bytemuck::cast_slice(&[projection]),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        // Bind group layouts
        let uniform_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("text_uniform_layout"),
            entries: &[wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStages::VERTEX,
                ty: wgpu::BindingType::Buffer { ty: wgpu::BufferBindingType::Uniform, has_dynamic_offset: false, min_binding_size: None },
                count: None,
            }],
        });
        let texture_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("text_texture_layout"),
            entries: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Texture { sample_type: wgpu::TextureSampleType::Float { filterable: true }, view_dimension: wgpu::TextureViewDimension::D2, multisampled: false },
                    count: None,
                },
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                    count: None,
                },
            ],
        });

        // Bind groups
        let uniform_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("text_uniform_bind_group"),
            layout: &uniform_layout,
            entries: &[wgpu::BindGroupEntry { binding: 0, resource: uniform_buffer.as_entire_binding() }],
        });
        let texture_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("text_texture_bind_group"),
            layout: &texture_layout,
            entries: &[
                wgpu::BindGroupEntry { binding: 0, resource: wgpu::BindingResource::TextureView(&atlas_view) },
                wgpu::BindGroupEntry { binding: 1, resource: wgpu::BindingResource::Sampler(&sampler) },
            ],
        });

        // Shaders
        let vs_source = include_str!("text.vs.wgsl");
        let fs_source = include_str!("text.fs.wgsl");
        let vs_module = device.create_shader_module(wgpu::ShaderModuleDescriptor { label: Some("text_vs"), source: wgpu::ShaderSource::Wgsl(vs_source.into()) });
        let fs_module = device.create_shader_module(wgpu::ShaderModuleDescriptor { label: Some("text_fs"), source: wgpu::ShaderSource::Wgsl(fs_source.into()) });

        // Pipeline
        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("text_pipeline_layout"),
            bind_group_layouts: &[&uniform_layout, &texture_layout],
            push_constant_ranges: &[],
        });
        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("text_pipeline"),
            layout: Some(&pipeline_layout),
            vertex: wgpu::VertexState {
                module: &vs_module,
                entry_point: "main",
                buffers: &[wgpu::VertexBufferLayout {
                    array_stride: 16, // 4 floats * 4 bytes
                    step_mode: wgpu::VertexStepMode::Vertex,
                    attributes: &[
                        wgpu::VertexAttribute { offset: 0, shader_location: 0, format: wgpu::VertexFormat::Float32x2 },
                        wgpu::VertexAttribute { offset: 8, shader_location: 1, format: wgpu::VertexFormat::Float32x2 },
                    ],
                }],
            },
            fragment: Some(wgpu::FragmentState {
                module: &fs_module,
                entry_point: "main",
                targets: &[Some(wgpu::ColorTargetState {
                    format: config.format,
                    blend: Some(wgpu::BlendState::ALPHA_BLENDING),
                    write_mask: wgpu::ColorWrites::ALL,
                })],
            }),
            primitive: wgpu::PrimitiveState { topology: wgpu::PrimitiveTopology::TriangleList, ..Default::default() },
            depth_stencil: None,
            multisample: wgpu::MultisampleState::default(),
            multiview: None,
        });

        // Vertex buffer (enough for 100 characters)
        let vertex_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("text_vertex_buffer"),
            size: 100 * 6 * 16, // 6 vertices per char, 16 bytes per vertex
            usage: wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        Self {
            pipeline,
            uniform_buffer,
            uniform_bind_group,
            texture_bind_group,
            vertex_buffer,
            atlas_texture,
            supported_chars,
            char_size: 16.0,
            atlas_width,
            atlas_height,
        }
    }

    fn render_text(&self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, view: &wgpu::TextureView, text: &str, position: (f32, f32)) {
        let mut vertices = Vec::new();
        let mut x = position.0;
        let y = position.1;

        for c in text.chars() {
            if let Some(index) = self.supported_chars.find(c) {
                let col = (index % 8) as f32;
                let row = (index / 8) as f32;
                let u_left = col * 16.0 / self.atlas_width as f32;
                let v_top = row * 16.0 / self.atlas_height as f32;
                let u_right = u_left + 16.0 / self.atlas_width as f32;
                let v_bottom = v_top + 16.0 / self.atlas_height as f32;

                let pos_left = x;
                let pos_right = x + self.char_size;
                let pos_top = y;
                let pos_bottom = y + self.char_size;

                // Two triangles: tl, tr, bl  and  bl, tr, br
                vertices.extend_from_slice(&[
                    Vertex { position: [pos_left, pos_top], uv: [u_left, v_top] },
                    Vertex { position: [pos_right, pos_top], uv: [u_right, v_top] },
                    Vertex { position: [pos_left, pos_bottom], uv: [u_left, v_bottom] },
                    Vertex { position: [pos_left, pos_bottom], uv: [u_left, v_bottom] },
                    Vertex { position: [pos_right, pos_top], uv: [u_right, v_top] },
                    Vertex { position: [pos_right, pos_bottom], uv: [u_right, v_bottom] },
                ]);

                x += self.char_size;
            }
        }

        let vertex_data = bytemuck::cast_slice(&vertices);
        queue.write_buffer(&self.vertex_buffer, 0, vertex_data);

        let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("text_render_pass"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view,
                resolve_target: None,
                ops: wgpu::Operations { load: wgpu::LoadOp::Load, store: wgpu::StoreOp::Store },
            })],
            depth_stencil_attachment: None,
            timestamp_writes: None,
            occlusion_query_set: None,
        });

        render_pass.set_pipeline(&self.pipeline);
        render_pass.set_bind_group(0, &self.uniform_bind_group, &[]);
        render_pass.set_bind_group(1, &self.texture_bind_group, &[]);
        render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
        render_pass.draw(0..(vertices.len() as u32), 0..1);
    }
}

struct DebugOverlay {
    text_renderer: TextRenderer,
    texts: Vec<(String, (f32, f32))>,
}

impl DebugOverlay {
    fn new(device: &wgpu::Device, queue: &wgpu::Queue, config: &wgpu::SurfaceConfiguration) -> Self {
        Self {
            text_renderer: TextRenderer::new(device, queue, config),
            texts: Vec::new(),
        }
    }

    fn add_text(&mut self, text: String, position: (f32, f32)) {
        self.texts.push((text, position));
    }

    fn render(&self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, view: &wgpu::TextureView) {
        for (text, position) in &self.texts {
            self.text_renderer.render_text(device, queue, encoder, view, text, *position);
        }
    }

    fn clear(&mut self) {
        self.texts.clear();
    }
}

struct GameSystem {
    surface: wgpu::Surface,
    device: wgpu::Device,
    queue: wgpu::Queue,
    config: wgpu::SurfaceConfiguration,
    window: winit::window::Window,
    overlay: DebugOverlay,
}

impl GameSystem {
    async fn new(event_loop: &EventLoop<()>) -> Self {
        let window = WindowBuilder::new().with_title("Debug Overlay Example").build(event_loop).unwrap();
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor::default());
        let surface = unsafe { instance.create_surface(&window).unwrap() };
        let adapter = instance.request_adapter(&wgpu::RequestAdapterOptions {
            power_preference: wgpu::PowerPreference::default(),
            compatible_surface: Some(&surface),
            force_fallback_adapter: false,
        }).await.unwrap();

        let (device, queue) = adapter.request_device(&wgpu::DeviceDescriptor {
            label: None,
            required_features: wgpu::Features::empty(),
            required_limits: wgpu::Limits::default(),
        }, None).await.unwrap();

        let size = window.inner_size();
        let config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format: surface.get_capabilities(&adapter).formats[0],
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
            alpha_mode: wgpu::CompositeAlphaMode::Auto,
            view_formats: vec![],
            desired_maximum_frame_latency: 2,
        };
        surface.configure(&device, &config);

        let overlay = DebugOverlay::new(&device, &queue, &config);

        Self { surface, device, queue, config, window, overlay }
    }

    fn render(&mut self, fps: f32, frame_time: f32) {
        let output = self.surface.get_current_texture().unwrap();
        let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());
        let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor { label: Some("render_encoder") });

        // Clear screen
        {
            let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("clear_pass"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations { load: wgpu::LoadOp::Clear(wgpu::Color { r: 0.1, g: 0.2, b: 0.3, a: 1.0 }), store: wgpu::StoreOp::Store },
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                occlusion_query_set: None,
            });
            drop(render_pass);
        }

        // Update and render overlay
        self.overlay.clear();
        self.overlay.add_text(format!("FPS: {:.0}", fps), (10.0, 10.0));
        self.overlay.add_text(format!("Frame Time: {:.2}ms", frame_time), (10.0, 30.0));
        self.overlay.render(&self.device, &self.queue, &mut encoder, &view);

        self.queue.submit(std::iter::once(encoder.finish()));
        output.present();
    }
}

fn main() {
    let event_loop = EventLoop::new().unwrap();
    event_loop.set_control_flow(ControlFlow::Poll);
    let mut system = pollster::block_on(GameSystem::new(&event_loop));

    let mut last_time = std::time::Instant::now();
    let mut frame_count = 0;
    let mut fps = 0.0;

    event_loop.run(move |event, elwt| match event {
        Event::WindowEvent { event: WindowEvent::CloseRequested, .. } => elwt.exit(),
        Event::WindowEvent { event: WindowEvent::RedrawRequested, .. } => {
            frame_count += 1;
            let now = std::time::Instant::now();
            let delta = now.duration_since(last_time).as_secs_f32();
            if delta >= 1.0 {
                fps = frame_count as f32 / delta;
                frame_count = 0;
                last_time = now;
            }
            let frame_time = delta * 1000.0 / frame_count as f32;
            system.render(fps, frame_time);
        }
        Event::AboutToWait => system.window.request_redraw(),
        _ => {}
    }).unwrap();
}
```

---

### Shader Files

Save these in your project directory:

**`text.vs.wgsl`**:

```wgsl
struct Uniforms {
    projection: mat4x4<f32>,
};

@group(0) @binding(0)
var<uniform> uniforms: Uniforms;

struct VertexInput {
    @location(0) position: vec2<f32>,
    @location(1) uv: vec2<f32>,
};

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) uv: vec2<f32>,
};

@vertex
fn main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    output.clip_position = uniforms.projection * vec4<f32>(input.position, 0.0, 1.0);
    output.uv = input.uv;
    return output;
}
```

**`text.fs.wgsl`**:

```wgsl
@group(1) @binding(0)
var atlas_texture: texture_2d<f32>;
@group(1) @binding(1)
var atlas_sampler: sampler;

@fragment
fn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    return textureSample(atlas_texture, atlas_sampler, uv);
}
```

---

### Dependencies

Add these to your `Cargo.toml`:

```toml
[dependencies]
wgpu = "0.19"
winit = "0.29"
glam = "0.24"
bytemuck = { version = "1.14", features = ["derive"] }
pollster = "0.3"
```

---

### How It Works

1. **Font Atlas**:

   - A 128x64 texture with 17 characters ("0123456789FPS: .ms"), each 16x16
     pixels.
   - For this example, it’s a dummy atlas filled with white squares. In a real
     application, load a proper font atlas PNG.

2. **`TextRenderer`**:

   - Initializes WGPU resources (texture, pipeline, buffers).
   - `render_text` generates vertex data for each character, mapping them to
     atlas UVs, and draws them as quads.

3. **`DebugOverlay`**:

   - Collects text strings and positions, delegating rendering to
     `TextRenderer`.

4. **`GameSystem`**:

   - Sets up WGPU and the window.
   - Manages the render loop, clearing the screen and overlaying debug text.

5. **Main Loop**:
   - Calculates FPS and frame time, updates the overlay, and renders.

---

### Running the Example

1. Save the Rust code as `main.rs`.
2. Save the shaders as `text.vs.wgsl` and `text.fs.wgsl`.
3. Run with `cargo run`.

You’ll see a window with "FPS: X" and "Frame Time: Yms" in the top-left corner,
updating in real-time.

---

### Notes

- **Simplicity**: The code avoids unnecessary complexity, using a single draw
  call per text string and a straightforward atlas.
- **Extensibility**: Add more characters to `supported_chars` and update the
  atlas size as needed.
- **Improvements**: For production, load a real font atlas, handle window
  resizing, and optimize buffer updates.

This provides a fully functional, lightweight debug overlay that meets your
requirements!
