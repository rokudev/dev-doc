---
title: "roCompositor"
excerpt: 'Composes and animates roBitmaps and roRegions using z-ordered sprites'
deprecated: false
hidden: false
metadata:
  title: 'roCompositor'
  description: 'roCompositor manages composition and animation of multiple roBitmaps and roRegions, supporting sprites, collision detection, and scrolling.'
  robots: index
next:
  description: ''
---


The roCompositor allows the composition and animation of multiple roBitmaps and roRegions.

This object can create and manage roSprites in a z-ordered list. The sprites can be of arbitrary size and can be thought of as planes. The compositor can manage collision detection between the sprites, support scrolling the sprite bitmap source, and support animated sprites (multi-frame sprites with frame-flipping animation). You may have multiple roCompositor components, and they can composite onto the same or separate bitmaps. That said, the most common scenario is to have a single roCompositor.

**Example: Scrolling a bitmap**

```brightscript
Library "v30/bslCore.brs"

function main()
        black=&hFF'RGBA
        screen=CreateObject("roScreen")
        compositor=CreateObject("roCompositor")
        compositor.SetDrawTo(screen, black)
        http = CreateObject("roUrlTransfer")
        http.SetMessagePort(CreateObject("roMessagePort"))
        http.SetUrl("http://rokudev.roku.com/rokudev/examples/scroll/VeryBigPng.png")
        http.AsyncGetToFile("tmp:/VeryBigPng.png")
        wait(0, http.GetPort())
        bigbm=CreateObject("roBitmap","tmp:/VeryBigPng.png")
        region=CreateObject("roRegion", bigbm, 0, 0, 1280, 720)
        region.SetWrap(true)

        view_sprite=compositor.NewSprite(0, 0, region)
        compositor.draw()
        screen.SwapBuffers()
        msgport = CreateObject("roMessagePort")
        screen.SetMessagePort(msgport)
        codes = bslUniversalControlEventCodes()
        while true
                msg=wait(0, msgport) ' wait for a button
                print "Msg: "; type(msg); " event: "; msg.GetInt()
                if type(msg)="roUniversalControlEvent" then
                        if msg.GetInt()=codes.BUTTON_UP_PRESSED then
                                Zip(screen, view_sprite, compositor, 0,-4) 'up
                        else if msg.GetInt()=codes.BUTTON_DOWN_PRESSED then
                                Zip(screen, view_sprite, compositor, 0,+4) ' down
                        else if msg.GetInt()=codes.BUTTON_RIGHT_PRESSED then
                                Zip(screen, view_sprite, compositor, +4,0) ' right
                        else if msg.GetInt()=codes.BUTTON_LEFT_PRESSED then
                                Zip(screen, view_sprite, compositor, -4, 0) ' left
                        else if msg.GetInt() = codes.BUTTON_BACK_PRESSED ' back button
                                exit while
                        end if
                end if
        end while
end function

function Zip(screen, view_sprite, compositor, xd, yd)
        for x=1 To 60
                view_sprite.OffsetRegion(xd, yd, 0, 0)
                compositor.draw()
                screen.SwapBuffers()
        end for
end function
```


## Supported interfaces

- [ifCompositor](doc:ifcompositor)
