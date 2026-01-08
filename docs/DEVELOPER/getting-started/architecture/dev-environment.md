---
title: "Development environment overview"
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

# Development environment overview

## Architectural overview

![roku815px - Architecture block diagram](https://image.roku.com/ZHZscHItMTc2/devenvironmentarchoverview.png "devenvironmentarchoverview")


The diagram above provides a high-level overview of the main system
components for the Roku Streaming Player platform. Developer
applications are written using the BrightScript programming language.
These applications are designed to be standalone entities that can be
deployed to a running system with minimal impact.

BrightScript applications are dynamically loaded at runtime and run
within a unique context within the BrightScript virtual machine. They
are "sand-boxed" and run protected from other areas of the system.
Scripts only have access to platform resources that are exposed to the
scripting layer as BrightScript components. Developers have a wide
selection of built-in elements from the BrightScript programming
language, plus additional platform components to build their
applications. See the BrightScript Reference and the Component Reference
for additional information.

## User interface elements/Object model

The Roku SDK uses the BrightScript programming language for development
and exposes a set of interfaces to platform services through
BrightScript Components. These platform SDK services include
capabilities such as networking, video playback, user interface, and
data management. The objects in the Roku SDK are divided into two
primary areas:

  - Core Objects – Fundamental objects that exist on all Roku platforms
    and are device independent
  - Platform Objects – Objects unique to a specific platform, such as
    the Roku Streaming Player

Developing an application for the Roku Streaming Player consists of
writing a BrightScript application, packaging the application and
associated resource files and deploying it to the platform. During
development packaging consists of a structured ZIP file. For final
deployment, tools are provided to create a signed and encrypted
application package. At runtime, the player will enumerate the installed
applications and display them on the main menu. When the user selects
the application, the script(s) are loaded and control is passed to your
application. When the user exits, the script is halted and control is
returned to the user interface "shell".

User interface functionality available in the SDK includes:

  - Top-Level Menu (Launch screen for applications with logo art)
  - Poster Screen (Horizontally scrolling list of shows with poster art)
  - Springboard (Detail screen with options for displaying individual shows)
  - Video Player Screen (Video playback support with progress bar and trick mode support)
  - PIN Entry Screen (User entry of PIN for purchase/rental verification)
  - Message/Error Dialog (Dialog for display of errors and other user messages)
  - Filter Widget (Selection widget for filtering content display by type)
  - Rendezvous/Code Registration Screen (Display/validate registration codes)
  - Username/Password Registration Screen
  - Text Screen ( Display formatted text to the user and allow selection of options)
  - Search Screen (Keyword based search with progressive disclosure of results)

Detailed information on all these screens can be found in
the [BrightScript Component reference](/docs/references/brightscript/language/component-architecture.md).

## Display modes (HD/SD)

The user interface has been designed to support both High Definition
(HD) and Standard Definition (SD) displays. By default the streaming
player starts in SD mode, but allows the user the option to specify
their display preferences. Display preferences are handled globally for
all applications by selecting the "display type" option in
"settings".   

There are three possible modes:

  - 4:3 standard-definition (480i/p)
  - 16:9 anamorphic widescreen (480i/p)
  - HDTV (720p)

The SDK UI objects are SD/HD aware and will automatically display in the
correct mode. In some cases, the HD mode will allow the user to see more
data on the screen. The SD UI is rendered natively at 480p and the HD UI
at 720p. As a developer, no special programming is required to support
these display modes. Any artwork used by the application (movie posters,
logos, etc.) should be provided in both HD and SD versions and included
with the application or downloaded dynamically at runtime. The screen
objects will attempt to scale improperly sized artwork, but this could
result in a loss of quality or degrade performance. It is strongly
recommended that developers provide original artwork in both
resolutions.

## Top-level menu

The top-level menu provides a launch point for all applications.
Applications must provide HD and SD versions of the application icon
artwork for display on the top-level menu. When an application is
selected from the top-level menu, the application is loaded and control
is transferred to the application. The user may return to the top level
at any time by pressing the Home button. Pressing the Home button will
always exit the application and unconditionally return control back to
the UI application shell.

## Entry points

There are several reserved function names that serve as entry points to
the app.

### Sub RunUserInterface()

#### Sub RunUserInterface(aa as Object)

RunUserInterface is the normal entry point which is called when a
app is selected on the Roku Home Screen.  It may take an
roAssociativeArray parameter that is passed via the External Control
APIs.

### Sub Main()

#### Sub Main(aa as Object)

If there is no RunUserInterface() function in the application, the
function Main() will be called as the entry point for the application.

### "Source" parameter

The Main(aa) and RunUserInterface(aa) associative array contains the
"source" named parameter. Its value represents the path the app was
launched from. The values and their meanings are in the table
below.


| Value of "Source"                                    | Launched from                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| "homescreen"                                         | "home" section of the main Roku app selection page       |
| "homescreen-menu"                                    | Launched from a left-hand menu other than Featured Free or Roku Search |
| "ad"                                                 | Banner ads (for example, a home screen ad, mini ad, or screensaver ad) |
| "ad:screensaver" | Roku screensaver ad. This is an ad that is displayed within the Roku system screensaver. |
| "ad:homelist"    | Roku mini ad. This is an ad that appears below the left-hand navigation menu on the home screen. |
| "external-control"                                   | ECP protocol (typically from the Deep Link tester or Roku mobile app) |
| "partner-button"                                     | partner button on the Roku remote                            |
| "other-channel"                                      | another app on the Roku device                           |
| "auto-run-dev"                                       | sideloaded developer app                                 |
| "debug-server"                                       | debug server on port 8080.                                   |
| "purchase-dialog"                                    | Purchase dialog in the Streaming Store                         |
| "hs-search"                                          | Roku Search                                                  |
| "voice-search"                                       | Roku Voice search command ([Visual Search Results For Roku Voice](/docs/features/engagement/roku-search.md#visual-search-results-for-roku-voice); for example, "Weird") |
| "voice-command"                                      | Roku Voice command ([Direct-to-Play](/docs/features/voice/overview.md#direct-to-play); for example, "Play Weird") |
| "dial"                                               | DIAL protocol                                                |
| "hs-d"                                               | launched from Featured Free page                             |
| "channel-store"                                      | Tile for app or associated content selected from Streaming Store. |


### "lastExitOrTerminationReason" parameter

Roku OS tracks the last exit code for each app. The last exit code is passed to the **main()** function of a running app in the **lastExitOrTerminationReason** field of the **parameters** associative array.

Exit codes do not persist across system reboots and system resumptions. The last exit code is reset to **EXIT_UNKNOWN** upon each app launch.

> The Roku OS may add additional exit codes in the future. Any code or tooling that processes exit codes should handle unrecognized codes robustly.

| Exit Code                  | Description                                                  |
| :------------------------- | :----------------------------------------------------------- |
| EXIT_UNKNOWN               | The default exit code if there was no prior exit (for example, the inital app launch after system boot) or no unusual exit reason noted (for example, a scenario other than a BrightScript crash or system resources issue). |
| EXIT_POWER_MODE            | The app was exited by the system due to the device being powered off by the user (or by user-scheduled power off). |
| EXIT_DIAL_DELETE           | The app was exited due to the system receiving a DIAL command (for example from a second screen app controlling the app). |
| EXIT_OUT_OF_MEMORY         | The app was exited due to the system being under low memory conditions. |
| EXIT_IDLE_AUTO_EXIT        | The app was exited by the system after being detected as idle for a prolonged period of time, per the system policy and/or user settings. |
| EXIT_BRIGHTSCRIPT_CRASH    | The app was exited due to a BrightScript crash.              |
| EXIT_BRIGHTSCRIPT_STOP     | The app was exited due to a BrightScript STOP command when running in production mode (non-developer sideloaded). The system treats this the same as a BrightScript runtime error. |
| EXIT_BRIGHTSCRIPT_UNK_FUNC | The app was exited by the system due to an runtime function resolution error. |
| EXIT_BRIGHTSCRIPT_TIMEOUT  | The app was exited due to a BrightScript execution timeout error. A timeout error indicates that the app user interface was unresponsive for a prolonged period of time, such as a program lock-up. |
| EXIT_USER_KILL             | The app was exited due to either due to user shutdown (for example, from App Options) or by the system due to re-installation, re-configuration, or other shutdown. |
| EXIT_USER_NAV              | The app was exited by user navigation (such as the Home key or using Back to exit the app). |
| EXIT_AM_LOWRESOURCE        | The app was exited by the system due to low system resources. This typically applies to background apps only. |
| EXIT_SYSTEM_KILL           | A default exit code used in case of internal system error during app exit. This should not appear in normal usage. |
| EXIT_GRAPHICS_NOT_RELEASED | A system error occurred while suspending an app related to system graphics resources. This should not appear in normal usage. |
| EXIT_DECODER_NOT_RELEASED  | A system error occurred while suspending an app related to system video resources. This should not appear in normal usage. |
| EXIT_RUNNING_AFTER_SUSPEND | A system error occurred while suspending an app. This should not appear in normal usage. |
| EXIT_NOT_RESUMED           | A system error occurred while resuming an app. This should not appear in normal usage. |
| EXIT_SIGNAL_TIMEOUT        | A system error occurred while suspending or resuming an app. This should not appear in normal usage. |
| EXIT_APP_ERROR             | A default exit code used in case of internal system error in app tracking. This should not appear in normal usage. |
| EXIT_UNLOADED              | The app was exited due to the system offloading it due to low storage. This would typically apply only to background apps. |
| EXIT_GUEST_MODE_ENABLED    | The app was exited by the system due to the user enabling Guest Mode on the device. |
| EXIT_GUEST_MODE_DISABLED   | The app was exited by the system due to the user disabling Guest Mode on the device. |
| EXIT_GUEST_CHECKOUT        | The app was exited by the system due to the user exiting Guest Mode on the device. |
| EXIT_OS_UPDATE             | The app was exited by the system while applying a system update. |
| EXIT_CHANNEL_UPDATE        | The app was exited by the system while applying an app update. |
| EXIT_CHANNEL_SIDELOAD      | The app was exited due to the user installing a sideloaded app. |
| EXIT_CHANNEL_RESTART       | The app was exited due to an app-initiated restart. This is typically a reserved function in the system. |
| EXIT_TILE_HIDDEN           | The app was exited due to the user hiding the Soundbar tile on a Roku TV. |
| EXIT_SETTINGS_UPDATE       | The app was exited by the system due to a device settings update (for exampe, a theme or resolution change that required restart). |
| EXIT_CHANNEL_MEM_LIMIT_FG  | The app was exited by the system because it exceeded its memory limit while running in the foreground. |
| EXIT_CHANNEL_MEM_LIMIT_BG  | The app was exited by the system because it exceeded its memory limit while running in the background. |
| EXIT_ADDON_DEPENDENCY      | The app was exited by the system while applying a system dependency update. This should only apply while running in the background. |
| EXIT_SOFTFAIL              | The app was exited by the system because of an incompatibility with the runtime environment. In this case, the system may restart the app automatically after resolving the issue. |

### Sub RunScreenSaver()

RunScreenSaver is called to launch a [screensaver](/docs/developer-program/media-playback/screensavers.md) when the Roku has been idle for
the configured idle time. The screensaver to launch is selected by the
user on the Screensaver settings page. The Roku box may not start the
custom screensaver and will use a default screensaver instead if there
is insufficient memory to start a screensaver.

### Sub RunScreenSaverSettings()

RunScreenSaverSettings is called when the user selects “Custom Settings”
on the Screensaver settings page.

## User interaction/events

Roku SDK UI objects provide an event oriented model for user
interaction. Instead of receiving and directly handling all of the IR
events received by the application, the UI elements will handle all
navigation commands directly and send higher level events to the script
as the focus changes or the user makes a selection. Scrolling, trick
modes and screen-to-screen navigation is handled by the SDK UI objects
and the script generally only needs to interact when there is a change
in context or the user highlights or selects new data elements. Refer to
the Event Loops section or the Class Interface sections for additional
information.

## Customization

The objects in the user interface framework expose a set of screen types
which standardize user interaction and make it easy for developers to
quickly write and deploy applications. Screen types enforce a user
interaction model and ensure consistency between applications. They may
be customized to provide a unique, developer specific look-and-feel.
Customization is currently focused on "re-skinning" the application and
supports the following types of changes:

  - Add an application specific image to the top-level menu
  - Change the text to be displayed on the main menu to identify the application
  - Change the application logo to be displayed in the header area for the screen
  - Change the artwork used on the "overhang" or header area for the screen
  - Change the background color for the screen
  - Change the colors used for font rendering on text, buttons, and screens

Within the application the developer is free to combine the available
screen types and controls as needed to implement their application. The
hierarchy of screens is unique for an application and depends on the
user experience desired. Some applications may be fairly "flat" while
others may have a deeper hierarchy.