---
title: 'ModalBoundary'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'ModalBoundary'
  description: 'Renders a custom dialog with its own FocusBoundary, dismissed by the Back key.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-onpress
      title: 'onPress'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#ModalBoundary.deck -->

Renders a custom dialog with its own `FocusBoundary`, dismissed by the Back key

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx`. -->

```typescript
import { ModalBoundary } from "@roku-sdk/navigation";
```

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#ModalBoundary.signature -->

```typescript
ModalBoundary(props: IModalBoundaryProps): JSX.Element
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#ModalBoundary.description -->

Renders a custom dialog with its own `FocusBoundary`, dismissed by the Back key.

Set `dismissKeys` to dismiss on other keys instead. Render it as a sibling of the content it covers, under a common ancestor
`FocusBoundary`, and drive it with [useModal](doc:rsg-sdk-usemodal), which owns the `show` state and
moves focus into the dialog when it opens. If the dialog has focusable children,
such as Confirm and Cancel buttons, pass `initialFocus`. If it has none, such as a
help overlay, omit `initialFocus` and a hidden focus target is added for you.

## Parameters
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#ModalBoundary.params -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | [IModalBoundaryProps](doc:rsg-sdk-modalboundary#imodalboundaryprops) | Visibility, focus identity, dismissal and dialog content. |

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#ModalBoundary.example -->

```tsx
const help = useModal();

<ModalBoundary show={help.isOpen()} focusId={help.focusId} onDismiss={help.close} dim>
  <label text="Help content..." />
</ModalBoundary>
```

## Types
<!-- generator-heading -->

### IModalBoundaryProps
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#IModalBoundaryProps.description -->

Props for the `ModalBoundary` component.

<!-- derived: rsg-sdk/external/packages/navigation/src/modal-boundary/modal-boundary.tsx#IModalBoundaryProps.table -->

| Name | Type | Description |
| :--- | :--- | :--- |
| `children?` | `Element` | The dialog's visual content (and, in Case 1, its focusable children). |
| `dim?` | `string \| boolean` | Simple scrim behind the dialog. `true` uses the default dark overlay (`0x000000AA`); a string sets a custom color/opacity; `false`/`undefined` renders no scrim. Ignored when `scrim` is provided. |
| `dismissKeys?` | `string[]` | Remote key names that dismiss the modal, wired to the inner boundary's `onUnhandledKey`. Each fires `onDismiss` on key-down. |
| `focusId?` | `object` | The stable focus identity for the modal's inner `FocusBoundary`. Must match the `focusId` returned by (or passed to) the paired `useModal` call so `open()` can transfer focus here via `setFocus`.  If omitted, an internal identity is generated — but the parent then has no way to reference it for `setFocus`, so prefer passing `useModal().focusId`. |
| `initialFocus?` | `object` | Focus target for Case 1 (dialogs whose children own focus). When provided, no dummy focusable is injected and this ref is used as the inner boundary's `initialFocus`. When omitted, a hidden dummy focusable is injected and used as `initialFocus` instead (Case 2). |
| `navigation?` | `"vertical" \| "horizontal" \| "grid"` | Navigation direction for the inner `FocusBoundary` (Case 1 button rows are typically `"horizontal"`). Ignored for content-only overlays. |
| `onDismiss?` | `() => void` | Called when the modal should be dismissed (a `dismissKeys` key was pressed). |
| `scrim?` | `() => Element` | Render prop for a fully custom scrim (blur, gradient, animated overlay). Overrides `dim` when provided. |
| `show` | `boolean` | Whether the modal is visible. Drive this from `useModal().isOpen`. |
