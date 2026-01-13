---
title: Debugging
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

# Debugging

Testing Roku apps involves using a debug console and access to a
variety of ports. The debug console provides a window into the runtime
environment and provides features such as crash logs, stack-traces and
much more.

## Accessing the debug console

The debug console can be accessed using telnet through a shell
application such as [PuTTY](http://www.putty.org/) for Windows or
*terminal* on Mac and Linux:

~~~~
telnet roku-ip-address 8085
~~~~

The console shows the output of your app during runtime. If the
app crashes, the debugger will display the line number of the error,
as well as the contents of variables at the time of the crash.
Compilation errors (e.g. "Syntax Error") are also displayed here. The
developer console should be open whenever an app is sideloaded to
catch any possible startup errors.

In addition to displaying console output, the shell can also be used as
an interactive debugger. When your application is running, simply
press `ctrl-C` to break into the application and enter debug mode. You
will see a "BrightScript Debugger\>" prompt, where you can type
commands.

You can also force your app to break at a specific point by
inserting `STOP` statements in your code. Be sure to remove this when
submitting your app for
publication.


## Debug ports

| Telnet Port | Thread               | Description                                 |
| ----------- | -------------------- | ------------------------------------------- |
| 8080        | debug server         | debug server containing a host of utilities |
| 8085        | BrightScript console | BrightScript runtime environment            |
| 8087        | Screensaver          | The starting point for screensavers         |


## BrightScript console (port 8085) commands

| Command                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `bsc`                        | Print current BrightScript component instances               |
| `bscs`                       | Print a summary of BrightScript component instance counts by component type |
| `brkd`                       | Toggle whether BrightScript should break into the debugger after non-fatal diagnostic messages |
| `bt`                         | Print backtrace of call function context frames              |
| `classes`                    | Print BrightScript component classes                         |
| `cont or c`                  | Continue script execution                                    |
| `down or d`                  | Move down the, function context chain one                    |
| `exit`                       | Exit shell                                                   |
| `gc`                         | Run garbage collector                                        |
| `help`                       | Print the list of BrightScript console commands              |
| `last or l`                  | Print the last line that executed                            |
| `list`                       | List current function                                        |
| `next or n`                  | Print the next line to execute                               |
| `over`                       | Step over a function                                         |
| `out`                        | Step out of a function                                       |
| `print, p, or ?`             | Print a variable or expression                               |
| `step, s, or t`              | Step one program statement                                   |
| `threads <ID>` or `ths <ID>` | List all current executed suspended threads                  |
| `thread <ID>` ` or th <ID>`  | Select a suspended thread to debug - all following debug commands will execute within that thread |
| `up or u`                    | Move up the function context chain one                       |
| `var`                        | Print local variables and their types/values                 |

>BrightScript statements can also be compiled and executed in the
>console. This can be used to change variables during execution or call
>a function that prints useful information about the state of your
>program.

### Cross-component backtrace

As of Roku OS 14.6, you can use the `backtrace`, `up`, `down`, `over`, and `out` commands in the debug console on stack frames entered via `callFunc` or an observer callback, in addition to a normal BrightScript function call.

For example, if roSgNode A calls into roSgNode B on the same thread (for example, via [CallFunc](/docs/developer-program/core-concepts/handling-application-events.md#functional-fields)) and then B breaks into the call, you can now view the calls belonging to both A and B in the backtrace of the thread.

### Type mismatch reporting

As of Roku OS 10.5, the BrightScript debug console provides more specific reporting of "type mismatch" errors to help developers identify and resolve these types of bugs in their code. For example, attempting to evaluate whether an integer value equals a string in an expression (for example, if 12 = "number") results in the following error message: `Type mismatch. Operator "=" cannot be applied to "Integer" and "String"`.

## SceneGraph applications

Beginning with **Roku OS 7.5** and above, the main BrightScript
console (port 8085) provides context for all threads. This
eliminates the need to have multiple telnet sessions open for each
running thread and **ports 8089 - 8093** will no longer be used.

As seen below, any break or `stop` in the app will suspend all
threads. All threads will be listed with the following information:

  - **ID:** thread ID
  - **Location:** file the thread originated from and line number
  - **Source code:** current line of code

The current selected thread will be marked with an `*`.

~~~~
BrightScript Micro Debugger.
Enter any BrightScript statement, debug commands, or HELP.
Suspending threads...
Thread selected:  0*   pkg:/source/Main.brs(19)                msg = wait(0, m.port)
Current Function:
011:      m.port = CreateObject("roMessagePort")
012:      screen.setMessagePort(m.port)
013:  
014:      'Create a scene and load /components/helloworld.xml'
015:      scene = screen.CreateScene("HelloWorld")
016:      screen.show()
017:  
018:      while(true)
019:*         msg = wait(0, m.port)
020:          msgType = type(msg)
021:          if msgType = "roSGScreenEvent"
022:              if msg.isScreenClosed() then return
023:          end if
Break in 19
019:         msg = wait(0, m.port)
Backtrace:
#0  Function main() As Void
   file/line: pkg:/source/Main.brs(19)
Local Variables:
global           Interface:ifGlobal
m                roAssociativeArray refcnt=2 count:1
screen           bsc:roSGScreen refcnt=1
scene            bsc:roSGNode refcnt=1
msg              <uninitialized>
msgtype          <uninitialized>
Threads:
ID    Location                                Source Code
 0*   pkg:/source/Main.brs(19)                msg = wait(0, port)
 1    ...                    Task.brs(25)     msg = wait(0, m.port)
 2    ...                    Task.brs(29)     msg = wait(0, m.port)
  *selected
~~~~


> This information can be recalled anytime during debugging using
> the `threads` command.

## SceneGraph debug server (port 8080) commands



<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>brightscript_warnings [<em>num-warnings</em>]</td>
<td>Sets the maximum number of BrightScript warnings displayed in the debug console. Warnings may indicate possible bugs in the code and therefore should be addressed.</td>
</tr>
<tr>
<td>chanperf [-r <em>seconds</em>]</td>
<td>Prints the current memory and CPU utilization of an app (RAM usage is reported in KibiBytes [KiB]).<br /><br /><strong>chanperf</strong><br />Sending this command with no arguments generates the following output on port 8080 for example:<br /><code>channel: mem=15156KiB\{anon=2720,file=12392,shared=44\},%cpu=7\{user=1,sys=6\}</code><br /><br /><strong>chanperf -r <em>seconds</em></strong><br />Executes and repeats the <strong>chanperf</strong> command the specified number of seconds and outputs the results to port 8085. To cancel a repeating command, use the chanperf command with no arguments or with the -r parameter set to 0 ("chanperf" or "chanperf -r 0"). Calling this command with the seconds parameter set to 10 generates the following output on port 8085 for example:<br /><code>channel: mem=27124KiB\{anon=9684,file=17372,shared=68\},%cpu=43\{user=30,sys=13\} repeat 10s (on dev console), chanperf -r 0 to stop</code><blockquote><p>The output for the chanperf -r <em>seconds</em> command is sent to port 8085. It is not displayed on port 8080</p></blockquote><strong>Error message</strong><br />If the app is not running, or if undefined attribute is missing from the manifest, the following output is generated:<br />undefined<blockquote><p>You can download a <a href="https://github.com/rokudev/sgnodes-all-demo">sample app</a> that demonstrates how to use the <strong>chanperf</strong> command.</p></blockquote></td>
</tr>
<tr>
<td>logrendezvous [on &#124; off]</td>
<td>Enable console logging of thread rendezvous. Set to off to disable.</td>
</tr>
<tr>
<td>loaded_textures</td>
<td>Displays the current set of images loaded into texture memory.</td>
</tr>
<tr>
<td>r2d2_bitmaps</td>
<td>Prints a list of assets loaded into texture memory and the amount of free, used, and maximum available memory on your device, respectively. Starting with Roku OS 9.3, the name of each bitmap is included</td>
</tr>
<tr>
<td>remove_plugin <em>app id</em></td>
<td>Removes the indicated app from the local device, as well as from all devices linked to the same Roku account. For example, if an app has a <em>app id</em> of "987654_cf9a", then the following command would remove it: <code>remove_plugin 987654_cf9a</code><br /><br />The list of available app ids can be seen in the second (from leftmost) column of the display produced by the <strong>plugins -m</strong> port 8080 command. The local device must be linked to a Roku account. <br /><br />To use this command, the local device must be linked to a Roku account. Apps are not removed on another device until it synchronizes with the Streaming Store (for example, via an automatic check for updates).</td>
</tr>
<tr>
<td>sgnodes all</td>
<td>Prints every existing node created by the currently running app. <br /><br />As of Roku OS 14.5, you can use this command on your published app if the device is keyed with the same developer ID/key used to generate the app's package file.<br /><br />As of Roku OS 10.0, this prints the number of <strong>osref</strong> references to the node (held in the Roku platform) and <strong>bscref</strong> references (held in the app). The <strong>bcsref</strong> count includes references from "m." variable and local variables. Child references and field references do not increase <strong>bscref</strong> counts. <br /><br />The <strong>osref</strong> count also includes child references and references from Roku SceneGraph interface fields. For example, for any node with a parent, the parent will count as one <strong>osref</strong> on the child. Additionally, any field of type <strong>node</strong>, <strong>nodearray</strong>, or <strong>assocarray</strong> will add one <strong>osref</strong> to each node referenced from within that field. These could be in variables local to a function, arrays, or associative arrays, including a component global m or an associative array field of a node.<br /><br />The reported <strong>osref</strong> count may vary from release to release of Roku OS; the information here is provided only to give a sense of the kinds of items that the count includes. The <strong>bscref</strong> count provides a more relevant and accurate indication of the resources that the app itself controls.<br /><br />The <code>sgnodes all</code>, <code>sgnodes roots</code>, and <code>sgnodes node_ID</code> commands are similar to the getAll() , getRoots() , getRootsMeta(), and getAllMeta() <a href="/docs/references/brightscript/interfaces/ifsgnodechildren.md">ifSGNodeChildren</a> methods, which can be called on any SceneGraph node.</td>
</tr>
<tr>
<td>sgnodes roots</td>
<td>Prints every existing node without a parent created by the currently running app. The existence of these un-parented nodes means they are being kept alive by direct BrightScript references. These could be in variables local to a function, arrays, or associative arrays, including a component global m or an associative array field of a node.</td>
</tr>
<tr>
<td>sgnodes node_ID</td>
<td>Prints nodes with an id field set to node_ID, except it, bypasses all the hierarchy and rules and just runs straight down the whole list in the order of node creation. It will list multiple nodes if there are several that match.</td>
</tr>
<tr>
<td>sgperf start&#124;clear&#124;report&#124;stop</td>
<td>Provides basic node operation performance metrics. This command tracks all node operations by a thread, whether it's being created or an operation on an existing node, and whether it involves a rendezvous. Settings: start - enables counting, clear - resets counters to zero, report - prints current counts with rendezvous as a percentage, stop - disables counting.</td>
</tr>
<tr>
<td>sgversion force or default 1.0 or 1.1</td>
<td>Changes the observer callback model and overrides the default rsg_version specified in the manifest. For example, <code>sgversion force 1.0</code> will set rsg_version=1.0 regardless of what is specified in the manifest. With default, it will set the default rsg_version when it is not specified in the manifest. Changing the rsg_version will require restarting the app, but these changes will not survive a device reboot. <br /><br />Support for the “rsg_version=1.0” manifest flag is deprecated. This deprecation means that the 1.0 features are no longer supported (and thus should not be expected to work). All apps must adopt the current observer callback model in successive firmware updates.</td>
</tr>
<tr>
<td>fps_display</td>
<td>Displays frames-per-second and free memory on-screen. Leverage this tool to optimize your app UI. Following are the commands to use the fps meter: fps_display 1 turns on the fps meter. It presents a 1-second moving average of the current frame rate AND fps_display 0 turns the meter back off.</td>
</tr>
<tr>
<td>free</td>
<td>Provides a snapshot of the amount of in-use and free memory on the device.</td>
</tr>
</tbody>
</table>


## Troubleshooting common development errors

There are several very common errors that you will encounter when developing SceneGraph apps. Quite often these errors are caused by not spelling component names or variables correctly but may appear as different types of errors on the display screen and in the debugger.

### Graphic image does not appear, question mark appears instead of image

The graphic image file was not found in the location specified in the application. Check that graphic image file is in the specified location, either on your development server, or in the application ZIP package, usually in the pkg:/images directory. Make sure the path to the file is correct, and the name of the file is spelled correctly. Roku SceneGraph applications, like previous Roku applications, generally follow the convention used in many client display applications, such as web browsers, which is to show a default image if the specified image cannot be found. If a question mark image is shown in a Roku SceneGraph app, check the path and file name spelling to ensure that the correct graphic image appears.

