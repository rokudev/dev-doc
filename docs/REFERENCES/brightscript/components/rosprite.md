---
title: "roSprite"
excerpt: 'roSprite objects managed by roCompositor via NewSprite or NewAnimatedSprite'
deprecated: false
hidden: false
metadata:
  title: 'roSprite'
  description: 'Reference page for roSprite. roSprite is created via roCompositor methods NewSprite() or NewAnimatedSprite().'
  robots: index
next:
  description: ''
---


The roSprite object cannot be created directly with a CreateObject() call. It must be associated with a managing roCompositor object. This association is implicitly created by creating an roSprite object with the roCompositor methods NewSprite() or NewAnimatedSprite().


## Supported interfaces

- [ifSprite](doc:ifsprite)              