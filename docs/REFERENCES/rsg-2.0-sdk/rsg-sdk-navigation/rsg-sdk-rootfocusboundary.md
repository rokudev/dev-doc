---
title: 'RootFocusBoundary'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'RootFocusBoundary'
  description: 'The root of a virtual focus tree for a single anchor node.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-screencontrollercontext
      title: 'ScreenControllerContext'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#RootFocusBoundary.deck -->

The root of a virtual focus tree for a single anchor node

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx`. -->

```typescript
import { RootFocusBoundary } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#RootFocusBoundary.signature -->

```typescript
RootFocusBoundary(props: IRootFocusBoundaryProps): JSX.Element
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#RootFocusBoundary.description -->

The root of a virtual focus tree for a single anchor node.

`RootFocusBoundary` owns every anchor-node-wired concern:
  - `keyEvent`: the SceneGraph key input it dispatches through the tree
  - `focusActive`: whether this anchor node holds SceneGraph focus
  - `setHandledKeys`: the `handledKeys` output BrightScript reads to claim keys
  - `setFocusPath`: optional automation output for the focused leaf's SG path

Nested subtrees use `FocusBoundary` (with `focusId`) and receive key events
through the dispatch chain.

An app may have more than one `RootFocusBoundary` — one per anchor node that
extends `FocusBoundaryBase` (e.g. a scene plus a separately-rendered overlay).
Each observes its own `keyEvent`, and only the one in the SceneGraph focus
chain is active at a time via `focusActive`.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#RootFocusBoundary.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | [IRootFocusBoundaryProps](doc:rsg-sdk-rootfocusboundary#irootfocusboundaryprops) | The anchor node's inputs and outputs, and the tree's content. |

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#RootFocusBoundary.example -->

```ts
const MyScene: AnchorNodeImplementation<typeof Desc> = (inputs, outputs) => (
  <RootFocusBoundary
    keyEvent={inputs.keyEvent}
    focusActive={inputs.focusActive}
    setHandledKeys={outputs.handledKeys}
    setFocusPath={outputs.focusPath}
    initialFocus={itemId}
    navigation="vertical"
  >
    <MenuItem focusId={itemId} label="First" />
    <MenuItem label="Second" />
  </RootFocusBoundary>
);
```

## Types
<!-- generator-heading -->

### IRootFocusBoundaryProps
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#IRootFocusBoundaryProps.description -->

Props for the `RootFocusBoundary` component.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/root-focus-boundary.tsx#IRootFocusBoundaryProps.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `captureKeyPress?` | `boolean` | When `true`, a key-down consumed by a handler this boundary owns binds the matching key-up to that handler. See `IFocusBoundaryProps.captureKeyPress`. |
| `children?` | `Element` | The focus tree's content. Descendants that call `useFocusable` register with this boundary, unless a nearer `FocusBoundary` sits between them. |
| `focusActive?` | `boolean` | Reactive signal indicating whether this anchor node currently has SceneGraph focus. Wire from the anchor node's `focusActive` input field. See `IFocusBoundaryProps.focusActive`. |
| `handleAllKeys?` | `boolean` | When `true`, the boundary claims ALL key events unconditionally. See `IFocusBoundaryProps.handleAllKeys`. |
| `initialFocus` | `object` | The focusId object that will receive virtual focus when the boundary mounts. Must match the `focusId` (`UseFocusableOptions.focusId`) passed to one of the descendant `useFocusable` calls. |
| `keyEvent?` | `{ key: string; press: boolean } \| null` | The reactive key event from the anchor node's `keyEvent` input field.  The anchor node must `extends: "FocusBoundaryBase" as const` and declare `keyEvent: FieldType.Object()` as an input field; forward the reactive value here so this boundary becomes the dispatch entry point for the virtual focus tree. |
| `navigation?` | `"vertical" \| "horizontal" \| "grid"` | Navigation direction used when the focused component does not consume a directional key. See `IFocusBoundaryProps.navigation`. |
| `navigationMap?` | `NavigationMap` | Explicit navigation map for irregular layouts. See `IFocusBoundaryProps.navigationMap`. |
| `onUnhandledKey?` | `KeyPressHandlerMap` | Declarative boundary-level key handlers. See `IFocusBoundaryProps.onUnhandledKey`. |
| `setFocusPath?` | `(path: string) => void` | Opt-in automation output. When provided, `RootFocusBoundary` renders a wrapper `<group>`, tracks which SceneGraph node currently holds virtual focus, and writes the focused leaf's "/"-separated SG child-index path (e.g. `"0/1/0/3/0"`) through this setter — clearing to `""` when nothing is focused or `focusActive` is `false`.  Pass the anchor node's `focusPath` output field:   When omitted, no wrapper `<group>` is rendered and no path tracking occurs — the root boundary stays node-less. |
| `setHandledKeys?` | `(keys: Record<string, boolean>) => void` | Output setter for the `handledKeys` SceneGraph field on the anchor node. Pass `outputs.handledKeys`. See `IFocusBoundaryProps.setHandledKeys`. |
