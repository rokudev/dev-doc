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
Extends <Anchor label="**Node**" title="**Node**" href="https://roku-ent.readme.io/dev/docs/node">**Node**</Anchor>

AnimationBase is an abstract node class that contains the fields common to the <Anchor label="Animation" title="Animation" href="https://roku-ent.readme.io/dev/docs/animation">Animation</Anchor>, <Anchor label="SequentialAnimation" title="SequentialAnimation" href="https://roku-ent.readme.io/dev/docs/sequentialanimation">SequentialAnimation</Anchor>, and <Anchor label="ParallelAnimation" title="ParallelAnimation" href="https://roku-ent.readme.io/dev/docs/parallelanimation">ParallelAnimation</Anchor> nodes. The purpose of the AnimationBase node class is to provide the basic functionality needed to animate screen elements, such as moving them across the display screen, fading them in and out of view, or changing their color. All node classes extended from AnimationBase require the use of the interpolator node classes <Anchor label="FloatFieldInterpolator" title="FloatFieldInterpolator" href="https://roku-ent.readme.io/dev/docs/floatfieldinterpolator">FloatFieldInterpolator</Anchor>, <Anchor label="Vector2DFieldInterpolator" title="Vector2DFieldInterpolator" href="https://roku-ent.readme.io/dev/docs/vector2dfieldinterpolator">Vector2DFieldInterpolator</Anchor>, and <Anchor label="ColorFieldInterpolator" title="ColorFieldInterpolator" href="https://roku-ent.readme.io/dev/docs/colorfieldinterpolator">ColorFieldInterpolator</Anchor> as child nodes to achieve a specific animation effect.

> AnimationBase is not meant to be instantiated directly by app code

## Fields

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Default
      </th>

      <th>
        Access Permission
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        control
      </td>

      <td>
        option string
      </td>

      <td>
        none
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        <table>
            <tr>
                <td>Option</td>
                <td>Effect</td>
            </tr>
            <tr>
                <td>none</td>
                <td>Initial state with no associated action</td>
            </tr>
            <tr>
                <td>start</td>
                <td>Always plays the animation from the beginning</td>
            </tr>
            <tr>
                <td>stop</td>
                <td>Stops the animation in its current state</td>
            </tr>
            <tr>
                <td>pause</td>
                <td>Pauses the animation in its current state</td>
            </tr>
            <tr>
                <td>resume</td>
                <td>If paused, resumes the animation from its current state. If the animation is not paused, plays the animation from the beginning.</td>
            </tr>
            <tr>
                <td>finish</td>
                <td>Jumps to the end of the animation, then stops. All animated fields will be immediately set to their final values as if the animation had completed.</td>
            </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td>
        state
      </td>

      <td>
        value string
      </td>

      <td>
        stopped
      </td>

      <td>
        READ_ONLY
      </td>

      <td>
        <table>
            <tr>
                <td>Value</td>
                <td>Meaning</td>
            </tr>
            <tr>
                <td>running</td>
                <td>Indicates that the animation is in progress</td>
            </tr>
            <tr>
                <td>paused</td>
                <td>Indicates that the animation has been paused</td>
            </tr>
            <tr>
                <td>stopped</td>
                <td>Indicates that the animation has either run to completion or has been explicitly stopped</td>
            </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td>
        repeat
      </td>

      <td>
        Boolean
      </td>

      <td>
        false
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        Controls whether the animation stops when it finishes (false) or repeats from the beginning (true)
      </td>
    </tr>

    <tr>
      <td>
        delay
      </td>

      <td>
        time
      </td>

      <td>
        0
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        Delays the start of the animation by the specified number of seconds
      </td>
    </tr>
  </tbody>
</Table>
