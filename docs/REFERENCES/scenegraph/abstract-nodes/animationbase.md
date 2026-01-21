---
title: AnimationBase
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


Extends [**Node**](/docs/references/scenegraph/node.md "**Node**")

AnimationBase is an abstract node class that contains the fields common to the [Animation](/docs/references/scenegraph/animation-nodes/animation.md "Animation"), [SequentialAnimation](/docs/references/scenegraph/animation-nodes/sequentialanimation.md "SequentialAnimation"), and [ParallelAnimation](/docs/references/scenegraph/animation-nodes/parallelanimation.md "ParallelAnimation") nodes. The purpose of the AnimationBase node class is to provide the basic functionality needed to animate screen elements, such as moving them across the display screen, fading them in and out of view, or changing their color. All node classes extended from AnimationBase require the use of the interpolator node classes [FloatFieldInterpolator](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md "FloatFieldInterpolator"), [Vector2DFieldInterpolator](/docs/references/scenegraph/animation-nodes/vector2dfieldinterpolator.md "Vector2DFieldInterpolator"), and [ColorFieldInterpolator](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md "ColorFieldInterpolator") as child nodes to achieve a specific animation effect.

> AnimationBase is not meant to be instantiated directly by app code

## Fields

| Field   | Type          | Default | Access Permission | Description                                                  |
| ------- | ------------- | ------- | ----------------- | ------------------------------------------------------------ |
| control | option string | none    | READ_WRITE        | Controls the animation. Supported options include:  |
| state   | value string  | stopped | READ_ONLY         | Indicates the state of the animation. Values include: |
| repeat  | Boolean       | false   | READ_WRITE        | Controls whether the animation stops when it finishes (false) or repeats from the beginning (true) |
| delay   | time          | 0       | READ_WRITE        | Delays the start of the animation by the specified number of seconds |

