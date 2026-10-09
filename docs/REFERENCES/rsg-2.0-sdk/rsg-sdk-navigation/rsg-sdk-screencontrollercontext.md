---
title: 'ScreenControllerContext'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'ScreenControllerContext'
  description: 'Context for managing the screen stack provided by [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider).'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-screencontrollerprovider
      title: 'ScreenControllerProvider'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerContext.deck -->

Context for managing the screen stack provided by [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider)

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx`. -->

```typescript
import { ScreenControllerContext } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerContext.signature -->

```typescript
const ScreenControllerContext: Context<IScreenControllerContext>
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerContext.description -->

Context for managing the screen stack provided by [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider).

Read it with `useContext(ScreenControllerContext)` to push, pop, and replace
screens. Every method throws if no `ScreenControllerProvider` is above the caller.

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerContext.example -->

```tsx
const { pushScreen, popScreen } = useContext(ScreenControllerContext);
pushScreen(() => <DetailsScreen onBack={popScreen} />);
```

## Types
<!-- generator-heading -->

### IScreenControllerContext
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/screen-controller/types.ts#IScreenControllerContext.description -->

Public API of the [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider).

The controller owns:
- a stack of currently-active screen factories that drives what `getScreen()` renders,
- cover/uncover callback lists attached to the current top-of-stack entry.

Stack entries are plain factory functions — the controller is intentionally registry-free.
Callers may pass `null` (or omit the argument on `resetScreen`) to render the provider's
`fallback` factory at that slot.

Two complementary navigation styles are supported:
- **Stack navigation** via `pushScreen` / `popScreen`: every entry stays mounted, the top
  entry is rendered above the previous one, and lower-level component state is preserved
  in memory automatically.
- **Replace navigation** via `setScreen`: the previous top is unmounted and replaced; if
  you need to preserve any state across the swap, save and restore it yourself.

Apps that prefer addressing screens by string id can layer a thin "registry" wrapper on
top of this controller; see the showcase's `ScreenRegistryContext` for a canonical example.

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/types.ts#IScreenControllerContext.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `getScreen` | `() => Element` | Returns the JSX rendering every screen currently on the stack (bottom-to-top). Entries below the top stay mounted so their component state is preserved.  The controller does not draw any background or "cover" of its own; whatever the top screen returns is laid directly on top of the screen below. If you want lower screens fully hidden you must paint your own opaque background (or set `visible={false}`). |
| `onScreenCovered` | `(callback: () => void) => void` | Registers a callback fired when the current top screen becomes covered by a newly pushed screen. Intended to be called from a screen component's `onMount`; automatically unregisters via Solid's `onCleanup` when the calling owner disposes.  Typical uses: release resources that aren't needed while hidden (free heavy textures, pause timers, stop polling), or hide off-screen elements to save render time. |
| `onScreenUncovered` | `(callback: () => void) => void` | Registers a callback fired when the screen directly above is popped and this screen becomes the top again. Intended to be called from a screen component's `onMount`; automatically unregisters via Solid's `onCleanup` when the calling owner disposes.  Typical uses: restore previously released state (re-fetch data that may have changed while hidden, restore the previously focused element, resume timers). |
| `popScreen` | `() => void` | Removes and destroys the screen at the top of the stack, revealing the one below. No-op when the stack is empty; popping the last entry shows the provider's `fallback`. |
| `pushScreen` | `(factory: () => Element \| null) => void` | Pushes a new screen on top of the stack, instantiating it above the existing one. Screens below remain mounted and preserve their state, so this is the right tool when you want to "drill down" into a sub-view and return without losing context. |
| `resetScreen` | `(factory: () => Element \| null) => void` | Clears the entire screen stack and replaces it with a single entry. Use this to escape a deeply nested navigation (for example, jumping to a top-level screen from anywhere). |
| `setScreen` | `(factory: () => Element \| null) => void` | Replaces the screen at the top of the stack. Its previous instance is destroyed, so any component state the previous top owned is lost — save and restore it yourself if you need it to survive the swap. If the stack is empty, pushes a new entry instead. Stack depth never changes. |
