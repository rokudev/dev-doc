---
title: Group
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

Group is the base class of all renderable nodes. Group also provides fields that control the transformation, visibility and opacity of themselves and all of their children.

Each Group defines a local coordinate system relative to the coordinate system of its parent node. A 2D matrix that describes how points in the local coordinate system can be transformed into the parent node coordinate system is constructed from the values of the translation, rotation, scale, and scaleRotateCenter fields.

The 2D matrix is computed using the values of these four fields in the following order:

* translating by the negative of the scaleRotateCenter field value
* scaling by the scale field value
* rotating by the rotation field value
* translating by the scaleRotateCenter field value
* translating by the translation field value

In matrix math terms, the overall 2D matrix is:

M = C(-1) S R C T

Where:

* M is the total matrix
* C is a 2D translation matrix that describes the location of the scale/rotation center in the node's local coordinate system
* C(-1) is the inverse of C
* S is a 2D scaling matrix
* R is a 2D rotation matrix
* T is a 2D translation matrix

> In nearly all cases, either the default values for these four fields will be used (in which case, the local coordinate system of the node is the same as the parent node coordinate system), or only a translation will be specified (in which, the local coordinate system is a simple offset from the parent node coordinate system).

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
      <td>visible</td>
      <td>Boolean</td>
      <td>true</td>
      <td>READ\_WRITE</td>
      <td>If true, the node and its children are rendered. If false, the node and its children do not render</td>
    </tr>

    <tr>
      <td>opacity</td>
      <td>float</td>
      <td>1.0</td>
      <td>READ\_WRITE</td>
      <td>Sets the opacity of the node and its children. Opacity is the opposite of transparency. Opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque). As the SceneGraph is traversed, the opacity values are combined by multiplying the current accumulated opacity with the node opacity, so that if the accumulated opacity of a node ancestors is 0.25 (75% transparent), the node will have opacity of 0.25 or less. This allows entire branches of the SceneGraph to fade in and out by animating the opacity of the node at the root of the branch</td>
    </tr>

    <tr>
      <td>translation</td>
      <td>vector2d</td>
      <td>\[0.0,0.0]</td>
      <td>READ\_WRITE</td>
      <td>Defines the origin of the node local coordinate system relative to its parent node</td>
    </tr>

    <tr>
      <td>rotation</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_WRITE</td>
      <td>Defines the rotation angle about the scaleRotateCenter point (in radians) of the node local coordinate system. Positive values specify a counterclockwise rotation, negative values specify a clockwise rotation. For some Roku Player hardware, specifically Roku Players without OpenGL graphics support, only rotations of 0, 90, 180 and 270 degrees (in equivalent radians) are supported. (See <a href="/dev/docs/hardware#current-roku-models" title="Roku Models and Features">Roku Models and Features</a> for information on OpenGL support)</td>
    </tr>

    <tr>
      <td>scale</td>
      <td>vector2d</td>
      <td>\[1.0,1.0]</td>
      <td>READ\_WRITE</td>
      <td>Defines the scale factor to be applied to the node local coordinate</td>
    </tr>

    <tr>
      <td>scaleRotateCenter</td>
      <td>vector2d</td>
      <td>\[0.0,0.0]</td>
      <td>READ\_WRITE</td>
      <td>Describes the location of a point in the node local coordinate that serves as the center of the scale and rotation operations</td>
    </tr>

    <tr>
      <td>childRenderOrder</td>
      <td>option as string</td>
      <td>renderLast</td>
      <td>READ\_WRITE</td>
      <td><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>"renderFirst"</code></td><td>any drawing done by this node will be done <strong>before</strong> the node children are rendered</td></tr><tr><td><code>"renderLast"</code></td><td>any drawing done by this node will be done <strong>after</strong> the node children are rendered</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>inheritParentTransform</td>
      <td>Boolean</td>
      <td>true</td>
      <td>READ\_WRITE</td>
      <td>If true, the node overall transformation is determined by combining the accumulated transformation matrix of all of its ancestors in the SceneGraph with the node local 2D transformation matrix described by its translation, rotation, scale and scaleRotateCenter fields. If false, the accumulated transformation of all of its ancestors in the SceneGraph is ignored and only the node local transformation matrix is used. This causes the node to be transformed relative to the root of the SceneGraph (that is, the Scene component)</td>
    </tr>

    <tr>
      <td>inheritParentOpacity</td>
      <td>Boolean</td>
      <td>true</td>
      <td>READ\_WRITE</td>
      <td>If true, the node opacity is determined by multiplying opacity attribute of the node by the opacity of the parent node, which may have been determined by multiplying the opacity of its ancestor nodes. If false, the node opacity is determined by the opacity attribute set for the node or the default opacity attribute value</td>
    </tr>

    <tr>
      <td>clippingRect</td>
      <td>array of float</td>
      <td>\[ 0.0, 0.0, 0.0, 0.0 ]</td>
      <td>READ\_WRITE</td>
      <td>Specifies a rectangle in the node local coordinate system that is used to limit the region where this node and its children can render. If a non-empty rectangle is specified, then all drawing by this node and its children will be limited to that rectangular area. <ul><li><code>ClippingRects</code> can be specified by the node or by any of its ancestors in the SceneGraph.</li><li><code>ClippingRects</code> are automatically set by some nodes such as lists and grids.</li><li><code>ClippingRects</code> are always clipped to the screen boundaries, so if a <code>clippingRect</code> is specified that is partially or completely offscreen, it will be clipped to the screen boundaries. With respect to render tracking, although the node could be completely within the bounds of the specified <code>clippingRect</code>, it's <code>renderTracking</code> field could be set to <code>"none"</code> if the portion of the <code>clippingRect</code> it occupies is completely offscreen.</li></ul></td>
    </tr>

    <tr>
      <td>renderPass</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_WRITE</td>
      <td>Used in combination with the numRenderPasses field of nodes extended from the <a href="/dev/docs/arraygrid" title="ArrayGrid">ArrayGrid</a> abstract node class, to optimize rendering of lists and grids. This should never be set to a non-zero value unless you are optimizing the performance of a list or grid rendering by specifying the sequence of rendering operations for sub-elements of the list or grid items, and have set the numRenderPasses field value for the list or grid to a value greater than 1. If the numRenderPasses field value for the list or grid is set to a value greater than 1, you must set this field to a value greater than 0 for all sub-elements of the list or grid items, and not greater than the numRenderPasses field value. If the numRenderPasses field is set to a value greater than 1, and you set this field for a list or grid item sub-element to 0 (the default), or a value greater than the numRenderPasses field value, the list or grid item sub-element will not render</td>
    </tr>

    <tr>
      <td>muteAudioGuide</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Set to true to suppress the default CVAA text to speech. This allows apps to provide their own custom implementation</td>
    </tr>

    <tr>
      <td>enableRenderTracking</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>If true, renderTracking will be set to a string describing how much of the node is rendered on screen</td>
    </tr>

    <tr>
      <td>renderTracking</td>
      <td>option as string</td>
      <td>disabled</td>
      <td>READ\_WRITE</td>

      <td>
        renderTracking is set to "disabled" when enableRenderTracking is set to false. The following options are only available when enableRenderTracking is set to true:

        <table>
          <thead>
            <tr>
              <th>Option</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>"none"</code></td>

              <td>
                renderTracking is set to: <code>"none"</code> if <strong>one or more</strong> of these conditions is true:

                <ul>
                  <li>the node's <code>visible</code> field is set to <code>false</code>.</li>
                  <li>the node's <code>opacity</code> field is set to <code>0.0</code>.</li>
                  <li>no <code>clippingRect</code> is specified and the node is completely offscreen.</li>
                  <li>a <code>clippingRect</code> is specified and the node lies completely outside that <code>clippingRect's</code> coordinates or is completely offscreen.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><code>"partial"</code></td>

              <td>
                renderTracking is set to <code>"partial"</code> if <strong>all</strong> of the following conditions are true:

                <ul>
                  <li>the node's <code>visible</code> field is set to <code>true</code>.</li>
                  <li>the node's <code>opacity</code> field is greater than <code>0.0</code>.</li>
                  <li>no <code>clippingRect</code> is specified and the node is partially offscreen.</li>
                  <li>a <code>clippingRect</code> is specified and the node lies partially inside the <code>clippingRect's</code> coordinates.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><code>"full"</code></td>

              <td>
                renderTracking is set to <code>"full"</code> if <strong>all</strong> of the following conditions are true:

                <ul>
                  <li>the node's <code>visible</code> field is set to <code>true</code>.</li>
                  <li>the node's <code>opacity</code> field is greater than <code>0.0</code>.</li>
                  <li>no <code>clippingRect</code> is specified and the node is completely onscreen.</li>
                  <li>a <code>clippingRect</code> is specified and the node lies completely inside the <code>clippingRect's</code> coordinates.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
