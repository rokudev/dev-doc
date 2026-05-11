---
title: Hardware specifications
excerpt: 'Key specs for Roku streaming players and Roku TVs, grouped by production status'
deprecated: false
hidden: false
metadata:
  title: 'Hardware specifications | Roku Developer Docs'
  description: 'Lists CPU, RAM, max UI resolution, max playback resolution, and HDR support for current, updatable, and legacy Roku streaming players and Roku TVs.'
  robots: index
next:
  description: ''
---
Roku has a wide assortment of hardware products, including streaming players and smart TVs. This document provides key specifications for these products that can be considered when developing apps on the Roku platform.

This spec first groups the hardware products by their production status:

* **Current**: Roku is currently manufacturing these products and they are fully supported.
* **Updatable**: Roku no longer manufactures these products, but they can still be updated with the latest Roku OS.
* **Legacy**: Roku has discontinued these models, and they cannot support newer versions of the Roku OS.

This grouping is useful for testing apps across multiple Roku device types. It is recommended that your test suite includes a combination of current and updatable devices with varying performance based on CPU and RAM.  Updatable devices, which are no longer manufactured, may be difficult to obtain via retail. To add these devices to your test suite, you can try to locate and purchase them from second-hand marketplaces such as [eBay](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313.TR10.TRC1.A0.H0.Xroku.TRS1&_nkw=roku&_sacat=0\&LH_TitleDesc=0&_osacat=0&_odkw=roku+3). Additionally, developers may ask their publishers to provide devices, if available.

The spec then further classifies the hardware products based on their code names, rather than model numbers. For instance, the "Bryan" code name indicates a Roku Ultra. To programmatically discover the model number for this device (4660X), call the [roDeviceInfo.GetModel()](doc:ifdeviceinfo) method.

> The model name returned by the  [roDeviceInfo.GetModel()](doc:ifdeviceinfo) method for Roku TVs will differ from the specific model number of the device displayed in the system info. This is because the GetModel() method returns the model name of the unit, which for Roku TVs may actually cover dozens of specific model numbers. In other words, the model name for all Liberty devices is 5000X, while the specific model number may be 5509X. Use the [roDeviceInfo.GetModelDetails()](doc:ifdeviceinfo) method to retrieve the specific model number.

## Current Roku models

The following models are currently being manufactured and are supported:

| Device Name               | Code Name | roDeviceInfo.GetModel() | CPU                      | Accelerated Graphics API | RAM    | Max UI Resolution | Max Playback Resolution | HDR Support                                                             | Year Released |
| :------------------------ | :-------- | :---------------------- | :----------------------- | :----------------------- | :----- | :---------------- | :---------------------- | :---------------------------------------------------------------------- | :------------ |
| Roku Streaming Stick      | Lakeport  | 3840X                   | ARM Cortex A55           | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | No                                                                      | 2025          |
| Roku Streaming Stick Plus | Bayside   | 3830X                   | ARM Cortex A55           | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                                          | 2025          |
| Roku Streaming Stick 4K   | Logan     | 3820X2                  | ARM Cortex A55           | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR10/10+, HLG, and DolbyVision                                         | 2022          |
| Roku Streaming Stick 4K+  | Logan     | 3821X2                  | ARM Cortex A55           | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR10/10+, HLG, and DolbyVision                                         | 2022          |
| Roku Ultra                | Brewster  | 4850X                   | ARM Cortex A55           | OpenGL ES 2.0            | 2 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG, and DolbyVision                                         | 2024          |
| Roku Streambar SE         | Lockhart  | 9104X                   | ARM Cortex A55           | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10, HDR10+,  and HLG                                                 | 2024          |
| Projector                 | Avery     | K8PXX                   | ARM Cortex A35           | OpenGL ES 2.0            | 512 MB | 720p              | 1080p/60fps             | No                                                                      | 2024          |
| 4K Roku TV                | Trinidad  | J000X                   | ARM quad core CA73 1 GHz | OpenGL ES 2.0            | 2 GB   | 1080p/60fps       | 4K144fps, HDR           | HDR10, HDR10+, HLG, and Dolby Vision                                    | 2021          |
| 4K Roku TV                | Longview  | 7000X                   | ARM dual core 1.2 GHz    | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3840x2160               | HDR10 and/or Dolby Vision supported, varies by model                    | 2019          |
| Roku TV                   | Midland   | 8000X                   | ARM                      | OpenGL ES 2.0            | 512 MB | 720p              | 1280X720                | No                                                                      | 2019          |
| Roku TV (Brazil)          | El Paso   | 8000X                   | ARM                      | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | No                                                                      | 2020          |
| 2K Roku TV                | Miami     | H000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 512MB  | 720p              | 1080p/60fps             | No                                                                      | 2022          |
| 4K Roku TV                | Reno      | A000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 1.5 GB | 1920X1080         | 3840x2160               | HDR10, Dolby Vision, and HLG supported, varies by model                 | 2019          |
| 4K Roku TV                | Malone    | C000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3840x2160               | HDR10, Dolby Vision, and HLG supported, varies by model                 | 2019          |
| 4K Roku TV                | Athens    | G000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3840x2160               | HDR10, Dolby Vision, and HLG supported, varies by model                 | 2021          |
| Roku TV                   | Roxton    | K000X                   | ARM Cortex A35           | OpenGL ES 2.0            | 512 MB | 720p              | 1080p/60fps             | No                                                                      | 2024          |
| 4k Roku TV                | Sandia    | L000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3,840 x 2,160           | HDR10, HDR10+, Dolby Vision, HLG supported, varies by model             | 2024          |
| 4k Roku TV                | Shiner    | M000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 2 GB   | 1920X1080         | 3,840 x 2,160           | HDR10, HDR10+ Adaptive, Dolby Vision IQ, HLG supported, varies by model | 2024          |
| 4k Roku TV                | Damon     | P000X                   | ARM quad core 1 GHz      | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3840x2160               | HDR10, Dolby Vision, and HLG supported, varies by model                 | 2024          |
| Roku TV                   | Alpine    | T100X                   | ARM Cortex A35           | OpenGL ES 2.0            | 512 MB | 720p              | 1080p/60fps             | No                                                                      | 2025          |

