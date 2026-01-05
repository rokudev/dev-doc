---
title: "Timer"
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

# Timer

Extends [**Node**](/docs/references/scenegraph/node.md)

The Timer node class generates an observable event after a specified amount of time has elapsed.

### Example

The following changes the text string on the display screen every five seconds as the Timer node generates a fire field observable event.  

#### Timer Node Class Example

~~~
<?xml version="1.0" encoding="utf-8" ?>
 
<!--********** Copyright 2015 Roku Corp.  All Rights Reserved. **********-->
 
<component   name="timertest"   extends="Group" >
 
<script type="text/brightscript" >
<![CDATA[
 
sub init()
  m.testtimer = m.top.findNode("testTimer")
  m.testtimer.control = "start"
  m.defaulttext = "Wait for it, wait for it..."
  m.alternatetext = "Timer fired!!!"
 
  m.testtimerlabel = m.top.FindNode("testTimerLabel")
  m.testtimerlabel.text = m.defaulttext
  m.textchange = false
  m.testtimer.ObserveField("fire","changetext")
  m.top.setFocus(true)
end sub
 
sub changetext()
  if (m.textchange = false) then
    m.testtimerlabel.text = m.alternatetext
    m.textchange = true
   else
     m.testtimerlabel.text = m.defaulttext
     m.textchange = false
   end if
end sub
 
]]>
</script>
 
<children>
 
<Label
  id="testTimerLabel"
  width = "1280"
  translation = "[0,500]"
  horizAlign = "center"
  vertAlign = "center"
/>
 
<Timer
  id="testTimer"
  repeat="true"
  duration="5"
/>
 
</children>
 
</component>
~~~

## Fields

| Field    | Type    | Default | Access Permission | Description                                                  |
| -------- | ------- | ------- | ----------------- | ------------------------------------------------------------ |
| control  | string  | none    | READ_WRITE        | Used to control the operation of the Timer node. Recognized values include: ${ControlValues} |
| repeat   | Boolean | false   | READ_WRITE        | If set to true, the Timer node fires repeatedly, each time the specified duration field value elapses. If set to false, the Timer node only fires once until restarted |
| duration | time    | 1       | READ_WRITE        | Specifies the time in seconds before the Timer node fires after the control field value is set to start. To specify time values down to millisecond granularity, use a float type (0.001 equals one millisecond) |
| fire     | Event   | N/A     | OBSERVE_ONLY      | Triggers observer callback functions when the Timer node fires. Please note that the timer observer callback executes on the render thread |

{#ControlValues}

| Value | Effect                              |
| ---- | ---------------------------------- |
| none  | No effect                           |
| start | Starts the **Timer** node operation |
| stop  | Stops a running **Timer** node      |

## Sample app
[TimerExample](https://github.com/rokudev/samples/tree/master/ux%20components/control/TimerExample) is a sample app demonstrating Timer in action.
