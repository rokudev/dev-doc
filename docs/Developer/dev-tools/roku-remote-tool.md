# Roku Remote Tool

The Roku Remote Tool provides developers a quick and intuitive way to create reusable scripts for ad-hoc testing of their app. This ensures a high-quality end-user experience and efficient use of developer resources. Developers can use the Roku Remote Tool to do the following:

- Automatically log-in or log-out of an app that requires it
- Build up a library of test scripts over time, to make for quicker certification and regression testing
- Exercise a feature of your specific application (stress testing)
- Generate scripts to be brought into an automation framework.

![roku815px - rremote-sample-script-roku815px](https://image.roku.com/ZHZscHItMTc2/remote-sample-script-v2.png)

For more robust automated certification testing, refer to the [automated app testing documentation](https://developer.roku.com/docs/developer-program/dev-tools/automated-channel-testing/automated-testing-overview.md).

## Getting started

To prepare your device and workspace for writing a script, follow these steps.

**Starting step 1: [Sideload an app](/docs/developer-program/getting-started/developer-setup.md)**

Testing your own app starts by sideloading the app to your Roku test device. Use the provided developer sample app if you're not yet ready with your own.

**Starting step 2: [Install the tool](http://devtools.web.roku.com/RokuRemote)**

The Roku Remote Tool application is available for download and installation on Windows, Mac, and Linux. It can receive all responses from the a Roku device.


**Starting step 3: [Add your Roku development device](#Deviceconnection)**

1. Start the Device Manager. If the Device Manager is not shown at tool startup, begin by clicking **Select a Device** in the upper left corner. Then:

      a. Click **Favorites** (needed for Desktop client only) <br/>

      b. Click **+Add a Device**

   ![roku815px - select-a-device-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-select-a-device.png)

2. Enter the following device information.

      a. Device IP address

      b. Device Name (any name may be used)

      c. Device Model

   ![roku600px - rremote-dev-man-2-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-dev-man-2.png)


3. Enter device credentials. If the credentials window is not visible at the bottom, begin by hovering over the device entry in the table and clicking the gear (*****) when it appears. Then:

      a. Enter Username `rokudev`

      b. Enter the associated password

      c. Click **Save**.

   ![roku600px - rremote-dev-man-3-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-dev-man-3.png)


4. Select a device.

      a. Verify that the device Status is Online.

      b. Click the radio button to select the device to be used for the session.

      c. Close the window.

   ![roku600px - rremote-dev-man-4-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-dev-man-4.png)


**Starting step 4: Add an app**

You must define a name and identifier for at least one app. Refer to the [params](#params) section for more information.



**Starting step 5: Choose an app to launch **

From  you added, you must select one and launch it. Refer to the [blocks](#blocks) section for more information.


## Writing the script

The Roku Remote Tools records button press and text entry sequences as "steps" in a script editor window. These steps can then be used to simulate end-user operation of the device by the Roku TV remote.

### params

Begin by specifying your app information in the `params` section. You must use **[Add Channel](#AddChannel)** to add at least one app before continuing.

|         Keyword         |                       Graphic or Label                       |                         Description                          |                Example (in `params` section)                 |
| :---------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     `rasp_version`      |                             none                             |  Define the scripting version; default is inserted for you.  |                    **`rasp_version: 1`**                     |
| `default_`<br/>`keypress_wait` | [![roku200px - rremote-advanced-mode-gear](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-gear.png?version=3&modificationDate=1626142003000&api=v2)](#Configure) | Use the gear button to set the integer value of global delay between button presses. <br/>For non-integer values: <br/>- Manually position the cursor at the end of the line<br/>- Backspace to delete the old value<br/>- Type in the new value and hit Enter. | **`default_keypress_wait: 2`**<br/>**`default_keypress_wait: 0.25`** |
|       `channels`        | **[Add Channel](#AddChannel)** | Use the **[Add Channel](#AddChannel)** macro as a convenient way of entering app listings in the script. <br/>(You could instead type the entries in manually.)  To add app(s) using the macro, repeat these steps as needed:<br/><br/>1. Provide a Channel Name<br/>2. Enter Channel ID<br/>3. Click **Add to table**<br/>then click the ![roku815px - (plus)](https://confluence.portal.roku.com:8443/s/i0p0pk/8502/1ef1526ca6e62f10d6a1c5f77fccb30527d7d4d1/_/images/icons/emoticons/add.svg) next to each table entry to be inserted.<br/><br/>![roku400px - rremote-advanced-mode-add-channel-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-add-channel.png) | **`channels:`** <br/>**` 'My First Channel': 12345`** <br/>**` 'My Second Channel': 12346`** <br/>**` 'My Third Channel': 12347`** |


### steps

Continue by creating operational steps, using a concise set of commands. Steps can be typed manually into the editor, but are more rapidly created by clicking the emulated remote keys.

|          Step           |                           Graphic                            |                         Description                          | Example                                                      |
| :---------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
|         `press`         | ![roku200px - rremote-keypad](https://image.roku.com/ZHZscHItMTc2/rremote-keypad.png?version=2&modificationDate=1626301445000&api=v2)<br/>Keypad |                         Button press                         | ${codePress}|
|         `text`          | [![roku200px - rremote-keyboard-input](https://image.roku.com/ZHZscHItMTc2/rremote-keyboard-input.png?version=1&modificationDate=1626301445000&api=v2)](#Keyboardinput)<br/>Text entry box below keypad | Alphanumeric keystroke entry, where permitted by the Roku TV device interface<br/><br/>Static input <br/>– Checked: Keystrokes withheld until the adjacent **[>]** button is clicked <br/>– Unchecked: Each keystroke is sent out as it is entered | **`Developer`**<br/>(typed in box)                                |
|         `pause`         | [![roku200px - rremote-advanced-mode-sleep](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-sleep.png?version=3&modificationDate=1626141994000&api=v2)](#Pause/Sleep) | A pause (or delay or sleep) may be inserted at a specified point between steps.<br/>1. Position the cursor in the script where the pause should occur.<br/>2. Click the lower-right corner of Sleep and set the number of seconds to pause.<br/>3. Click the main part of Sleep to insert the command.<br/><br/>You may need to insert a pause step for any action in the UI that takes time to be completed before another step in the script can be executed. For example, it may take a few seconds for the app UI to be populated after being launched. This ensures that the subsequent steps are actually navigating the UI. Do not include more than 10 pause steps in a script. | ${codePause}              |
|         `loop`          | [![roku200px - rremote-advanced-mode-loop](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-loop.png?version=3&modificationDate=1626143345000&api=v2)](#AddLoop) | One or more steps can be made into a loop. This button remains grayed-out until more than one line of code has been highlighted.Using the mouse, select a two or more steps in the editor.<br/>1. Click the lower right corner of the Add Loop button and select the number of iterations.<br/>2. Click the main part of Add Loop to surround the steps with the appropriate `loop` commands. | ${codeLoop} |
| `wait_for_`<br/>`player_state` | [![roku200px - rremote-advanced-mode-slate](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-slate.png?version=3&modificationDate=1626143323000&api=v2)](#WaitforPlayerState) | Pause to wait on player state to be selected by user press of Play, Stop, or Pause.Put the cursor in the script where the wait should occur.Click the Wait for Player State button.Select Play, Stop, or Pause. | ${codeWait}|

{#codePress}
```
- press: home
- press: up
- press: reverse
```


{#codePause}
```
- press: reverse
- pause: 3
- press: play
```


{#codeLoop}
```
- loop:  
    iterations: 2
    steps:
    (loop steps go here)

```

{#codeWait}
```
wait_for_player_state: play
```

### blocks

Creation of the following blocks is aided by macros. Click on each label for details.

|         Step         |                    Label                     |                         Description                          | Example          |
| :------------------: | :------------------------------------------: | :----------------------------------------------------------: | :--------------- |
|       `launch`       |     **[Launch Channel](#LaunchChannel)**     | Launch one of  entered with Add Channel in the `params` section. <br/><br/>To launch an app, repeat these steps as needed to enter channel information for  you plan to use:<br/>1. Select an app<br/>2. Enter **Content ID** and **Media type**<br/>3. Click **Add**<br/>then click **Add to script** ![roku815px - (plus)](https://confluence.portal.roku.com:8443/s/i0p0pk/8502/1ef1526ca6e62f10d6a1c5f77fccb30527d7d4d1/_/images/icons/emoticons/add.svg) on the app(s) to be launched.<br/><br/>![roku400px - rremote-advanced-mode-launch-channel-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-launch-channel.png) | ${codeBlock}     |
| `validate_streaming` | **[Validate Streaming](#ValidateStreaming)** | Verify that the specified stream functions as expected. <br/>Select:  <br/>- the desired Video codec<br/>- the audio codec in use<br/>- the DRM method<br/>then click **Add to script** to insert script commands to validate the indicated stream type.<br/><br/>![roku400px - rremote-advanced-mode-validate-streaming-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-validate-streaming-v1.png) | ${codeValidate}  |
| `channel_tile_order` | **[Channel Tile Order](#ChannelTileOrder)**  | Set how the displayed channel tiles are ordered on the screen <br/><br/>![roku400px - rremote-advanced-mode-channel-tile-order-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-channel-tile-order.png) | ${codeTileOrder} |


{#codeBlock}
```
- launch:
    channel_name: My Test Channel
    content_id: 12345
    media_type: movie
    query: options.contentID=12345&mediatype=movie
    timeout: 35
```


{#codeValidate}
```
- validate_streaming:
    audio_codec: ac3
    video_codec: mpeg4_2
    drm: aes-128
    on_error:
      - press: right
```

{#codeTileOrder}
```
- channel_tile_order:
    1: My Test Channel
    2: Roku Developer Channel
    3: My Other Test Channel
```

#### Defining your own blocks of steps for re-use

For sequences of steps that you have to follow in multiple places within your script, define the sequence once and then label it for re-use.

|      Step       |                       On-screen label                        |                         Description                          |    Example     |
| :-------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :------------: |
| `step: &idxxxx` | [![roku200px - rremote-advanced-mode-block](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-block.png?version=3&modificationDate=1626143354000&api=v2)](#AddBlock)<br/>**[Add Block](#BlockIDs)** | Two or more steps can be defined as a block with an identifier.<br/>Using the mouse or cursor control keys, highlight a step or group of steps in the editor.<br/>Click the **[Add Block](#BlockIDs)** button to create the block and generate its ID in the form **`&id`**`1234` | ${codeStepID}  |
|    `*idxxxx`    |                  **[Block IDs](#BlockIDs)**                  | Steps defined as blocks are reusable throughout the code by referring to the identifier.<br/>Place the cursor elsewhere in the code.<br/>Click **[Block IDs](#BlockIDs)** and pick from the list, which will insert the chosen block as `*id1234` | ${codeBlockID} |


{#codeStepID}
```
- step: &id9027
    - press: up
    - press: right
```


{#codeBlockID}
```
- *id9027
```

## Running a script

To play back scripts, use the control buttons shown below. Notice that as each command completes, its status changes from `running` to `done`.

| Action |                           Graphic                            | Description                                                  |
| :----- | :----------------------------------------------------------: | :----------------------------------------------------------- |
| Play   | ![roku200px - rremote-advanced-mode-play](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-play.png?version=3&modificationDate=1626141958000&api=v2) | The script in the Script Editor pane is run once by clicking the **Play** button.Clicking the lower right corner and selecting **Play all** runs all scripts loaded to the Automation pane.Click this same button to stop a running script. |
| Repeat | ![roku200px - rremote-advanced-mode-repeat](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-repeat.png?version=3&modificationDate=1626141968000&api=v2) | The script in the Script Editor pane can be set to run multiple times by clicking **Repeat** .Click the lower-right corner of Repeat and set the number of iterationsClick the main part of Repeat to toggle Repeat mode (gray when active)Click **Play** to start the repeated run. |

## Editing a script

Like most text editors, the script editor can use both mouse and keyboard cursor positioning techniques to insert, highlight, and delete code. Note that the emulated keypad and macros always add to the **end** of the script, not at the current cursor location. If you need those lines inserted elsewhere, you'll need to then cut and paste them.  

Two additional buttons are provided to expedite editing.

|                           Graphic                            |                         Description                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![roku400px - rremote-advanced-mode-trash](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-trash.png?version=3&modificationDate=1626143335000&api=v2) | The **Trash can** button is used to immediately remove all steps in the procedure (the `params` section is not affected).To clear a syntax error, click this button following it with an Undo command (for example, Ctrl-Z for Windows) to reinstate all of the correct code but leave off the syntax in error.For removal of specific lines, simply select them with the mouse and use the Delete key. |
| ![roku400px - rremote-advanced-mode-comment](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-comment.png?version=3&modificationDate=1626141978000&api=v2) | The **Comments** button serves two purposes:Comments-out (and un-comments) selected blocks of code by adding `#` to the beginning of the line.Removes displayed comments such as `done` after a run, and `error` for certain error conditions. |

## Saving a script

Exporting (saving) a script. Once you have written a script, saving it for future use involves Exporting the script in the RASP format.

Using **New script** ![roku815px - rremote-dots](https://image.roku.com/ZHZscHItMTc2/rremote-dots.png) – but clicking on the **dots** – displays three Export options.

- Select **Export scripts** to save one or more of your scripts to an external file.

   ![roku815px - rremote-new-script-dots-export-roku600px](https://image.roku.com/ZHZscHItMTc2/rremote-new-script-dots-export.png)


- Select **Edit Script list** to delete selected scripts, or **Delete all scripts** to remove everything.

   ![roku815px - rremote-new-script-dots-edit-roku600px](https://image.roku.com/ZHZscHItMTc2/rremote-new-script-dots-edit.png)     ![roku815px - rremote-new-script-dots-delete-roku600px](https://image.roku.com/ZHZscHItMTc2/rremote-new-script-dots-delete.png)

## Creating new scripts

Select **New script** and then use Add new script to give a name to the script in the editor. (The name `default.rasp` is used if you skip this step.)

![roku815px - rremote-new-script-add-roku600px](https://image.roku.com/ZHZscHItMTc2/rremote-new-script-add.png)

## Importing scripts

If you already have a script from your own library or from other developers, choose the **Import from** option to load it.

![roku815px - rremote-new-script-import-script-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-new-script-import-script.png)

## Sample exercises

### Keypad input

The keypad replicates the keys present on the physical Roku Remote. Use the mouse to click on any key to send it to the device.

**Exercise 1: Select "Settings".** Click the Home 🏠, Up ⬆️, and 🆗 keys in sequence, watching the Roku TV screen to follow the activity. The Settings list item on the Roku TV screen should be selected.

![roku815px - rremote-simple-mode-ex1-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-simple-mode-ex1.png?version=3&modificationDate=1626141011000&api=v2)

### Alphanumeric input

The tool provides a text input box to allow the keyboard to be used for alphanumeric field input where allowed by the app.

**Exercise 2: Enter a "Search" term.** Click Home, then the Down arrow 5 times, then the Right arrow once to select the Search page keyboard on the Roku TV screen. Click in the Keyboard input box of the tool, and type a term like **`developer`** while watching the activity on the Roku TV screen. Selections containing the term "developer" should be listed.

### Automatic script block generation

Macro generators on the tool allow for quick creation of commonly used command sequences.

**Exercise 3: Generating script content.** Click "Validate streaming" and make a selection in each box. (This exercise is just for learning, so any choice is okay.) Now click "add to script" (and OK to Errors if the message comes up). Observe the block of information that has been added to the end of the current script.

### Script editing

**Exercise 4: Editing lines of a script.** With the commands from Exercise 3 still in the editor window, highlight them using the mouse or keyboard, and cut/paste them to a location earlier in the script.

Selecting a block of code for deletion, or highlighting a section to create a Loop or Block, requires a specific approach.

1. Place the cursor at the end of the last line to be selected, *using the mouse*. Otherwise, keyboard cursor keys in the next step may be interpreted as shortcut keypad presses.


2. Use the **Up** arrow on the PC keyboard to select the current line. The line above it will also be included in a Block or Loop selection, even if not fully highlighted. The mouse may be used to move upward instead, making sure that the current line is fully selected (including its line number).


3. Continue in this manner until the selection is complete, and proceed with cut, Loop, or Block.

## Appendix

### Script generation aids

The macro functions listed here allow rapid generation of blocks of scripting code. These sections may also be entered or copied in manually.

#### App Tile Order

To reorder apps:

1. Select an app
2. Choose its position in the tile ordering
3. Click **Add** to effect the change and reorder the list.

To insert the ordering command and the ordered list to the script:

– Click **Add to script** .

![roku600px - rremote-advanced-mode-channel-tile-order-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-channel-tile-order.png?version=3&modificationDate=1626143400000&api=v2)

#### Block IDs

Lists defined Block IDs within the script.

Clicking **Add to script** ![roku815px - (plus)](https://confluence.portal.roku.com:8443/s/i0p0pk/8502/1ef1526ca6e62f10d6a1c5f77fccb30527d7d4d1/_/images/icons/emoticons/add.svg) inserts that ID at the current cursor location (to repeat that code block)

![roku600px - rremote-advanced-mode-block-ids-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-advanced-mode-block-ids.png?version=3&modificationDate=1626143423000&api=v2)


### Logs

The Logs tab keeps track of all keystrokes that have been sent. The logs can be filtered as needed and exported to an external file. If not needed, they can be deleted.

![roku815px - rremote-simple-mode-logs-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-simple-mode-logs.png?version=3&modificationDate=1626141053000&api=v2)

### Shortcuts

On physical keyboards with a numeric keypad, the keypad may be used instead of the on-screen keypad.

The Shortcuts tab shows the correspondence of PC keyboard keys to remote keys. The image below shows the Shortcuts page and additionally illustrates the mapping as applied to a typical PC numeric keypad.

![roku815px - rremote-numeric-keypad-shortcuts-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-numeric-keypad-shortcuts.png?version=3&modificationDate=1626141842000&api=v2)

### Tool Utilities

The three icons at the top right of the page provide access to utility functions.

![roku600px - rremote-settings-icon-roku700px](https://image.roku.com/ZHZscHItMTc2/rremote-settings-icon.png)


These utility functions operate as follows.

- Information icon: Turns control hints on/off.
- Page icon: Brings up a [RASP documentation article](http://devtools.web.roku.com/RokuRemote/rasp.html) that explains the scripting language.
- Gear icon: Displays the Settings pages shown below.

#### Start-up / run options (Settings page)

#### Automation

![roku600px - rremote-settings-automation-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-settings-automation.png?version=3&modificationDate=1626143651000&api=v2)

#### Options

![roku600px - rremote-settings-options-roku815px](https://image.roku.com/ZHZscHItMTc2/rremote-settings-options.png?version=3&modificationDate=1626143662000&api=v2)