## Updatable Roku models

The following models are no longer manufactured, but can run the latest Roku OS:

| Device Name              | Code Name        | roDeviceInfo.GetModel() | CPU                              | Accelerated Graphics API | RAM    | Max UI Resolution | Max Playback Resolution | HDR Support                                             | Year Released |
| :----------------------- | :--------------- | :---------------------- | :------------------------------- | ------------------------ | :----- | :---------------- | :---------------------- | :------------------------------------------------------ | ------------- |
| Roku Smart Soundbar      | Fruitland        | 9100X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR10                                                   | 2019          |
| Roku Streambar           | Chico            | 9102X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10 and HLG                                           | 2020          |
| Roku Ultra LT            | Benjamin-W       | 4800X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 2 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG, and DolbyVision                         | 2021          |
| Roku Ultra               | Benjamin         | 4800X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 2 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10, Dolby Vision, and HLG                            | 2021          |
| Roku Express             | Rockett          | 3960X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | No                                                      | 2022          |
| Roku Express+            | Nemo             | 3931X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | No                                                      | 2019          |
| Roku Express 4K+         | Bailey           | 3940X2                  | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                          | 2022          |
| Roku Express 4K+         | Bailey           | 3941X2                  | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                          | 2022          |
| Roku Express 4K+         | Bailey           | 3942X2                  | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                          | 2022          |
| Roku Streaming Stick     | Briscoe          | 3600X                   | ARM Cortex A7 quad core 800 MHz  | OpenGL ES 2.0            | 512 MB | 1280X720          | 1920x1080***            | n/a                                                     | 2016          |
| Roku Express             | Littlefield      | 3700X                   | MIPS 900 MHz                     | n/a                      | 512 MB | 1280X720          | 1920x1080               | n/a                                                     | 2016          |
| Roku Express+            | Littlefield      | 3710X                   | MIPS 900 MHz                     | n/a                      | 512 MB | 1280X720          | 1920x1080               | n/a                                                     | 2016          |
| Roku Streaming Stick     | Amarillo 1080    | 3800X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | n/a                                                     | 2017          |
| Roku Streaming Stick+    | Amarillo-2019    | 3810X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR 10                                                  | 2019          |
| Roku Streaming Stick+    | Amarillo 2019-HP | 3811X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR 10                                                  | 2019          |
| Roku Streaming Stick 4K  | Madison          | 3820X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR10/10+, Dolby Vision, HLG                            | 2021          |
| Roku Streaming Stick 4K+ | Madison          | 3821X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR10/10+, Dolby Vision, HLG                            | 2021          |
| Roku Express             | Gilbert          | 3900X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | n/a                                                     | 2019          |
| Roku Express+            | Gilbert          | 3910X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | n/a                                                     | 2019          |
| Roku Express             | Nemo             | 3930X, 3930EU           | ARM Cortex A53                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | n/a                                                     | 2019          |
| Roku Express 4K          | Marlin           | 3940X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                          | 2021          |
| Roku Express 4K+         | Marlin           | 3941X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 1 GB   | 1080p/60fps       | 4K60fps, HDR            | HDR10/10+, HLG                                          | 2021          |
| Roku Premiere            | Cooper           | 4620X                   | ARM Cortex A53 quad core 1.2 GHz | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 4K UHD, 60fps           | n/a                                                     | 2016          |
| Roku Premiere+           | Cooper           | 4630X                   | ARM Cortex A53 quad core 1.2 GHz | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 4K UHD, 60fps           | HDR10                                                   | 2016          |
| Roku Premiere            | Gilbert 4K       | 3920X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K UHD, 60fps           | HDR10                                                   | 2019          |
| Roku Premiere+           | Gilbert 4K       | 3921X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K UHD, 60fps           | HDR10                                                   | 2019          |
| Roku Ultra               | Cooper           | 4640X                   | ARM Cortex A53 quad core 1.2 GHz | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 4K UHD, 60fps           | HDR10                                                   | 2016          |
| Roku Ultra               | Bryan            | 4660X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K UHD, 60fps           | HDR10                                                   | 2017          |
| Roku Ultra LT            | Bryan -W         | 4662X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 1 GB   | 1080p             | 4K60fps, HDR            | HDR 10                                                  | 2017          |
| Roku Ultra               | Bryan 2          | 4670X                   | ARM Cortex A53                   | OpenGL ES 2.0            | 2 GB   | 1080p             | 4K60fps, HDR            | HDR 10                                                  | 2019          |
| Roku 3                   | Austin           | 4200X                   | ARM Cortex A9 dual core 1 GHz    | OpenGL ES 2.0            | 512 MB | 1280X720          | 1920x1080, 60fps***     | n/a                                                     | 2014          |
| Roku 2                   | Mustang          | 4210X                   | ARM Cortex A9 dual core 1 GHz    | OpenGL ES 2.0            | 512 MB | 1280X720          | 1920x1080, 60fps3***    | n/a                                                     | 2013          |
| Roku 3                   | Mustang          | 4230X                   | ARM Cortex A9 dual core 1 GHz    | OpenGL ES 2.0            | 512 MB | 1280X720          | 1920x1080, 60fps***     | n/a                                                     | 2014          |
| Roku TV                  | Liberty          | 5000X                   | MIPS 1 GHz                       | n/a                      | 512 MB | 1280X720          | 1920x1080, 60fps**      | n/a                                                     | 2016          |
| 4K Roku TV               | Ft. Worth        | 6000X                   | ARM quad core                    | OpenGL ES 2.0            | 1.5 GB | 1920X1080         | 3840X2160               | N/a                                                     | 2016          |
| 4K Roku TV (EU)          | Camden           | C000GB                  | ARM quad core 1 GHz              | OpenGL ES 2.0            | 1 GB   | 1920X1080         | 3840x2160               | HDR10, Dolby Vision, and HLG supported, varies by model | 2019          |
| Roku TV                  | Roma             | D000X                   | ARM Cortex A55                   | OpenGL ES 2.0            | 512 MB | 720p              | 1080p                   | No                                                      | 2020          |

