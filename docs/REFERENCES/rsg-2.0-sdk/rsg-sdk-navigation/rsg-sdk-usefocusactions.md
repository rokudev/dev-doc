---
title: 'useFocusActions'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'useFocusActions'
  description: 'Returns imperative focus actions for the nearest FocusBoundary.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-usemodal
      title: 'useModal'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#useFocusActions.deck -->

Returns imperative focus actions for the nearest `FocusBoundary`

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx`. -->

```typescript
import { useFocusActions } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#useFocusActions.signature -->

```typescript
useFocusActions(): FocusActions
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#useFocusActions.description -->

Returns imperative focus actions for the nearest `FocusBoundary`.

Use this when a component inside a boundary needs to move focus to a
different registered child ref, such as transferring focus to a sibling
nested boundary.

## Return values
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#useFocusActions.returns -->

Returns `FocusActions`.

## Types
<!-- generator-heading -->

### FocusActions
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusActions.description -->

Imperative focus actions exposed by `useFocusActions`.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusActions.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `dispatchKey` | `(key: string, press: boolean) => boolean` | Push a key event into the nearest boundary's dispatch chain and report whether it was consumed.  This is the entry point for code that already owns a key stream from somewhere other than a SceneGraph `keyEvent` field — most notably a FlexGrid cell's `KeyDelegate`, which receives keys from the grid and wants to offer them to a boundary it renders internally. It is the same dispatch a nested boundary receives from its parent, exposed publicly.  The return value is the whole point: `false` means no focusable consumed the key and no navigation moved, so the caller remains free to handle it or decline it and let its own caller's fallback run. A boundary driven this way therefore never silently swallows a key the caller needed back.  A release runs the same chain as a press, minus directional navigation. Always dispatch releases — that is how a consumer learns a hold ended — and treat `false` the same way you would for a press. Note that a directional press consumed by navigation returns `true` while its release returns `false`, since navigation does not run on key-up.  `false` from a *root* boundary goes nowhere: `FocusBoundaryBase.brs` forwards the key by writing a field and reports it handled before TypeScript has run. Only nested boundaries can hand a key back to a caller that might still want it. |
| `focusedId` | `Accessor<object \| null>` | Reactive accessor for the nearest boundary's currently focused child focusId. |
| `isActive` | `Accessor<boolean>` | Whether the nearest boundary is itself active — i.e. it holds focus within its parent, all the way up the chain. `false` means focus currently sits outside this boundary entirely, so no key will be routed here.  Distinct from a child's `isFocused()`: this says nothing about *which* child is focused, only whether this whole subtree is in the focus path. Use it to tear down state that should not outlive the boundary holding focus — a hold timer armed by a key-down whose key-up will now be routed somewhere else, for instance, since a release follows current focus and so may never arrive here. |
| `remembersLastFocus` | `(focusId: object) => boolean \| undefined` | Whether the nested boundary registered under `focusId` restores its last focused child on re-entry (i.e. its `rememberLastFocus`). `undefined` when nothing is registered under that identity, or when the registration is a plain focusable rather than a boundary.  Intended for **development diagnostics**, not control flow: a parent that re-points a registered identity at different content over time — a FlexGrid parking focus on a recycled cell's boundary — can use this to detect a configuration that would restore sub-focus belonging to a previous item, and warn. |
| `setFocus` | `(focusId: object) => void` | Imperatively move virtual focus to a registered focusId in the nearest boundary. |
