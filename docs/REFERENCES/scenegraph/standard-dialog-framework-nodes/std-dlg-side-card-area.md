---
title: "StdDlgSideCardArea"
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




Extends [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md)

## Description

The **StdDlgSideCardArea** node is used to add a freeform area to the right or left side of a custom standard framework dialog for displaying decorative images or annotative text. 

This node can be displayed on either the left or right side of the vertical column that contains the dialog's child [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md) nodes ([TitleArea](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md), [StdDlgContentArea(s)](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md), and/or [StdDlgButtonArea](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md)). The node can either extend to the edge of the dialog's background image or honor the background image's 9-patch boundaries.

The width of the vertical column containing the [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md) child nodes does not extend across the full width of the dialog as it does for dialogs that do not contain a **StdDlgSideCardArea** node.

A dialog may contain only a single **StdDlgSideCardArea** node, and that node must be a child of the dialog. 

The **StdDlgSideCardArea** node never gains key focus; therefore, it should not contain any other nodes that require direct user interaction.

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>extendToDialogEdge</td>
<td>boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>Specifies whether the <strong>StdDlgSideCardArea</strong> node extends to the edge of the dialog's background image or respects the background image's 9-patch margins.<br /><ul><li><strong>true</strong>: The origin of the <strong>StdDlgSideCardArea</strong> node's coordinate system is set to the top/left edge of the dialog's background image.</li><li><strong>false</strong>: The origin of the <strong>StdDlgSideCardArea</strong> node's coordinate system is based on the background image's 9-patch margins.</li></ul></td>
</tr>
<tr>
<td>horizAlign</td>
<td>string</td>
<td>"right"</td>
<td>READ_WRITE</td>
<td>Specifies on which side of the custom dialog the StdDlgSideCardArea node appears: "left" or "right".</td>
</tr>
<tr>
<td>showDivider</td>
<td>boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Specifies whether a thin vertical divider line is displayed between the <strong>StdDlgSideCardArea</strong> and the vertical column that contains the dialog's child <strong>StdDlgAreaBase</strong> nodes (<a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md">TitleArea</a>, <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md">StdDlgContentArea(s)</a>, and/or <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md">StdDlgButtonArea</a>). The divider line, if shown, uses the <strong>DialogSecondaryItemColor</strong> field from the current <a href="/docs/references/scenegraph/scene.md#fields">RSG palette</a>.</td>
</tr>
<tr>
<td>width</td>
<td>float</td>
<td>0.0f</td>
<td>READ_WRITE</td>
<td>Specifies the width of the <strong>StdDlgSideCardArea</strong> node.<br /><br />If this field is set to its default value (0.0), the width is set to the width of the <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md"><strong>StdDlgContentArea</strong></a>) node's bounding rectangle (the union of the width of all of its child nodes).<br /><br />If set to a value greater than 0.0, the width of the <strong>StdDlgSideCardArea</strong> node is fixed to that explicit value.<br /><br />The height of <strong>StdDlgSideCardArea</strong> node is based on the StandardDialog layout logic. This sets the height to a maximum of the height of the <strong>StdDlgSideCardArea</strong> bounding rectangle and the height of the vertical column containing the dialog's child <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md"><strong>StdDlgAreaBase</strong></a> nodes. This is constrained by the maximum permissible height of the dialog such that it is fully visible onscreen.</td>
</tr>
</tbody>
</table>



### Examples

The following examples demonstrate how to use the **StdDlgSideCardArea** node to display decorative images or annotative text.

#### Decorative

In this example, the **StdDlgSideCardArea** has a child **Poster** node with its **uri** field set to the URI of a mountain lake image. The height of the dialog is computed to equal the height of the mountain lake image [800 (FHD), 300 (HD)]. The mountain lake **Poster** node has a child **SimpleLabel** node positioned at 575, 775 to show the "PhotoCredit:Jeff Anderson" text on top of the Poster.

