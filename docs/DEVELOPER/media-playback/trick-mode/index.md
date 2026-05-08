---
title: "Trick mode"
excerpt: 'Visual feedback during seek, forward, and rewind playback operations'
deprecated: false
hidden: false
metadata:
  title: 'Trick mode | Roku Developer Docs'
  description: 'Trick mode provides visual feedback during seek, forward, and rewind, using scene-based thumbnails from BIF, HLS, or DASH files or a time-based fallback.'
  robots: index
next:
  description: ''
---


Trick mode provides visual feedback during playback operations such as seek, forward, and rewind. This function lets a user visualize the timestamp of the content they are seeking. The Roku platform supports two types of trick mode. For apps generating and publishing image archives in the Roku BIF (Base Index Frame), HLS, or DASH standard file formats, a scene-based trick mode using index frames is supported. When the thumbnails necessary to support scene-based trick mode are not available at playback time, a time-based method of supporting trick modes is used instead.

> Apps must display thumbnails during trick play for VOD content longer than 15 minutes to pass [certification](doc:certification).

## Time-based trick mode

For time-based trick mode, users are presented with a progress bar that displays their location in the content and allows them to seek to the desired timestamp using the standard trick play controls. Since scene information is not available, a user only has a visual timeline and numeric time information to locate the desired position in the content. Once the new location is selected, the system buffers a minimal amount of stream data and begins playback.

## Scene-based trick mode

A scene-based trick mode is based on the availability of scene information in the form of BIF-files or standard thumbnail files for HLS or DASH. If such data are published and accessible for a given title, the scene-based trick mode is used during playback. The content metadata indicates the availability of scene information data on a per title basis, by providing URLs for the HD and SD versions of these assets.

Consult [BIF file creation using the Roku BIF tool](doc:bif-file-creation), to learn how to generate BIF-format thumbnail for trick mode purposes.

> As of [Roku OS 9.4](doc:release-notes#roku-os-94), Roku recommends that ad-supported apps employing [Server-Side Ad Insertion (SSAI)](doc:ssai-adapters) use *only* HLS or DASH "standard" thumbnails, as an incompatibility in the BIF-support mechanism can cause thumbnails and video to fall out of synch during SSAI operation. Developers should convert existing apps that use BIF and SSAI to use "standard" thumbnails instead, at the earliest opportunity.

Consult [HLS and DASH](doc:hls-and-dash), to learn how to use standard thumbnail files – including those that follow the DASH-IF Interoperability Points Guidelines document Version 4.3 – with HLS and DASH playlists.

> If both BIF-based scene information and information based on standard-thumbnails are provided for the same content, Roku will use the BIF-based information. Only if no scene information is provided at all, will Roku employ time-based trick mode.