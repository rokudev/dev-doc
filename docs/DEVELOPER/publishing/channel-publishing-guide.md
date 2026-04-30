---
title: App Publishing
deprecated: false
hidden: false
link:
  new_tab: false
metadata:
  title: ''
  description: ''
  robots: index
---
When your app is tested and ready to deploy, you publish it using the Developer Dashboard. There are two types of app you can work with.

* **[Beta app](#beta-app-guidelines)**: A sharable app for testing without certification. A beta app is a temporary app for development purposes that cannot be published to the public Streaming Store.

* **[Public app](#public-app-guidelines)**: An app available for install from the Streaming Store. A public app must pass Roku's certification process and be reviewed by Roku before being published.

> When publishing an app, use the Roku developer account that belongs to the organization that owns the app content. If you hired a third-party app development company to build your app for you, do _not_ allow them to publish the app under their own account, otherwise ownership of the app will belong to them according to the terms of the [Roku Distribution Agreement](https://docs.roku.com/doc/DeveloperDistribution/en-us).
>
> In other words, when publishing an app, make sure that your own account is the **root account** associated with the app, and that your third-party developer has simply been granted the role of "Administrator" or "App management." Our document on [user access management in the Developer Dashboard](doc:user-access-management) provides more information on root accounts and role-based permissions.

## App creation overview

When you create an SDK app, you'll have the option of setting the app as a beta or public app. For either type of app, you'll start by [packaging your Roku app](doc:packaging-channels). Then follow the guidelines for creating a beta app or a public app.

Typically, you will first create a beta app to which you'll upload your package, and then you will share the app with your beta testers. Once you have finished testing and refining your app, you will create a public app using your tested package file. If you later make revisions to the public app that again require QA testing, you'll again use a beta app.

### Beta app guidelines

Beta apps are a special app type designed specifically to enable you to test your app in a production-like environment before publishing or pushing changes to a production application in the Streaming Store. Beta apps allow up to 20 beta test users to run the application on the Roku OS, making real calls to the Streaming Store, Roku Pay API, and other production services.

A beta app allows the developer to instantly revise an app for test users to try out. You just create the app and upload your package. You can then provide the app access code to your selected group of beta test users so that they can install and QA test your app. No certification testing is required for beta apps.

#### Beta app rules

Beta app usage is **limited** to its intended purpose of quality assurance, as follows:

* **120 days.** A beta app can exist for only 120 days after you create it (using [Add App](#create-a-channel)). After the expiration of that period, the app is: (1) deleted and removed from your Developer Dashboard and (2) disabled for all users who have installed it.

* **10 apps.** Your developer account permits up to 10 beta apps at a time. For each beta app, you can:

* Update the beta app with new packages as needed; your beta testers will get automatic package installation without needing a new access code.

* Delete the beta app and create a new one replacing it; your beta testers will lose access to the original installation, and will need a new access code to access the new beta app.

* **20 users.** You can have up to 20 beta test users per beta app at any given time.

#### Beta apps vs. public apps

Additional differences between beta and public apps are summarized as follows:

|                           | Beta apps                                                                                                                                                                                                                           | Public apps                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Certification testing** | **Not required.** Most of the certification tests available for Public apps are available for Beta apps. You should use them during beta development/testing, but none are required to pass before selected users can view the app. | **Required.** No Public app will be accessible by users unless it has passed all certification requirements.                                 |
| **Publishing**            | **Not allowed.** You submit a beta test app by simply uploading the package. There are no certification checks made.                                                                                                                | **Allowed.** Public apps may only be submitted for publishing once they pass certification testing.                                          |
| **Deployment**            | **Immediate.** Your beta test app is deployed immediately after upload of the package (unless errors in the package file prevent its deployment).                                                                                   | **Only after review.** Public apps are not deployed until the scheduled date.                                                                |
| **Access Code**           | **Immediately usable.** You send your beta test users an access code that allows them to install your test app on their Roku device.                                                                                                | **After publication.** The vanity access code you chose during app creation can be given to anyone to do a quick public app installation.    |
| **Streaming Store**       | **Not available.** Beta apps are not available for installation through the Streaming Store, or discoverable via Roku Search.                                                                                                       | **Available.** Published public apps are always available for installation through the Streaming Store and are discoverable via Roku Search. |

#### Creating a beta app

To create and start testing a beta app, you will need to:

1. [Package your Roku app](doc:packaging-channels).
2. [Create an app](#create-an-app) (select **Beta**).
3. [Upload the package](#upload-a-package) associated with this app.
4. Provide the Access Code (from the Preview and Publish window) to your beta testers.

For additional revision cycles before moving to a Public app, simply repackage your project using the same key and re-upload it to the same Beta app (if within the 120-day life of the app).

### Public app guidelines

Apps in the Streaming Store are certified before they are made available to the public. Some of the key benefits for public apps are:

* Displayed in a Streaming Store category (chosen during the submission process)
* Searchable by app name in Roku search.

Moreover, the Deep Linking and Roku Search feed information required for certification support:

* Home screen banner promotions
* Roku Search by content or person(s).

To ensure success in creating a Public app, you will need to:

1. [Package your Roku app](doc:packaging-channels).
2. Create your design assets following [Design and User Experience Guidelines](doc:design-overview).
3. Go through the [Pre-certification Check List](doc:certification).
4. [Create an app](#create-an-app) (select **Public**).
5. [Upload the package](#upload-a-package) associated with this app.
6. Follow the [App certification](#channel-certification) procedure.
7. Publish your app (submit it for deployment) using the [Publishing an app](#publishing-an-app) procedure.

## Create an app

1. In the **[Developer Dashboard](https://developer.roku.com/developer)**, click **Public apps** or **Beta apps** based on the type of app you want to create.

   ![channel-builder-2-create-channel - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-create-channel.png)

2. Click **Create app**. The **New app** dialog opens. Enter the following information:

   ![channel-builder-2-new-public-channel - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-new-public-channel.png)

| Field                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App name                  | Enter a name for your app. The name may be a maximum of 30 characters, and it may include alphanumeric, special, and UTF-8 characters. This name will be displayed in your app's listing in the Streaming Store.<br /><br />The app name must clearly identify the company associated with the service, and the publisher must have full legal rights or consent for their app names and the rights to all trademarks and copyright expressions associated with the name. The app name may not include the name "Roku", and it may not contain any profanity, or derogatory or misleading language.                                                                                              |
| Streaming Store countries | Select the countries where your app will be distributed from the drop-down list. You can scroll through the list and select countries or enter the name of a country to filter the list as you type.<br /><br />Only select countries where you have the rights to distribute your app's content. The "Rest of World" Streaming Store includes regions not serviced by other Streaming Stores.<br /><br />Customers are associated with Streaming Stores based on their region when they created their Roku account. For example, if a customer creates their Roku account while in the United States and then moves to another region, they are still associated with the U.S. Streaming Store. |
| Default language          | Select the language the Roku OS uses when the Streaming Store does not have metadata for your app in the language set on the customer's device. For example, if the device language is set to German, but your app only supports English and French, the specified default language is used.                                                                                                                                                                                                                                                                                                                                                                                                     |

3. Click **Create app**. A new management page is created for your app. The top of the page includes a breadcrumb for navigating the app pages, the name of the app, and the following fields that provide basic and status information for the app:

   ![img - roku815px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-ui.png?version=1\&modificationDate=1702940715000\&api=v2)

| Field                     | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel ID                | The unique ID generated for your app.                                                                                                                                                                                                                                                                                                                                                                               |
| Access code               | A six-character alphanumeric code that is included in the URL for installing your app. The URL is used to install beta apps, and it can be used to add public apps once they have been published.<br /><br />You can click the link to install the app on a Roku device linked to your developer account. In the **App Profile** page, you can enter a descriptive custom code (for example, "MyVideoApp"). |
| Type                      | The type of app, which may be one of the following values: <ul><li><strong>SDK</strong>: An app to be published to the Streaming Store.</li><li><strong>SDK (Beta)</strong>: An app to be used for QA testing.</li></ul>                                                                                                                                                                                            |
| Version                   | The version number of the app.                                                                                                                                                                                                                                                                                                                                                                                      |
| Created                   | The date the app was created in the Developer Dashboard.                                                                                                                                                                                                                                                                                                                                                            |
| Last publish              | The date the app was last published.                                                                                                                                                                                                                                                                                                                                                                                |
| Installs (Beta apps only) | The number of users that have installed the beta app. A beta app may be installed by up to 20 users at any time.                                                                                                                                                                                                                                                                                                    |
| Expiry (Beta apps only)   | The date when the beta app will expire and the number of days before the expiration. A beta app may exist for a maximum of 120 days after creation. After the expiration, the app is: (1) deleted and removed from your Developer Dashboard and (2) disabled for all users who have installed it.                                                                                                                   |

## App store listing

### Listing setup

Configure how your app is listed in the Streaming Store, including the app's home region, made-for-kids setting, genre, and age rating. To do this, click **Listing Setup**, enter the following properties, and then click **Save**:

![channel-builder-2-listing-setup - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-listing-setup.png)

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Countries
      </td>

      <td>
        Add or remove the countries where your app is distributed. Only add countries where you have the rights to distribute your app's content. The "Rest of World" Streaming Store includes regions not serviced by other Streaming Stores.
      </td>
    </tr>

    <tr>
      <td>
        Domestic region
      </td>

      <td>
        Select the country where your app is considered native and/or domestic. Your app will be displayed in the "International" category of all regional Streming Stores that include your app and are outside your domestic region.
      </td>
    </tr>

    <tr>
      <td>
        Made for kids?
      </td>

      <td>
        If your app is made for kids you must select **Yes** and comply with the applicable children’s privacy laws and youth protection laws in the countries in which your app is published.

        When you select **Yes**, the **Category** field is automatically fixed to "Kids" and cannot be changed, and you cannot set the **App Age Rating** to "Adult".

        If you select **No**, you cannot set the **Category** to "Kids".

        Selecting "Yes" automatically enables the **kidsContent** parameter in calls to the
      </td>
    </tr>

    <tr>
      <td>
        Category
      </td>

      <td>
        Select how your app is categorized in the Streaming Store. When customers search for apps in the selected category, your app will be included in the results.
      </td>
    </tr>

    <tr>
      <td>
        App age rating
      </td>

      <td>
        Specify the age rating that best describes your app. The selected rating is displayed on the app's details page in the on-device Streaming Store. This provides parents with information to help them determine whether your app is appropriate for their children.
      </td>
    </tr>
  </tbody>
</Table>

### Streaming store assets

Provide localized names, descriptions, and artwork for your listing in the Streaming Store following these steps:

1. From the app's management page, click **Store Assets**.

   ![img - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-store-assets-selection.png?version=2\&modificationDate=1686868049000\&api=v2)

2. In the **Languages** field, select one or more languages for which you will provide localized names, descriptions, and artwork. The assets displayed in the Streaming Store are based on the device's language settings. Providing localized app information helps increase the chances that customers will install your app.

   If you select multiple languages, a separate tab for each language is used for entering the properties (the currently selected tab is marked with a purple underline).

   ![channel-builder-2-store-assets-languages - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-store-assets-languages.png)

3. Enter the following properties for each language supported by your app:

   ![channel-builder-2-store-assets-localized-properties - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-store-assets-localized-properties.png)

| Field                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | App name and description | Enter a localized app name, short on-device description, and long online description for each language selected:<br /><ul><li><strong>App name</strong>: The localized name of your app based on the selected language. You can provide different localized app names for each language you support.</li><li><strong>App description (on-device)</strong>: The short app description (300-character maximum) that is included in your app's details screen, which is displayed when customers browse the Streaming Store on their device and select your app.</li><li><strong>App description (online)</strong>: The long app description (1,500-character maximum) that is included in your app's detail page on [channelstore.roku.com](https://channelstore.roku.com/)         .</li></ul> |
| App poster           | Upload an app poster (540x405 JPEG or PNG). The poster is displayed within your app's listing in the on-device and online Streaming Store. You can provide different localized app posters for each language you support.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Screenshots              | Upload up to six screenshots (1920x1080 JPEG or PNG) that highlight your app's user experience and content. The screenshots are displayed within your app's listing in the Streaming Store. You can provide different localized screenshots for each language you support.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

4. Click **Save**.

## App properties

### App profile

Select the type of app you are creating and provide your contact information following these steps:

1. From the app's management page, click **App profile**.

   ![channel-builder-2-channel-profile-selection - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-channel-profile-selection.png)

2. Enter the following properties:

   ![channel-builder-2-channel-profile-properties - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-channel-profile-properties.png)

| Field                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App type                              | Select the type of app you are creating:<br /><ul><li><strong>Video</strong>: Movies, television shows, special events, and other video content (including music videos).</li><li><strong>Audio</strong>: Streaming music services, podcasts, and other audio content that does not include video.</li><li><strong>Game</strong>: Interactive games.</li><li><strong>App/Utility</strong>: Weather apps, and other tools and utilities.</li><li><strong>Theme</strong>: Customizes the Roku home-screen wallpaper, screensaver, and system sounds.</li></ul> |
| Privacy and terms                     | Enter the URLs of your app's privacy policy and terms and conditions agreement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Vanity access code                    | A six-character alphanumeric code that is included in the URL for installing your app. The URL is used to install beta apps, and it can be used to add public vs once they have been published.You can use the auto-generated code or enter a descriptive custom code, which may be a maximum of 20 alphanumeric characters (for example, "MyVideoApp")                                                                                                                                                                                                  |
| Do customers sign in to your app?     | Authenticated SVOD, AVOD, TVE, and free apps must select 'Yes.' If you select 'Yes,' you'll need to later provide login credentials that Roku can use to test the parts of your app that can only be accessed after signing in.                                                                                                                                                                                                                                                                                                                              |
| Customer support contact information  | Enter your customer support URL, email address, and phone number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Learn more URL                        | Enter the URL where customers can learn more about your app (for example, the homepage of your app's website).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Administrative and technical contacts | Enter the names, email addresses, and phone numbers (with country codes) of your administrative and technical leads. Roku may use these internally if there is a question about your app.                                                                                                                                                                                                                                                                                                                                                                    |

3. Click **Save**.

### Monetization setup

Select whether you plan on monetizing your app, and if so, the monetization methods (for example, ads, subscriptions):

1. From the app's management page, click **Monetization setup**.

   ![channel-builder-2-monetization-selection - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-monetization-selection.png)

2. Select one or more of the following monetization methods:

   ![channel-builder-2-monetization-options - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-monetization-options.png)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        App type
      </th>

      <th>
        Monetization option
      </th>

      <th>
        Notes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Free
      </td>

      <td>
        I will not be monetizing my app.
      </td>

      <td>
        If you select this option, all other options are unavailable.
      </td>
    </tr>

    <tr>
      <td>
        Subscription Video on Demand (SVOD)
      </td>

      <td>
        My app offers subscriptions.
      </td>

      <td>
        The app must [implement Roku Pay](doc:roku-pay) and adhere to all [Roku Pay certification requirements](doc:roku-pay-requirements#rp-3-payment-requirements).
      </td>
    </tr>

    <tr>
      <td>
        Transactional Video on Demand (TVOD)
      </td>

      <td>
        My app offers one-time purchases (movie rentals/purchases, PPVs, sporting events, and other transactional content).
      </td>

      <td>
        The app must [implement Roku Pay](doc:roku-pay) and adhere to all [Roku Pay certification requirements](doc:roku-pay-requirements#rp-3-payment-requirements).
      </td>
    </tr>

    <tr>
      <td>
        TV Everywhere (TVE)
      </td>

      <td>
        My app requires a cable or satellite subscription to access content.
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Ad-supported
      </td>

      <td>
        My app displays video ads.
      </td>

      <td>
        If you select this option, you must enter the URL path to an app-ads.txt file in the **Developer URL** field to secure your app's ad inventory. If you do not sell ads via third parties or run programmatic ads on your app's inventory, it's recommended that you include the following line in the app-ads.txt file: "# [App Name] does not authorize programmatic sellers". For more information, see the [IAB documentation](https://iabtechlab.com/ads-txt/).<br /><img alt="channel-builder-2-monetization-options-video-ads - roku400px" src="https://image.roku.com/ZHZscHItMTc2/channel-builder-2-monetization-options-video-ads.png" /><br />The **Channel ID** and **Bundle ID** values identify an app to the publisher's ad partners in the advertising ecosystem. These values can also be found via the meta-tags on the app's Streaming Store page. Following IAB App-Ads guidelines, Roku uses the meta-tags `appstore:store_id` and `appstore:bundle_id` to provide channel ID information in the http header of an app's Streaming Store page. <br />
        Using the values from the illustration above as examples, the meta-tags would appear in the `<head>` section, as so:

        ```html
        <meta name="appstore:store_id" content="633666">
        <meta name="appstore:bundle_id" content="633666">
        ```

        Consider a scenario where you want to identify your app in an OpenRTB 2.5 Bid Request. You could use the following sequence for example:

        ```json
        "app": {
           "bundle": "633666",
           "storeurl": "https://channelstore.roku.com/details/7c34d32446def64db7eb2cc359749fe5/tv-for-cats",
                 …  <additional fields>
        }
        ```

        The **Developer URL** field is also provided (and discoverable) in an app's Streaming Store page `<head>` section:

        ```html
        <meta name="appstore:developer_url" content="https://www.path.to/path">
        ```
      </td>
    </tr>

    <tr>
      <td>
        Pay-to-install
      </td>

      <td>
        My app requires customers to pay to install it.
      </td>

      <td>
        If you’ve enrolled in the Roku Partner Payouts Program, select the cost to install your app from the **One-time payment price tier** drop-down list.<br /><br />Price tiers are used to enforce 99 cent or 49 cent pricing on app products.<br /><br />One to three-digit tier numbers are used for 99 cent pricing. Subtract 1 cent from a tier to get the corresponding price. For example, Tier 1 is 99 cents, Tier 2 is $1.99, Tier 10 is $9.99, Tier 100 is $99.99 and so on. The highest tier is 400 ($399.99).<br /><br />Four-digit tier numbers are used for 49 cent pricing. Append 49 cents to the last digit or last two digits in the tier to get the corresponding price. For example, Tier 1000 is 49 cents, Tier 1001 is $1.49, Tier 1010 is $10.49, Tier 1020 is $20.49 and so on. The highest tier is 1030 ($30.49).<br /><br /><img alt="channel-builder-2-monetization-pay-to-install - roku400px" src="https://image.roku.com/ZHZscHItMTc2/channel-builder-2-monetization-pay-to-install.png" />
      </td>
    </tr>
  </tbody>
</Table>

3. Click **Save**.

## Package and testing

Packaging is the process of encrypting the contents of your app (for example, the code, images, and so on) so that your app can be securely distributed on Roku devices.

### Generating a package file

Generate an encrypted package file (.pkg) for testing, publishing, and distributing your app following these steps:

1. From the app's management page, click **App package**.

   ![channel-builder-2-channel-package-selection - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-channel-package-selection.png)

2. Enter the following properties:

   ![channel-builder-2-channel-package-options - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-channel-package-options.png)

| Field                         | Description                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upload your .pkg or .zip file | Upload the package file (.pkg) file that you created with the [Development Application Installer](doc:packaging-channels).                                                                                                                                                                                                                         |
| App version                   | Select the version number for your app.                                                                                                                                                                                                                                                                                                            |
| Minimum firmware              | Roku supports multiple [package file formats](doc:packaging-channels). Each package format requires a different minimum firmware version to be run on Roku devices, based on when the format was introduced to the OS. Enter a minimum firmware version that is equal to or greater than the one required for the package format used by your app. |

3. Click **Save**.

### Deep linking

To validate that your app is handling deep link requests properly, provide at least one set of [deep linking parameters](doc:implementing-deep-linking) for each different [media type](doc:implementing-deep-linking#understanding-deep-linking-parameters) in your app. For example, if your app contains movies and TV episodes, include deep linking parameters for at least one movie and one episode.

> You must provide deep linking parameters, unless your app contains a single live feed. Apps submitted without deep linking parameters will not pass certification testing.

To enter deep linking parameters, follow these steps:

1. From the app's management page, click **Deep Linking**.

   ![channel-builder-2-deep-linking-selection - roku815px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-deep-linking-selection.png)

2. For each set of deep linking parameters to be included in the certification test, click **Add deep link** (or **Add** if at least one deep link is already listed).

   ![channel-builder-2-deep-linking-start - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-deep-linking-start.png)

3. Enter the following information in the **Add new deep link parameter** dialog, and then click **Save**:

   ![channel-builder-2-deep-linking-new-dialog - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-deep-linking-new-dialog.png)

| Field         | Description                                                                                                                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Media type    | Select the media type of the content item from the list of choices (for example, movie, television episode, or television series). Custom types are not available.                                                                                                                                                                  |
| Content ID    | Enter the [content ID](doc:implementing-deep-linking) of the item (this should be the same as the **PlayId** in the app's [search feed](doc:search-feed)).                                                                                                                                                                          |
| Content title | Enter a descriptive name that makes it easy to identify the content associated with the deep link parameters.                                                                                                                                                                                                                       |
| Valid until   | Enter the last date when the deep linking parameters will be used in your app. Notice that, for a new parameter set, this field is pre-populated with a date that is one year in the future. You can change this date as needed. If the deep linking parameters do not expire, you can select the **Valid indefinitely** check box. |

4. The deep linking parameters are added to the list. You can edit and delete deep linking parameters in the list.

   ![channel-builder-2-deep-linking-added - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-deep-linking-added.png)

### Static Analysis

The Static Analysis tool checks the app's code for the use of deprecated APIs, and noncompliance with certification criteria. Apps must pass Static Analysis testing to be submitted for certification. To run Static Analysis testing on your app, follow these steps:

1. From the app's management page, click **Static Analysis**.

   ![channel-builder-2-static-analysis-selection - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-static-analysis-selection.png)

2. Click **Run analysis**.

   ![channel-builder-2-static-analysis-run-analysis - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-static-analysis-run-analysis.png)

3. The window will update to indicate that analysis is underway and may take a few minutes to complete. When testing has been completed, the **Analysis results** screen opens and lists any error, warning, and info messages.

   ![channel-builder-2-static-analysis-results - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-static-analysis-results.png)

4. For each message, the following information is provided. You can filter the test results based on the **Severity** or **Category**.

<Table>
  <thead>
    <tr>
      <th>
        Column
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Message
      </td>

      <td>
        A description of the issue related to the app.
      </td>
    </tr>

    <tr>
      <td>
        Severity
      </td>

      <td>
        The type of message: error, warning, or info.

        * **Error**:  Errors block the app from passing certification. All errors must be resolved to pass static analysis testing and schedule the app for publishing.
        * **Warning**: Warnings do not currently block the app from passing certification; however, they should be resolved to ensure the app can pass static analysis testing in the future. In addition, resolving warnings helps optimize app performance.
        * **Info**: Info messages provide tips that may be helpful in the development of the app.
      </td>
    </tr>

    <tr>
      <td>
        Category
      </td>

      <td>
        The type of issue (for example, package, performance, billing, manifest, and so on).
      </td>
    </tr>

    <tr>
      <td>
        Certification Requirement
      </td>

      <td>
        Provides a link to any related certification requirements in the [Certification Criteria](doc:certification) document.
      </td>
    </tr>
  </tbody>
</Table>

For additional usage details and operational information, including a list of the tests conducted, see the [Static Analysis Tool](doc:static-analysis-tool) documentation.

### Test credentials

Developers of authenticated SVOD, AVOD, TVE, and free apps can enter the credentials for the account to be used for app testing. A test account is required to verify app functionality that can only be accessed after authenticating into the app. This includes, for example, testing on-device sign-up and sign-in workflows, measuring app performance, and validating deep links.

> This screen is only accessible if you selected **Yes** for the **Do customers sign in to your app** question in the **App Profile** page.

To provide the credentials for one or more test accounts, follow these steps:

1. From the app's management page, click **Test Credentials**.

   ![test-credentials-cb2 - roku600px](https://image.roku.com/ZHZscHItMTc2/test-credentials-cb2.png)

2. In the **Credentials Title** field, enter a descriptive name that makes the test account easy to identify.

3. Optionally, in the **Description** field, enter any notes related to the provided test account.

4. In the **Authentication Type** field, select the type of app: **SVOD** or **Cable/Satellite**. If you select **Cable/Satellite**, do the following:

   a. In the **Link URL** field, enter the URL for linking devices to the test account.
   b. From the **Provider** list, select the cable/satellite provider.

5. In the **Username** field, enter the user name to be used for static analysis testing.

6. In the **Password** field, enter the password to be used for static analysis testing.

7. In the **Valid until** field, enter the expiration date for the provided test account.

8. Click **Add**.

9. Repeat steps 2–8 for each additional set of account credentials to be provided for testing.

### App Behavior Analysis

Developers of SVOD, AVOD, and free apps can use the self-serve App Behavior Analysis tool to verify that their apps meet [performance](doc:certification) and [deep linking](doc:certification) certification requirements before submitting them for certification. This allows developers to get instant feedback on whether their apps meet specific deep linking and performance requirements, which reduces the wait time between submitting and publishing apps.

> To run the app launch performance test, your app must have the required [AppLaunchComplete signal beacon](doc:measuring-channel-performance).

To run App Behavior Analysis testing on your app, follow these steps:

1. From the app's management page, click **App Behavior Analysis**.

   ![channel-builder-2-cba-selection.png - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-cba-selection.png)

2. If customers are required to sign in to your app, upload your [sign-in and sign-out test scripts](doc:authenticated-cert-testing) (unauthenticated apps can skip this step).

3. Click **Run**. Alternatively, you can scroll to the bottom of the **Preview and Publish** page that opens after you submit your deep linking parameters, click **App Behavior Analysis**, and then run the App Behavior Analysis test.

   ![channel-builder-2-cba-run-analysis - roku600px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-cba-run-analysis.png)

4. Once you start the certification testing tool, the **Device** and **Firmware** fields lists the Roku test device in the cloud that is being used and the Roku OS running on it, respectively. The **Test progress** field includes a spinner indicating that the test is running, and the number of tests completed and the total tests to be run. Testing of apps is done in a first-in, first-out method; therefore, the certification testing of your app may be queued.

   ![img - roku815px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-cba-running.png?version=1\&modificationDate=1687218897000\&api=v2)

5. When testing has been completed, the **Status** field displays "DONE" and shows that all the tests have been completed. If the **Status** field, displays "CANCELLED", "ERROR", or "UNAVAILABLE", click **Run** to re-run the test.

   ![img - roku815px](https://image.roku.com/ZHZscHItMTc2/channel-builder-2-cba-analysis-complete.png?version=1\&modificationDate=1687219624000\&api=v2)

6. The **App Behavior Analysis** table lists the status of each individual test being executed. You can sort the test results by toggling the **Status**, **Severity**, or **Category** column headers. You can filter test results based on the same fields. This table includes the following columns:

<Table>
  <thead>
    <tr>
      <th>
        Column
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Test title
      </td>

      <td>
        The name of the test being executed ("Channel Launch Performance", "Channel Deep Linking Basic", "Channel Content Play Performance").
      </td>
    </tr>

    <tr>
      <td>
        Status
      </td>

      <td>
        The results of the test. Completed tests have a status of "Passed" or "Failed"; tests still to be performed have a status of "Queued".
      </td>
    </tr>

    <tr>
      <td>
        Severity
      </td>

      <td>
        Any info messages, warnings, or errors related to a completed test.
      </td>
    </tr>

    <tr>
      <td>
        Category
      </td>

      <td>
        The type of test being performed: "Performance" or "Deep Linking".
      </td>
    </tr>

    <tr>
      <td>
        Certification requirements
      </td>

      <td>
        Provides a link to the section in the [Certification Criteria](doc:certification) document, where the criterion in question is located.
      </td>
    </tr>

    <tr>
      <td>
        Actions
      </td>

      <td>
        Displays information, script, and screenshot icons that you can click to learn more about the test:

        * **Test information**: Provides detailed test results including any additional error or warning information, a link to the related certification requirement, and a link to the related documentation.
        * **Test script**: Provides the actual script executed in the Roku Remote Tool for the test. You can copy and paste or download and import the script and run it in the Roku Remote tool (a link to the tool is provided in the upper right-hand corner). This provides developers with insight into how their apps are tested and enables them to run the same app performance and deep linking tests Roku executes before trying to pass the certification testing.
        * **Screenshot**. If a test fails, displays a screenshot of the screen in the app UI where the test failed. This icon may not be available in all test failure cases.
      </td>
    </tr>
  </tbody>
</Table>

## Publishing an app

Once your public app has passed [Static Analysis](doc:static-analysis-tool) and [App Behavior Analysis](doc:channel-publishing-guide) testing, you can schedule it for publishing by following these steps:

1. Click **Schedule Publish** in the upper-right corner of the app management page. For beta apps, click **Publish**; this publishes the app and makes it available for up to 20 users to install it.

2. In the **Schedule app publishing** dialog, enter the date and time when you want your app to be published to the Streaming Store, and then click **Continue**. The earliest possible publishing time is the second business day from the current time, and is the default. Publishing can not be scheduled for Fridays or weekends.

   ![schedule-publish - roku600px](https://image.roku.com/ZHZscHItMTc2/schedule-publish.png)

3. Optionally, enter any release notes for this app version (maximum 1,500 characters), and then do the following:

   a. Select the **I confirm that** check box to confirm that you have tested your app per Roku App Publishing Checklist and your app complies with the listed agreements.

   b. Select the **I certify that** check box to confirm that you have the authority the submit the app, the provided listing information is accurate, and that you have the rights to distribute your app in the selected countries.

   c. Click **Submit**.

   ![schedule-publish-2 - roku600px](https://image.roku.com/ZHZscHItMTc2/schedule-publish-2.png)

4. The app will automatically be published at the specified time. During the app publishing process, you may receive the following emails:

   * A confirmation that your app has been submitted and its publication is scheduled for a particular date and time.
   * An announcement that your app has been published as scheduled.
   * If applicable, a notice that publication has been canceled (either by you or by Roku).

### Post-publishing

The following section summarizes when updates to the Streaming Store, Roku Search, and other platform features are propagated once a public app has been published or updated.

#### Streaming Store categories

After an app is published, it may be tagged with one or more categories. This includes the category selected and any other Roku-applied tags such as "New & Updated" or "Recommended"

An app is typically visible in the selected category after 5 minutes—if the category has less 1,000 apps. Otherwise, the app is not added to the category until it has been streamed by enough customers to move it up the popularity rankings in that category.

If the category is changed and the app is re-published, it takes approximately 5 minutes for the app to be switched to the new category. However, the app is only visible in that category if the aforementioned criteria is met.

For Roku-curated categories (for example, Featured Free), the app is typically visible after 5 minutes.

#### Other Streaming Store updates

The following items take approximately 5 minutes to be updated in the Streaming Store after the app is re-published:

* App added/removed to a country's Streaming Store after being enabled/disabled and the app being re-published.

* Localized versions of an app's name, description, or poster image are available in a country's Streaming Store where that localized language is the primary language.

* The "SERVICE MAY REQUIRE ADDITIONAL FEES" text being displayed in the app in the Streaming Store after being switched from Free to Paid.

* Updated app owner is displayed.

* App removed from Roku Streaming Store after it has been deleted.

#### Roku Search

Apps and their individual content items are typically added to Roku Search within 24 hours of the app being published.

#### Device installation

Once a public app is published to the Streaming Store, it is available for installation on Roku devices immediately using the app's vanity access code, which is specified in the [Properties window](#properties-window). To get the latest version of the app, users can do a System Update (Home > Settings > System > System update > Check now) or update the individual app (press the options key [*] on the app tile > Check for updates).

## Rolling back an app to the previous release

If you detect app performance issues following an update, you can revert the app to its previously published version using the self-serve rollback feature in the Developer Dashboard up to four days after the update. Rolling back an app deletes the current version and restores the previously published package. Once you roll back an app, the reverted version is deployed immediately, and will typically be installed on any devices with your app within six hours.

The app rollback feature has the following rules and requirements:

* **Eligible apps**. The self-serve rollback feature is only available for self-published apps.
* **User roles**. Only users with the root, admin, or app management role may do the rollback.
* **App versions**. An app can only be rolled back once to its previous version. For example, if you publish v3 of an app, you can only roll it back to v2. Once the app is rolled back to v2, you cannot roll it back to v1.  To return an app back to v3, you would need to re-submit the app through the standard certification and scheduling process.
* **Availability**: The self-serve rollback feature is available 24 hours a day, 7 days a week, including weekends and holidays.
* **Time limit**.  After an app is published, it can be rolled back within four days. Once the four-day rollback eligibility period ends, the app cannot be reverted.
* **Streaming Store metadata**: Rolling back an app only reverts the package file, not its Streaming Store metadata. If you changed any Streaming Store listing or app properties in the current app version being rolled back, you will be prompted to confirm that the metadata should be reverted.

To rollback an app release, follow these steps:

1. Click the options menu in the upper right-hand corner and click **Rollback app** in the shortcut menu.

   ![channel-rollback-shortcut roku600px](https://image.roku.com/ZHZscHItMTc2/channel-rollback-shortcut.png)

2. The confirmation dialog displays the current app version and the previous version to which the app will be rolled back.

   ![channel-rollback-confirmation-dialog roku600px](https://image.roku.com/ZHZscHItMTc2/channel-rollback-confirmation-v2.png)

3. If the previous app version was made for kids, click **Yes**.

4. Click **Yes** to complete the rollback.

5. In the app page, you can observe that the app version number is updated.

## Updating an existing app

To update an app, follow these steps:

1. On the **[Developer Dashboard](https://developer.roku.com/developer)**, select the public or beta app that needs to be updated.
2. Update any **Store listing** information and **App Properties**.
3. If the app code has changed, you need to generate a new package file and upload it from the **App package** page. Make sure to increment the app version number.
4. Run Static Analysis and App Behavior Analysis (if applicable) testing.
5. Schedule the app for publishing (public apps). If you are updating a beta app, publish the update.
6. If the updated app passes Roku's review, it is added to the Streaming Store on the scheduled publishing date. If the app fails the review, you will receive an email notification with the issues that need to be resolved in order for the app to be published.
