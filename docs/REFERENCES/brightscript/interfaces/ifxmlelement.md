---
title: "ifXMLElement"
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


## Implemented by

| Name         | Description |
| ------------ | ----------- |
| [roXMLElement](/docs/references/brightscript/components/roxmlelement.md "roXMLElement") | roXMLElement is used to contain an XML tree |


## Supported methods

### Parse(xml as String) as Boolean

#### Description

Parses a string of XML. 

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| xml  | String | The XML string to be parsed |

#### Return Value

A flag indicating whether the operation was successful. In that case, other methods below can then be used to extract information about the parsed element.

### GetBody() as Object

#### Description

Returns the body of the element. If the element contains child elements, `GetBody()` returns an [roXMLList](/docs/references/brightscript/components/roxmllist.md "roXMLList") representing those elements, like GetChildElements(). If there are no children but the element contains text, `GetBody()` returns an [roString](/docs/references/brightscript/components/rostring.md "roString") like `GetText()`. If the element is empty, `GetBody()` returns invalid.

#### Return Value

Object body.

### GetAttributes() as Object

#### Description

Returns the XML attributes of the element. 

#### Return Value

An associative array representing the XML attributes of the element.

### GetName() as String

#### Description

Returns the name of the element.

#### Return Value

Element name.

### GetText() as String

#### Description

Returns any text contained in the element. This returns immediate body text only (for example, it does not include text from child elements).

#### Return Value

The text in the element.

### GetChildElements() as Object

#### Description

If this element contains any child elements, this method returns an [roXMLList](/docs/references/brightscript/components/roxmllist.md "roXMLList") representing those elements. If there are no child elements, returns invalid. 

This function won't handle cases of mixed XML content, i.e., content with both child elements and text such as: Child TextMore Text. In this case `GetChildElements()` called with the top level as an argument would return an roXMLList containing only one item corresponding to the element. The body text "More Text" would be lost. To handle mixed content cases, use `GetChildNodes()`.

#### Return Value

An element list.

### GetChildNodes() as Object

#### Description

If this element contains any child elements, this method returns an [roList](/docs/references/brightscript/components/rolist.md "roList") representing those elements. If there are no child elements, returns invalid. The difference between this function and `GetChildElements()` is that `GetChildNodes()` handles the case of mixed XML content, i.e., content with both child elements and text such as: Child TextMore Text. In this case `GetChildNodes()` called with the top level as an argument would return an roList with two elements. The first element would be an `roXMLElement` containing the information about. The second would be an `roString` containing "More Text".

#### Return Value

An element list.

### GetNamedElements(name as String) as Object

#### Description

Returns an [roXMLList](/docs/references/brightscript/components/roxmllist.md "roXMLList") representing all child elements of this element whose case-sensitive name is specified. If only one element matches the name, an roXMLList containing one element is returned. If no elements match, an empty roXMLList is returned.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name  | String | The parent element containing the child elements to be listed. Matching of the parent element name is case-sensitive.|

#### Return Value

An element list.

### GetNamedElementsCi(name as String) as Object

#### Description

Returns an [roXMLList](/docs/references/brightscript/components/roxmllist.md "roXMLList") representing all child elements of this element whose case-insensitive name is specified. If only one element matches the name, an roXMLList containing one element is returned. If no elements match, an empty roXMLList is returned.

#### Parameters

| Name | Type   | Description                                                  |
| ---- | ------ | ------------------------------------------------------------ |
| name | String | The parent element containing the child elements to be listed. Matching of the parent element name is case-sensitive. |

#### Return Value

An element list.

### IsName(name as String) as Boolean

#### Description

Checks whether the element has the specified name.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name  | String | The element name to be verified.|

#### Return Value

A flag indicating whether the element has the specified name.

### HasAttribute(attr as String) as Boolean

Checks whether the element has the specified attribute.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| attr  | String | The element attribute to be verified.|

#### Return Value

A flag indicating whether the element has the specified attribute.

### SetBody(body as Object) as Void

#### Description

Sets the element text from the specified string

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| body  | Object | The string to be used to set the element text.|

### AddBodyElement() as Object

#### Description

Adds a new unnamed/empty child element and returns it. This should generally be followed by a call to the [SetName()](#setnamename-as-string-as-void) method of the child element. Alternatively, the [AddElement()](#addelementname-as-string-as-object) or [AddElementWidthBody()](#addelementwithbodyname-as-string-body-as-object-as-object) method can be used to combine this step with additional construction into one call.

#### Return Value

Object value.

### AddElement(name as String) as Object

#### Description

Adds a new child element with the specified name and returns the new element.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name  | String | The name of the child element to be added.|

#### Return Value

The new element added. 

### AddElementWithBody(name as String, body as Object) as Object

#### Description

Adds a new child element with the specified name and text from the specified body string, and returns the new element.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name  | String | The name of the child element to be added.|
| body  | Object | The text of the child element to be added (via the body string).|

#### Return Value

The new element added. 

### AddText(text as String) as Void

#### Description

Adds text to the element.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text  | String | The text to be added to the element.|

### AddAttribute(attr as String, value as String) as Void

#### Description

Adds an attribute value to the element. If an attribute of the same name already exists it is replaced. XML attribute order is not preserved.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| attr  | String | The name of the attribute to be added to the element.|
| value  | Object | The value of the attribute being added to the element.|

### SetName(name as String) as Void

#### Description

Sets the name of the element.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name  | String | The name of the element.|

### GenXML(gen_header as Boolean) as String

#### Description

Serializes the element to XML document text.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| gen_header  | Boolean | Specifies whether the output begins with a standard XML declaration specifying UTF-8 encoding. |

#### Return Value

A serialized string.

### GenXMLHdr(hdr as String) as String

#### Description

Serializes the element to XML document text. The specified header is used to begin the output (for example, as a custom XML declaration).

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| hdr  | String | Specify the header with which the output begins.|

#### Return Value

A serialized string.

### Clear() as Void

#### Description

Removes all attributes and children from the element, as well as setting the name to empty.