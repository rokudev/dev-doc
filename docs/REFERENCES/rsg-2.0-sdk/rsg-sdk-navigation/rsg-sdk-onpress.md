---
title: 'onPress'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'onPress'
  description: 'Wraps a handler so it fires only on key-down (press), removing the need for an if (press) guard inside onKey (or onUnhandledKey) handlers.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-onrelease
      title: 'onRelease'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.deck -->

Wraps a handler so it fires only on key-down (press), removing the need for an `if (press)` guard inside `onKey` (or `onUnhandledKey`) handlers

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx`. -->

```typescript
import { onPress } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.signature -->

```typescript
onPress(handler: () => KeyResult): KeyPressHandler
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.description -->

Wraps a handler so it fires only on key-down (press), removing the need for
an `if (press)` guard inside `onKey` (or `onUnhandledKey`) handlers.

The wrapped handler's verdict is passed through, so returning [bubble](doc:rsg-sdk-bubble) from it declines the press.
The release consumes, which is what a press-only handler wants: it moved nothing on key-up, but
letting that key-up bubble past the boundary its press stopped at would be surprising.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `handler` | `() => KeyResult` | Called on key-down. Return [bubble](doc:rsg-sdk-bubble) to decline the press. |

## Return values
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.returns -->

Returns `KeyPressHandler`.

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#onPress.example -->

```ts
onKey: { OK: onPress(() => props.onSelect?.()) }
// equivalent to: OK: press => { if (press) props.onSelect?.(); }
```

```ts
// Declines the press when the grid is already at its last row.
onUnhandledKey: { down: onPress(() => tryMoveDown() || bubble) }
```
