### Initial Prompt

> I have a basic readme file started for a Library crate that will be a
> sub-project within a game engine project, which is organized into several
> modular components, each having their own crate. This would be one of those
> crates.
>
> I would be very pleased to see detailed document describing this project, both
> conceptually as well as concretely. The crate is currently intended to
> encapsulate Winit and WGPU (using latest versions, which are currently winit =
> "0.30.9" and wgpu = "24.0.1") and provide window, user inputs, and gpu device
> context as a more simplified surface area, for example, I'm considering
> minimal touchpoints, such as: a setup call, an update call with preprocessed
> user inputs, device, and queue, and a render call for drawing the frame. But
> feel free to suggest better options. Please thoroughly consider the ideal
> roles and responsibilities of such a crate. The ultimate goal of the crate is
> to encapsulate nuances and details of the operating system and the setup of
> the graphics device so that the rest of the project can focus on concepts
> within the game engine paradigm.
>
> As context, for the rest of the game engine, which does not need to be
> described in this document, the game engine is currently focused on
> single-player, and would not need networking. It does however, intend to use
> compute shaders and support exploratory and creative uses of the GPU. The game
> engine is also being built for use by either a single developer or small team,
> so it should prioritize fast and clean interfaces that aim to reduce cognitive
> complexity.
>
> This crate should expose a small tight interface that when called by the main
> entry point of the game, should handle setup and interaction with the
> windowing system. The conceptual goal is that the developer working on
> building the rest of the game engine would not need to think about windowing
> except in the case of working within this crate itself. Please thoroughly
> consider that both this crate and the overall game engine should lean towards
> simplicity in usage and minimization of cognitive burden of a developer.
>
> The current very early draft is as follows, but feel free to use it simply as
> a template, and it does not need to largely influence the final result:
>
> # Game System Handling

### Follow-up Prompt

> Thoughtfully considering the above plan, are there clear improvements can be
> made in the plan? Let's iron out any kinks overall concept. If not, please go
> into more detail with the code sections, providing complete and ready-to-fun
> examples. In addition, let's provide the update function signature with the
> ability to leverage the compute pipeline.

### Additional Consideration

> As the core of this crate design is converging on a solid concept, please
> consider what would be either highly impactful or very delightful (to either
> the game developer or the player) features or options that can be added to the
> library being discussed. Please deeply consider what valuable additions could
> be added, even if uncommon or unexpected, that have been known to be
> surprisingly delightful or pleasing to the developer working on the project.
> Please think broadly about how we can really add a ton of value to this crate
> that would make it REALLY GREAT to have as part of our overall project, and a
> HUGE DELIGHT to have. Also really think about how we can ease the cognitive
> burden of the developer and really provide simple and easy usage experience
> when working with this. Please provide suggestions and complete comprehensive
> code examples. Annotate code with appropriate filenames.

### Give code for a suggested idea.

> The [debug overlay] is a FANTASTIC idea, but we will need a much much more
> complete example. We would want a FULLY FUNCTIONAL way of displaying that
> information, without usage of a heavy external libraries. The single function
> interface is very much the right idea, a simple and easy to use self-contained
> way to render information directly on the screen. Please give a COMPLETE
> WORKING EXAMPLE of that functionality

### Give code for a suggested rendering idea, but make sure to use what has already been discussed.

> The debug overlay is a FANTASTIC idea, but we will need a much much more
> complete example. We would want a FULLY FUNCTIONAL way of displaying that
> information, without usage of a heavy UI library like EGUI. The render_text
> function is very much the right idea, a simple and easy to use self-contained
> way to render information directly on the screen. Please give a COMPLETE
> WORKING EXAMPLE of that functionality.
>
> For any required rendering portions, please THOROUGHLY USE ABOVE FUNCTIONALITY
> for setting up a rendering harness, and avoid any rendering setup outside of
> that. Please find ways to produce a rendering harness prioritizing simplicity
> of the resultant code, but also FULLY UTILIZING the design already discussed.
> When necessary, provide modifications to the existing plan as needed in order
> to achieve this.

### Give code for a suggested idea, but make sure to use what has already been discussed.

> The hot reloading functionality is a FANTASTIC idea, but we will need a much
> much more complete example. Let's produce a FULLY FUNCTIONAL implementation of
> a proper hot-reloading system. Please give a COMPLETE WORKING IMPLEMENTATION.
>
> Please THOROUGHLY incorporate the code produced ABOVE, and avoid duplication
> when using that functionality is possible. Continue prioritizing simplicity of
> the resultant code, but also FULLY UTILIZING and ADOPTING the design already
> discussed. When necessary, provide modifications to the existing plan as
> needed in order to achieve this.I

### Give code for a suggested idea, but make sure to use what has already been discussed.

> The simplified compute shader API functionality is a FANTASTIC idea, but we
> will need a much much more complete and robust example. Let's produce a FULLY
> FUNCTIONAL implementation of a proper implementation. Please make it COMPLETE
> and WORKING.
>
> Please THOROUGHLY incorporate the code produced ABOVE, and avoid duplication
> when using that functionality is possible. Continue prioritizing simplicity of
> the resultant code, but also FULLY UTILIZING and ADOPTING the design already
> discussed. When necessary, provide modifications or additions to the existing
> plan as needed in order to achieve this.

### High quality fragment shader to generate a texture.

> Please provide a complete and of the highest quality fragment shader that will
> produce an appropriate noise texture and then repeat for a top-of-the-line
> quality transmittence texture
