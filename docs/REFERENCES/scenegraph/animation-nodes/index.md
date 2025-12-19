---
title: Animation Nodes
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
The SceneGraph API includes several nodes to animate screen elements.
You can move screen elements around, make them disappear and reappear,
and change color. Animating screen elements requires the use of one of
the node classes derived from
[**AnimationBase**](AnimationBase_1607218.html), which must include a
child interpolator node to actually achieve a specific animation effect.
The animation and interpolator node classes
are:

* **[Animation](/docs/references/scenegraph/animation-nodes/animation.md)**
* **[SequentialAnimation](/docs/references/scenegraph/animation-nodes/sequentialanimation.md)**
* **[ParallelAnimation](/docs/references/scenegraph/animation-nodes/parallelanimation.md)**
* **[FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md)**
* **[Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md)**
* **[ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md)**

All animations require that you target a specific field of a specific
renderable node or group of renderable nodes. You must also start (and
stop, if wanted) the animation in BrightScript code by setting the value
of the animation `control` field.

The child interpolator nodes each operate on different types of target
node field values. The
[**FloatFieldInterpolator**](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md) node
class operates on target node field values of type `float`, which
includes the `opacity` and `rotation` fields. Use a
[**FloatFieldInterpolator**](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md) node
to fade the target node in or out of visibility, or to rotate the target
node. The
**[Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md)** operates
on target node field values of type `vector2d`, which includes the
`translation` and `scale` fields. Use a
**[Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md)** node
to move the target node around the screen display, or to enlarge or
shrink it. The
**[ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md)** node
class operates on target node fields of type `color`, so can be used to
change the color of a target node that includes a color field.

The child interpolator nodes each include two field arrays: `key` and
`keyValue`. These two arrays _must_ contain the same number of elements
in order for the animation to work. The key field array contains the
fractional values of the animation duration at which the target node
field value in the corresponding `keyValue` array position will be set.

The following summarizes how to achieve certain animation effects.

| Effect         | Interpolator                                                                                          | Target Field  | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Move           | [Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md) | `translation` | You can move the element off the screen entirely, or over/under other elements at different z-order positions in the SceneGraph                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Enlarge/Shrink | [Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md) | `scale`       | Set the target `scaleRotateCenter` field to specify the point around which the element enlarges/shrinks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Fade-In/Out    | [FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md)       | `opacity`     | The `opacity` field ranges in value from 1.0 (fully opaque and visible) to 0.0 (fully transparent and invisible) by setting the alpha channel of screen elements.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Rotate         | [FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md)       | `rotation`    | Set the target `scaleRotateCenter` field to specify the point around which the element rotates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Change Color   | [ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md)       | color         | The interpolator for the `color` field ranges through the HSV color space bounded by the low and high color values set in the `keyValue` field array. For example, if the low color value in the `keyValue` field array is set to the bottom of the HSV color space, and the high color value is set to the top of the HSV color space, the interpolator will range the animation throughout the entire HSV color space, with perhaps surprising (but not unpredictable) results. You should carefully choose the low and high key values to achieve a desired color animation result. |

You can try out these concepts by downloading and installing this
sample: [SimpleAnimation](https://github.com/rokudev/samples/tree/master/ux%20components/animation). It
shows a number of animation types, including opacity, translation, and
color animations.
