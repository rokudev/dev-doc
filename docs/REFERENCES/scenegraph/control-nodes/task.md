---
title: Task
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


Extends [**Node**](doc:node)

The Task node class allows you to specify a function to be spawned in a different thread, and run asynchronously with respect to both the scene rendering thread and the main application thread. A Task node also allows you to run functions that cannot be run in SceneGraph node or component, typically BrightScript code functions involving operations such as reading data from servers and file system manipulation. (You also cannot, and should not, run functions in a SceneGraph application for operations that are functionally the same as SceneGraph nodes and components, such as playing videos.) A list of all the BrightScript functions and components that cannot be used in SceneGraph applications or can only be used in a Task node can be found in [BrightScript Support](doc:brightscript-support).

A Task node is typically used to read data from a server to create a ContentNode to configure a SceneGraph node or component (see [ContentNode](doc:contentnode)). A Task node used for this purpose can be thought of as a content reader. Since ContentNodes are required to configure many components rendered in a scene, such as lists, panels, and grids, and you will generally want to read the data for those types of nodes from your server, you should create a Task node as a content reader for each of those components that you use in your scene.

The Task node class was designed with three general development use cases:

- A new Task node object is created for each asynchronous operation. The input data needed for the operation is set in the Task node object [\<interface\>](doc:interface) fields in the render thread, along with an observer of the output `<interface>` field data, and the Task node control field is set to RUN. After the output data is returned to the render thread, the Task node object is not used again.
- A Task node object is used multiple times for several identical asynchronous operations. In this case, the input data for each operation is set in the existing Task node object, with another observer for the output `<interface>` field data, and the Task node control field is again set to RUN. This may be more efficient than creating a new Task node object for each of the identical operations.
- A Task node observes its input `<interface>` fields using the port form of the ifSGNodeField [observeField\(\)](doc:ifsgnodefield)") method, and returns output data with each field change. In this case, the Task node acts like a continuous server.

Since Task nodes launch asynchronous threads, and have no provisions for locks and mutexes, you must be careful to avoid race, deadlock, and other asynchronous thread errors. Here are a few tips for using Task nodes:

- Avoid accessing files which must be persistent before thread completion, to avoid a subsequent Task node or other thread access of the same file before the thread completes. It is easier and safer to use a dynamically-created string or other data object to hold temporary thread data to avoid having a subsequent or existing thread overwrite and corrupt the data.
- Be very careful if you access any object in a Task node that may exist in another thread. It is better to completely separate all objects in any other possible thread from the Task node thread by setting the `<interface>` fields of the Task node with copies of the minimum amount of data needed to run the thread.
- In the Task node init() function, perform the minimum required amount of initialization of the Task node and any included thread functions. If you intend to trigger an asynchronous task based on a Task node input`<interface>` field change, in many cases, you should only set up the observer for the field in init().
- Use the port form of the ifSGNodeField [observeField\(\)](doc:ifsgnodefield)") rather than the onChange attribute. This will avoid triggering the thread in response to a render thread event before the Task node observers are set up.
- It is more efficient to use a persistent Task node that is triggered by an `<interface>` field change than to create a new Task node every time a particular asynchronous thread is required. If needed, you can communicate that the particular asynchronous thread is no longer required through an `<interface>` field as well, either through the triggering field, or a special field used for control of the Task node.
- You can use a single Task node object to run any number of different asynchronous threads by setting the functionName field to the Task node function you want before setting the control field to RUN. If you do not use the input data `<interface>` fields to trigger running the thread, this is equivalent to calling an asynchronous function, and passing the input data fields as arguments to the function. The output data `<interface>` fields can likewise be considered as the return value of a asynchronous function call, but to avoid blocking you must observe the fields, or the state field, as a callback event to handle the results in the calling thread.


Also review "[SceneGraph threads](doc:threads)" for in-depth information on using Task nodes most efficiently.  

### Example

The following reads attributes from an XML file on a server containing the content for a PosterGrid node into a ContentNode, which can then be assigned to the content field of the PosterGrid node to configure and populate the grid.

#### Task Node Example

~~~
<?xml version="1.0" encoding="utf-8" ?>

<!--********** Copyright 2016 Roku Corp.  All Rights Reserved. **********-->

<component name = "postergridCR" extends = "Task" >

  <interface>
    <field id = "postergriduri" type = "string" />
    <field id = "postergridcontent" type = "node" />
  </interface>

  <script type = "text/brightscript" >
    <![CDATA[

    sub init()
      m.top.functionName = "getContent"
    end sub

    sub getContent()
      postergridcontent = createObject("RoSGNode","ContentNode")

      postergridxml = createObject("roXMLElement")

      readInternet = createObject("roUrlTransfer")
      readInternet.setUrl(m.top.postergriduri)
      postergridxml.parse(readInternet.GetToString())

      if postergridxml.getName()="PosterGrid"
        for each poster in postergridxml.GetNamedElements("poster")
          postercontent = postergridcontent.createChild("ContentNode")
          postercontent.setFields(poster.getAttributes())
        end for
      end if

      m.top.postergridcontent = postergridcontent
    end sub

    ]]>
  </script>

</component>
~~~

In addition to this example, a much simpler, complete example, including the scene that creates the Task node, can be found here: [SimpleTask example](https://github.com/rokudev/samples/tree/master/ux%20components/control). That example simply uses a Task node to increment a counter and display the current counter value on the screen.

## Fields

| Field        | Type              | Default                                   | Access Permission | Description           |
| ------------ | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| functionName | string            | ""                                        | READ_WRITE        | The name of the function in the Task node component to be executed when the state field changes to RUN. The function must be declared within the scope of the Task node component |
| control      | option string     | init                                      | WRITE_ONLY        | Requests a change in the run state of the spawned task. The valid options are the same as for the state field, but case-insensitive (i.e. can set "RUN" or "run") |
| state        | value string      | init                                      | READ_ONLY         | Inquires about the run state of the spawned task. Note that the values are in lowercase: "init", "stop", "run", "done" |

## Sample app
[TaskExample](
https://github.com/rokudev/samples/tree/master/ux%20components/control/TaskExample) is a sample app demonstrating Task in action.