---
title: roScreen
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from.

You will need at least one roScreen component in your 2D game application to draw on and get events from. The origin (0,0) is the top left corner of the screen. The pixels are always RGBA 32 bits. Multiple roScreen components stack, and like other screen components only the top screen is viewable and gets events. An roScreen that is not the top most screen can still be drawn to.

> Once an roScreen is created, the display stack enters "Game Mode", and other screen components cannot be used. Screensavers will also be disabled and will appear as a black screen in its place. Other screen components cannot be intermixed with roScreens as the roScreen display stack is maintained independently from the main screen component display stack. When the final roScreen component is closed, other screen components can be used again.

When the roScreen constructor is called, an optional double buffer flag, and an optional resolution can be passed. If the screen is double buffered, two buffers are fully allocated when CreateObject() succeeds. If the screen is single buffered only one buffer is allocated and the "front" and "back" buffers in method descriptions below are the same buffer. When a screen is created with a different resolution than the output display, it is scaled automatically to the output display resolution.

To maintain proper aspect ratio, and take care of the different pixel aspect ratio in HD vs SD; there is a fixed set of bitmap resolutions that are allowed to be created for screens:

##### **HD mode screensizes**

* 1280x720PAR=1:1 (default for HD)
* 854x480 PAR=1:1 useful for higher performance HD games, also for 640x480 games
* 940x480 PAR=1.1:1 used for displaying a RokuSD (720x480) games

##### **SD mode screensizes**

> SD mode has been deprecated. Developers should develop games in HD mode.

* 720x480 PAR=1.1:1 (default for SD)
* 640x480 PAR=1:1 (used for 640x480 games)
* 854x626 PAR=1:1 (used for 854x480 HD games)

The screen dimensions correspond to the drawable area that applications see. The dimensions were chosen so that applications do not need to compensate for screen aspect ratio or pixel aspect ratio.

It's likely that when porting games from other platforms, the active game area may be smaller and correspond to more traditional dimensions. In this case, the application can supply letterbox or pillarbox artwork and use an [roRegion](doc:roregion) to define the active area. The roRegion will translate and clip graphics to the proper area for the game. Similarly, roRegions are used to describe the left and right pillars for an SD game in HD mode, or the upper and lower letterbox regions for an HD game in SD mode.

Games that require more performance should use smaller dimensions. Games should run in HD and SD mode. The screensizes HD 854x480 paired with SD 854x626 and HD 940x480 paired with SD 720x480 were designed for this purpose.

The game creates a single active game roRegion to do all graphics operations in. roRegions for pillar or letter boxes are used to fill the rest of the screen area depending on if the app is in HD or SD mode. Please refer to the dfSetupDisplayRegions() function in [v30/bslDefender.brs](doc:component-architecture#v30bslcorebrs) for help in setting up the drawable regions in screen scaling.

There are some useful rules of thumb to be aware of to get the best performance when rendering your games:

* Alpha enabled regions are expensive to render

It is a requirement that the destination be alpha enabled in order for non-rectangular sprites to be properly rendered with transparency. However the sprite used for a background would typically have all pixels be fully nontransparent. Since alpha blending is expensive, a quick way to blit the background in this scenario is to first disable alpha on the screen, manually draw the background, and then enable alpha for the screen before drawing the rest of the sprites.

* Use smaller resolution images wherever possible. Scaling a large image down at run time is expensive with no benefit to the user
* Rendering text with DrawText() is expensive

Fortunately, many of these calls are redundant and can be eliminated. The static text for a particular level can be drawn on the background once and this newly created background can be used for refreshing the screen. This will eliminate almost all text redraws.

A screen can be created with one of three constructors. If it is created with no parameters, the screen will be single buffered, and its output resolution will match the current display resolution (if the current resolution is specified in the manifest file ui_resolutions entry, otherwise the size will be 720p).

`CreateObject("roScreen")`

If a single parameter is passed, it is a Boolean that indicates if the screen is double buffered or not. See SwapBuffers():

`CreateObject("roScreen", true) ' double buffered screen`

If four parameters are passed, the last two specify the screen's resolution. The dimensions must be one of the screen sizes specified above:

`CreateObject("roScreen", true, 720, 480) ' db & SD res`

**Example: Display an image**

```brightscript
Screen=CreateObject("roScreen")
dfDrawImage(screen, "myphoto.jpg",0,0)
Screen.Finish()
```

**Example: Alpha blending**

```brightscript
white=&hFFFFFFFF
screen0=CreateObject("roScreen")
screen0.SetAlphaEnable(true)
screen0.Clear(white)
screen0.DrawRect(100,100, screen0.GetWidth()-200, screen0.GetHeight()-200, &h80)
' &h80 is black with a 50% alpha mix (RGBA)
screen0.finish()
```

## Supported interfaces

* [ifScreen](doc:ifscreen)
* [ifDraw2D](doc:ifdraw2d)
* [ifSetMessagePort](doc:ifsetmessageport)
* [ifGetMessagePort](doc:ifgetmessageport)

## Supported events

* [roUniversalControlEvent](doc:rouniversalcontrolevent)
