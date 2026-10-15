---
title: 'useVoiceDictation'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: 'useVoiceDictation'
  description: 'Hook for reactive roVoiceDictation events.'
  robots: index
next:
  description: ''
  pages:
    - slug: rsg-sdk-runtime-types
      title: 'Runtime types'
      type: basic
---

<!-- derived: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#useVoiceDictation.deck -->

Hook for reactive `roVoiceDictation` events

<!-- ⚠️ This page is generated — edit the source JSDoc in `rsg-sdk/external/packages/runtime/src/voice-dictation.ts`. -->

```typescript
import { useVoiceDictation } from "@roku-sdk/runtime/voice-dictation";
```

<!-- derived: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#useVoiceDictation.signature -->

```typescript
useVoiceDictation(): VoiceDictationHook
```

## Description
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#useVoiceDictation.description -->

Hook for reactive `roVoiceDictation` events.

`roVoiceDictation` is a control surface only (see [getVoiceDictation](doc:rsg-sdk-getvoicedictation));
recognized text and lifecycle phases are delivered through the Input runtime
API. This hook hides that wiring: it subscribes to [useInput](doc:rsg-sdk-useinput) internally
and exposes a single `dictationParams` signal filtered to
`command: "dictation"` events.

Firmware routes recognized dictation through the voice input handler, so that
is the app this hook watches.

Each dictation event — every phase, `start` / `text` / `end` — is acknowledged
with `updateVoiceInputStatus({ status: "success" })` as soon as it arrives;
firmware blocks up to 5s per event until the app responds (equivalent to
`roInput.EventResponse`). The ack goes out first and `dictationParams` is
published on a microtask, so no app code reacting to the signal can eat into
that budget. Voice events for other commands are left alone for whoever owns
them to answer.

After an `end` event is published the signal returns to `null`, so a consumer
that mounts or re-runs later sees "no session" rather than a stale `end`.

## Return values
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#useVoiceDictation.returns -->

[VoiceDictationHook](doc:rsg-sdk-usevoicedictation#voicedictationhook) with a reactive `dictationParams` accessor.

## Example
<!-- generator-heading -->

<!-- derived: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#useVoiceDictation.example -->

```ts
const { dictationParams } = useVoiceDictation();

createEffect(() => {
    const params = dictationParams();
    if (!params) return;
    switch (params.dictation_event) {
        case DictationEvent.Start: // listening started
        case DictationEvent.Text:  // params.text has recognized text
        case DictationEvent.End:   // dictation ended
    }
});
```

## Types
<!-- generator-heading -->

### VoiceDictationHook
<!-- generator-heading -->

<!-- src: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#VoiceDictationHook.description -->

Return type for the [useVoiceDictation](doc:rsg-sdk-usevoicedictation) hook.

<!-- derived: rsg-sdk/external/packages/runtime/src/voice-dictation.ts#VoiceDictationHook.table -->

```typescript
type VoiceDictationHook = unknown;
```
