---
title: "Tracking signup abandonment"
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


You can track customers' progress through your app's signup workflow to identify where users may be abandoning the process. For example, customers may successfully enter their login credentials to create an account, but exit the flow when prompted to enter their payment information. By firing events on each page, the generated feedback can be used to minimize friction in the sign-up workflow and thus reduce abandonment.

> Subscription apps that have streamed more than an average of 5 million hours per month over the last three months (and new subscription apps expected to reach the threshold shortly after launch) must fire events on each page in their signup workflow to pass [certification](doc:certification).
>
> Event names must use unique, sequential page numbering and clearly identify the type of page from which the event is being fired. See [Signup pages](#signup-pages) for more information.

## Requirements

A signup event must be sent upon loading each page within the signup flow and submission of the final page to help track where users are abandoning the process. If the app's sign up flow is contained within a form that covers one or more pages, a signup event must be fired when each element in the form is completed.

The name of a given signup event will differ depending on whether your signup flow consists of separate pages or a form.

### Signup pages

If your app's signup flow is contained within a series of pages, fire a signup event upon the loading of each page. Pages requiring signup events include, but are not limited to, the following: initial sign-up landing page, account creation/registration, device activation, subscription selection, payment, and cancellation. In addition, a signup event must be fired upon the submission of the final page within the flow.

The names of the signup events must include two elements:

- **Page Number**. A unique page number that identifies the page's sequence within the sign-up flow.
- **Page Type**.  A label that clearly describes the page's functionality.

#### Syntax

When firing the signup event, pass in "Sign_Up|" along with pipe-separated key-value pairs for the page number and page type.

The syntax is therefore as follows:

"Sign_Up"|pageNumber=\{*int*\}|pageType=\{*type*\}.

You can use a hierarchal page numbering system to identify different pages in the signup flow at the same level. This is useful in case your signup flow forks based on different options. For example, you may have separate monthly and annual plan pages that you could number 3.1 and 3.2. If you use hierarchal numbering, the pages must still be uniquely numbered across the sign-up flow. The syntax in this case is therefore as follows:

"Sign_Up"|pageNumber=\{*int*\}.\{*int*\}|pageType=\{*type*\}.

#### Examples

Developers should use the following syntax for naming signup events:
- "Sign_Up|pageNumber=1|pageType=landing"
- "Sign_Up|pageNumber=2|pageType=offer_selection"
- "Sign_Up|pageNumber=3.1|pageType=basic_plan_cadence sign_up_offer_monthly"
- "Sign_Up|pageNumber=3.2|pageType=premium_plan_cadence sign_up_offer_annual"
- "Sign_Up|pageNumber=3|pageType=offer_confirmation"
- "Sign_Up|pageNumber=4|pageType=registration"
- "Sign_Up|pageNumber=5|pageType=registration_complete"
- "Sign_Up|pageNumber=6|pageType=sign_up_complete"

#### Including form elements
Optionally, you can add form element data in the signup event to generate more granular feedback on your app's signup flow. To do this, append a key-value pair with the name of the field. For example, you could fire the following event when a user enters their email address on the sign-in page:

"Sign_Up|pageNumber=2|pageType=registration|field=emailAddress"

### Signup form

If your app's signup flow is contained within a form that covers one or more pages, fire a signup event after each field in the form has been completed. When firing the signup event, include **Sign_Up|** and the name of the element as a key-value pair.  

#### Syntax

"Sign_Up"|field=\{*string*\}.

#### Examples

"Sign_Up"|field=emailAddress

"Sign_Up"|field=creditCardNumber

> The indexes and types you use to number and classify the pages and fields are arbitrary. However, pages in the signup flow should be uniquely and sequentially numbered and types should clearly identify the corresponding page or field.

## Sending signup events

Signup events can be sent using the Roku Event Dispatcher (RED) library or the **fireRokuMarketingPixel()** method in the Roku Advertising Framework (RAF) library. Using the RED library is the recommended approach; however, if you are already integrating RAF and want to avoid incorporating multiple libraries in the app, you can use the **fireRokuMarketingPixel()** method.

### Integrating the Roku Event Dispatcher in the signup workflow

To use the Roku Event Dispatcher in your app's signup workflow to send events, follow these steps:

1. Enable the RED library in your app by adding the following line to the [manifest](doc:channel-manifest) file:

        sg_component_libs_required=roku_analytics


2. Use the [Roku Analytics Component](doc:roku-analytics-component) to send signup events from your app following these steps:

   a. When `roSGScreen` is active, create a "Roku_Analytics:AnalyticsNode" node and persist it by storing in the global node.

   b. To add the RED library as a provider, include `RED: {}` when assigning to its `.init` field.

   c. To dispatch a signup event, assign `{RED: {eventName: "Sign_Up|pageNumber=int|pageType=type"}` or `{RED: {eventName: "Sign_Up_Form"|field=string"}` to the `.trackEvent` field.

   The following example demonstrates how to send signup events:

        sub Notify_Roku_UserIsLoggedIn(rsgScreen = invalid as Object)
            ' get the global node
            if type(m.top) = "roSGNode"  ' was called from a component script
                globalNode = m.global
            else ' must pass roSGScreen when calling from main() thread
                globalNode = rsgScreen.getGlobalNode()
            end if
    
            ' get the Roku Analytics Component Library used for RED
            RAC = globalNode.roku_event_dispatcher
            if RAC = invalid then
                RAC = createObject("roSGNode", "Roku_Analytics:AnalyticsNode")
                RAC.debug = true ' for verbose output to BrightScript console, optional
                RAC.init = \{RED: \{\}\} ' activate RED as a provider
                globalNode.addFields(\{roku_event_dispatcher: RAC\})
            end if
    
            ' dispatch an event to Roku
            RAC.trackEvent = \{RED: \{eventName: "Sign_Up|pageNumber=1|pageType=landing"\}\}
            end sub

3. Use the [debug console](doc:debugging-channels) to verify that your app is sending signup events.

### Integrating the RAF fireRokuMarketingPixel() method in the signup workflow

To use the RAF **fireRokuMarketingPixel()** method to send authentication events to Roku, follow these steps:

1. Enable the RAF library in your app by adding the following line to the [manifest](doc:channel-manifest) file:

        bs_libs_required=roku_ads_lib


2. Instantiate the RAF library in the app:

        adIface = Roku_Ads()


3. When an authenticated customer launches your app, call the **fireRokuMarketingPixel()** method using the following syntax:
