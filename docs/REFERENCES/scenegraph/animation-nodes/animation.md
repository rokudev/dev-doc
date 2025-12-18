---
title: Animation
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

# Animation

Extends [**AnimationBase**](/docs/references/scenegraph/abstract-nodes/animationbase.md)

The Animation node class provides animations of renderable nodes, by applying interpolator functions to the values in specified renderable node fields. For an animation to take effect, an Animation node definition must include a child field interpolator node ([FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md "FloatFieldInterpolator"), [Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md "Vector2DFieldInterpolator"), [ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md "ColorFieldInterpolator")) definition for each renderable node field that is animated.

The Animation node class provides a simple linear interpolator function, where the animation takes place smoothly and simply from beginning to end. The Animation node class also provides several more complex interpolator functions to allow custom animation effects. For example, you can move a graphic image around the screen at differing speeds and curved trajectories at different times in the animation by specifying the appropriate function in the easeFunction field (quadratic and exponential are two examples of functions that can be specified). The interpolator functions are divided into two parts: the beginning of the animation (ease-in), and the end of the animation (ease-out). You can apply a specified interpolator function to either or both ease-in and ease-out, or specify no function for either or both (which is the linear function). You can also change the portion of the animation that is ease-in and ease-out to arbitrary fractional values for a quadratic interpolator function applied to both ease-in and ease-out.

### Example

[Animation Markup](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/PosterGridExampleanimation-markup.md "Animation Markup") in the [SceneGraph Samples](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/PosterGridExampleoverview.md "SceneGraph Samples") provides several simple examples of Animation node definitions that use all of the field interpolator nodes. Other simple examples of using the field interpolators can be found in the [FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md "FloatFieldInterpolator"), [Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md "Vector2DFieldInterpolator"), and [ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md "ColorFieldInterpolator").

The following example shows how to use some simple animations. It uses two Animation nodes, each with its own Vector2DFieldInterpolator. The first defines a translation animation of the poster image, and the second defines a scale animation. They are both launched in an init() function using BrightScript. When run together, the effect is to "bloom" the poster image on the screen.

#### Animation BrightScript example

~~~
function init()
   scaleAnimation = m.top.FindNode("scaleAnimation")
   transAnimation = m.top.FindNode("transAnimation")
   scaleAnimation.control = "start"
   transAnimation.control = "start"
end function
~~~

#### Animation XML example

~~~
<?xml version="1.0" encoding="utf-8" ?>
<component name="SimpleScaleAnimation" extends="Group" >
<script type="text/brightscript" uri="pkg:/xml/SimpleAnimation.brs" />

<children>

<Poster id="myPoster"
    opacity="1.0"
    uri="pkg:/images/myImage.jpg" />
<Animation id="scaleAnimation"
       duration="1"
       repeat="true"
       easeFunction="linear" >
    <Vector2DFieldInterpolator id = "myInterp"
    key="[0.0, 0.25, 0.5, 0.75, 1.0]"
    keyValue="[ [0.0, 0.0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1.0, 1.0]]"
    fieldToInterp="myPoster.scale" />
</Animation>
<Animation id="transAnimation"
       duration="1"
       repeat="true"
       easeFunction="linear" >
    <Vector2DFieldInterpolator id = "myInterp2"
        key="[0.0, 1.0]"
        keyValue="[ [640.0, 320.0], [100.0, 100.0] ]"
    fieldToInterp="myPoster.translation" />
</Animation>

</children>

</component>
~~~

## Fields

| Field          | Type    | Default      | Access Permission | Description                                                  |
| -------------- | ------- | ------------ | ----------------- | ------------------------------------------------------------ |
| duration       | Time    | 0            | READ_WRITE        | Sets the duration of the animation in seconds                |
| easeFunction   | string  | "outCubic" | READ_WRITE        | Specifies the interpolator function to be used for the animation: ${easeFunction} |
| easeInPercent  | float   | 0.5          | READ_WRITE        | If easeFunction is set to piecewise, easeInPercent sets the percentage of the animation duration during which ease-in is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeInPercent is ignored |
| easeOutPercent | float   | 0.5          | READ_WRITE        | If easeFunction is set to piecewise, easeOutPercent sets the percentage of the animation duration during which ease-out is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeOutPercent is ignored |
| optional       | boolean | false        | READ_WRITE        | Set to true to skip animations on lower performing Roku devices. See [Roku Devices](/docs/specs/hardware.md#current-models "Roku Devices") for model numbers and code names. When an Animation has optional set to true, setting the control field to start will cause the state field to change to running and immediately change again to finished. These state changes allow any logic tied to state field observers that run at the start and end of the Animation to be properly called |
| willBeSkipped | boolean | false | READ_ONLY | Indicates whether the animation runs or jumps to the end (effectively skipping the animation and rendering it in its final state). |

{#easeFunction}

| Value        | Ease-In/Ease-Out Function                                    |
| ----------- | ----------------------------------------------------------- |
| linear       | No ease-in or ease-out                                       |
| inQuad       | Quadratic ease-in function, no ease-out                      |
| inCubic      | Cubic ease-in function, no ease-out                          |
| inQuartic    | Quartic ease-in function, no ease-out                        |
| inQuintic    | Quintic ease-in function, no ease-out                        |
| inExpo       | Exponential ease-in function, no ease-out                    |
| outQuad      | Quadratic ease-out function, no ease-in                      |
| outCubic     | Cubic ease-out function, no ease-in                          |
| outQuartic   | Quartic ease-out function, no ease-in                        |
| outQuintic   | Quintic ease-out function, no ease-in                        |
| outExpo      | Exponential ease-out function, no ease-in                    |
| inOutQuad    | Quadratic ease-in and ease-out function                      |
| inOutCubic   | Cubic ease-in and ease-out function                          |
| inOutQuartic | Quartic ease-in and ease-out function                        |
| inOutQuintic | Quintic ease-in and ease-out function                        |
| inOutExpo    | Exponential ease-in and ease-out function                    |
| piecewise    | Quadratic ease-in and ease-out function with extra control over the percentage of the duration during which ease-in and ease-out occurs. The extra control is specified using the `easeInPercent` and `easeOutPercent` fields. |


## Sample app

[SimpleAnimation](https://github.com/rokudev/samples/tree/master/ux%20components/animation) demonstrates Animation in action.
