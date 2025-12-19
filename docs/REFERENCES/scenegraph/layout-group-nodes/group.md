---
title: Group
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

# Group

Extends [**Node**](/docs/references/scenegraph/node.md)

Group is the base class of all renderable nodes. Group also provides fields that control the transformation, visibility and opacity of themselves and all of their children.

Each Group defines a local coordinate system relative to the coordinate system of its parent node. A 2D matrix that describes how points in the local coordinate system can be transformed into the parent node coordinate system is constructed from the values of the translation, rotation, scale, and scaleRotateCenter fields.

The 2D matrix is computed using the values of these four fields in the following order:

- translating by the negative of the scaleRotateCenter field value
- scaling by the the scale field value
- rotating by the rotation field value
- translating by the the scaleRotateCenter field value
- translating by the translation field value

In matrix math terms, the overall 2D matrix is:

  M = C(-1) S R C T

Where:

- M is the total matrix
- C is a 2D translation matrix that describes the location of the scale/rotation center in the node's local coordinate system
- C(-1) is the inverse of C
- S is a 2D scaling matrix
- R is a 2D rotation matrix
- T is a 2D translation matrix

> In nearly all cases, either the default values for these four fields will be used (in which case, the local coordinate system of the node is the same as the parent node coordinate system), or only a translation will be specified (in which, the local coordinate system is a simple offset from the parent node coordinate system).

## Fields

