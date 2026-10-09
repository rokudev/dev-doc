---
title: 'Device info'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'Device info'
  description: 'Static device properties and dynamic methods exposed by getDeviceInfo().'
  robots: index
next:
  description: ''
---

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info.ts#DeviceInfoStatic.deck -->

Static device properties and dynamic methods exposed by `getDeviceInfo()`

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/runtime/src/device-info.ts`. -->

```typescript
import {
    getDeviceInfo,
    useUiResolution,
    useDeviceInfoEvents,
} from "@roku-sdk/rsg-ts/runtime";
```

## Access
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info.ts#getDeviceInfo.signature -->

**Getter (synchronous):**

```typescript
getDeviceInfo(): DeviceInfoStatic | null
```

<!-- src: rsg-sdk/external/packages/runtime/src/device-info.ts#getDeviceInfo.description -->

Returns a snapshot of static device properties and dynamic methods.

Each call returns a fresh object — safe to destructure and pass around.
Static properties (model, locale, OS version, etc.) reflect the device state
at call time and do not update reactively. For event-driven data (UI resolution
changes, screensaver events, network status), use the dedicated hooks instead:
`useUiResolution()`, `useDeviceInfoEvents()`.

Returns `null` if the DeviceInfo runtime singleton is unavailable. The singleton
lookup result, including `null`, is cached for the app's lifetime.

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useUiResolution.signature -->

**Hook (reactive): `useUiResolution`**

```typescript
useUiResolution(): { uiResolution: Accessor<UIResolution | null> }
```

<!-- src: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useUiResolution.description -->

Hook that delivers the device's current UI resolution once, at registration.
Resolution-change notifications are not supported yet and will be available
in a future OS build.

Returns an object with a `uiResolution` signal that holds a [UIResolution](doc:rsg-sdk-device-info#uiresolution)
value delivered synchronously when the handler is registered.

### Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useUiResolution.example -->

```tsx
const { uiResolution } = useUiResolution();
// The resolution is delivered once, synchronously at registration.
// Resolution-change notifications will come in a future OS build.
// { name: "FHD", res: "fhd", width: 1920, height: 1080 }
```

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useDeviceInfoEvents.signature -->

**Hook (reactive): `useDeviceInfoEvents`**

```typescript
useDeviceInfoEvents(): { internetStatus: Accessor<number>; linkStatus: Accessor<number>; lowGeneralMemory: Accessor<string | null>; screensaverExited: Accessor<number> }
```

<!-- src: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useDeviceInfoEvents.description -->

Reactive hook that subscribes to device-level events: screensaver exit,
network link status, low-memory warnings, and internet connectivity changes.

Each signal is a counter or nullable value that updates whenever the
corresponding OS event fires. Use inside a SolidJS reactive context
(component function or `createEffect`) to drive UI state.

<!-- src: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useDeviceInfoEvents.returns -->

An object with reactive signals:
- `screensaverExited`: increments each time the screensaver exits.
- `linkStatus`: increments each time the network link status changes.
- `lowGeneralMemory`: `"NORMAL" | "LOW" | "CRITICAL" | "UNKNOWN"`, or `null` before the first callback.
  The runtime calls the handler with `"NORMAL"` immediately on registration.
- `internetStatus`: increments each time internet connectivity changes.

### Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info-events.ts#useDeviceInfoEvents.example -->

```tsx
const { screensaverExited, linkStatus, lowGeneralMemory, internetStatus } = useDeviceInfoEvents();
// screensaverExited() — counter, increments on each exit
// linkStatus()        — counter, increments on each link change
// lowGeneralMemory()  — "NORMAL" | "LOW" | "CRITICAL" | "UNKNOWN" | null
// internetStatus()    — counter, increments on each connectivity change
```

## Methods
<!-- generator-heading -->

### getRandomUUID
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#DeviceInfo.getRandomUUID.signature -->

```typescript
getRandomUUID(): string
```

#### Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#DeviceInfo.getRandomUUID.description -->

Returns a randomly generated UUID (version 4).

Each call produces a new unique identifier. Use for correlation IDs,
session tokens, or any purpose requiring a unique string that does not
need to be persisted across sessions.

#### Return values
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#DeviceInfo.getRandomUUID.returns -->

A version 4 UUID string, e.g. `"f47ac10b-58cc-4372-a567-0e02b2c3d479"`.

#### Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#DeviceInfo.getRandomUUID.example -->

```tsx
// Returns a version 4 UUID string on each call, e.g. "f47ac10b-58cc-4372-a567-0e02b2c3d479"
const randomUUID = info?.getRandomUUID() ?? "(not available)";
```

## Events
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info.ts#events -->

| Event | Description |
| :--- | :--- |
| `uiResolution` | Delivered once at registration. Resolution-change notifications are not supported yet and will come in a future OS build. Subscribe via `useUiResolution()`. |
| `screensaverExited` | increments each time the screensaver exits. |
| `linkStatus` | increments each time the network link status changes. |
| `lowGeneralMemory` | `"NORMAL" | "LOW" | "CRITICAL" | "UNKNOWN"`, or `null` before the first callback. The runtime calls the handler with `"NORMAL"` immediately on registration. |
| `internetStatus` | increments each time internet connectivity changes. |

## Types
<!-- generator-heading -->

### DeviceInfoStatic
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/runtime/src/device-info.ts#DeviceInfoStatic.description -->

Static device properties and dynamic methods exposed by `getDeviceInfo()`.

This type is the subset of `DeviceInfo` that is safe to cache and pass around:
it includes all static properties (model, locale, OS version, etc.) and the
`getRandomUUID()` method, but excludes the event-handler setters — use the
corresponding hooks (`useUiResolution`, `useDeviceInfoEvents`) for reactive data.

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info.ts#DeviceInfoStatic.table -->

| Property | Type | Description |
| :--- | :--- | :--- |
| `apiVersion` | `number` | Version of the DeviceInfo runtime API (currently `0`). |
| `channelClientId` | `string` | A UUID identifying this device for this channel. Changes if the account is relinked or in auto-sign-out (guest) mode. |
| `currentLocale` | `string` | Active locale string combining language and region (e.g. `"en_US"`, `"fr_FR"`). |
| `graphicsPlatform` | `GraphicsPlatformType` | GPU/graphics backend identifier. `"opengl"` — modern GL-based rendering pipeline (most devices); `"directfb"` — legacy DirectFB pipeline (older low-end devices) |
| `isAutoSignOutMode` | `boolean` | `true` when the device is in auto-sign-out mode (shared/public device). |
| `isRidaDisabled` | `boolean` | `true` when the user has enabled **Limit ad tracking**. When true, `rida` returns a temporary ID. |
| `model` | `string` | Model identifier string (e.g. `"4670X"`). |
| `modelDetails` | `object` | Additional model metadata. Shape varies by device. |
| `modelDisplayName` | `string` | Human-readable model name (e.g. `"Roku Express 4K+"`). |
| `modelType` | `string` | Device class: `"STB"` for streaming sticks and boxes, `"TV"` for Roku TVs. |
| `osVersion` | `OsVersion` | Parsed Roku OS version object. Use `osVersion.major` and `osVersion.minor` for comparisons. |
| `rida` | `string` | Roku ID for Advertisers (UUID). Used for ad targeting and measurement. May be a random temporary ID if the user has enabled **Limit ad tracking**. |
| `timezone` | `string` | Device timezone string (e.g. `"US/Eastern"`, `"Europe/London"`). |
| `userCountryCode` | `string` | Channel-store territory, usually an ISO 3166-1 alpha-2 code (e.g. `"US"`). May instead be `"OT"` or a partner-store identifier. Defaults to `"US"` on unlinked devices without a configured territory (product locale/country defaults may override this). This is not the user's address country or physical location.  For account country, use the ChannelStore `getUserData` command and its `IUserData.country` result (`@roku-sdk/components`), not this field. BrightScript exposes this through `GetUserRegionData`. |
| `videoMode` | `string` | Current video output mode string (e.g. `"1080p"`, `"2160p60"`, `"2160p60b10"`). |

### OsVersion
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#OsVersion.description -->

Roku OS version components returned by `DeviceInfo.osVersion`.

<!-- derived: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#OsVersion.table -->

| Property | Type | Description |
| :--- | :--- | :--- |
| `build` | `string` | Build identifier string. |
| `major` | `string` | Major version number as a numeric string (e.g. `"16"`). |
| `minor` | `string` | Minor version number as a numeric string (e.g. `"0"`). |
| `revision` | `string` | Revision number as a numeric string. |

### UIResolution
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/runtime/src/device-info-events.ts#UIResolution.description -->

Normalized UI resolution delivered by `useUiResolution()`.

Contains the OS resolution name, a normalized two-value `res` string for
app logic, and the display dimensions in pixels.

<!-- derived: rsg-sdk/external/packages/runtime/src/device-info-events.ts#UIResolution.table -->

| Property | Type | Description |
| :--- | :--- | :--- |
| `height` | `number` | Pixel height of the display surface. |
| `name` | `"HD" \| "FHD" \| "SD" \| "UNKNOWN"` | Raw resolution name from OS: "HD", "FHD", "SD", or "UNKNOWN" |
| `res` | `"hd" \| "fhd"` | Normalized resolution for app use: only "hd" or "fhd". SD/UNKNOWN default to "fhd". Apps should not support SD mode. Resolution is known within one tick of app start. |
| `width` | `number` | Pixel width of the display surface. |

### UIResolutionRaw
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#UIResolutionRaw.description -->

Raw UI resolution event payload from the Roku OS runtime.

<!-- derived: rsg-sdk/external/packages/interfaces/src/runtime/device-info.ts#UIResolutionRaw.table -->

| Property | Type | Description |
| :--- | :--- | :--- |
| `height` | `number` | Pixel height of the UI surface. |
| `name` | `number` | Raw resolution integer identifier from the OS. |
| `width` | `number` | Pixel width of the UI surface. |
