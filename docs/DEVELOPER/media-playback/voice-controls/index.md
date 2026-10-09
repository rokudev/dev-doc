---
title: Voice controls
excerpt: 'Handle voice commands for playback control and profile selection in your app'
deprecated: false
hidden: false
metadata:
  title: 'Voice controls | Roku Developer Docs'
  description: 'Voice controls enable apps to handle commands from the Roku voice remote and mobile app to control content playback and select user profiles.'
  robots: index
next:
  description: ''
---


Voice controls enable apps to handle commands from the Roku voice remote and Roku mobile app to control the playback of content and select a user from a profile screen.

## Content playback

With voice controls, your app can respond to the following types of voice commands to control the playback of content:

- **Basic**. Simple commands for controlling content playback such as "fast forward", "rewind", "pause", "resume", and "replay".


- **Enhanced**. Advanced commands for controlling content playback and content in playlists such as "rewind 30 seconds" and "forward 10 minutes" (referred to as "seek" commands), "start over", and "next" (for playing the next video clip in a playlist).  


- **Additional enhanced**. Additional enhanced commands for showing metadata, controlling the playback order of content in playlists, and rating content. This includes commands as "what's playing" to display the title of the content currently in playback (referred to as "nowplaying"), "skip intro"/"skip recap" to skip the current section being played (referred to as "skip"), "shuffle" to randomly select content in a playlist, "loop" to repeat the content in a playlist, and "like"/"dislike" to rate content.


  For more information on handling basic and enhanced voice controls, see [Implementing voice controls](doc:transport-controls).


> Apps that have streamed more than an average of 5 million hours per month over the last three months must implement all basic, enhanced, and additional enhanced voice controls to pass [certification](doc:certification). This is also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch.

## Profile selection

Apps with a profile selection screen can also audibly and visually prompt the viewer to select a user profile and then handle a voice request with the name or position of the selected profile. For more information, see [Selecting user profiles with Roku Voice](doc:voice-profile-selector).
