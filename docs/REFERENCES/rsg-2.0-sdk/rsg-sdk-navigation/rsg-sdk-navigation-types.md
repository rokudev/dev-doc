---
title: 'Navigation types'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'Navigation types'
  description: 'Types shared by several @roku-sdk/navigation exports, or used by none of them directly. Each is documented here once and linked from every page that uses it.'
  robots: index
next:
  description: ''
---

<!-- derived: rsg-sdk/external/packages/navigation/src/index.ts#navigation-types.deck -->

Types shared by several `@roku-sdk/navigation` exports, or used by none of them directly

<!-- ⚠️ This page is generated — edit the JSDoc of each type in `rsg-sdk/external/packages/navigation/src`. -->

```typescript
import type {
    ConditionalKeyHandler,
    FocusId,
    IFocusBoundaryBaseProps,
    IFocusBoundaryKeyData,
    KeyHandlerEntry,
    KeyHandlerMap,
    KeyPressHandler,
    KeyPressHandlerMap,
    KeyResult,
    NavigationMap,
} from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/index.ts#navigation-types.intro -->

Each is documented here once and linked from every page that uses it.

## Types
<!-- generator-heading -->

### ConditionalKeyHandler
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#ConditionalKeyHandler.description -->

A key handler with a reactive gate. The `when` accessor determines whether
this key is currently claimed (included in `handledKeys`). When `when()`
returns `false`, BrightScript won't claim the key and it bubbles through SG.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#ConditionalKeyHandler.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `handle` | `KeyPressHandler` | Called on key-down and key-up while `when()` returns `true`. |
| `when` | `Accessor<boolean>` | Whether the key is currently claimed. While it returns `false`, the key is left out of `handledKeys` and `handle` is not called. |

### FocusId
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusId.description -->

A virtual focus identity, optionally carrying a human-readable debug label.

Focus identity is **reference identity**: the boundary keys its registry on the
object itself, so two distinct objects are two distinct focusables no matter what
they contain. `id` is purely diagnostic — it is never used for lookup, equality,
or navigation, and two focusables may legitimately share the same `id`.

The `object &` intersection is load-bearing. `{ id?: string }` on its own is a
TypeScript *weak type*: assigning a value with no properties in common produces
error TS2559, which would reject every existing caller that passes an arbitrary
object (e.g. a component's own state object) as its identity. Intersecting with
`object` keeps the type as permissive as the `object` it replaces, so this is a
source-compatible widening rather than a breaking change.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#FocusId.table -->

```typescript
type FocusId = object & { id: string };
```

### IFocusBoundaryBaseProps
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary-base.props.ts#IFocusBoundaryBaseProps.description -->

Props for the `FocusBoundaryBase` bridge component.

This mirrors the `<interface>` of
`src/focus-boundary/xml-components/focus-boundary-base/FocusBoundaryBase.xml`, and is
checked in rather than re-exported from the generated `FocusBoundaryBase.xml.d.ts`.
That declaration is a build artifact — `.gitignore` keeps `*.xml.d.ts` out of git and
only `rk build` writes it — so a plain `tsc` run (the consumer typecheck, a registry
consumer) resolves the `.xml` import through the `*.xml` wildcard in `xml.d.ts`, which
exports a default only. Naming the interface here gives it a declaration that does not
depend on build order.

Keep in sync with the XML interface. The `componentMapping` entry for
`FocusBoundaryBase` in `@roku-sdk/tooling` names this interface, so an XML component in
another package that extends `FocusBoundaryBase` inherits these props.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary-base.props.ts#IFocusBoundaryBaseProps.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `focusActive?` | `boolean` | Written by BrightScript when SceneGraph focus enters or leaves this node's subtree. |
| `focusPath?` | `string` | Focus path as "/"-separated indices from the root boundary to the focused leaf (e.g. `"1/0/2"`). Written by TypeScript when virtual focus changes. |
| `handleAllKeys?` | `boolean` | When true, BrightScript claims and forwards every key event without consulting `handledKeys`. Mirrors `KeyHandler.handleAllKeys`. |
| `handledKeys?` | `Record<string, unknown>` | Written by TypeScript (`FocusBoundary`) to declare which keys the virtual focus tree currently handles. `Record<keyName, boolean>`; empty claims all keys. |
| `keyEvent?` | `Record<string, unknown>` | Written by BrightScript on every key event. TypeScript observes this reactively via the anchor node's `keyEvent` input field. |

Extends `IGroupPropsCompat`.

### IFocusBoundaryKeyData
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#IFocusBoundaryKeyData.description -->

Key event data forwarded from BrightScript to TypeScript.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#IFocusBoundaryKeyData.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | The remote key, for example `"OK"` or `"back"`. |
| `press` | `boolean` | `true` on key-down and `false` on key-up. |

### KeyHandlerEntry
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyHandlerEntry.description -->

A single key handler entry: either a plain handler (always active) or a
conditional handler with a reactive `when` gate.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyHandlerEntry.table -->

```typescript
type KeyHandlerEntry = KeyPressHandler | ConditionalKeyHandler;
```

### KeyHandlerMap
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyHandlerMap.description -->

Declarative key handler map. Keys are remote key names (e.g. "OK", "back").
Values are either plain handlers or conditional handlers.

The set of keys declared here is used to:
  1. Derive `handledKeys` for BrightScript (which keys to claim from SG)
  2. Route key events directly to the appropriate handler (no if-chain needed)

Directional keys (`up`, `down`, `left`, `right`) are owned by the boundary's
navigation system and should NOT be declared here.

A declared key is consumed unless its handler returns [bubble](doc:rsg-sdk-bubble), which declines it: the
boundary carries on to directional navigation, then to its own `onUnhandledKey`, then to the
parent boundary. That is the runtime counterpart to the `when` gate — use `when` when the
component never owns the key in that state (BrightScript then never claims it), and `bubble`
when it owns the key but did nothing with this particular press.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyHandlerMap.table -->

```typescript
type KeyHandlerMap = Partial<Record<RemoteKey, KeyHandlerEntry>> & Record<string, KeyHandlerEntry>;
```

### KeyPressHandler
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyPressHandler.description -->

A key handler, called for both press and release.

The return value says whether the handler consumed the key. Returning [bubble](doc:rsg-sdk-bubble) **declines**
it: the key carries on to directional navigation, then the boundary's `onUnhandledKey`, then the
parent boundary. Anything else consumes it, including no return at all, `false`, and whatever a
SolidJS setter returns, so `back: onPress(() => setOpen(false))` consumes Back.

Declining is what lets a fallback that only sometimes acts stay out of the way. A grid asked to
move past its last row returns `bubble` so the key reaches whatever is outside it.

Both edges run the same dispatch chain, so a handler is asked about releases too. A press-only
handler built with [onPress](doc:rsg-sdk-onpress) consumes the release automatically; one written by hand
consumes the release too unless it returns `bubble` for it.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyPressHandler.table -->

```typescript
type KeyPressHandler = (press: boolean) => KeyResult;
```

### KeyPressHandlerMap
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyPressHandlerMap.description -->

Boundary-level fallback handlers keyed by firmware key strings.

An entry that returns [bubble](doc:rsg-sdk-bubble) declines its key, so the boundary bubbles it to its parent
instead of stopping there. Anything else, `false` included, consumes. See [KeyPressHandler](doc:rsg-sdk-navigation-types#keypresshandler).

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyPressHandlerMap.table -->

```typescript
type KeyPressHandlerMap = Partial<Record<RemoteKey, KeyPressHandler>> & Record<string, KeyPressHandler>;
```

### KeyResult
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyResult.description -->

What a key handler returns. Any value means "consumed"; return [bubble](doc:rsg-sdk-bubble) to pass the key on.

This is an explicit union rather than `unknown` on purpose: `unknown | typeof bubble` collapses
to `unknown`, which would hide `bubble` from hovers and from the emitted `.d.ts`. `void` alone
is not enough either, because `void | typeof bubble` rejects a concise SolidJS setter such as
`() => setOpen(false)` (setters return their value). Do not "simplify" it.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#KeyResult.table -->

```typescript
type KeyResult = void | object | null | undefined | typeof bubble;
```

### NavigationMap
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#NavigationMap.description -->

Explicit navigation map for irregular layouts.
Maps each focusable ref to its directional neighbors.
When provided on `FocusBoundary`, takes precedence over the `navigation` prop.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#NavigationMap.table -->

```typescript
type NavigationMap = Map<object, Partial<Record<"up" | "down" | "left" | "right", object>>>;
```
