---
title: AnimationBase
excerpt: Abstract node class providing common fields for animation nodes
deprecated: false
hidden: false
metadata:
  title: AnimationBase
  description: >-
    AnimationBase is an abstract node class containing fields common to the
    Animation, SequentialAnimation, and ParallelAnimation nodes for animating
    elements.
  robots: index
next:
  description: ''
---
Extends [**Node**](docs:node)

AnimationBase is an abstract node class that contains the fields common to the [Animation](doc:animation), [SequentialAnimation](doc:sequentialanimation), and [ParallelAnimation](doc:parallelanimation) nodes. The purpose of the AnimationBase node class is to provide the basic functionality needed to animate screen elements, such as moving them across the display screen, fading them in and out of view, or changing their color. All node classes extended from AnimationBase require the use of the interpolator node classes [FloatFieldInterpolator](doc:floatfieldinterpolator), [Vector2DFieldInterpolator](doc:vector2dfieldinterpolator), and [ColorFieldInterpolator](doc:colorfieldinterpolator) as child nodes to achieve a specific animation effect.

> AnimationBase is not meant to be instantiated directly by app code

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
<td>control</td>
<td>option string</td>
<td>none</td>
<td>READ_WRITE</td>
<td>Controls the animation. Supported options include:</td>
</tr>
<tr>
<td>state</td>
<td>value string</td>
<td>stopped</td>
<td>READ_ONLY</td>
<td>Indicates the state of the animation. Values include:</td>
</tr>
<tr>
<td>repeat</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Controls whether the animation stops when it finishes (false) or repeats from the beginning (true)</td>
</tr>
<tr>
<td>delay</td>
<td>time</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Delays the start of the animation by the specified number of seconds</td>
</tr>
</tbody>
</table>
