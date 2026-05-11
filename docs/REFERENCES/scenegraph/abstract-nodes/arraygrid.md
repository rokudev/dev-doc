---
title: ArrayGrid
excerpt: Abstract base class providing shared fields for list and grid node classes
deprecated: false
hidden: false
metadata:
  title: ArrayGrid
  description: >-
    ArrayGrid is an abstract base class that provides shared functionality to
    list and grid node classes such as LabelList, PosterGrid, MarkupGrid, and
    RowList.
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The ArrayGrid node class is an abstract base class that provides functionality to the list and grid node classes that are extended from ArrayGrid. The field value settings and their effect in this abstract base class depend in many cases on whether a list, or a grid, node class is extended from ArrayGrid, and the specific type of list or grid.

The following node classes extended from ArrayGrid derive their basic functionality from the ArrayGrid abstract node class:

* [LabelList](doc:labellist)
* [MarkupList](doc:markuplist)
* [PosterGrid](doc:postergrid)
* [MarkupGrid](doc:markupgrid)
* [RowList](doc:rowlist)

> ArrayGrid is not meant to be instantiated directly by app code

### Data Bindings

Each node class extended from the ArrayGrid abstract node class will have custom data bindings.

## Fields
