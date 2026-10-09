---
title: 'Navigation'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: '@roku-sdk/navigation'
  description: 'Navigation primitives for Roku SDK applications.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-bubble
      title: 'bubble'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/README.md#navigation.deck -->

Navigation primitives for Roku SDK applications

<!-- ⚠️ This page is generated — edit the package README in `rsg-sdk/external/packages/navigation/README.md` and the JSDoc of each export. -->

**Package:** `@roku-sdk/navigation`

## Pages
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/README.md#navigation.pages -->

- [bubble](doc:rsg-sdk-bubble): Return from a key handler to pass the key on instead of consuming it.
- [computeSGPath](doc:rsg-sdk-computesgpath): Compute the SceneGraph tree index path from root to target by walking bottom-up using parent pointers.
- [FocusBoundary](doc:rsg-sdk-focusboundary): Establishes a virtual focus boundary for a subtree of TypeScript components.
- [FocusPathCtx](doc:rsg-sdk-focuspathctx): Context that RootFocusBoundary provides when its setFocusPath prop is set, so that useFocusable can report which SceneGraph node holds virtual focus.
- [ModalBoundary](doc:rsg-sdk-modalboundary): Renders a custom dialog with its own FocusBoundary, dismissed by the Back key.
- [onPress](doc:rsg-sdk-onpress): Wraps a handler so it fires only on key-down (press), removing the need for an if (press) guard inside onKey (or onUnhandledKey) handlers.
- [onRelease](doc:rsg-sdk-onrelease): Wraps a handler so it fires only on key-up (release).
- [RootFocusBoundary](doc:rsg-sdk-rootfocusboundary): The root of a virtual focus tree for a single anchor node.
- [ScreenControllerContext](doc:rsg-sdk-screencontrollercontext): Context for managing the screen stack provided by ScreenControllerProvider.
- [ScreenControllerProvider](doc:rsg-sdk-screencontrollerprovider): Provider for ScreenControllerContext.
- [useFocusable](doc:rsg-sdk-usefocusable): Registers a component instance with the nearest FocusBoundary.
- [useFocusActions](doc:rsg-sdk-usefocusactions): Returns imperative focus actions for the nearest FocusBoundary.
- [useModal](doc:rsg-sdk-usemodal): Creates modal open/close state and focus-transfer actions.
- [Navigation types](doc:rsg-sdk-navigation-types): Types shared by several `@roku-sdk/navigation` exports.
