---
title: Scene
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
Extends [**Group**](doc:group)

The **Scene** node class serves as the root of a SceneGraph node tree. Every **roSGScreen** object must have a **Scene** node, or a node that derives from the **Scene** node class as its root, including an XML markup component that extends the Scene node class or subclass. That node must be created using the **roSGScreen** createScene() function, with an argument that is a string of the name of the **Scene** node object created. For example:

```
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("Scene")
```

While it is technically possible to have more than one scene per app, we recommend you only have one **roSGScreen** and one **Scene** node. Child nodes of the scene can be treated as different "scenes" where you can then implement transitions between them.

## Fields

| Field                   | Type              | Default                                   | Access Permission | Description           |
| ----------------------- | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| backgroundURI | uri | invalid | READ_WRITE | Specifies a graphic image file to be used for the Scene node background. |
| limitBackgroundToUIResolution | boolean | true | READ_WRITE | If the scene background URI is overridden with a non-theme value and this field is set to true, the **backgroundURI** image is limited to the current screen size after being loaded.<br /><br />if this field is set to false, the  **backgroundURI** image is loaded without any scaling applied. |
| backgroundColor         | color             | 0x000000FF                                | READ_WRITE        | Loads an image using the provided background URI as-is and does not apply any scaling whatsoever when "limitBackgroundToUIResolution" is false. Specifies a background color for the scene. This color is only used if the backgroundURI field is set to an empty string. For example:  <br/><br/>scene.backgroundColor="0xEB1010FF"  <br/>scene.backgroundUri = "" |
| backExitsScene | Boolean | true | READ_WRITE | If true, a Back key press causes the scene to exit, back to the last user-focused item. If false, a Back key press does not cause the scene to exit. In order for the Back key to cause the scene to exit, the remote control focus must be explicitly set on the scene, or a child of the scene, using the [ifSGNodeFocus](https://roku-ent.readme.io/dev/docs/ifsgnodefocus "ifSGNodeFocus") interface setFocus(true) function. A Home key press always causes the scene to exit. |
| dialog | Node | invalid |  | Setting this field to a node extended from a **Dialog** node causes the dialog to be displayed |
| currentDesignResolution | assocarray |  | READ_WRITE | This read-only field is set when the Scene is initialized. It indicates which of an app's design resolutions (per manifest's ui\_resolutions value) is being used, based on the player model and connected display type. Previously, a developer could deduct the same information by using both [roDeviceInfo.GetUIResolution](https://roku-ent.readme.io/dev/docs/ifdeviceinfo#getuiresolution-as-object) and [roAppInfo.getValue](https://roku-ent.readme.io/dev/docs/ifappinfo#getvaluekey-as-string-as-string "roAppInfo.getValue")("ui_resolutions"). This new field simplifies the process.  <br/><br/>The field is set to an AA with two numeric-valued keys — width and height — as well as a string value indicating the current design resolution ("HD", "FHD" or "SD"). <br /><br /> |
| palette | RSGPalette node | not set | READ_WRITE | Defines the default color palette used by those nodes that have a **palette** field (for example, the **Scene** node, [standard dialogs](https://roku-ent.readme.io/dev/docs/standard-dialog), [dynamic custom voice keyboards](https://roku-ent.readme.io/dev/docs/dynamic-keyboard-base), and so on).<br /><br />Apps typically set the **Scene.palette** field to consistently color the standard dialogs and keyboards in the app.<br /><br />Nodes that include a **palette** field can be set to an **RSGPalette** node to override the default colors specified in the **Scene** node.<br /><br />If a node that supports a palette does not set its **palette** filed, the node looks up the scene graph until it finds a node with its **palette** field set.<br /><br />If no ancestor node is found with its palette field set, the default color palette is used (grey with white text).<br /><br />The RSGPalette color values used by the Scene node are as follows:<br /> |
