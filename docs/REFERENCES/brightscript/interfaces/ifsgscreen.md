---
title: "ifSGScreen"
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


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roSGScreen](/docs/references/brightscript/components/rosgscreen.md "roSGScreen") | The roSGScreen object is a SceneGraph canvas that displays the contents of a SceneGraph Scene node tree |


## Supported methods

### SetMessagePort(port as roMessagePort) as Void

#### Description

Specifies the roMessagePort object for the roSGScreen object

#### Parameters

| Name | Type          | Description                                            |
| ---- | ------------- | ------------------------------------------------------ |
| port | roMessagePort | The roMessagePort to be used for the SceneGraph scene. |

### GetMessagePort() as roMessagePort

#### Description

Returns the roMessagePort object for the SceneGraph scene.

#### Return Value

The roMessagePort object.

### getGlobalNode() as roSGNode

#### Description

Returns a global reference object for the SceneGraph application.

#### Return Value

A global reference object.

#### Example: Starting Scene Graph Applications

~~~~
sub showChannelSGScreen()
  print "in showChannelSGScreen"
  screen = CreateObject("roSGScreen")
  m.port = CreateObject("roMessagePort")
  screen.setMessagePort(m.port)
  m.global = screen.getGlobalNode()
  m.global.id = "GlobalNode"
  m.global.addFields( &#123;red: &hff0000ff, green: &h00ff00ff, blue: &h0000ffff&#125; )
  scene = screen.CreateScene("TrivialScene")
  screen.show()
  scene.setFocus(true)

  child = createObject("RoSGNode","ContentNode")
  child.contentkey = "test_string"
  print "child: '"; child.contentkey; "'"

  while(true)
    msg = wait(0, m.port)
    msgType = type(msg)
    if msgType = "roSGScreenEvent"
      if msg.isScreenClosed() then return
    end if
  end while

end sub
~~~~

### Show() as Boolean

#### Description

Renders the SceneGraph scene defined by the roSGScreen object on the display screen.

#### Return Value

A flag indicating whether the screen is displayed. 

### Close() as Void

#### Description

Removes the SceneGraph scene from the display screen.

### CreateScene(sceneType as String) as Object

#### Description

Creates the SceneGraph scene object based on the specified sceneType object.

#### Parameters

| Name      | Type   | Description                                                 |
| --------- | ------ | ----------------------------------------------------------- |
| sceneType | String | The sceneType object to be used to create the scene object. |

#### Return Value

The roSGScene object associated with the screen.

### GetScene() as roSGNode

#### Description

The roSGScene object associated with the screen.

#### Return Value

Typically, the scene created in main.brs by a roSGScreen.CreateScene() call.