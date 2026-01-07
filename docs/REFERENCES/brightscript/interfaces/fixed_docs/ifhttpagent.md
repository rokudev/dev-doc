---
title: "ifHttpAgent"
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

# ifHttpAgent

The ifHttpAgent methods modify the way that URLs are accessed

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roAppManager](/docs/references/brightscript/components/roappmanager.md "roAppManager") | The Application Manager APIs set application level attributes, which mostly affect the look-and-feel of the application |
| [roAudioPlayer](/docs/references/brightscript/components/roaudioplayer.md "roAudioPlayer") | The Audio Player object provides the ability to setup the playing of a series of audio streams |
| [roSGNode](/docs/references/brightscript/components/rosgnode.md "roSGNode") | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |
| [roTextureManager](/docs/references/brightscript/components/rotexturemanager.md "roTextureManager") | The Texture Manager provides a set of API's for managing an roBitmap cache. |
| [roTextureRequest](/docs/references/brightscript/components/rotexturerequest.md "roTextureRequest") | An roTextureRequest is used to make requests to the roTextureManager |
| [roUrlTransfer](/docs/references/brightscript/components/rourltransfer.md "roUrlTransfer") | A roUrlTransfer object transfers data to or from remote servers specified by URLs |
| [roVideoPlayer](/docs/references/brightscript/components/rovideoplayer.md "roVideoPlayer") | The roVideoPlayer component implements a video player with more programmatic control, but less user control than the roVideoScreen component |


## Supported methods

### AddHeader(name as String, value as String) as Boolean

Adds the specified HTTP header to the list of headers that will be sent in the HTTP request.

Certain well known headers such as User-Agent, Content-Length, and so on are automatically sent. The application may override the values for these headers if needed (for example, some servers may require a specific user agent string).

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>The name of the HTTP header to be added to the list of headers. <br /><br />If "x-roku-reserved-dev-id" is passed as the name, the value parameter is ignored and in its place, the devid of the currently running app is used as the value. This allows the developer's server to know which client app is talking to it. <br /><br />Any other headers with names beginning with "x-roku-reserved-" are reserved and may not be set.</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>The value of the HTTP header being added.</td>
</tr>
</tbody>
</table>


#### Return Value

A flag indicating whether the HTTP header was successfully added.

### SetHeaders(nameValueMap as Object) as Boolean

#### Description

Sets the HTTP headers to be sent in the HTTP request.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nameValueMap</td>
<td>Object</td>
<td>An associative array containing the HTTP headers and values to be included in the HTTP request. <br /><br />If "x-roku-reserved-dev-id" is passed as a key, the value parameter is ignored and in its place, the devid of the currently running app is used as the value. This allows the developer's server to know which client app is talking to it. <br /><br />Any other headers with names beginning with "x-roku-reserved-" are reserved and may not be set.</td>
</tr>
</tbody>
</table>


#### Return Value

A flag indicating whether the HTTP header was successfully set.

### InitClientCertificates() as Boolean

#### Description

Initializes the object to be sent to the Roku client certificate.

