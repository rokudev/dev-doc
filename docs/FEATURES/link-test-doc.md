---
title: Link Test Doc
deprecated: false
hidden: true
metadata:
  robots: index
---
|                                                                                                                  |    |    |
| :--------------------------------------------------------------------------------------------------------------- | :- | :- |
| see the following [doc](doc:setting-up-web-services#roku-pay-api-key) for more information on setting up web key |    |    |
|                                                                                                                  |    |    |

Custom HTML

<HTMLBlock>{`
<p>see the following <a target="_blank" href="/dev/docs/setting-up-web-services#roku-pay-api-key">doc</a> for more information on setting up web key</p>
`}</HTMLBlock>

<br />

see the following [doc](doc:setting-up-web-services#roku-pay-api-key) for more information on setting up web key

Table - full URL ([https://roku-ent.readme.io/dev/docs/setting-up-web-services#roku-pay-api-key](https://roku-ent.readme.io/dev/docs/setting-up-web-services#roku-pay-api-key))

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Item</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Authorization: Bearer</td>
<td class="short-line">String</td>
<td class="long-line">A JWT token that enables apps to verify that API calls are from Roku. The JWT is signed with the partner's <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a> using the <a href="https://tools.ietf.org/html/rfc7518#section-3.2">HS512 (HMAC using SHA-512)</a> algorithm. To generate the JWT, use the following algorithm, payload, and secret key:<br><br>- <strong>Algorithm</strong>: HS512. <br><br>- <strong>Payload</strong>:<pre><code>"iss": "roku_instant_signup",
"sub": "instant_signup_metadata",
"exp": 1616010343 (1 hour from the current time, in epoch unix timestamp format)
"aud": "roku_developers" (the app name)
"iat": 1616006743 (the current time, in epoch unix timestamp format)
</code></pre><br>- <strong>Secret key</strong>: <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a>(see the following <a href="https://roku-ent.readme.io/dev/docs/setting-up-web-services#roku-pay-api-key">document</a> for more information).<br><br>Apps can use <a href="https://jwt.io/">JWT debugger</a> or other online tool to verify generated JWTs.</td>
</tr>
<tr>
<td class="short-line">locale</td>
<td class="short-line">String</td>
<td class="long-line">The location of the customer in language-country format (en-us or es-mx, for example).</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

Table - relative URL (/docs/setting-up-web-services#roku-pay-api-key)

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Item</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Authorization: Bearer</td>
<td class="short-line">String</td>
<td class="long-line">A JWT token that enables apps to verify that API calls are from Roku. The JWT is signed with the partner's <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a> using the <a href="https://tools.ietf.org/html/rfc7518#section-3.2">HS512 (HMAC using SHA-512)</a> algorithm. To generate the JWT, use the following algorithm, payload, and secret key:<br><br>- <strong>Algorithm</strong>: HS512. <br><br>- <strong>Payload</strong>:<pre><code>"iss": "roku_instant_signup",
"sub": "instant_signup_metadata",
"exp": 1616010343 (1 hour from the current time, in epoch unix timestamp format)
"aud": "roku_developers" (the app name)
"iat": 1616006743 (the current time, in epoch unix timestamp format)
</code></pre><br>- <strong>Secret key</strong>: <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a>(see the following <a href="/dev/docs/setting-up-web-services#roku-pay-api-key">document</a> for more information).<br><br>Apps can use <a href="https://jwt.io/">JWT debugger</a> or other online tool to verify generated JWTs.</td>
</tr>
<tr>
<td class="short-line">locale</td>
<td class="short-line">String</td>
<td class="long-line">The location of the customer in language-country format (en-us or es-mx, for example).</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

Table - [doc:slug] syntax

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Item</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Authorization: Bearer</td>
<td class="short-line">String</td>
<td class="long-line">A JWT token that enables apps to verify that API calls are from Roku. The JWT is signed with the partner's <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a> using the <a href="https://tools.ietf.org/html/rfc7518#section-3.2">HS512 (HMAC using SHA-512)</a> algorithm. To generate the JWT, use the following algorithm, payload, and secret key:<br><br>- <strong>Algorithm</strong>: HS512. <br><br>- <strong>Payload</strong>:<pre><code>"iss": "roku_instant_signup",
"sub": "instant_signup_metadata",
"exp": 1616010343 (1 hour from the current time, in epoch unix timestamp format)
"aud": "roku_developers" (the app name)
"iat": 1616006743 (the current time, in epoch unix timestamp format)
</code></pre><br>- <strong>Secret key</strong>: <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a>(<a target="_self" href="/dev/docs/setting-up-web-services#roku-pay-api-key">doc</a>).<br><br>Apps can use <a href="https://jwt.io/">JWT debugger</a> or other online tool to verify generated JWTs.</td>
</tr>
<tr>
<td class="short-line">locale</td>
<td class="short-line">String</td>
<td class="long-line">The location of the customer in language-country format (en-us or es-mx, for example).</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>
