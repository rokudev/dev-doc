---
title: "Roku Sso Authentication Protocol"
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

## Roku SSO authentication protocol

> This document has been deprecated. Use [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md) to authenticate Roku customers.

### Introduction

This specification defines a mechanism and protocols for the Roku Single
Sign-On (SSO) service, whereby an app publsiher can authorize a Roku
service to share a federated identity unique to that app in order to
establish an account link between a Roku customer account and a Publisher
user account. This account link can be used to automatically sign a user
in to an app, especially when the user has added
an additional Roku device to their Roku account or has performed a
factory reset.

### High level process overview

**Step 1.** User launches app.

**Step 2:** The app determines if the Roku device is linked to the Publisher's
content service (most likely by locating a proprietary credential in the
local registry).

**Step 3:** If the device is
not linked, the app requests a roku\_pucid (A
Roku-defined Partner Unique Customer Identifier) from the Roku SSO
service.

**Step 4:** The app securely passes the roku\_pucid up to the publisher's service
and if there is a publisher's customer account with the matching
roku\_pucid, the local registry is updated and the user is automatically
signed in.

If the publisher's service does not have a matching roku\_pucid, the user is
prompted to sign in or create an account (if required). The roku\_pucid
obtained is stored on the Publisher service and the registry is updated.

Additionally, app that do not require customers to
actively create accounts can still obtain the roku\_pucid to provide
users a consistent personalized experience on more than one Roku device
linked to the same Roku account.

If a customer has actively signed out of the app, the local
registry should note this so that they are not automatically signed in
upon the next launch of the app.

The sequence diagram (in the following section) depict the protocol
flows between the various actors using the Roku SSO service. This
diagram is only illustrative and does not represent the actual sequence
of interaction.

### App activation using Roku SSO

#### Pre-requisites

A user should have:

  - Activated their Roku Player, and
  - Linked their player to a Roku customer account.

In the event the customer does not have a Roku account they must create
a new account at this time.

On the first Player, the customer must add an app to their device. The
app will be added automatically to subsequent devices during
activation.

### App activation

The following protocol sequence is initiated by the app on the Roku Player at startup. The app determines if the
Roku Player is linked to the Publisher's content service (most likely by
locating a proprietary credential in the local registry.) If the device
is not linked or explicitly signed out of the app (this state
information must also persist in the registry) then the protocol
interactions defined in this section should be initiated.

![roku815px - singlesignon1](https://image.roku.com/ZHZscHItMTc2/singlesignon1.png "singlesignon1.png")

**Figure 1: Partner app activation protocol**

The protocol interactions between Roku SSO (API), the Publisher and Player
must use the HTTP POST method for requests. All requests and responses
must be expressed as JSON objects with the "Content-Type" of
“application/json”. This simplifies request, response generation, and
processing to support a single encoding.

All traffic is communicated over a Server authenticated TLS connection
unless explicitly specified otherwise.

#### Request Partner Unique Customer Identifier (roku\_pucid)

This request must be executed in the context of the app.
This should occur at app launch whenever the app’s proprietary
authentication credential is not in the app’s local registry AND the
user has not explicitly signed out of the app.

The BrightScript appStore API is invoked to initiate this protocol
interaction.

~~~~
store  = CreateObject(“roChannelStore”)
cred   = store.GetChannelCred()
~~~~


The interaction MUST use TLS Mutual Authentication between the Roku
player and the Streaming Store Identity Service. The identity service
shall only release the roku\_pucid to an authorized Roku Streaming
player. This request must be made using a beta or published app.

#### Response examples

##### Successful response URI

A successful response to the request must be encoded as a JSON object.
The token\_type for this response must be the URI:

~~~~
urn:roku:pucid:token_type:pucid_token
~~~~

##### Roku\_pucid UUID

The roku\_pucid should be represented as a UUID derived from
well-defined Roku Namespace UUID. The URI-Template follows:

~~~~
urn:roku:pucid:<channel-id>:<user-id>:<random>
~~~~

##### Associative array contents

An informative example of the contents in the associative array “cred”
from a successful response follows:

~~~~
\{
    channelID: "12345"
    json: "\{
      "error":null,
      "roku_pucid":"deedcafe-721c-59e1-8b82-a2a511d9b876",
      "token_type":"urn:roku:pucid:token_type:pucid_token"
    \}”
    publisherDeviceID: "7229876e-0d1e-5f60-b19b-7f6ccef2a8e8"
    status: 0
\}
~~~~

##### Request error

An error response returns and empty JSON object and additional status
information.

An informative example of a failed response follows:

~~~~
\{
    channelID: "12345"
    json:
    publisherDeviceID: "7229876e-0d1e-5f60-b19b-7f6ccef2a8e8"
    status:  400
\}
~~~~

### Frequently Asked Questions (FAQs)

1.  **Q: If a user manually signs out of the app, are they
    automatically signed in the next time they launch the app?**

    A: No, if a user manually signs out, they will need to sign in
    again the next time. The app registry should be updated to
    ensure they are not automatically signed in.  

2.  **Q: If the user is signed into the app using Roku SSO on
    multiple devices and then signs out, are they automatically signed
    out of all devices?**  

    A: No. They will only be signed out on that particular device that
    they signed out with.  

3.  **Q: If the user is signed in to the app using Roku SSO on
    multiple devices, then signs out on one device and signs in with a
    different publisher's user account, are the other devices
    impacted?**

    A: No. The user would remain signed in on the other devices with
    the previous user account.  

4.  **Q: Can more than one Roku account be linked to an app's
    user account?**

    A: This is up to you. We will return the PUCID
    (**P**artner **U**nique **C**ustomer **Id**entifier), but this is
    your decision if you want to associate more than one PUCID with a
    customer account.

### Glossary of terms
