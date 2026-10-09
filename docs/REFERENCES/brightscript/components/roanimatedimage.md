---
title: "roAnimatedImage"
excerpt: 'Render animated GIFs, stickers, and small videos'
deprecated: false
hidden: false
metadata:
  title: 'roAnimatedImage'
  description: 'The AnimatedImage component enables developers to render animated GIFs, “stickers”, and small videos'
  robots: index
next:
  description: ''

---

roAnimatedImage enables developers to render animated GIFs, stickers, and small videos. It is designed for low-frame-rate, simple animations that reside in a small area. 

Only use a single, small animated image at a time to minimize CPU load and memory usage (large animations may consume CPU and memory resources; using too many animated images may cause choppy animations). 

roAnimatedImage downloads the entire resource before decoding. Playback begins only after the download hasbeen completed. 

> This component is not supported on older Roku device models (Liberty, Littlefield, Austin, Briscoe, Ft. Worth, Gilbert, Amarillo). Creating an roAnimatedImage component on an unsupported platform returns `invalid`.

## Supported interfaces

- [ifAnimatedImage](doc:ifanimatedimage)