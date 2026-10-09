---
title: 'Effect'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'Effect'
  description: 'Effect applies GPU shader-based rendering to a Rectangle or Poster.'
  robots: index
next:
  description: ''
---

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/effect.tsx#Effect.deck -->

Effect applies GPU shader-based rendering to a Rectangle or Poster

_Available since Roku OS 16.0_

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/components/src/sg-nodes/effect.tsx`. -->

```typescript
import { Effect } from "@roku-sdk/components";
```

## Overview
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/effect.tsx#Effect.intro -->

Hoist it into a `const` and pass that as the `effect` prop on a Rectangle or
Poster to enable rounded corners, borders, and gradient fills. Set
`shaderCompatible` on a Poster that takes one.

Prefer the `<effect>` intrinsic for most uses. The `Effect` wrapper is a pure
passthrough (`<effect {...props} />`) and exists for consistency with the component
library.

## Platform availability
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/components/src/sg-nodes/effect.tsx#Effect.platformAvailability -->

Effects require Roku OS 16.0 or later and the OpenGL graphics backend.
Elsewhere the `effect` prop is ignored without an error and the content renders unstyled. To branch
on it, read `getDeviceInfo()` from `@roku-sdk/rsg-ts/runtime` once:
`Number(info.osVersion.major) >= 16 && info.graphicsPlatform === "opengl"`. The node's own `supported`
field is set when the node is created and cannot be read from TypeScript, and effects disabled by
device configuration are invisible to that check.

## Props
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/effect.props.ts#IEffectProps.props -->

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `borderColor?` | `string` | — | Border stroke color as an RGBA hex string (e.g. `"0xFF0000FF"`). |
| `borderPadding?` | `number` | — | Padding in pixels between the border and the content rect. It changes nothing while `borderWidth` is 0, so it is not content padding. |
| `borderRadius?` | `number \| [number, number, number, number]` | — | Per-corner border radius in pixels. A single number applies a uniform radius to all corners. A four-element tuple sets each corner independently: `[topLeft, topRight, bottomRight, bottomLeft]`. The tuple is one Vector4 field, so a `FloatFieldInterpolator` cannot animate it. |
| `borderWidth?` | `number` | — | Border stroke width in pixels. The border is drawn **outside** the content rect. |
| `gradientAngle?` | `number` | — | Rotation angle of a linear gradient in degrees. The gradient fills the available space from opposite corners. |
| `gradientCentre?` | `Vector2D` | — | Center point of a radial gradient in normalized coordinates. `[0, 0]` = top-left, `[1, 1]` = bottom-right. |
| `gradientColors?` | `string[]` | — | Ordered list of RGBA color stops for the gradient (e.g. `["0xFF0000FF", "0x0000FFFF"]`). At least two colors are required for the gradient to render. Maximum of 8 colors. |
| `gradientFillBorder?` | `boolean` | — | Whether the gradient fills the border area. |
| `gradientFillContent?` | `boolean` | — | Whether the gradient fills the content area (inside the border). |
| `gradientRadius?` | `Vector2D` | — | Radii of the radial gradient ellipse in normalized coordinates. `1.0` equals the rectangle's width or height respectively. |
| `gradientStops?` | `number[]` | — | Normalized stop positions `[0, 1]` corresponding to each entry in `gradientColors`. If omitted, colors are distributed evenly across the gradient. A length mismatch is not reported. |
| `gradientStyle?` | `GradientStyle` | — | Gradient fill style applied over the content area. No gradient renders while this is `"none"`. |

Extends [INodeProps](doc:rsg-sdk-inodeprops) — see the base type page for inherited props.

## Examples
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/components/src/sg-nodes/effect.props.ts#IEffectProps.examples -->

```tsx
// Hoist the effect node to a const — one node, shared by multiple consumers.
// See: rsg-sdk/external/documentation/effects.md § "Hoist the effect into a const"
const framed = <effect borderRadius={24} borderWidth={6} borderColor="0xF39C12FF" borderPadding={2} />;

// The same framed node can be passed to both a rectangle and a poster.

return (
    <layoutGroup layoutDirection="vert" itemSpacings={[12]}>
        <label text="2. Shared" font={SystemFont.Small} width={AREA} />
        <label
            text="One Effect node assigned to both a Rectangle and a Poster. Change it once, both update."
            font={SystemFont.Tiny}
            width={AREA}
            wrap
        />
        <rectangle width={AREA} height={TILE_HEIGHT} color="0x1A1A2EFF" effect={framed} />
        {/* `shaderCompatible` asks for the bitmap to be decoded into a
            shader-usable format. A Poster without it may still show its
            effect depending on the source image, so set it deliberately on
            any Poster that takes one rather than relying on the default. */}
        <poster
            width={AREA}
            height={TILE_HEIGHT}
            loadDisplayMode="scaleToZoom"
            shaderCompatible={true}
            effect={framed}
            uri={photoUri}
        />
    </layoutGroup>
);
```
