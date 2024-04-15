# tldraw physics + graph layout
This repo demonstrates two "collections", physics and graph layout, working together.

This was thrown together with no sleep in Heathrow terminal 2, so it's nothing fancy. For more on the collections system, see [here](https://github.com/OrionReed/tldraw-graph-physics-interop/tree/main/tldraw-collections). See also the [physics](https://github.com/OrionReed/tldraw-physics) and [graph layout](https://github.com/OrionReed/tldraw-graph-layout) collections.

This repo just added a few lines to the PhysicsCollection, by checking (very crudely) if a shape is part of the graph collection and treating it as a kinematic rigidbody if so. In the future I'll move this integration out of the physics collection and work to make the collections system helpful for handling collection overlap. Ideas welcome.

# "Tutorial"
1. Make a graph with shapes and arrows
2. Add some other shapes for the physics simulation
3. Select the shapes you want in the graph sim and hit "Add" on the right hand side of the toolbar (the UI for the graph collection)
4. Select everything and hit "Add" on the left hand side of the toolbar (the UI for the physics collection)

The result of the above steps is that you have all the shapes in the physics sim, and a subset of those shapes in the graph sim.

