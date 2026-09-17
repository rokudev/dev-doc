---
title: "FloatArrayFieldInterpolator"
excerpt: 'Keyframe animation sequence for a field that holds an array of floats'
deprecated: false
hidden: false
metadata:
  title: 'FloatArrayFieldInterpolator'
  description: 'The FloatArrayFieldInterpolator node specifies a keyframe animation sequence applied to a field that holds an array of floats, such as Effect.borderRadius or colorStops.'
  robots: index
next:
  description: ''
---


Extends [**Node**](doc:node)

*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

The FloatArrayFieldInterpolator node class specifies a keyframe animation sequence to be applied to a node field that holds an array of floats, such as the [**Effect**](doc:effect) node's `borderRadius` field or a `colorStops` field. Before Roku OS 16.0, these fields could only be animated through callbacks into BrightScript.

FloatArrayFieldInterpolator is a sibling of [**FloatFieldInterpolator**](doc:floatfieldinterpolator), [**ColorFieldInterpolator**](doc:colorfieldinterpolator), and [**Vector2DFieldInterpolator**](doc:vector2dfieldinterpolator), and works with the [**Animation**](doc:animation) node in the same way.

All field interpolators include a set of key/keyValue pairs that define a keyframe of the animation. Field interpolators are generally used as children of an Animation node. As the animation progresses, it sets the fraction field of its field interpolators to a value between 0 and 1, indicating the percentage of the Animation's progress. The keyframes of the interpolator include a "key", the percentage where the keyframe should occur, and a "keyValue", the value that the field should have at that percentage.

Each entry in the keyValue array is itself an array of floats. Interpolation is performed piecewise: each entry in the array is interpolated independently of the others. Passing arrays of different lengths is an error condition, equivalent to passing the wrong type.

### Example

The following animates the corner radii of an Effect node, squaring off the bottom left corner of the item it is applied to over the course of the animation.

#### FloatArrayFieldInterpolator Node Class Example

```xml
<FloatArrayFieldInterpolator
    id="radiusInterp"
    fieldToInterp="itemEffect.borderRadius"
    key="[0.0, 1.0]"
    keyValue="[ [ 8.0, 8.0, 8.0, 32.0 ], [ 8.0, 8.0, 8.0, 8.0 ] ]"
/>
```

## Fields

| Field         | Type                      | Default | Access Permission | Description                                                  |
| ------------- | ------------------------- | ------- | ----------------- | ------------------------------------------------------------ |
| fieldToInterp | string                    | ""      | READ_WRITE        | Specifies the field to interpolate. The string should contain the ID of a node in the scene and the name of a field of that node, separated by a dot ".". For example, "itemEffect.borderRadius" would indicate that the interpolator should be applied to the borderRadius field of a node whose id field was "itemEffect". The specified field must hold an array of floats |
| key           | array of floats           | [ ]     | READ_WRITE        | Specifies the key percentages for the interpolator's keyframes. Each key percentage should be a unique value from 0 to 1 indicating the percentage of the animation where the keyValue should occur. Behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| keyValue      | array of arrays of floats | [ ]     | READ_WRITE        | Specifies the key values for the interpolator's keyframes. Each value in the keyValue array is an array of floats that corresponds to a value in the key field's array. Every array in keyValue must have the same number of entries as the field being interpolated. The interpolator's behavior is undefined if the number of values in the key field does not match the number of values in the keyValue field |
| fraction      | float                     | 0.0     | READ_WRITE        | Specifies the percentage to be used to compute a value for the field |
| reverse       | boolean                   | false   | READ_WRITE        | Enables animation to be played in reverse.                   |
