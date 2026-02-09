---
title: "Vector2DFieldInterpolator"
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


Extends [**Node**](doc:node)

Vector2DFieldInterpolator specifies a keyframe animation sequence to be applied to a pair Vector2D field of a node. Most typically, this is used to animate the (x,y) coordinates of a node's translation field.

All field interpolators include a set of key/keyValue pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the percentage of the Animation's progress. The keyframes of the interpolator include a "key", the percentage where the keyframe should occur, and a "keyValue", the value that the field should have at that percentage.

For example, if a Vector2DFieldInterpolator had three keyframes, (0.0, [0.0, 0.0]), (0.4, [500.0, 0.0]) and (1.0, [500, 200.0]), then when the interpolator's fraction field was 0.0 (i.e. 0%), the field would be set to [0.0, 0.0]. When fraction was 0.4 (i.e. 40%), the field would be set to [500.0, 0.0]. When fraction was 1.0 (i.e. 100%), the field would be set to [500.0, 200.0].

For values of fraction between 0.0 and 0.4 (e.g. 0.2 or 20%), the field value is determined by linearly interpolating the keyValues for the first two keyframes. In this case, since the key of 0.2 is halfway between the key at 0.0 and the key at 0.4, the field would be set to [250.0, 0.0] (halfway between the point [0.0, 0.0] and [200.0, 0.0]. Similarly, when fraction is between the second and third keys (i.e. between 0.4 and 1.0), the field value is determined by linearly interpolating the keyValues of the second and third keyframes.

For this example, if the field being interpolated were the translation field of a Poster node parented to the Scene node, the Poster would originally be positioned with its top/left corner at the upper, left corner of the screen. As the animation proceeded from 0% to 40% complete, the Poster would slide horizontally to the right until it's top/left corner was at x=500.0, y=0.0. As the animation continued from 40% to 100% complete, the Poster would slide vertically down until its top/left corner was at x=500.0, y=200.0.

If the first keyframe has a key percentage greater than zero, then the field value will be equal to the keyValue of the first keyframe until fraction reaches the first keyframe's key percentage. Similarly, if the last keyframe has a key percentage less than one, the field value will be set to the keyValue of the last keyframe from when fraction equals the the last keyframe's key percentage and will not change as fraction increases from that value to 1.0.

> While linearly interpolation is used to compute the keyValue's for fraction values between successive keys, non-linear easing functions may be applied to the fraction values computed by the Animation node, so the overall animation may vary in speed. 

### Example

The following scrolls the text string "Application Development Made Easy!" back and forth near the top of the display screen in 10 seconds, repeatedly.

#### Vector2DFieldInterpolator Node Class Example

~~~
<?xml version="1.0" encoding="utf-8" ?>
 
<!--********** Copyright 2015 Roku Corp.  All Rights Reserved. **********-->
 
<component name="animationv2dtest" extends="Group" >
 
    <script type="text/brightscript" >
        <![CDATA[
            function init()
                m.top.setFocus(true)
            end function
        ]]>
    </script>
 
<children>
 
    <Label
        id="testLabel"
        height="44"
        width="0"
        font="font:MediumBoldSystemFont"
        text = "Application Development Made Easy!"
        horizAlign = "left"
        vertAlign = "center"
        translation="[318,8]" />
 
        <Animation
            id="testAnimation"
            duration="10"
            repeat="true"
            control="start"
            easeFunction="linear">
            <Vector2DFieldInterpolator
                id = "testVector2D"
                key="[0.0, 0.5, 1.0]"
                keyValue="[ [318.0, 8.0], [656.0, 8.0], [318.0, 8.0] ]"
                fieldToInterp="testLabel.translation"   />
 
        </Animation>
</children>
 
</component>
~~~

## Fields

| Field         | Type               | Default | Access Permission | Description                                                  |
| ------------- | ------------------ | ------- | ----------------- | ------------------------------------------------------------ |
| fieldToInterp | string             | ""      | READ_WRITE        | Specifies the field to interpolate. The string should contain the ID of a node in the scene and the name of a field of that node, separated by a dot ".". For example, "title.width" would indicate that the interpolator should be applied to the width field of a node whose id field was "title". The specified field must be of type float |
| key           | array of floats    | [ ]     | READ_WRITE        | Specifies the key percentages for the interpolator's keyframes. Each key percentage should be a unique value from 0 to 1 indicating the percentage of the animation where the keyValue should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| keyValue      | array of vector2ds | [ ]     | READ_WRITE        | Specifies the key values or the interpolator's keyframes. Each value in the keyValue array corresponds to a value in the key field's array. The interpolator's behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| fraction      | float              | 0.0     | READ_WRITE        | Specifies the percentage to be used to compute a value for the field |
| reverse       | boolean            | false   | READ_WRITE        | Enables animation to be played in reverse.                   |

## Sample app

[AnimationV2DExample](https://github.com/rokudev/samples/tree/master/ux%20components/animation/AnimationV2DExample) is a sample app demonstrating Vector2DfieldInterpolator in action.
