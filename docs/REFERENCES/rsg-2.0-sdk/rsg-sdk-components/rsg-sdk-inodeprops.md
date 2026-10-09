---
title: 'INodeProps'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'INodeProps'
  description: 'Base properties for all SceneGraph nodes.'
  robots: index
next:
  description: ''
---

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/node.ts#INodeProps.deck -->

Base properties for all SceneGraph nodes

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/components/src/sg-nodes/node.ts`. -->

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/node.ts#INodeProps.intro -->

Node is the abstract base class for all SceneGraph nodes. It provides fundamental properties
and functionality that all nodes inherit, including identification, focus management, and event handling.

## Props
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/node.ts#INodeProps.props -->

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children?` | `Element` | — | Child elements - handled by renderer's tree manipulation, not sent as a property |
| `focusable?` | `boolean` | — | Provides a hint as to whether or not this node can take the key focus. |
| `gainFocus?` | `boolean` | — | Declarative focus control - triggers focus on render |
| `id?` | `string` | — | Allows the node to be identified by SceneGraph. The value is also supplied as the parameter to certain event handlers (like onFocusedChild). |
| `onFocusedChild?` | `EventHandler<string \| null>` | — | Event handler called when a child node gains or loses focus. When focus is gained, the parameter is the child's `id`, or `""` if the child has no id. When focus is lost, the parameter is `null`. |
| `ref?` | `ComponentRef<INodeProps> \| (ref: ComponentRef<INodeProps>) => void` | — | Reference to the component for imperative operations like focus() |