![roku815px - SideCardGlamourShot](https://image.roku.com/ZHZscHItMTc2/SideCardGlamourShot.jpg)

```
<?xml version="1.0" encoding="utf-8" ?>
 
<component name="SideCardGlamourShotDialog" extends="StandardDialog" initialFocus="buttonArea" >
 
<script type="text/brightscript" >
<![CDATA[
function init()
    m.top.width  = "1380"
 
    m.buttonArea = m.top.findNode("buttonArea")
    m.top.observeFieldScoped("buttonFocused", "printFocusButton")
    m.top.observeFieldScoped("buttonSelected", "printSelectedButtonAndClose")
    m.top.observeFieldScoped("wasClosed", "wasClosedChanged")
end function
 
sub printFocusButton()
    print "m.buttonArea button ";m.buttonArea.getChild(m.top.buttonFocused).text;" focused"
end sub
 
sub printSelectedButtonAndClose()
    print "m.buttonArea button ";m.buttonArea.getChild(m.top.buttonSelected).text;" selected"
    m.top.close = true
end sub
 
sub wasClosedChanged()
    print "SideCardRightDialog Closed"
end sub
 
]]>
</script>
 
<children>
  <StdDlgTitleArea primaryTitle="Glamour Shot Side Card" />
  <StdDlgContentArea>
     <StdDlgTextItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien massa, efficitur a accumsan a, commodo eget justo. In id ante elementum, posuere diam quis, lobortis magna." />
  </StdDlgContentArea>
  <StdDlgButtonArea id="buttonArea" >
    <StdDlgButton text="OK" />
    <StdDlgButton text="Cancel" />
  </StdDlgButtonArea>
  <StdDlgSideCardArea id="buttonArea" horizAlign="left" extendToDialogEdge="true" showDivider="false"  >
      <Poster id="sideCardPoster" loadSync="true" loadDisplayMode="limitSize" uri="pkg:/images/MountainLakeSideCard.jpg" translation="[0.0f, 0.0f]" />
      <SimpleLabel text="Photo Credit: Jeff Anderson" vertOrigin="bottom" horizOrigin="right" translation="[575, 775]" color="0xFFFFFFFF" fontUri="font:SystemFontFile" fontSize="24"/>        
  </StdDlgSideCardArea>
</children>
 
</component>
```

#### Annotative

In this example, the **StdDlgSideCardArea** has a child **Label** node ("Show the QR Code...") and a child **Poster** node to show the QR code below the Label. The height of the dialog is set to the maximum height of the bounding rectangle of the **StdDlgSideCardArea** and the vertical column that contains the dialog's child [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md) nodes ([TitleArea](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md), [StdDlgContentArea(s)](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md), and/or [StdDlgButtonArea](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md)). In this case, the StdDlgSideCardArea is slightly taller; therefore, it's height is used.

![roku815px - SideCardAnnotation](https://image.roku.com/ZHZscHItMTc2/SideCardAnnotation.jpg)

```
<component name="SideCardAnnotationDialog" extends="StandardDialog" initialFocus="buttonArea" >
 
<script type="text/brightscript" >
<![CDATA[
function init()
    m.top.width  = "1380"
 
    m.buttonArea = m.top.findNode("buttonArea")
    m.top.observeFieldScoped("buttonFocused", "printFocusButton")
    m.top.observeFieldScoped("buttonSelected", "printSelectedButtonAndClose")
    m.top.observeFieldScoped("wasClosed", "wasClosedChanged")
end function
 
sub printFocusButton()
    print "m.buttonArea button ";m.buttonArea.getChild(m.top.buttonFocused).text;" focused"
end sub
 
sub printSelectedButtonAndClose()
    print "m.buttonArea button ";m.buttonArea.getChild(m.top.buttonSelected).text;" selected"
    m.top.close = true
end sub
 
sub wasClosedChanged()
    print "SideCardRightDialog Closed"
end sub
 
]]>
</script>
 
<children>
  <StdDlgTitleArea primaryTitle="Annotation Side Card" />
  <StdDlgContentArea>
     <StdDlgTextItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien massa, efficitur a accumsan a, commodo eget justo. In id ante elementum, posuere diam quis, lobortis magna." />   
  </StdDlgContentArea>
  <StdDlgButtonArea id="buttonArea" >
    <StdDlgButton text="OK" />
    <StdDlgButton text="Cancel" />
  </StdDlgButtonArea>
  <StdDlgSideCardArea id="buttonArea" horizAlign="right" width="500" extendToDialogEdge="false" showDivider="true"  >
      <Label text="Scan the QR Code to get a bunch of free stuff" horizAlign="center" wrap="true" width="500" translation="[0, 0]" fontUri="font:SystemFontFile" fontSize="36"/>
      <Poster translation="[30, 120]" uri="pkg:/images/RokuQRCode441x441.png" />
  </StdDlgSideCardArea>
</children>
 
</component>
```

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that includes a sidecard area.