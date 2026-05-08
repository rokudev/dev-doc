---
title: "ColorFieldInterpolator"
excerpt: 'Keyframe animation node for interpolating color field values across frames'
deprecated: false
hidden: false
metadata:
  title: 'ColorFieldInterpolator'
  description: 'ColorFieldInterpolator specifies a keyframe animation sequence applied to the color field of a node, using linear interpolation in the HSV color space.'
  robots: index
next:
  description: ''
---


Extends [**Node**](doc:node)

The ColorFieldInterpolator node class specifies a keyframe animation sequence to be applied to the color field of a node (such as the color field of a Label node).

All field interpolators include a set of key/keyValue field pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the fraction of the animation progress. The keyframe fields of the interpolator are key, the percentage where the keyframe should occur, and keyValue, the value that the field should have at that fraction of the animation.

For example, if a ColorFieldInterpolator node had three keyframes:

- 0.0, 0xFF0000FF (red)
- 0.4, 0x00FF00FF (green)
- 1.0, 0x0000FFFF (blue)

When the interpolator fraction field value was 0.0 (that is, 0%), the color field value would be set to red. When the fraction field value was 0.4 (that is, 40%), the color field value would be set to green. When the fraction field value was 1.0 (that is, 100%), the color field value would be set to blue.

For values of the fraction field between 0.0 and 0.4 (such as 0.2 or 20%), the field value is determined by linearly interpolating the keyValue field values for the first two keyframes. In this case, since the key of 0.2 is halfway between the key at 0.0 and the key at 0.4, the field would be set to a color halfway between red and green. Similarly, when the fraction field value is between the second and third keys (that is, between 0.4 and 1.0), the field value is determined by linearly interpolating the keyValue field values of the second and third keyframes.

If the first keyframe has a key field fraction value greater than zero, then the field value is equal to the keyValue field value of the first keyframe until the fraction field value reaches the first keyframe key field fraction value. Similarly, if the last keyframe has a key field fraction value less than one, the color field value is set to the keyValue field value of the last keyframe, from when the fraction field value equals the last keyframe key field fraction value percentage, and will not change as the fraction field value increases from that value to 1.0.

The ColorFieldInterpolator node class works in the HSV color space. Doing the interpolation in the HSV color space produces the most intuitive, visually pleasing results when animating color values.

> While linear interpolation is used to compute the keyValue field values for fraction field values between successive keys, non-linear easing functions may be applied to the fraction field values computed by the Animation node, so the overall animation may vary in speed. 

### Example

The following changes the color of a rectangle, from blue to very dark blue, and back to blue, in 10 seconds, repeatedly.  

#### ColorFieldInterpolator Node Class Example

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="animationcolortest" extends="Group">
  <script type="text/brightscript">
    <![CDATA[
      function init()
        m.top.setFocus(true)
      end function
    ]]>
  </script>

  <children>
    <Rectangle id="testRectangle" color="0x0000CCFF" width="810" height="44" translation="[310,8]" />
    <Animation id="testAnimation" duration="10" repeat="true" control="start" easeFunction="linear">
      <ColorFieldInterpolator id="testColor" key="[0.0, 0.5, 1.0]" keyValue="[ 0x0000CCFF, 0x00000FFF, 0x0000CCFF ]" fieldToInterp="testRectangle.color" />
    </Animation>
  </children>
</component>
```

## Fields

| Field         | Type            | Default | Access Permission | Description                                                  |
| ------------- | --------------- | ------- | ----------------- | ------------------------------------------------------------ |
| fieldToInterp | string          | ""      | READ_WRITE        | Specifies the field to interpolate. This generally refers to the field on a SceneGraph node that contains the color to animate, such as testRectangle.color field in the example below |
| key           | array of floats | [ ]     | READ_WRITE        | Specifies the key fractions for the interpolator keyframes. Each key fraction should be a unique value from 0 to 1 indicating the fraction of the animation where the keyValue field value should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| keyValue      | array of colors | [ ]     | READ_WRITE        | Specifies the key values for the interpolator keyframes. Each value in the keyValue field array corresponds to a value in the key field array. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| fraction      | float           | 0.0     | READ_WRITE        | Specifies the fraction to be used to compute a value for the field |
| reverse       | boolean         | false   | READ_WRITE        | Enables animation to be played in reverse                    |

## Sample app

[AnimationColorExample](https://github.com/rokudev/samples/tree/master/ux%20components/animation/AnimationColorExample) is a sample app demonstrating ColorFieldInterpolator in action.
