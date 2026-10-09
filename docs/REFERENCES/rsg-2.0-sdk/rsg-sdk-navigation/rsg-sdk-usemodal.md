---
title: 'useModal'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'useModal'
  description: 'Creates modal open/close state and focus-transfer actions.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-navigation-types
      title: 'Navigation types'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#useModal.deck -->

Creates modal open/close state and focus-transfer actions

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts`. -->

```typescript
import { useModal } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#useModal.signature -->

```typescript
useModal(focusId: object): UseModalResult
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#useModal.description -->

Creates modal open/close state and focus-transfer actions.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#useModal.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `focusId` | `object` | Optional pre-created focus identity. When omitted, one is   generated and returned. Pass the same object to `<ModalBoundary focusId>`. |

## Return values
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#useModal.returns -->

Returns `UseModalResult`.

## Types
<!-- generator-heading -->

### UseModalResult
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#UseModalResult.description -->

The state and actions returned by [useModal](doc:rsg-sdk-usemodal).

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/use-modal.ts#UseModalResult.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `close` | `() => void` | Close the modal: clear `show`. Focus falls back via boundary unregister. |
| `focusId` | `object` | Stable focus identity shared with `ModalBoundary`. Pass to `<ModalBoundary focusId={...} />`. `open()` targets this id with `setFocus`. |
| `isOpen` | `Accessor<boolean>` | Reactive accessor for whether the modal is open. Wire to `<ModalBoundary show={...} />`. |
| `open` | `() => void` | Open the modal: set `show` true and transfer focus to the modal boundary. |
