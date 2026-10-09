---
title: 'FocusBoundary'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'FocusBoundary'
  description: 'Establishes a virtual focus boundary for a subtree of TypeScript components.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-focuspathctx
      title: 'FocusPathCtx'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusBoundary.deck -->

Establishes a virtual focus boundary for a subtree of TypeScript components

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx`. -->

```typescript
import { FocusBoundary } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusBoundary.signature -->

```typescript
FocusBoundary(props: IFocusBoundaryProps): JSX.Element
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusBoundary.description -->

Establishes a virtual focus boundary for a subtree of TypeScript components.

A `FocusBoundary` can act as either the dispatch root or a nested boundary:

- **Root** (pass `keyEvent`): observes the anchor node's `keyEvent` input field and
  drives the entire virtual focus tree. The anchor node must extend `FocusBoundaryBase`
  and declare `keyEvent: FieldType.Object()` as an input field. Prefer `RootFocusBoundary`
  for this role — it makes the root explicit and adds opt-in focus-path tracking
  (`setFocusPath`).

- **Nested** (omit `keyEvent`): registers with its parent boundary via `focusId` and
  receives key events through the dispatch chain. No SceneGraph node is created.

Children that wish to participate must call `useFocusable()`.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusBoundary.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | [IFocusBoundaryProps](doc:rsg-sdk-focusboundary#ifocusboundaryprops) | The boundary's content, navigation and key handling. |

## Types
<!-- generator-heading -->

### IFocusBoundaryProps
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#IFocusBoundaryProps.description -->

Props for the `FocusBoundary` component.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#IFocusBoundaryProps.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `captureKeyPress?` | `boolean` | When `true`, a key-down consumed by a handler this boundary owns — an `onUnhandledKey` entry, or the `onKey` entry of whichever child was focused at the time — binds the matching key-up to that same handler. The release is delivered straight to it, ahead of the normal dispatch chain, and the key stays in `handledKeys` until it arrives.  Without this, a release is offered to whoever is focused *at key-up time* and only reaches the original handler if every boundary now in the path declines it. That is fine for a handler that acts on a single edge, and wrong for one that arms state on the press and tears it down on the release, because focus routinely moves while a key is held: a FlexGrid arms a smooth-scroll hold timer from `onUnhandledKey`, then parks its virtual focus on a cell's own boundary as the glide reaches that cell. Any handler in the new path that owns the key on both edges swallows the release, and the glide never settles.  Semantics of a captured release: It is delivered exactly once, to the handler that consumed the press. Returning `bubble` still declines, and the release falls through to the ordinary chain. A capture is dropped, undelivered, if its boundary unmounts, loses focus, or its focused leaf unregisters. Nothing is synthesized — no release is invented for a key that never came up. The focus-loss drop is what bounds a key-up that never arrives at all (device sleep, app backgrounded, SceneGraph focus stolen) without a watchdog timer: without it the key would stay in `handledKeys` for the life of the boundary. A `when` gate that has closed since the press no longer withholds the release, since routing is by handler identity rather than by a fresh lookup. Turn this on for a boundary whose handlers span both key edges. It costs one integer comparison per release while nothing is captured. |
| `children?` | `Element` | The boundary's content. Descendants that call `useFocusable` register with this boundary, unless a nearer `FocusBoundary` sits between them. |
| `focusActive?` | `boolean` | Reactive signal indicating whether this anchor node currently has SceneGraph focus (i.e. is in the SG focus chain).  When provided on the root boundary, drives `isActive` — all `isFocused()` accessors in the tree return `false` when `focusActive` is `false`. `focusedId` is preserved (never cleared) so the focus path automatically restores when SG focus returns.  Wire this from the anchor node's `focusActive` input field:   Ignored on nested boundaries (they derive `isActive` from their parent). Defaults to `true` when omitted (backward compat). |
| `focusId?` | `FocusId` | A pre-created stable object used as this boundary's virtual focus identity when it is nested inside another `FocusBoundary`.  The parent boundary must use this same object as its own `initialFocus` (or pass it to a child's `useFocusable` `focusId` option) so the parent can give virtual focus to this boundary.  If omitted while nested, an object is generated automatically — but the parent has no way to reference it via `initialFocus`.  **Stability requirement**: `focusId` must be a stable object reference for the lifetime of this boundary. It is captured once at mount; reassigning `props.focusId` later has no effect (the parent boundary keys its registry by the original object identity).  Accepts an optional `id` string for debug output — see [FocusId](doc:rsg-sdk-navigation-types#focusid). |
| `handleAllKeys?` | `boolean` | When `true`, the boundary claims ALL key events unconditionally — `handledKeys` is left empty so BrightScript's backward-compat path returns `true` for every key. Components in this boundary do NOT need to declare `onKey` entries.  Use this when you want the entire subtree to own every key (the common case for full-screen app roots). Use selective `onKey` only when you need unhandled keys to bubble up to SceneGraph parents.  Only meaningful when `setHandledKeys` is also provided; otherwise BRS already claims all keys by default. |
| `initialFocus` | `object` | The focusId object that will receive virtual focus when the boundary mounts. This must be the same object passed as `focusId` (`UseFocusableOptions.focusId`) in one of the descendant `useFocusable` calls. |
| `keyEvent?` | `{ key: string; press: boolean } \| null` | The reactive key event from the anchor node's `keyEvent` input field.  When provided, this boundary becomes the dispatch entry point for the virtual focus tree. Set `extends: "FocusBoundaryBase" as const` in the anchor node description and declare `keyEvent: FieldType.Object()` as an input field, then forward the reactive value here.  Omit this prop for nested boundaries — they receive key events through the dispatch chain from their ancestor that owns `keyEvent`. |
| `navigation?` | `"vertical" \| "horizontal" \| "grid"` | Navigation direction used when the focused component does not consume a directional key. `"vertical"` (default): up/down keys move through registered focusables; `"horizontal"`: left/right keys move through registered focusables; `"grid"`: all four directional keys move through registered focusables in order |
| `navigationMap?` | `NavigationMap` | Explicit navigation map for irregular layouts. Maps each focusable ref to the neighbor ref for each directional key. When provided, overrides the `navigation` prop — the boundary uses the map for all directional routing and does not fall back to linear ordering.  Only the directions declared in the map will be claimed from BrightScript; unmapped directions are not intercepted and bubble up normally. |
| `onUnhandledKey?` | `KeyPressHandlerMap` | Declarative boundary-level key handlers. For a **press**, fires AFTER the focused child declines the key AND directional navigation fails (e.g. at the edge of a list).  Unlike leaf `onKey` (which fires first, pre-navigation), `onUnhandledKey` fires last — it is the boundary's fallback for keys that nobody else consumed.  An entry consumes the key unless it returns [bubble](doc:rsg-sdk-bubble) — see [KeyPressHandler](doc:rsg-sdk-navigation-types#keypresshandler). That is how a fallback which only *sometimes* acts (a grid asked to move past its last row) lets the key keep bubbling.  A **release** takes the same route as a press, minus directional navigation: it is offered to the focused child first and reaches this handler only if the child declines it. Focus may have moved since the key-down, so a handler that arms state on press and tears it down on release should tolerate a key-up it never sees.  The keys declared here (`Object.keys(onUnhandledKey)`) are automatically included in `handledKeys` so BrightScript delivers them to TypeScript. This eliminates the need for a separate `boundaryHandledKeys` prop. |
| `rememberLastFocus?` | `boolean` | When `true` (the default), focus returning to this boundary restores the last focused child instead of always resetting to `initialFocus`.  Set to `false` to always reset to `initialFocus` on re-entry (e.g. a menu that should always open at the first item).  Falls back to `initialFocus` when the remembered item is no longer registered (e.g. it unmounted while focus was elsewhere).  Only applies to nested boundaries (those registered with a parent via `focusId`). Root boundaries are always active and are unaffected by this prop. |
| `setHandledKeys?` | `(keys: Record<string, boolean>) => void` | Output setter for the `handledKeys` SceneGraph field on the anchor node.  When provided (root boundary only), the boundary reactively derives which keys the focused component handles (from declarative `onKey` entries + directional navigation availability + boundary `onUnhandledKey` keys) and calls this setter to write the result to the SceneGraph node. BrightScript reads `handledKeys` synchronously in `onKeyEvent` to decide which keys to claim.  Pass `outputs.handledKeys` from the anchor node component:   When omitted, the boundary does not write `handledKeys` and `FocusBoundaryBase.brs` falls back to claiming all keys (backward compat). |
