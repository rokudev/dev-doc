# Best practices

## Performance

| Best Practice                                                                                                                 | Rationale/Benefits                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Optimize your app code to provide smooth transitions and animations.                                                      | Jerky or blocky transitions erode the seamlessness of the Roku user experience and feel unfinished or “broken” to users.                                                                                                       |
| Minimize perceived latency by providing active feedback during all operations that may take longer than a second to complete. | Keeping users entertained and informed during routine time-intensive operations like video buffering and app loading gives the illusion of added performance, and positively impacts users’ perception of app quality. |

## Presentation

| Best Practice                                                                                                                                               | Rationale/Benefits                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design your application to work in both 4:3 and 16:9 TV formats. Roku can scale HD applications for SD but expect some cropping to occur.                   | Users select their display types using the Roku settings menu, which includes only formats that their player model will support. Designing your application to work in SD and HD formats ensures that it can be optimally displayed on any Roku player. |
| Strive to provide graphics for every “thumbnail” and preview image in your app.                                                                         | Content graphics help users make faster decisions around what to watch. They’re also visually interesting and fun to browse.                                                                                                                            |
| Ensure that all active UI has sufficient contrast to make it readable in sunny environments.                                                                | Without sufficient contrast, users will have trouble correctly reading screens and using your app. Most applicable to apps with custom UI.                                                                                                      |
| Strive to push timely updates to your app for any 2nd screen events that update user data: purchases, rentals, watch / history list updates, and so on. | Data that is out of sync across screens confuses users and can erode trust in the system. Good synchronization is a nice touch that builds user trust in your app.                                                                                  |

## Navigation

| Best Practice                                                                                                                     | Rationale/Benefits                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Use the remote navigation buttons consistently within your app.                                                               | app-wide UI consistency helps provide a seamless, content-focused user experience                                         |
| Respect platform conventions and assign remote navigation button behavior consistent with the Roku system UI wherever applicable. | Again, system-wide UI consistency helps provide a seamless, content-focused user experience.                                  |
| Strive for “minimum clicks to consumption.” Make it trivial for users to find and watch what they want.                           | Users want to watch videos, not navigate the UI. Fast access to content delights users and increases time spent in an app. |


## Content organization

| Best Practice                                                                                                                                                                                                                                                             | Rationale/Benefits                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Provide audience-focused editorial categories, both automated (Top Stories, New This Week…) and curated (Critics’ Picks, Classics…) on or directly under your App home.                                                                                               | Catering to your users with content organized “their way” delights them, builds loyalty and increases use over time.                                                                                                                                                                                                  |
| Don’t just imitate or force fit information architecture from any second screens your app may utilize (e.g. Web, mobile). Instead, optimize for the 10-foot “On Roku” consumption experience, including platform standards and design conventions, wherever possible. | Content is king; finding, discovering, browsing and watching it should be as friction free as possible to give your app’s users a Best On Roku experience.                                                                                                                                                        |
| Tag your content so that it will appear as appropriate during search, discovery, deep linking, and recommendation activities.                                                                                                                                             | Properly tagged content is able to be utilized in and out of your app, not only for ease of discovery and location but also for alignment with user expectations. For example, if a user likes show X, Roku’s recommendation for “You might also like A, B and C” should be as accurate and relevant as possible. |


## User engagement

### Ad experience

| Best Practice                                                                                | Rationale/Benefits                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When presenting mid-roll ads, strive to insert the ads into scene cuts rather than randomly. | Seamless content presentation is as important as seamless UI navigation. A cut to commercial in the middle of a dialogue or a climactic scene disrupts the entertainment flow and annoys users.                                                                                                                                                                               |
| Consider front-loading ads in pre-roll to minimize interruption of videos.                   | Fewer content interruptions mean happier users.                                                                                                                                                                                                                                                                                                                               |
| Consider not increasing the frequency of mid-roll ads as users progress through content.     | From a business perspective, this policy makes sense. Users who have invested time and attention in a show are a more captive ad audience. More importantly, from a user perspective, it is very intrusive and frustrating to see more and more ads as a story is reaching its conclusion. You will “win the battle, but lose the war” as users seek entertainment elsewhere. |


### In-app purchasing

| Best Practice                                                                               | Rationale/Benefits                                                                                                                      |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Provide clear pricing for any and all purchase options prior to entering Purchase workflow. | Simply put, users want to know prices before buying. Not providing this information will have a direct negative impact on sell-through. |


### Deep linking

| Best Practice                                                                       | Rationale/Benefits                                                                                                            |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Consider providing appropriate metadata to support deep linking (ads, Roku Search…) | Deep linking gives users another way to discover your app, increasing content consumption and time spent in your app. |


### Roku Search

| Best Practice                                                                                                                                                                    | Rationale/Benefits                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Support incremental search (refresh results as characters are input)                                                                                                             | Incremental search is becoming a de facto standard - users expect to see results from partial searches without waiting. This behavior makes Search more efficient and reduces the friction between UI interaction and content consumption.  |
| If your app supports Search, provide one Search entry point in the Home screen of your app and (optionally) one in the “global” section of your app’s Options menus. | To users, Search is not an app specific behavior (though they may expect app-specific results). Making this consistent everywhere allows users to leverage learned behavior in your app, again removing friction in regular use. |


## Settings and options

### App settings

| Best Practice                                                                                                                            | Rationale/Benefits                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| If your app supports Settings, it’s recommended to provide a single entry point in the Options dialog of your Home screen.           | Settings are rarely used, and do not belong in primary UI such as the Home screen of your app.                                 |
| If your app supports Settings, follow the Roku platform model: a flat Settings screen with one click access to specific sub screens. | Following the platform interaction model means that there is no need for users to learn additional layout or navigation behaviors. |

### Options menu(s)

| Best Practice                                                                                     | Rationale/Benefits                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| “Search (app name)” is recommended as a global option if your app supports in-app Search. | Users may decide to find another piece of content at any time. Providing Search globally prevents users from having to navigate to a Search jumping-off point within your app UI.                                                                                                                                                                  |
| “(app name) Home” is recommended as a global option.                                          | Users may want to restart their browsing or locate a specific content item or category from memory, at any time. This option enables that behavior. Adding the app name ensures that users do not confuse this option with the Roku Home screen.                                                                                                   |
| Strive to limit the Options menu to no more than 4 local options and 2 global options.            | Stuffing the Option menu with too many choices slows down users’ interaction with your app UI and goes against Roku’s core principle of simplicity. If you find that there are too many features in your Options menus, consider refactoring your app’s UI or removing features not essential to your app experience on the Roku platform. |
