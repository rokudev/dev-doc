---
title: "ParallelAnimation"
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


Extends [**AnimationBase**](/docs/references/scenegraph/abstract-nodes/animationbase.md)

The ParallelAnimation node class allows you to specify that a set of animations should occur simultaneously. The children of a ParallelAnimation node specify the set of animations to be executed. Note that the use of the delay field in the child animations allows the start of the child animations to be offset from one another, if desired.

The state field is set to running when any of the child animations is in progress. Once all the animations have run to completion, the state field is set to stopped. 

### Example

The following example animates a group of rectangles to expand and change opacity at the same time. 

#### ParallelAnimation Node Class Example

~~~
<?xml version="1.0" encoding="utf-8" ?>
 
<!--********** Copyright 2015 Roku Corp.  All Rights Reserved. **********-->
 
<component name="animationparalleltest" extends="Group" >
    <script type="text/brightscript" >
        <![CDATA[
            function init()
              m.testparallelanimation = m.top.FindNode("testParallelAnimation")
              m.testparallelanimation.repeat = "true"
              m.testparallelanimation.control = "start"
              m.top.setFocus(true)
            end function
        ]]>
    </script>
 
<children>
 
    <LayoutGroup   id = "dancingbars"  translation = "[640,360]"  itemSpacings = "[10]"  layoutDirection = "horizontal"  horizAlignment = "center"  vertAlignment = "center" >
      <Rectangle      id="R1"      color="0x00FF00FF"      opacity = ".2"     width = "50"      height = "100"      scaleRotateCenter = "[25, 50]"     translation = "[0, 0]"/>
      <Rectangle      id="R2"      color="0x00FF00FF"      opacity = ".2"     width = "50"      height = "100"      scaleRotateCenter = "[25, 50]"     translation = "[60, 0]"/>
      <Rectangle      id="R3"      color="0x00FF00FF"      opacity = ".2"     width = "50"      height = "100"      scaleRotateCenter = "[25, 50]"     translation = "[120, 0]"/>
      <Rectangle      id="R4"      color="0x00FF00FF"      opacity = ".2"     width = "50"      height = "100"      scaleRotateCenter = "[25, 50]"     translation = "[180, 0]"/>
      <Rectangle      id="R5"      color="0x00FF00FF"      opacity = ".2"     width = "50"      height = "100"      scaleRotateCenter = "[25, 50]"     translation = "[240, 0]"/>
    </LayoutGroup>
    <Label   text = "Bars Should Be Dancing"  width = "1280"  translation = "[0,500]"  horizAlign = "center"  vertAlign = "center"  />
    <ParallelAnimation   id = "testParallelAnimation" > <!--** ParallelAnimation   id = "testParallelAnimation"   repeat = "true" **-->
    <Animation id = "R1Animation" duration = "2" easeFunction = "linear" >
        <Vector2DFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ [1, 1], [1, 2], [1, 1] ]"    fieldToInterp="R1.scale" /> 
        <FloatFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ 0.2, 1, 0.2 ]"    fieldToInterp="R1.opacity" />
    </Animation>
     <Animation        id = "R2Animation"       duration = "2"       easeFunction = "linear" > 
         <Vector2DFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ [1, 1], [1, 2], [1, 1] ]"    fieldToInterp="R2.scale" />
             <FloatFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ 0.2, 1, 0.2 ]"    fieldToInterp="R2.opacity" />
     </Animation>
     <Animation        id = "R3Animation"       duration = "2"       easeFunction = "linear" > 
         <Vector2DFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ [1, 1], [1, 2], [1, 1] ]"    fieldToInterp="R3.scale" />
             <FloatFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ 0.2, 1, 0.2 ]"    fieldToInterp="R3.opacity" />
     </Animation>
     <Animation        id = "R4Animation"       duration = "2"       easeFunction = "linear" >
         <Vector2DFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ [1, 1], [1, 2], [1, 1] ]"    fieldToInterp="R4.scale" />
             <FloatFieldInterpolator    key= "[0, 0.5, 1]"    keyValue= "[ 0.2, 1, 0.2 ]"    fieldToInterp="R4.opacity" />
     </Animation>
     <Animation       id = "R5Animation"      duration = "2"      easeFunction = "linear" >
         <Vector2DFieldInterpolator   key= "[0, 0.5, 1]"   keyValue= "[ [1, 1], [1, 2], [1, 1] ]"   fieldToInterp="R5.scale" />
         <FloatFieldInterpolator   key= "[0, 0.5, 1]"   keyValue= "[ 0.2, 1, 0.2 ]"   fieldToInterp="R5.opacity" />
     </Animation>
    </ParallelAnimation>
 
</children>
 
</component>
~~~

## Sample app

[AnimationParallelExample](https://github.com/rokudev/samples/tree/master/ux%20components/animation/AnimationParallelExample) is a sample app demonstrating ParallelAnimation in action.
