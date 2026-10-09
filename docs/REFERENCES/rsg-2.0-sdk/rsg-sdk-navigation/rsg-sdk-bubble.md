---
title: 'bubble'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'bubble'
  description: 'Return from a key handler to pass the key on instead of consuming it.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-computesgpath
      title: 'computeSGPath'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#bubble.deck -->

Return from a key handler to pass the key on instead of consuming it

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx`. -->

```typescript
import { bubble } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#bubble.signature -->

```typescript
const bubble: unique symbol
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#bubble.description -->

Return from a key handler to pass the key on instead of consuming it.

A bubbled key keeps going down the dispatch chain: after a focused leaf's `onKey` it gets
directional navigation (key-down only), then the boundary's `onUnhandledKey`, then the parent
boundary.

It is a registered symbol (`Symbol.for`) so that every copy of this package agrees on it. An app
can end up with two copies (a version skew between a library's peer and the app's own install),
and a plain `Symbol()` from one copy would not be `===` to the other's, so a decline returned by
a library would silently consume instead.

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-boundary.tsx#bubble.example -->

```ts
onUnhandledKey: { down: onPress(() => grid.tryMoveDown() || bubble) }
```
