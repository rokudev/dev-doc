---
title: "Text to speech"
excerpt: 'Add audible spoken output to your app using the TTS components and screen reader behaviors'
deprecated: false
hidden: false
metadata:
  title: 'Text to speech | Roku Developer Docs'
  description: 'Use text to speech (TTS) in your app to provide audible spoken versions of UI strings, supporting different languages, voices, rates of speech, and volume.'
  robots: index
next:
  description: ''
---


> This feature is only available on the following devices: Roku
Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku
Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku
TV running [Roku OS 7.2](doc:release-notes#roku-os-7-2) and later.

-----

## Text to speech components

*Components available since [Roku OS 7.2](doc:release-notes#roku-os-7-2)*

Text to speech (TTS) allows the developer to provide an audible spoken version of
the strings shown to the user in the app. For platforms that
are required to comply with the [FCC Communications and Video Accessibility Act of 2010 (CVAA)](https://www.fcc.gov/consumers/guides/21st-century-communications-and-video-accessibility-act-cvaa),
this capability can be used as part of compliance with CVAA, and the
current text to speech flite\_tts library is built into the image. The
Roku text to speech capability supports different languages, voices,
rates of speech, volume of speech, and other aspects of text to speech.
Roku provides text to speech support in the following components,
interfaces, and events:

  - [roTextToSpeech](doc:rotexttospeech)
  - [ifTextToSpeech](doc:iftexttospeech)
  - [roTextToSpeechEvent](doc:rotexttospeechevent)

Components available since [Roku OS 7.5](doc:release-notes#roku-os-7-5)

  - [roAudioGuide](doc:roaudioguide)
  - [ifAudioGuide](doc:ifaudioguide)

## Screen reader behavior for SceneGraph nodes

  - **[ArrayGrid](doc:arraygrid)**: speaks focused item ([ContentMetaData::TITLE](doc:content-metadata)), followed by navigation hint, then ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any).


  - **[Button](doc:button)**: text of button is spoken only if focused


  - **[ButtonGroup](doc:buttongroup)**: speaks focused [Button](doc:button), followed
    by navigation hint (“button 1 of 4”), followed by button-specific hint, if any (Button-specific hint is spoken only for StarRatingButton).


  - **[CheckList](doc:checklist)**:
    speaks focused item (ContentMetaData::AUDIO\_GUIDE\_TEXT if any;
    otherwise
    [ContentMetaData::TITLE](doc:content-metadata))
    followed by navigation hint (“checkbox, checked, 1 of 4”)


  - **[Dialog](doc:dialog)**:
    speaks `title`, `message`, and `bulletText` (if any), then reads focused button


  - **[Keyboard](doc:keyboard)**:
    speaks hint about caps lock toggling (once), then speaks focused key


  - **[KeyboardDialog](doc:standard-keyboard-dialog)**:
    speaks title, then keyboard


  - **[Label](doc:label)**:
    speaks `text` field


  - **[LabelList](doc:labellist)**:
    speaks focused ContentMetaData::AUDIO\_GUIDE\_TEXT if any; otherwise speaks
    [ContentMetaData::TITLE](doc:content-metadata), followed by navigation hint.


  - **[MarkupGrid](doc:markupgrid)**:
    speaks focused ContentMetaData::AUDIO\_GUIDE\_TEXT if any; otherwise speaks [ContentMetaData::TITLE](doc:content-metadata), followed by navigation hint, then
    ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any), then MEDIA speech (see below)


  - **[MarkupList](doc:markuplist)**: speaks focused item
    ([ContentMetaData::TITLE](doc:content-metadata)), followed by navigation hint, then ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any).


  - **[MiniKeyboard](doc:minikeyboard)**:
    speaks focused key


  - **[PinDialog](doc:standard-pinpad-dialog)**:
    speaks dialog title, whether in key pad, then focused key or button


  - **[PinPad](doc:pinpad)**:
    speaks focused key


  - **[Poster](doc:poster)**: if focused, speaks `audioGuideText` field (if set)


  - **[PosterGrid](doc:postergrid)**:
    speaks focused item
    ([ContentMetaData::TITLE](doc:content-metadata)), followed by navigation hint.


  - **[ProgressDialog](doc:progressdialog)**:
    speaks dialog `title`, `message`, and `bulletText` every 15
    seconds. Speaks focused button if there is
    any.


  - **[RadioButtonList](doc:radiobuttonlist)**:
    speaks focused item (ContentMetaData::AUDIO\_GUIDE\_TEXT if  any;
    otherwise, ContentMetaData::TITLE), followed by navigation and
    selection
    hint


  - **RenderableNode**:
    if speaking focused item (depends on context), will speak focused
    descendant; otherwise, will speak all descendants


  - **[RowList](doc:rowlist)**:
    speaks row label (when row becomes focused), then speaks focused
    **[PosterGrid](doc:postergrid)**
    or
    **[MarkupGrid](doc:markupgrid)**
    (MarkupGrid is used if itemComponentName is
    non-empty)


  - **[ScrollableText](doc:scrollabletext)**:
    speaks `text`
    field


  - **[ScrollingLabel](doc:scrollinglabel)**:
    speaks `text` field


  - **[Video](doc:video)**:  speaks
    HUD if displayed by user

**Screen reader behavior for built-in SceneGraph panels and scenes:**

  - **[GridPanel](doc:gridpanel)**:
     speaks panel, then **leftLabel**


  - **[ListPanel](doc:listpanel)**:
     speaks panel, then **leftLabel**


  - **[PanelSet](doc:panelset)**:
      - If left panel is focused, speaks focused left panel, then
        unfocused right panel (if any)
      - If right panel is focused, speaks unfocused left panel, then
        focused right panel
      - If no panel is focused, speaks unfocused left panel, then
        unfocused right panel (if
        any)


  - **[OverhangPanelSetScene](doc:overhangpanelsetscene)**:
    uses
    **[Overhang](doc:overhang)**
    title when speaking location


  - **[Scene](doc:scene)**: speaks
    dialog (if any); otherwise speaks
    [PanelSet](doc:panelset) (if
    any); otherwise speaks as
    RenderableNode

**MEDIA speech is spoken in the following order:**

  - [ContentMetaData::TEXT](doc:content-metadata)
  - [ContentMetaData::DESCRIPTION](doc:content-metadata)
  - [ContentMetaData::DIRECTORS](doc:content-metadata)
  - [ContentMetaData::PRODUCERS](doc:content-metadata)
  - [ContentMetaData::ACTORS](doc:content-metadata)

 **There is no additional speech for the following nodes (they will behave the same as RenderableNode):**

  - [BifDisplay](doc:video)
  - [BusySpinner](doc:busyspinner)
  - [LayoutGroup](doc:layoutgroup)
  - [Overhang](doc:overhang)
  - [Panel](doc:panel)
  - [ProgressBar](doc:video)
  - [Rectangle](doc:rectangle)
  - [TextEditBox](doc:texteditbox)
  - [TrickPlayBar](doc:video)

## Implementation tips

### TTS interruptions

Many UI elements have default TTS behavior. It is possible that
speech triggered by these implementations can interrupt your TTS
implementation at times. You should keep track of the IDs of your TTS
utterances, as returned by say() and silence(), and handle interruptions
accordingly.

### Other TTS implementation changes

Other TTS implementations may change the current voice, the current
language, the current volume, the current pitch, and/or the current
speech rate. You should keep track of how these parameters might change.

### Long text delays

A long text string to be spoken by TTS may have a noticeable delay
before starting the speech, at least for the first speech of the long
string. For long text strings, you can break up the text string so that
the first speech is a reasonably short sentence, followed by longer
sentences as needed. You should not break up the long text string into
individual words, as it will affect phrasing without improving the
perceived delay in any noticeable way.