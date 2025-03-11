### Typical Draw Loop

```
// sort or bucket visible objects
foreach ( render target )
// framebuffer
foreach ( pass )
// depth, blending, etc. states
foreach( material )
// shaders
foreach material instance ) // textures foreach vertex format )
// vertex buffers
foreach ( object )
{
WriteUniformData( object );
glDrawElementsBaseVertex
GL_TRIANGLES, object-›indexCount,
GL_UNSIGNED_SHORT, object-›indexDataOffset, object-›baseVertex );
```