| Field                                       | Type              | Default                                   | Access Permission | Description           |
| ------------------------------------------- | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| visible                                     | Boolean           | true                                      | READ_WRITE        | If true, the node and its children are rendered. If false, the node and its children do not render |
| opacity | float | 1.0 | READ_WRITE | Sets the opacity of the node and its children. Opacity is the opposite of transparency. Opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque). As the SceneGraph is traversed, the opacity values are combined by multiplying the current accumulated opacity with the node opacity, so that if the accumulated opacity of a node ancestors is 0.25 (75% transparent), the node will have opacity of 0.25 or less. This allows entire branches of the SceneGraph to fade in and out by animating the opacity of the node at the root of the branch |
| translation | vector2d | [0.0,0.0] | READ_WRITE | Defines the origin of the node local coordinate system relative to its parent node |
| rotation | float | 0.0 | READ_WRITE | Defines the rotation angle about the scaleRotateCenter point (in radians) of the node local coordinate system. Positive values specify a counterclockwise rotation, negative values specify a clockwise rotation. For some Roku Player hardware, specifically Roku Players without OpenGL graphics support, only rotations of 0, 90, 180 and 270 degrees (in equivalent radians) are supported. (See [Roku Models and Features](/docs/specs/hardware.md#current-models "Roku Models and Features") for information on OpenGL support) |
| scale | vector2d | [1.0,1.0] | READ_WRITE | Defines the scale factor to be applied to the node local coordinate |
| scaleRotateCenter | vector2d | [0.0,0.0] | READ_WRITE | Describes the location of a point in the node local coordinate that serves as the center of the scale and rotation operations |
| childRenderOrder | option as string | renderLast | READ_WRITE | ${childRenderOrder} |
| inheritParentTransform | Boolean | true | READ_WRITE | If true, the node overall transformation is determined by combining the accumulated transformation matrix of all of its ancestors in the SceneGraph with the node local 2D transformation matrix described by its translation, rotation, scale and scaleRotateCenter fields. If false, the accumulated transformation of all of its ancestors in the SceneGraph is ignored and only the node local transformation matrix is used. This causes the node to be transformed relative to the root of the SceneGraph (that is, the Scene component) |
| inheritParentOpacity                        | Boolean           | true                                      | READ_WRITE        | If true, the node opacity is determined by multiplying opacity attribute of the node by the opacity of the parent node, which may have been determined by multiplying the opacity of its ancestor nodes. If false, the node opacity is determined by the opacity attribute set for the node or the default opacity attribute value |
| clippingRect           | array of float   | [ 0.0, 0.0, 0.0, 0.0 ] | READ_WRITE        | Specifies a rectangle in the node local coordinate system that is used to limit the region where this node and its children can render. If a non-empty rectangle is specified, then all drawing by this node and its children will be limited to that rectangular area. ${clippingRectValues} |
| renderPass             | integer          | 0                      | READ_WRITE        | Used in combination with the numRenderPasses field of nodes extended from the [ArrayGrid](/docs/references/scenegraph/abstract-nodes/arraygrid.md "ArrayGrid") abstract node class, to optimize rendering of lists and grids. This should never be set to a non-zero value unless you are optimizing the performance of a list or grid rendering by specifying the sequence of rendering operations for sub-elements of the list or grid items, and have set the numRenderPasses field value for the list or grid to a value greater than 1. If the numRenderPasses field value for the list or grid is set to a value greater than 1, you must set this field to a value greater than 0 for all sub-elements of the list or grid items, and not greater than the numRenderPasses field value. If the numRenderPasses field is set to a value greater than 1, and you set this field for a list or grid item sub-element to 0 (the default), or a value greater than the numRenderPasses field value, the list or grid item sub-element will not render |
| muteAudioGuide         | Boolean          | false                  | READ_WRITE        | Set to true to suppress the default CVAA text to speech. This allows apps to provide their own custom implementation |
| enableRenderTracking   | Boolean          | false                  | READ_WRITE        | If true, renderTracking will be set to a string describing how much of the node is rendered on screen |
| renderTracking          | option as string  | disabled                                  | READ_WRITE        | renderTracking is set to "disabled" when enableRenderTracking is set to false. The following options are only available when enableRenderTracking is set to true: ${renderTracking} |

{#childRenderOrder}

| Option          | Description                                                  |
| -------------- | ----------------------------------------------------------- |
| `"renderFirst"` | any drawing done by this node will be done **before** the node children are rendered |
| `"renderLast"`  | any drawing done by this node will be done **after** the node children are rendered |

{#renderTracking}

| Option      | Description                                                  |
| ---------- | ----------------------------------------------------------- |
| `"none"`    | renderTracking is set to: `"none"` if **one or more** of these conditions is true: ${renderTrackingValues-none} |
| `"partial"` | renderTracking is set to `"partial"` if **all** of the following conditions are true: ${renderTrackingValues-partial} |
| `"full"`    | renderTracking is set to `"full"` if **all** of the following conditions are true: ${renderTrackingValues-full} |

{#renderTrackingValues-none}

- the node's `visible` field is set to `false`.
- the node's `opacity` field is set to `0.0`.
- no `clippingRect` is specified and the node is completely offscreen.
- a `clippingRect` is specified and the node lies completely outside that `clippingRect's` coordinates or is completely offscreen.

{#renderTrackingValues-partial}

- the node's `visible` field is set to `true`.
- the node's `opacity` field is greater than `0.0`.
- no `clippingRect` is specified and the node is partially offscreen.
- a `clippingRect` is specified and the node lies partially inside the `clippingRect's` coordinates.

{#renderTrackingValues-full}

- the node's `visible` field is set to `true`.
- the node's `opacity` field is greater than `0.0`.
- no `clippingRect` is specified and the node is completely onscreen.
- a `clippingRect` is specified and the node lies completely inside the `clippingRect's` coordinates.

{#clippingRectValues}

- `ClippingRects` can be specified by the node or by any of its ancestors in the SceneGraph.
- `ClippingRects` are automatically set by some nodes such as lists and grids.
- `ClippingRects` are always clipped to the screen boundaries, so if a `clippingRect` is specified that is partially or completely offscreen, it will be clipped to the screen boundaries. With respect to render tracking, although the node could be completely within the bounds of the specified `clippingRect`, it's `renderTracking` field could be set to `"none"` if the portion of the `clippingRect` it occupies is completely offscreen.
