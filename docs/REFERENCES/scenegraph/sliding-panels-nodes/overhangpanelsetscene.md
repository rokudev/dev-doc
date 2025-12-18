---
title: Overhangpanelsetscene
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

# OverhangPanelSetScene

Extends [**Scene**](/docs/references/scenegraph/scene.md)

The OverhangPanelSetScene node class provides a convenient way to create a Scene node that has set with default Overhang and PanelSet nodes. The layout of the Overhang and PanelSet use the default sizes for SDK2 apps. The node provides access to the PanelSet and Overhang via fields that contain the node objects.

~~~~
scene = screen.CreateScene("OverhangPanelSetScene")
~~~~

## Fields

| Field    | Type     | Default          | Access Permission | Use                                                                                                                                                                                                                                                                                                                                              |
|----------|----------|------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| overhang | Overhang | An Overhang node | READ_ONLY | Provides access to the Overhang node created for this scene. Fields of the Overhang node can be set to custom the overhang.                                                                                                                                                                                                    |
| panelSet | PanelSet | A PanelSet node  | READ_ONLY | Provides access to the PanelSet node created for this scene. The RoSGNode child APIs can be used to add panels to the panel set. Be careful to follow the restrictions on using the child APIs that are described in the PanelSet documentation.<br/><br/>Fields of the PanelSet node can also be set to custom the panel set. |

## Sample app
[OverhangPanelSetSceneExample](https://github.com/rokudev/samples/tree/master/ux%20components/sliding%20panels/OverhangPanelSetSceneExample) is a sample app demonstrating OverhangPanelSetScene in action.
