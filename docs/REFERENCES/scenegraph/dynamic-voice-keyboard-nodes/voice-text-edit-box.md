---
title: "VoiceTextEditBox"
excerpt: 'Text edit box node with voice dictation and configurable entry modes'
deprecated: false
hidden: false
metadata:
  title: 'VoiceTextEditBox'
  description: 'VoiceTextEditBox extends TextEditBox with voice entry functionality, exposing voiceEnabled, voiceEntryType, isDictating, and voiceInputRegexFilter fields.'
  robots: index
next:
  description: ''
---




Extends [TextEditBox](doc:texteditbox)

The **VoiceTextEditBox** node is similar to the [legacy **TextEditBox** node](doc:texteditbox), but with additional voice entry functionality. Only one voice-enabled **VoiceTextEditBox** node may be on the screen at a time. If another VoiceTextEditBox is rendered on the screen, its voice functionality is disabled implicitly. 

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>voiceEnabled</td>
<td>boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Enables the text box to be voice-enabled. In this case, it will display a mic icon and have a voice UI with voice hints.</td>
</tr>
<tr>
<td>voiceToolTipWidth</td>
<td>float</td>
<td>FHD: 321HD: 214</td>
<td>READ_WRITE</td>
<td>The maximum width of the voice hint tooltip. The height scales based on the specified width.</td>
</tr>
<tr>
<td>voiceEntryType</td>
<td>string</td>
<td>"generic"</td>
<td>READ_WRITE</td>
<td>The type of voice entry mode to be used: <br /><ul><li>"email": letter-by-letter dictation for emails.</li><li>"numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.</li><li>"alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.</li><li>"generic": Full word input for search queries or other sequences of numbers, letters and symbols.</li><li>"password": letter-by-letter dication for passwords.</li></ul></td>
</tr>
<tr>
<td>isDictating</td>
<td>boolean</td>
<td>false</td>
<td>READ-ONLY</td>
<td>Checks whether the user is currently dictating to the keyboard.</td>
</tr>
<tr>
<td>voiceInputRegexFilter</td>
<td>string</td>
<td>""</td>
<td>WRITE-ONLY</td>
<td>Specify which characters may or may not be entered on the keyboard via dictation. For example, setting this field to "^[A-Za-z0-9_-]*$" prevents any special characters from being entered.</td>
</tr>
</tbody>
</table>

