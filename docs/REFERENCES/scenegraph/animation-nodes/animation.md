---
title: Animation
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Extends [**AnimationBase**](doc:animationbase)

The Animation node class provides animations of renderable nodes, by applying interpolator functions to the values in specified renderable node fields. For an animation to take effect, an Animation node definition must include a child field interpolator node ([FloatFieldInterpolator](doc:floatfieldinterpolator), [Vector2DFieldInterpolator](doc:vector2dfieldinterpolator), [ColorFieldInterpolator](doc:colorfieldinterpolator)) definition for each renderable node field that is animated.

The Animation node class provides a simple linear interpolator function, where the animation takes place smoothly and simply from beginning to end. The Animation node class also provides several more complex interpolator functions to allow custom animation effects. For example, you can move a graphic image around the screen at differing speeds and curved trajectories at different times in the animation by specifying the appropriate function in the easeFunction field (quadratic and exponential are two examples of functions that can be specified). The interpolator functions are divided into two parts: the beginning of the animation (ease-in), and the end of the animation (ease-out). You can apply a specified interpolator function to either or both ease-in and ease-out, or specify no function for either or both (which is the linear function). You can also change the portion of the animation that is ease-in and ease-out to arbitrary fractional values for a quadratic interpolator function applied to both ease-in and ease-out.

### Example

<Anchor label="Animation Markup" title="Animation Markup" href="https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/PosterGridExampleanimation-markup.md">Animation Markup</Anchor> in the <Anchor label="SceneGraph Samples" title="SceneGraph Samples" href="https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/PosterGridExampleoverview.md">SceneGraph Samples</Anchor> provides several simple examples of Animation node definitions that use all of the field interpolator nodes. Other simple examples of using the field interpolators can be found in the [FloatFieldInterpolator](doc:floatfieldinterpolator), [Vector2DFieldInterpolator](doc:vector2dfieldinterpolator), and [ColorFieldInterpolator](doc:colorfieldinterpolator).

The following example shows how to use some simple animations. It uses two Animation nodes, each with its own Vector2DFieldInterpolator. The first defines a translation animation of the poster image, and the second defines a scale animation. They are both launched in an init() function using BrightScript. When run together, the effect is to "bloom" the poster image on the screen.

#### Animation BrightScript example

```
function init()
   scaleAnimation = m.top.FindNode("scaleAnimation")
   transAnimation = m.top.FindNode("transAnimation")
   scaleAnimation.control = "start"
   transAnimation.control = "start"
end function
```

#### Animation XML example

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="SimpleScaleAnimation" extends="Group">
  <script type="text/brightscript" uri="pkg:/xml/SimpleAnimation.brs" />

  <children>
    <Poster
      id="myPoster"
      opacity="1.0"
      uri="pkg:/images/myImage.jpg" />
    <Animation
      id="scaleAnimation"
      duration="1"
      repeat="true"
      easeFunction="linear">
      <Vector2DFieldInterpolator
        id="myInterp"
        key="[0.0, 0.25, 0.5, 0.75, 1.0]"
        keyValue="[ [0.0, 0.0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1.0, 1.0]]"
        fieldToInterp="myPoster.scale" />
    </Animation>
    <Animation
      id="transAnimation"
      duration="1"
      repeat="true"
      easeFunction="linear">
      <Vector2DFieldInterpolator
        id="myInterp2"
        key="[0.0, 1.0]"
        keyValue="[ [640.0, 320.0], [100.0, 100.0] ]"
        fieldToInterp="myPoster.translation" />
    </Animation>
  </children>
</component>
```

## Fields

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Default</th>
      <th>Access Permission</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>duration</td>
      <td>Time</td>
      <td>0</td>
      <td>READ\_WRITE</td>
      <td>Sets the duration of the animation in seconds</td>
    </tr>
    <tr>
      <td>easeFunction</td>
      <td>string</td>
      <td>"outCubic"</td>
      <td>READ\_WRITE</td>
      <td>Specifies the interpolator function to be used for the animation: <table><thead><tr><th>Value</th><th>Ease-In/Ease-Out Function</th></tr></thead><tbody><tr><td>linear</td><td>No ease-in or ease-out</td></tr><tr><td>inQuad</td><td>Quadratic ease-in function, no ease-out</td></tr><tr><td>inCubic</td><td>Cubic ease-in function, no ease-out</td></tr><tr><td>inQuartic</td><td>Quartic ease-in function, no ease-out</td></tr><tr><td>inQuintic</td><td>Quintic ease-in function, no ease-out</td></tr><tr><td>inExpo</td><td>Exponential ease-in function, no ease-out</td></tr><tr><td>outQuad</td><td>Quadratic ease-out function, no ease-in</td></tr><tr><td>outCubic</td><td>Cubic ease-out function, no ease-in</td></tr><tr><td>outQuartic</td><td>Quartic ease-out function, no ease-in</td></tr><tr><td>outQuintic</td><td>Quintic ease-out function, no ease-in</td></tr><tr><td>outExpo</td><td>Exponential ease-out function, no ease-in</td></tr><tr><td>inOutQuad</td><td>Quadratic ease-in and ease-out function</td></tr><tr><td>inOutCubic</td><td>Cubic ease-in and ease-out function</td></tr><tr><td>inOutQuartic</td><td>Quartic ease-in and ease-out function</td></tr><tr><td>inOutQuintic</td><td>Quintic ease-in and ease-out function</td></tr><tr><td>inOutExpo</td><td>Exponential ease-in and ease-out function</td></tr><tr><td>piecewise</td><td>Quadratic ease-in and ease-out function with extra control over the percentage of the duration during which ease-in and ease-out occurs. The extra control is specified using the <code>easeInPercent</code> and <code>easeOutPercent</code> fields.</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>easeInPercent</td>
      <td>float</td>
      <td>0.5</td>
      <td>READ\_WRITE</td>
      <td>If easeFunction is set to piecewise, easeInPercent sets the percentage of the animation duration during which ease-in is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeInPercent is ignored</td>
    </tr>
    <tr>
      <td>easeOutPercent</td>
      <td>float</td>
      <td>0.5</td>
      <td>READ\_WRITE</td>
      <td>If easeFunction is set to piecewise, easeOutPercent sets the percentage of the animation duration during which ease-out is applied. Note that the values of easeInPercent plus easeOutPercent must be less than or equal to 1. For all other values of easeFunction, easeOutPercent is ignored</td>
    </tr>
    <tr>
      <td>optional</td>
      <td>boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Set to true to skip animations on lower performing Roku devices. See <a href="https://roku-ent.readme.io/dev/docs/hardware#current-roku-models" title="Roku Devices">Roku Devices</a> for model numbers and code names. When an Animation has optional set to true, setting the control field to start will cause the state field to change to running and immediately change again to finished. These state changes allow any logic tied to state field observers that run at the start and end of the Animation to be properly called</td>
    </tr>
    <tr>
      <td>willBeSkipped</td>
      <td>boolean</td>
      <td>false</td>
      <td>READ\_ONLY</td>
      <td>Indicates whether the animation runs or jumps to the end (effectively skipping the animation and rendering it in its final state).</td>
    </tr>
  </tbody>
</table>

## Sample app

[SimpleAnimation](https://github.com/rokudev/samples/tree/master/ux%20components/animation) demonstrates Animation in action.
