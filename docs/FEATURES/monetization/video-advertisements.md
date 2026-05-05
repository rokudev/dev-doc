---
title: Video advertisements
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Roku platform enables technical video advertisement propagation and monetization for our app partners. As specified in the [Roku Distribution Agreement](https://docs.roku.com/published/developerdistribution/en/us), apps that incorporate advertisements into their business model will default to an "**Inventory Split**" model, whereby the app sets up its own ad server and must send 30% of inventory to Roku. Roku retains 100% of revenue from this inventory (but is under no obligation to fill it). The publisher fully controls the remaining 70%, and keeps 100% of the revenue associated with its share of inventory.

From time to time, Roku may select certain apps for participation in the "**Roku Sales Representation Program**."  Apps participating in this program route 100% of their inventory to Roku to be managed and sold, shifting the financial and managerial cost of building advertising demand and delivering content to Roku in the process. Roku reserves the right to fill as much, if any, of this inventory as it chooses.  Of inventory filled, Roku pays the app owner a revenue share, in accordance with the Roku Distribution Agreement.  Participation in this Program is entirely at Roku's discretion and will be based in part on whether an app meets certain engagement thresholds (detailed below). App partners do not need to apply for this program – selected candidates will be contacted by Roku directly.

## Content appropriateness review

Regardless of how a publisher monetizes a given app, Roku reserves the right to conduct a review of the app's content before filling any inventory on the app. During this review, Roku will determine whether the content is appropriate for a general viewing audience. Everything from the app name, app and content artwork, and video content itself will be considered during this review.

Roku reserves the right to decline the opportunity to fill advertising inventory at its sole discretion. However, any app in a Streaming Store is permitted to fill its own advertising inventory with demand it sources itself (subject to the terms of the [Roku Distribution Agreement](https://docs.roku.com/published/developerdistribution/en/us)), even if Roku declines to participate.  Roku may run unpaid "House Ads" on the inventory it controls in any app(s), based on need.

Please note, switching from the Inventory Split model to the Roku Sales Representation Program (or vice versa) might require the app to be re-certified before the change goes into effect.

## Implementing the Roku Advertising Framework (RAF)

All apps on the Roku platform must implement Roku's custom advertising framework, RAF, for fulfilling and rendering video advertisements. Apps will not be [certified](doc:certification) or published to the Streaming Store until this requirement is met.

See [Integrating the Roku Advertising Framework](doc:integrating-roku-advertising-framework) for a tutorial on how to properly configure RAF within an app.

## Feature comparison

The following chart illustrates the key differences between the two monetization models referenced above:

<table>
  <thead>
    <tr>
      <th />
      <th>Inventory Split</th>
      <th>Roku Sales Representation Program</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monetary terms</td>
      <td>The app controls 70% of its advertising inventory, and keeps 100% of the gross revenue earned on these ads. The remaining 30% of the app's inventory routes to Roku, in which case Roku retains 100% of gross revenue earned on the ads it delivers.</td>
      <td>Roku manages 100% of the app's advertising inventory and will share 60% of net revenue earned on paid ads served in the app with the publisher (net of a 15% operational and serving fee). Publishers should be aware that Roku-branded advertisements ("house ads") are not considered as paid ads. If participating in a revenue share arrangement, Roku will attempt to fill ad inventory trafficked through the app and maximize the publisher's monetary returns, but makes no guarantee of a minimum delivery.</td>
    </tr>
    <tr>
      <td>Eligibility requirements</td>
      <td>All ad-supported apps will default to the Inventory Split option, regardless of audience size or hours streamed. However, Roku may not begin filling the 30% of ad inventory it manages until it has concluded its content appropriateness review of the app.</td>
      <td>Apps will be considered for participation by Roku after meeting both of the following thresholds:<br /><ul><li>5,000 new installs over the last calendar month</li><li>50,000 streaming hours over the last calendar month</li></ul>Reaching these thresholds does not guarantee an app entry into the program; Roku reserves the right to select or decline any publisher. Apps with a seasonal theme may be considered against their past several months' engagement levels rather than the immediately preceding calendar month. For example, a Halloween-themed app may meet these thresholds due to a surge in viewership activity in October, but may fall short in August or September.<br /><br />See <a href="https://roku-ent.readme.io/dev/docs/video-advertisements#how-to-effectively-grow-an-audience">How to effectively grow an audience</a> for information about the promotional tool set available to publishers to help meet these eligibility requirements.</td>
    </tr>
    <tr>
      <td>Backend requirements</td>
      <td>App sets up its own ad server and manages its own advertising demand. 30% of all advertising inventory is routed to Roku to be filled.</td>
      <td>App uses a revenue-share tag provided by Roku on ads delivered on the platform. Roku will have first right to fill advertising inventory. The app publisher can also configure their own advertising server as a fallback for instances when Roku does not fill inventory.</td>
    </tr>
    <tr>
      <td>Payout period</td>
      <td>Apps retain 100% of the revenue on advertisements they manage. Publishers should not expect payments from Roku.</td>
      <td>Apps are paid quarterly, no later than 60 days after the end of each quarter. Publishers will only be paid in a given quarter when the sums due to them for such quarter equal or exceed $100.</td>
    </tr>
    <tr>
      <td>Ad impression reporting</td>
      <td>Not currently supported.</td>
      <td>Available upon request.</td>
    </tr>
  </tbody>
</table>

## How to effectively grow an audience

Roku encourages the growth of all apps on our platform. To help enable this end goal, Roku offers a [robust promotional tool set](https://advertising.roku.com/) to our publishers.

The quickest and easiest way to get started promoting your app on our platform is our [self-serve app promotion tool](https://ad.roku.com/) tool. This tool enables publishers to purchase display ads for their app on Roku's home screen UI. For more information, visit [ad.roku.com](https://ad.roku.com/).

Publishers with larger advertising budgets can also engage our Audience Development team. This team consists of campaign managers who use a more advanced toolset, and can help develop an on- and off-device advertising campaign that is tailored to your engagement goals on the platform. To learn more, reach out to our advertising team here: [https://advertising.roku.com/content-publishers](https://advertising.roku.com/content-publishers)

Effectively growing an audience on the Roku platform typically requires consistent, ongoing publication of high-quality content.