> The Roku Developer Dashboard includes a link for downloading the [RokuTV Certification Authority](https://developer.roku.com/certificate). This CA can be passed to an app through this function.

#### Return Value

A flag indicating whether the object sent to to the Roku client certificate was successfully initialized.

### SetCertificatesFile(path as String) as Boolean

Set the certificates file used for SSL to the specified .pem file.

#### Parameters

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| path | String | The directory path of the .pem file to be used. |

#### Return Value

A flag indicating whether the certificate was successfully set.

### SetCertificatesDepth(depth as Integer) as Void

#### Description

Sets the maximum depth of the certificate chain that will be accepted.

#### Parameters

| Name  | Type    | Description                   |
| ----- | ------- | ----------------------------- |
| depth | Integer | The maximum depth to be used. |

### EnableCookies() as Void

#### Description

Enables any Set-Cookie headers returned from the request to be interpreted and the resulting cookies to be added to the cookie cache.

### GetCookies(domain as String, path as String) as Object

#### Descripton

Returns any cookies from the cookie cache that match the specified domain and path. Expired cookies are not returned.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>domain</td>
<td>String</td>
<td>The domain of the cookies to be retrieved.  To match all domains, provide an empty string.</td>
</tr>
<tr>
<td>path</td>
<td>String</td>
<td>The path of the cookies to be retrieved.</td>
</tr>
<tr>
<td>secure<br /><br /><em>Available since Roku OS 12.0</em></td>
<td>Boolean</td>
<td>Indicates whether the cookie is to be retrieved via HTTPS (true) or HTTP (false).</td>
</tr>
</tbody>
</table>


#### Return Value

An roArray of roAssociativeArrays, where each associative array represents a cookie. The roAssociativeArrays contain the following key-value pairs:

| Name | Type | Description |
| - | - | - |
| Version | Integer | Cookie version number |
| Domain | String |Domain to which cookie applies|
| Path | String |Path to which cookie applies|
| Name | String |Name of the cookie|
| Value | String |Value of the cookie|
| Expires | roDateTime | Cookie expiration date, if any |

### AddCookies(cookies as Object) as Boolean

#### Description

Adds the specified cookies to the cookie cache.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cookies</td>
<td>Object</td>
<td>An roArray of roAssociativeArrays, where each associative array represents a cookie to be added. Each associative array must contain the following key-value pairs: <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>Version</td><td>Integer</td><td>Cookie version number</td></tr><tr><td>Domain</td><td>String</td><td>Domain to which cookie applies</td></tr><tr><td>Path</td><td>String</td><td>Path to which cookie applies</td></tr><tr><td>Name</td><td>String</td><td>Name of the cookie</td></tr><tr><td>Value</td><td>String</td><td>Value of the cookie</td></tr><tr><td>Expires</td><td>roDateTime</td><td>Cookie expiration date, if any</td></tr><tr><td>Secure<br /><br /><em>Available since Roku OS 12.0</em></td><td>Boolean</td><td>Indicates whether the cookie is to be sent over HTTPS (true) or HTTP (false).</td></tr></tbody></table></td>
</tr>
</tbody>
</table>



#### Return Value

A flag indicating whether the cookies were successfully added to the cache.

### ClearCookies() as Void

#### Description

Removes all cookies from the cookie cache.


## Server Side Configuration of SSL Mutual Authentication on Apache

1. Create a Self-Signed CA (Certificate Authority) root Certificate
    * Create the root CA private key (remember the password chosen). This is needed to sign new certificates.
    * Create the root CA.

            openssl genrsa -out rootCA.key 4096
            openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 825 -out rootCA.crt


2. OpenSSL Server Cert
    * Create the Web Server's key (remember the password chosen).
    * Create the Web Server's Cert Req.
    * Sign the Web Server's Cert Req with the CA Cert. In the *extfile* keyword, provide the path to the config file.

            openssl genrsa -out <server>.key 2048
            openssl req -new -key <server>.key -out <server>.csr -config <server>.conf
            openssl x509 -req -in <server>.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out <server>.crt -days 825 -sha256 -extfile <config_file_path> -extensions req_ext


        **Sample config file**: The following demonstrates a config file to be referenced by the *extfile* keyword

            [req]
            default_bits = 2048
            prompt = no
            default_md = sha256
            req_extensions = req_ext
            distinguished_name = dn
            [dn]
            C = <COUNTRY>
            ST = <STATE>
            L = <CITY>
            O = <ORGANIZATION>
            OU = <ORGANIZATIONAL_UNIT>
            emailAddress = <CONTACT>
            CN = <DOMAIN>.com
            [req_ext]
            subjectAltName = @alt_names
            [alt_names]
            DNS.1 = <DOMAIN>.com
            DNS.2 = <DOMAIN_ALT>.com

3. Install Cert in Apache
    * Optionally, you can remove the passwd from the keyfile if you don't want to enter the passwd for testWEB every time Apache starts
    * Edit /etc/httpd/conf.d/ssl.conf
    * Edit /etc/httpd/conf/httpd.conf
    * Restart Apache

    ```
    # Install Cert in Apache
    sudo mkdir /etc/httpd/certs
    sudo cp /opt/openssl/testCA/server/certificates/testWEB.CRT /etc/httpd/certs
    sudo cp /opt/openssl/testCA/server/keys/testWEB.KEY /etc/httpd/certs
    sudo cp sudo cp /opt/openssl/testCA/CA/testCA.CRT /etc/httpd/certs

    # Remove the passwd from the keyfile (to avoid entering it for testWEB every time Apache starts)
    sudo cp /etc/httpd/certs/testWEB.KEY
    /etc/httpd/certs/testWEB.KEY.orig
    sudo openssl rsa -in /etc/httpd/certs/testWEB.KEY.orig -out /etc/httpd/certs/testWEB.KEY

    # Editing ssl.conf

    # Configure your server cert:
    SSLCertificateFile /etc/httpd/certs/testWEB.CRT
    SSLCertificateKeyFile /etc/httpd/certs/testWEB.KEY

    # Configure client cert authentication:
    SSLCACertificateFile /etc/httpd/certs/cacert.pem

    # from roku sdk
    SSLVerifyClient require
    SSLVerifyDepth 1

    # Editing httpd.conf

    # In <Directory> </Directory> tags where your video resides:`
    # Checking the x-roku-reserved-dev-id header value assures that it is
    # your package trying to connect to this directory.

    # You can find the dev-id of your brightscript package by going to the developer page on your Roku box, and selecting "Utilities".
    # On the "Utilities" page, select "Choose File", enter the passwd for that pkg, and click "Inspect"
    # Copy the value for the "Dev ID:" parameter and paste it here:
    SetEnvIf x-roku-reserved-dev-id 6bb22ba64125f6da56fa4b7d6f2199a970d06672 let_roku_in`
    SSLRequireSSL`
    Order Deny,Allow`
    Deny from all`
    Allow from env=let_roku_in`

    # Restarting Apache
    sudo service httpd restart
    ```

4. Place your video in your Apache directory configured in step 3 above.

5. Modify the simplevideoplayer application to access the secure video:
    * Add the testCA.CRT (The Certificate Authority cert) file to the simplevideoplayer/source directory.
    * In the appMain.brs:displyVideo() function, change the URL and video meta-data to match the video you put on your server in step 4).
    * Right before the "video.SetContent(videoclip)" line, add the following calls:
		```
      video.Addheader("x-roku-reserved-dev-id","")
      video.SetCertificatesFile("pkg:/source/testCA.CRT")
      video.InitClientCertificates()
      ```
6. Test the authentication with and without the code in step 5 above. If any of the three authentication methods above are ommitted you should get access denied. Note that you cannot successfully access the video until you've built a package, uploaded it to the app store, and are running that app via an app code. A sideloaded app does not properly negotiate client certs or send the enforced dev-id value for the x-roku-reserved-dev-id header.