---
title: "Creating an SVOD app: First steps"
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

# Creating an SVOD app: First steps

<video src="https://image.roku.com/ZHZscHItMTc2/svod-channel-getting-started.mp4" poster="https://image.roku.com/ZHZscHItMTc2/svod-first-steps.jpg" width="720" height="480" controls />


## About this video

This video explains the first steps for [monetizing content](/docs/features/monetization/monetization-overview.md) on the Roku streaming platform with a subscription app. It is intended for publishers and content owners who are new to Roku and are ready to distribute their content to Roku's global audience of over 50 million active user accounts.

The video answers basic questions for new publishers, such as "what is streaming?", "who is Roku?", and "what are apps?", and it explains how integrating [Roku Pay](/docs/features/monetization/billing.md) enables publishers to collect customer payments.

It then guides new publishers through the required initial setup steps for creating a subscription app, which includes [getting a Roku device](https://www.roku.com/products/), [creating a Roku customer account](https://my.roku.com/signup), and [enrolling in the Roku developer program](https://developer.roku.com/enrollment/standard) and [enrolling in the Roku Partner Payouts program](/docs/developer-program/roku-pay/quickstart/partner-payouts.md). See [Next steps](#next-steps) for links to completing these requirements.

After watching this video, publishers can complete the initial requirements and then begin developing their subscription app with the [Roku SDK](/docs/developer-program/getting-started/roku-dev-prog.md). The [Resources](#resources) section includes links to the Roku documentation, Roku developer tools, online video course, master sample app, and other useful material to help publishers get started.

## Next steps

| Step | Item                                                         | Summary                                                      |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | [Get a Roku device](https://www.roku.com/products/)          | Publishers need a Roku device to develop their Roku app. <br /><br />When progressing to testing, a suite of devices is needed to ensure that an app meets certification requirements and performs well across different Roku's hardware models, which have varying performance specifications. |
| 2    | [Create a Roku customer account](https://my.roku.com/signup) | A Roku customer account is required for enrolling in the Roku developer program. It also enables publishers to test their subscription apps without incurring charges. |
| 3    | [Enroll in the Roku developer program](https://developer.roku.com/enrollment/standard) | Enrolling the Roku developer program provides publishers access to the Roku Developer Dashboard, which is needed for creating, testing, and publishing apps.<br /><br />To enroll, you must provide contact information and then read and agree to the [Roku distribution agreement](https://docs.roku.com/doc/developerdistribution/en-us). This agreement is required for publishers to distribute apps on the Roku platform. It also explains payout information, including how revenue is split between Roku and the publisher and how frequently payouts are made. |
| 4    | [Enroll in the Roku Partner Payouts program](/docs/developer-program/roku-pay/quickstart/partner-payouts.md) | Enrolling in the Roku Partner Payouts program is required for publishers to monetize content on the Roku platform. As part of this steps, you need to do provide the following:<br />${partner-payout-steps}${bq-brazil} |
| 5    | [Develop a Roku app](/docs/developer-program/getting-started/roku-dev-prog.md) | Publishers can use the Roku SDK to build a subscription app. It is recommended that publishers and developers new to the Roku platform do the following to learn how to develop for the platform:<br />${developer-resource-list}<br />Additionally, publishers who want outside help to create their Roku app can contact one of [Roku's third-party app development partners](/docs/developer-program/third-party-devs.md). |

{#partner-payout-steps}

- Contact information.
- Payout method: direct deposit/ACH (US only), wire transfer, PayPal.
- Tax forms (W9, W8-BEN-E, or W8-BEN), which are required for publishers to receive payout from Roku.  
  - Publishers in the United States complete a W9.
  - Publishers (entities [businesses/corporations]) outside the United States complete a W8-BEN-E.
  - Publishers (individuals/sole proprietors) outside the United States complete a W8-BEN.

{#developer-resource-list}

- Take the [**SceneGraph Developers: Build a Channel** online video course](/videos/courses/rsg/overview.md). This course teaches novice Roku developers how to develop an app from the ground up with the Roku SDK. This course features a set of 13 video lessons and a comprehensive [sample app](https://github.com/rokudev/scenegraph-master-sample) that walks developers through each step in building a basic, high-performance Roku app that passes certification. This course is ideal for developers that are new to the Roku platform and want a simple, streamlined path for quickly understanding Roku development.
- Review the [Roku master sample app](https://github.com/rokudev/scenegraph-master-sample). This sample app serves as a model for building a certification-compliant app. Both newer and experienced developers can use this app as a reference when building their app UI and implementing the covered features. This sample app is certification-compliant; therefore, content creators looking for a template for quickly creating and publishing a customized Roku app can use this sample app as the foundation for their project.

{#bq-brazil}
> If your app is based in Brazil, you must contact [Roku Partner Management](dlpartnermanagement@roku.com) to get set up with payouts, instead of enrolling in the Roku Partner Payouts Program.

## Resources

[Roku Developer docs](/docs/features/features-overview.md)

[Roku Developers online video course](/videos/courses/rsg/overview.md)

[Roku Developers master sample channel](https://github.com/rokudev/scenegraph-master-sample)

[Roku Developer tools](http://devtools.web.roku.com/)

[Roku Developers forum](https://community.roku.com/t5/Roku-Developer-Program/bd-p/roku-developer-program)

[Roku Developers blog](https://blog.roku.com/developer)

[Roku Developer dashboard](https://developer.roku.com/developer)

[Roku third-party development partners](/docs/developer-program/third-party-devs.md)

## Related documentation

[Roku Pay overview](/docs/features/monetization/billing.md)

[SceneGraph core concepts](/docs/developer-program/core-concepts/core-concepts.md)  

[BrightScript language reference](/docs/references/brightscript/language/brightscript-language-reference.md)

[Roku hardware specification](/docs/specs/hardware.md)

[Roku Streaming Store](https://channelstore.roku.com/)

#### Attribution for statistics displayed in video

- **Roku OS is the number one smart TV OS sold in the U.S. and Canada**: Source, US & Canada: The NPD Group, Inc., Weekly Retail Tracking Service, U.S. & Canada, LCD TV, Software Service Name, Smart TV: Web Browser Only, Apps and Web Browser, Apps Only, based on unit share, Jan. 5, 2020 – Dec. 26, 2020 combined.
- **57% US households have shaved, cut, or never had Pay TV:** Source, Roku Cord Cutting survey. Survey was conducted by MACRO Consulting, Inc. on behalf of Roku Inc. 7,000 Americans ages 18 and over were surveyed in March 2020 about their TV household, followed by 2,000 Americans ages 18 and over in May 2020 to understand changes amidst the COVID-19 pandemic.
- **Cord cutters have saved $75 per month with Roku on average:** Source, Roku Cord Cutting survey.
- **85% of Americans stream**. Source, Roku / The Harris Poll 2020 Holiday Consumer Research survey of 2,008 US Adults.

## How to watch

Play the embedded video above or go to [Getting Started with Roku Channel Development: Creating an SVOD channel: First steps](https://www.youtube.com/watch?v=Lyf98YC80jY&list=PLXLCv18IEHsg8b0ryesD416dJX7_UpBib&index=2) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.
