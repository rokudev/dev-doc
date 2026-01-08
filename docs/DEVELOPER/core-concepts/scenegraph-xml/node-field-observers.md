---
title: "Node field observers"
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

# Node field observers

All node and component fields can have *observers* attached to them.
These observers continuously monitor the state of the specified field,
and if the field changes, a specified callback function is triggered to
perform an action in response to the field state change.

In most cases, the observers are only notified if the field value
changes. There is also loop breaking logic to make sure that you cannot
get into an infinite loop of observer callbacks. For example, suppose
field A changes and calls observer function X. In function X, field B is
set and calls observer function Y. If in function Y, field A is set, the
setting of field A is not done, preventing an infinite loop.

See [Handling node field value
changes](/docs/developer-program/core-concepts/handling-application-events.md#handling-node-field-value-changes)
for information on setting up observers and writing callback functions
to handle node field changes. See [Handling component <interface\>
field value
changes](/docs/developer-program/core-concepts/handling-application-events.md#handling-component-interface-field-value-changes)
for information on setting up observers and writing callback functions
to handle component field changes.
