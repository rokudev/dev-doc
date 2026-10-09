---
title: 'FocusPathCtx'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'FocusPathCtx'
  description: 'Context that RootFocusBoundary provides when its setFocusPath prop is set, so that useFocusable can report which SceneGraph node holds virtual focus.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-modalboundary
      title: 'ModalBoundary'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx#FocusPathCtx.deck -->

Context that `RootFocusBoundary` provides when its `setFocusPath` prop is set, so that `useFocusable` can report which SceneGraph node holds virtual focus

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx`. -->

```typescript
import { FocusPathCtx } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx#FocusPathCtx.signature -->

```typescript
const FocusPathCtx: Context<FocusPathContextValue | undefined>
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx#FocusPathCtx.description -->

Context that `RootFocusBoundary` provides when its `setFocusPath` prop is set, so
that `useFocusable` can report which SceneGraph node holds virtual focus.

Apps don't normally read or provide this context themselves. Without a provider,
focus-path tracking is off.

## Types
<!-- generator-heading -->

### FocusPathContextValue
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx#FocusPathContextValue.description -->

The value `RootFocusBoundary` provides through [FocusPathCtx](doc:rsg-sdk-focuspathctx) when its
`setFocusPath` prop is set.

<!-- derived: rsg-sdk/external/packages/navigation/src/focus-boundary/focus-path-provider.tsx#FocusPathContextValue.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `notifyFocus` | `(domNode: DomNode) => void` | Notify the provider that this DomNode now holds virtual focus. |
| `rootNode` | `() => DomNode \| null` | The root DomNode rendered by the provider's wrapper `<group>`. |
