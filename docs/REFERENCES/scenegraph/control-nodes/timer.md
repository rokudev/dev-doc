---
title: "Timer"
excerpt: 'Timer node that fires observable events after a specified duration elapses'
deprecated: false
hidden: false
metadata:
  title: 'Timer'
  description: 'The Timer node class generates an observable event after a specified duration elapses, supporting repeat firing and millisecond granularity via the fire field.'
  robots: index
next:
  description: ''
---


Extends [**Node**](doc:node)

The Timer node class generates an observable event after a specified amount of time has elapsed.

### Example

The following changes the text string on the display screen every five seconds as the Timer node generates a fire field observable event.  

#### Timer Node Class Example

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="timertest" extends="Group">
  <script type="text/brightscript">
    <![CDATA[
      sub init()
        m.testtimer = m.top.findNode("testTimer")
        m.testtimer.control = "start"
        m.defaulttext = "Wait for it, wait for it..."
        m.alternatetext = "Timer fired!!!"

        m.testtimerlabel = m.top.FindNode("testTimerLabel")
        m.testtimerlabel.text = m.defaulttext
        m.textchange = false
        m.testtimer.ObserveField("fire", "changetext")
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
      width="1280"
      translation="[0,500]"
      horizAlign="center"
      vertAlign="center" />
    <Timer
      id="testTimer"
      repeat="true"
      duration="5" />
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
<td>control</td>
<td>string</td>
<td>none</td>
<td>READ_WRITE</td>
<td>Used to control the operation of the Timer node. Recognized values include: <table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>none</td><td>No effect</td></tr><tr><td>start</td><td>Starts the <strong>Timer</strong> node operation</td></tr><tr><td>stop</td><td>Stops a running <strong>Timer</strong> node</td></tr></tbody></table></td>
</tr>
<tr>
<td>repeat</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If set to true, the Timer node fires repeatedly, each time the specified duration field value elapses. If set to false, the Timer node only fires once until restarted</td>
</tr>
<tr>
<td>duration</td>
<td>time</td>
<td>1</td>
<td>READ_WRITE</td>
<td>Specifies the time in seconds before the Timer node fires after the control field value is set to start. To specify time values down to millisecond granularity, use a float type (0.001 equals one millisecond)</td>
</tr>
<tr>
<td>fire</td>
<td>Event</td>
<td>N/A</td>
<td>OBSERVE_ONLY</td>
<td>Triggers observer callback functions when the Timer node fires. Please note that the timer observer callback executes on the render thread</td>
</tr>
</tbody>
</table>



## Sample app
[TimerExample](https://github.com/rokudev/samples/tree/master/ux%20components/control/TimerExample) is a sample app demonstrating Timer in action.