** Supports 720@60fps with some frame drops when video is not scaled to 1080. Should set ContentMetaData.maxFrameRate to 60 so that player doesn't scale the video to 1080.

*** Supports 60fps at 720p. Supports 30fps at 1080p.

## Legacy models

The following models have been discontinued, cannot run newer Roku OS versions, and cannot be used to run IDK apps. The table lists the latest compatible version in each case:

| Device Name          | Code name | roDeviceInfo.GetModel() | CPU                 | RAM    | Latest Roku OS version |
| :------------------- | :-------- | :---------------------- | :------------------ | :----- | :--------------------- |
| Roku DVP             | Griffin   | N1000                   | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku SD              | Redwood   | N1050                   | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku HD              | Redwood   | N1100                   | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku HD-XR           | Redwood   | N1101                   | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku HD              | Pico      | 2000C                   | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku XD              | Pico      | 2050X, 2050N            | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku XD              | Pico      | 2100X, 2100N            | MIPS 400 MHz        | 256 MB | 3.1                    |
| Roku LT              | Giga      | 2400X                   | ARM11 600 MHz       | 256 MB | 9.1                    |
| Roku 2 HD            | Giga      | 3000X                   | ARM11 600 MHz       | 256 MB | 9.1                    |
| Roku 2 XD            | Giga      | 3050X                   | ARM11 600 MHz       | 256 MB | 9.1                    |
| Roku 2 XS            | Giga      | 3100X                   | ARM11 600 MHz       | 256 MB | 9.1                    |
| Roku LT              | Paolo     | 2450X                   | MIPS 400 MHz        | 256 MB | 9.1                    |
| Roku HD              | Paolo     | 2500X                   | MIPS 400 MHz        | 256 MB | 9.1                    |
| Roku Streaming Stick | Jackson   | 3400X, 3420X            | ARM11 600 MHz       | 256 MB | 9.1                    |
| Roku LT              | Tyler     | 2700X                   | MIPS 600 MHz        | 512 MB | 11                     |
| Roku 1, Roku SE      | Tyler     | 2710X                   | MIPS 600 MHz        | 512 MB | 11                     |
| Roku 2               | Tyler     | 2720X                   | MIPS 600 MHz        | 512 MB | 11                     |
| Roku Streaming Stick | Sugarland | 3500X                   | ARM11 600 MHz       | 512 MB | 11                     |
| Roku 4               | Dallas    | 4400X                   | ARM quad core       | 1.5 GB | 11.5                   |
| 8K Roku TV           | Bandera   | E000X                   | ARM quad core 1 GHz | 1.5 GB | 13.1                   |
