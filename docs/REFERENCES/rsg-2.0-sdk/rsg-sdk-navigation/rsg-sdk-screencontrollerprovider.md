---
title: 'ScreenControllerProvider'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'ScreenControllerProvider'
  description: 'Provider for [ScreenControllerContext](doc:rsg-sdk-screencontrollercontext).'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-usefocusable
      title: 'useFocusable'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerProvider.deck -->

Provider for [ScreenControllerContext](doc:rsg-sdk-screencontrollercontext)

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx`. -->

```typescript
import { ScreenControllerProvider } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerProvider.signature -->

```typescript
ScreenControllerProvider(props: IScreenControllerProviderProps): JSX.Element
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerProvider.description -->

Provider for [ScreenControllerContext](doc:rsg-sdk-screencontrollercontext).

Holds a stack of screen factory functions. The provider itself does not render any chrome
around the screens — it simply renders every stack entry bottom-to-top, so the consumer is
responsible for visually covering lower screens (paint a background, set `visible={false}`,
etc.) when the top screen is meant to fully obscure them.

Screens are typically pushed/replaced via `pushScreen(factory)` / `setScreen(factory)`.
Pass `null` to render the provider's `fallback` factory at that slot.

Apps that prefer addressing screens by string id can layer a thin "registry" wrapper on top
of this controller; see the showcase's `ScreenRegistryContext` for a canonical example.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerProvider.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | [IScreenControllerProviderProps](doc:rsg-sdk-screencontrollerprovider#iscreencontrollerproviderprops) | The app content and the `fallback` screen factory. |

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/screen-controller.tsx#ScreenControllerProvider.example -->

```tsx
<ScreenControllerProvider fallback={() => <HomeScreen />}>
  <App />
</ScreenControllerProvider>
```

## Types
<!-- generator-heading -->

### IScreenControllerProviderProps
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/screen-controller/types.ts#IScreenControllerProviderProps.description -->

Props accepted by [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider).

<!-- derived: rsg-sdk/external/packages/navigation/src/screen-controller/types.ts#IScreenControllerProviderProps.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `children` | `Element` | The app content that can read [ScreenControllerContext](doc:rsg-sdk-screencontrollercontext). The provider renders only these children; the screen stack appears wherever a descendant places `getScreen()`. |
| `fallback` | `() => Element` | Factory for the fallback screen. Used when a stack entry's factory is `null`, when `resetScreen()` is called with no argument, or when the stack is empty. |
