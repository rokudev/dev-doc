---
title: "roMicrophone"
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---





The roMicrophone API allows apps to receive audio data from the user’s microphone-supported remote control device or mobile phone. When a user initiates recording on their remote control device or mobile phone (via the Roku Mobile App) for the first time within the application, the application will request the user’s permission for the application to access the microphone by displaying a UI dialog box.

The application will only receive microphone access if the permission is granted by the user.

![roku815px - microphone-access](https://image.roku.com/ZHZscHItMTc2/microphone-access.jpg "microphone-access")

After the permission is granted, whenever a user activates the microphone, the application will display a notice informing the user that the microphone is currently being used by the application.

From the settings menu (Settings > Privacy > Microphone), the user can revoke microphone permissions from individual applications, at which time the particular application will not be able to access the microphone unless the user re-enables microphone permissions.

From the settings menu, the user may also:

- (a) enable universal microphone access permissions for all applications (thereby eliminating the need to request microphone permission on an application by application basis), and
- (b) prohibit all applications from accessing the microphone.

![roku815px - microphone-setting](https://image.roku.com/ZHZscHItMTc2/microphone-setting.jpg "microphone-setting")

When integrating the roMicrophone API, you acknowledge and agree to the following:

- (i) that you will notify your users of your collection, use, and disclosure of any voice recordings or other derived data that you receive through the roMicrophone API;
- (ii) you will not modify, circumvent, obscure, or otherwise diminish the notices provided by the roMicrophone API to users when they activate or enable microphone recording from their remote control device or mobile phone;
- (iii) you will not collect any information from, or otherwise activate, the microphone on any remote control device or mobile phone using the roMicrophone API feature without receiving the requisite permissions from the user;
- (iv) you have and will maintain a legally adequate privacy policy;
- (v) you have and will maintain all necessary rights and consents from users to use the roMicrophone API features; and
- (vi) your use of the roMicrophone API features will comply with all applicable laws, rules, and regulations.

YOU FURTHER AGREE YOU WILL NOT USE THE roMicrophone API AND FEATURES IN CONNECTION WITH CONTENT OR APPS DIRECTED TOWARD CHILDREN OR IN CONNECTION WITH USERS KNOWN TO BE CHILDREN. If Roku discovers or determines that you are using the roMicrophone API and features in connection with content or apps directed toward children or with users known to be children, Roku reserves the right to disable or otherwise limit your access to the roMicrophone API feature and related functionality.

YOU MAY NOT ENABLE THE roMicrophone API FEATURES IF YOU DO NOT AGREE TO ABOVE. PLEASE CONTACT ROKU FOR FURTHER INFORMATION.
Implementation

The application should display a focusable button or indicator in the UI that the user selects by pressing and holding the OK button. In response to the OK press event, the application can call:

- [StartRecording(\)](/docs/references/brightscript/interfaces/ifmicrophone.md "StartRecording") - to receive streamed audio data from the microphone asynchronously or
- [RecordToFile(\)](/docs/references/brightscript/interfaces/ifmicrophone.md "RecordToFile()") - to have the audio data directly captured to a WAV format output file.

>Roku OS will display a HUD to let the user initially consent to be recorded and to subsequently be informed when the microphone is being used. Recording is performed as long as the user holds down the OK button, or until a limit is reached or if an error should occur.

## Supported interfaces

- [ifMicrophone](/docs/references/brightscript/interfaces/ifmicrophone.md "ifMicrophone")
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")


## Supported events

- [roMicrophoneEvent](/docs/references/brightscript/events/romicrophoneevent.md "roMicrophoneEvent")
