---
title: API reference
excerpt: 'Manage Roku virtual devices programmatically with the RCE Core and Device REST APIs'
deprecated: false
hidden: false
metadata:
  title: 'Roku Cloud Emulator API Guide'
  description: 'Use the Roku Cloud Emulator REST APIs to add, start, and manage virtual devices, send ECP commands, sideload apps, stream logs, and access the debug consoles.'
  robots: index
next:
  description: ''
---
The Roku Cloud Emulator (RCE) REST API enables you to manage virtual devices programmatically. You can use the API for automation workflows, CI/CD integration, and direct scripting without using the web interface. There are two sets of APIs:

- **Core API**: Manages virtual devices and snapshots, such as starting or stopping a device.
- **Device API**: Interacts with running virtual device instances, such as retrieving live debug logs or sending ECP commands to the virtual device.

> The [interactive API doc](http://docs.rce.roku.com/) is the authoritative reference for the RCE APIs that you can use it to test the endpoints directly. This guide provides workflow context and examples, but may lag behind the live spec.

## Core API reference

| Item | Description |
| --- | --- |
| **Endpoint** | The base URL for the RCE Core APIs is `api.rce.roku.com`. |
| **Protocol** | RCE Core API calls use only HTTPS to send requests. |
| **Methods** | The RCE Core APIs support the following REST methods for adding, running, managing, and deleting virtual devices: **POST** (add, manage, and stop devices; save snapshots), **GET** (get a project ID, run devices, check device status, retrieve device activity logs), **PATCH** (update devices and snapshots), and **DELETE** (remove a device). |
| **Header** | Requests to the RCE Core APIs require the following headers: **Authorization** (bearer authentication) `Authorization: Bearer <PERSONAL_ACCESS_TOKEN>` — see [Appendix A](#appendix-a-generate-a-personal-access-token) for how to generate the token; and **Content-Type** `application/json`. |
| **Resource IDs** | Resource IDs are integers, except for users, which use UUIDs. |
| **Response** | Most of the RCE Core APIs return a JSON payload. The only exception is the logs API, which returns a gzipped tar file (`.tar.gz`). All APIs return one of the following response codes: **200** OK; **201** Created (resource created successfully); **202** Accepted (device start or stop request queued); **204** No content (DELETE requests only); **400** Bad request (required fields are missing from the payload; a description of the error is returned); **401** Unauthorized (invalid or missing token, bad credentials); **403** Forbidden (role or permission denied); **404** Not found (user not found, generic resource missing); **409** Conflict (duplicate or state conflict: project devices, running devices); **422** Unprocessable entity (bad UUID, timestamp, or format). |

## Device API reference

| Item | Description |
| --- | --- |
| **Endpoint** | The base URL for the RCE Device APIs is `device.rce.roku.com/instance/{instance_uuid}`. You can retrieve the `instance_uuid` from the RCE web interface with the **Copy device API URL** button, or programmatically with the `GET /api/v1/devices/{device_id}` endpoint. |
| **Protocol** | RCE Device API calls use HTTPS (`https://`) for ECP key commands, and WebSocket (`wss://`) for telnet interactions and log streaming. |
| **Methods** | The RCE Device APIs support the following REST methods: **GET** and **POST**, both used to send ECP commands to the virtual device. |
| **Header** | Requests to the RCE Device APIs require the **Authorization** header (bearer authentication): `Authorization: Bearer <PERSONAL_ACCESS_TOKEN>`. See [Appendix A](#appendix-a-generate-a-personal-access-token) for how to generate the token. |
| **Response** | All APIs return one of the following response codes: **200** OK; **400** Bad request (wrong protocol); **422** Unprocessable entity (bad UUID, timestamp, or format). |

## API workflow

The general API workflow for adding and using Roku virtual devices is as follows:

1. Add a device.
2. Start a device.
3. Check the device status.
4. Interact with the device: control the device, stream firmware logs, and access the debug console.
5. Manage the device: save a snapshot, stop the device, and delete the device.

### Add a device

To instantiate a Roku virtual device, send the following POST request. When you add a device, an initial snapshot is created automatically.

**URL**

```
POST /api/v1/devices
```

**Request body**

```json
{
  "name": "My TV Device",
  "device_type": "tv"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `name` | string | A unique, descriptive name for your device that makes it easy to identify. |
| `device_type` | string | Whether you are creating a Roku TV (`tv`) or a streaming player (`stb`). |

**Response**

This API returns a JSON object describing the properties of a device resource. The `id` property represents the device ID that you use in subsequent calls to run and manage the device.

```json
{
  "id": 74,
  "esn": "XY0000FAKESN",
  "device_type": "tv",
  "name": "Regression Test Device",
  "description": null,
  "account_name": null,
  "last_snapshot": null,
  "last_snapshot_name": null,
  "rootfs_artifactory_path": null,
  "snapshots": [
    215,
    216
  ],
  "status": "shutdown",
  "running_device": null
}
```

### Start a device

To launch and run a device, you need a build and a snapshot.

1. Send the following GET request to retrieve the available device builds you can run:

   ```
   GET /api/v1/firmwareVersions
   ```

   This API returns a list of firmware versions. Pass the value of the `firmware_version_id` property to the API that starts a device.

   ```json
   [
     {
       "firmware_version_id": "rce-fw:15.2.4-tv_prod",
       "device_type": "tv",
       "display_name": "15.2.4 TV"
     }
   ]
   ```

2. Send the following GET request to retrieve the available snapshots for the device:

   ```
   GET /api/v1/devices/{device_id}/snapshots
   ```

   This API returns a list of snapshot resources linked to the device. Pass the snapshot's `id` property to the API that starts the device.

   ```json
   [
     {
       "id": 215,
       "created_at": "2026-07-08T21:01:49.511879Z",
       "parent_id": null,
       "name": "base-snapshot",
       "description": "Snapshot at the beginning of device setup...",
       "rootfs_artifactory_path": null,
       "build_display_name": null,
       "started_at": "2026-07-08T21:14:25.942083Z",
       "children": [],
       "ready": true,
       "live": false,
       "base": true
     }
   ]
   ```

3. Send the following POST request to start the device:

   ```
   POST /api/v1/devices/{device_id}/start
   ```

   **Request body**

   ```json
   {
     "snapshot_id": 215,
     "firmware_version_id": "rce-fw:15.2.4-tv_prod",
     "max_runtime": 3600
   }
   ```

   | Field | Type | Description |
   | --- | --- | --- |
   | `snapshot_id` | integer | The unique ID generated for a snapshot. |
   | `firmware_version_id` | string | The unique ID of the firmware version to run. |
   | `max_runtime` | integer | The maximum runtime for the device, in seconds. |

   This API returns a JSON object describing the properties of a device resource.

### Check the device status

Wait until the device is in the running state before interacting with it. To check the current state of a device, send the following GET request:

**Request**

```
GET /api/v1/devices/{device_id}
```

**Response**

This API returns a JSON object describing the properties of a device resource.

The `status` property is a string representing the state of a Roku virtual device, which may have one of the following values:

- `created`: The request to add the device was captured.
- `pending`: Waiting for compute capacity, or launching.
- `running`: The device is running and accessible.
- `completed`: The device was stopped by the user.
- `failed`: The device failed to start or quit unexpectedly.

Use the `running_device.instance_uuid` property in the Device API base URL to make API requests to the device.

```json
{
  "id": 74,
  "esn": "XY0000FAKESN",
  "device_type": "tv",
  "name": "API Test",
  "description": null,
  "account_name": null,
  "last_snapshot": 215,
  "last_snapshot_name": "base-snapshot",
  "rootfs_artifactory_path": "rce-fw:15.2.4-tv_prod",
  "snapshots": [
    215,
    216
  ],
  "status": "running",
  "running_device": {
    "instance_uuid": "67f55a60-b551-4339-ae83-b49a9755030e"
  }
}
```

### Interact with a device

Use the Device APIs to interact with the device. You can access the debug consoles, firmware logs, and send ECP key commands.

> The Device APIs have a different base URL and protocols from the Core APIs. For more information, see [Device API reference](#device-api-reference).

##### Send ECP commands to control the device

To send ECP commands, for example to move the cursor or type text, send one of the following HTTPS POST requests without a request body:

**Request**

```
POST /api/v0/input/keypress/{key}
POST /api/v0/input/keydown/{key}
POST /api/v0/input/keyup/{key}
```

For example, to press the remote Home button:

```
POST /api/v0/input/keypress/Home
```

For a list of key values, see the [External Control Protocol documentation](https://developer.roku.com/dev/docs/external-control-api#keypress-key-values).

##### Other ECP commands

> These endpoints require **Control by mobile apps** and developer mode to be enabled.

To send ECP commands, for example to query the device, make a GET or POST request to the `/api/v0/port/8060/http/{command}` path.

For example, to retrieve device info:

```
GET /api/v0/port/8060/http/query/device-info
```

To use the search UI:

```
POST /api/v0/port/8060/http/search/browse?keyword=stranger%20things&type=tv-show
```

For a list of commands, see the [External Control Protocol documentation](https://developer.roku.com/dev/docs/external-control-api).

##### Sideload an app

To sideload an app, POST form data to the `/sideload/plugin_install` endpoint with your app ZIP file.

Send your RCE token in the `X-Authorization` header instead of the `Authorization` header. The `Authorization` header uses HTTP digest authentication (username `rokudev`, password set when developer mode was enabled). Most HTTP clients negotiate the digest challenge automatically.

**Request**

```
POST /sideload/plugin_install
```

**Headers**

| Header | Value |
| --- | --- |
| `Content-Type` | `multipart/form-data` |
| `X-Authorization` | `Bearer {RCE_TOKEN}` |
| `Authorization` | Digest (realm `rokudev`, algorithm `MD5`, qop `auth`). Digest credentials: username `rokudev`; password set when developer mode was enabled. |

**Form fields**

| Field | Type | Description |
| --- | --- | --- |
| `mysubmit` | string | One of the following values: `Install` (install a dev app) or `Delete` (remove the currently installed dev app). |
| `archive` | binary | The app `.zip` file. Omit for `Delete` operations. |

**Response**

This API returns HTML content where the body contains a description of the success or failure. It returns HTTP status code 200 even when the operation functionally fails.

**cURL example**

```bash
curl -X POST --digest -u "rokudev:$PASSWORD" \
-H "Content-type: multipart/form-data" \
-H "X-Authorization: Bearer $RCE_TOKEN" \
-F "mysubmit=Install" -F "archive=@app.zip" \
https://device.rce.roku.com/instance/{INSTANCE_UUID}/sideload/plugin_install
```

##### Stream firmware logs

To stream firmware logs, establish a WebSocket connection to the following:

```
wss://device.rce.roku.com/instance/{instance_uuid}/api/v0/device-logs/firmware
```

You can optionally pass the URL parameter `from_start=true` to stream the log from when the device was launched:

```
wss://device.rce.roku.com/instance/{instance_uuid}/api/v0/device-logs/firmware?from_start=true
```

##### Access the debug consoles

To access the debug consoles, establish a WebSocket connection to any of the following:

**SceneGraph console**

```
wss://device.rce.roku.com/instance/{instance_uuid}/api/v0/port/8080
```

**BrightScript console**

```
wss://device.rce.roku.com/instance/{instance_uuid}/api/v0/port/8085
```

**Screensaver console**

```
wss://device.rce.roku.com/instance/{instance_uuid}/api/v0/port/8087
```

You can send commands and receive responses once you establish a connection.

For more information on using these consoles, see [Debugging](https://developer.roku.com/dev/docs/debugging).

### Manage devices

Once the device runs, use the Core APIs to save snapshots and then stop it. After stopping the device, you can delete it.

##### Save snapshots

You can take snapshots to save the state of a virtual device at a specific time and then restore the device to that state later. Snapshots enable you to configure, save, and use multiple states to run different test cases on a single virtual device. They also eliminate redundant manual steps that would otherwise be needed to reconfigure your device back to a state for running specific test cases.

To save a device snapshot, send the following POST request:

**URL**

```
POST /api/v1/devices/{device_id}/snapshots
```

**Request body**

```json
{
  "name": "After Guided Setup"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `name` | string | A unique, descriptive name for the snapshot that makes it easy to identify the device state. |

**Response**

This API returns a JSON object describing a snapshot resource.

```json
{
  "id": 221,
  "created_at": "2026-07-08T21:43:53.857605Z",
  "parent_id": 215,
  "name": "After Guided Setup",
  "description": null,
  "rootfs_artifactory_path": "rce-fw:15.2.4-tv_prod",
  "build_display_name": "15.2.4 TV",
  "started_at": null,
  "children": [],
  "ready": false,
  "live": false,
  "base": false
}
```

##### Stop a device

To stop running a device, send the following POST request:

```
POST /api/v1/devices/{device_id}/stop
```

##### Delete a device

To permanently remove a device, send the following DELETE request:

```
DELETE /api/v1/devices/{device_id}
```

## Appendix A: Generate a Personal Access Token

The RCE APIs require a Personal Access Token (PAT) for authentication. To generate a PAT, follow these steps:

1. From the [Roku Launchpad](https://developer.roku.com/dev/landing), click **Cloud Emulator** in the **Roku Developers** pane.
2. The [Roku Cloud Emulator UI](https://developer.roku.com/cloud-emulator/devices) opens with the index page.
3. Click the **Token** tab.
4. Click **Add token** to open the **Add token** dialog.
5. In the dialog:
   1. Enter a name for the token.
   2. Select an expiration date for the token.
6. Click **Add token**. Copy and save your token.
7. Include the token in the `Authorization` header of each REST API call using the following syntax: `Authorization: Bearer <PERSONAL_ACCESS_TOKEN>`.
