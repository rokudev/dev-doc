---
title: "BIF file creation using the Roku BIF tool"
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

# BIF file creation using the Roku BIF tool

Roku provides command-line tools for Mac, Linux, and Windows, enabling you to generate BIF files for your  videos.

## Mac installation

### Prerequisites:

- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Homebrew](http://brew.sh/)*
- [FFmpeg](https://ffmpeg.org/)

> Homebrew is a command-line package manager for Mac OS X. It is **not required** to use Roku's BIF tool, but it can be used to easily install FFmpeg.

After you have Xcode and Homebrew installed, open your terminal application and run the following:

```
$ brew install ffmpeg
```

**Download and unzip: [biftool_mac](https://github.com/rokudev/samples/tree/master/utilities/bif%20tool/biftool_mac.zip)**

## Linux installation

### Prerequisites:

- ffmpeg-lib

On RedHat and Fedora Core, you can typically install `ffmpeg-lib` by running this yum command as root: `$ yum install ffmpeg-libs`

**Download and unzip: [biftool_linux](https://github.com/rokudev/samples/tree/master/utilities/bif%20tool/biftool_linux.zip)**

The executables are compiled for **Linux x86 64-bit machines**. Make sure that the `biftool` and `biftool_processor` executables are in the same directory on the development machine.

## Mac and Linux usage

The BIF tool will automatically generate three `.bif` files: one for SD, one for HD, and one for FHD.

### Example:

```
$ path/to/biftool ~/public_html/Movies/HarryPotter/HLS/600000/*.ts
Finding candidate frames in 917 files
Detected stream PTS offset of 10033ms
Captured 2368 candidate frames in 79s
Selected 915 BIFs
Success: ./fileSequence0000-fhd.bif (size=14.096MiB, numImages=915, avgSize=15.767KiB)
Success: ./fileSequence0000-hd.bif (size=8.528MiB, numImages=915, avgSize=9.535KiB)
Success: ./fileSequence0000-sd.bif (size=3.920MiB, numImages=915, avgSize=4.378KiB)
```

## Windows installation

**Download and unzip: [biftool_windows](https://github.com/rokudev/samples/tree/master/utilities/bif%20tool/biftool_windows.zip)**

### Windows usage

The simplest way to use the command-line tool is to open your favorite terminal application, and drag the biftool executable to its window. After that, just add the path to a video and biftool will generate the BIF files and save them to your current directory.

For example: `$ ./path/to/biftool ./path/to/video-file.mp4`

You can also type `--help` after dragging the biftool executable, and the terminal will display a help message containing more details and options about using the tool.

We recommend generating two `.bif` archives for each piece of content, one for SD and one for HD. Roku devices automatically select which version will be used **depending on the user UI.** That is why it is important to generate HD `.bif` archives even if the content is SD. If there is no HD `.bif` available, the player will fallback to using the SD `.bif`.

#### Example:

```
$ mkdir abc-sd abc-hd
$ ffmpeg -i abc.mp4 -r .1 -s 240x180 abc-sd/08d.jpg
$ ffmpeg -i abc.mp4 -r .1 -s 320x240 abc-hd/08d.jpg
$ path/to/biftool -t 10000 abc-sd
$ path/to/biftool -t 10000 abc-hd
```

This will result in two new files: `abc-sd.bif` and `abc-hd.bif`.

There are two caveats here:

- FFmpeg generates the JPG files starting with index 1. This means that all the timestamps will be off by 10 seconds. To fix this, use the following command (Make sure you are in the directory containing the `.bif` files):

  ```
  $ % j=00000000.jpg; for i in *; do mv ${i} ${j}; j=${i}; done;
  ```

- The SD frames should have a width of 240, and the HD frames should have a width of 320. Their height should be specified to coincide with their aspect ratio. The commands above assume a 4x3 aspect ratio. Unfortunately, FFmpeg doesn't let you specify only a width, keeping the original aspect ratio. If your source file is not 4:3, you should calculate the height used in the commands above using the width and the aspect ratio.

Here are some common resolutions:

| Display | Aspect Ratio | Width | Height |
| :------ | :----------- | :---- | :----- |
| SD      | 4:3          | 240   | 180    |
| HD      | 4:3          | 320   | 240    |
| HD      | 16:9         | 320   | 180    |
| HD      | 2.35         | 320   | 136    |

### Windows 10 usage

1. Load and install ffmpeg to break mp4 to set of images.

2. Generate preview files:
   ```
   ffmpeg -i bif\1.mp4 -r .1 -s 320x240 bif\bif_files%08d.jpg
   ```

3. Optionally, bulk rename next bat may be used:

   ```
   @echo off
   setlocal EnableDelayedExpansion
   set suffix=10000000
      for /F "delims=" %%i in ('dir /B *.jpg') do (
      ren "%%i" "!suffix:~1!.jpg"
      set /A suffix+=1
   )
   ```

4. Use biftool to combine these images to bif file:

   ```
   biftool.exe -t 10000 bif\bif_files
   ```

## Executable help

Three types of `<target(s)>` are allowed:

1. A single `<target>` which is a directory. All files in the directory will be archived into single BIF file with the same name as the directory.
2. A single `<target>` which is a file with a .bif suffix. Its contents will be extracted into a new directory with the same name as the file. E.g., extracting mymovie-hd.bif will create and populate a directory named mymovie-hd.
3. One or more `<target(s)>` which are files that do not have a .bif suffix. These files are assumed to be video files, such as .mkv, .mp4 and .ts files. Frames will be extracted from the first video stream in each file, to create a single .bif file with the same base name as the first video file specified. If more than one video file is specified, they are expected to be segments of the same video and must be specified in playback order, based on the presentation timestamps (PTSes) within the files.

Available options:

```
--target arg                      The file(s) or directory on which to operate.
-t [ --timestamp-multiplier ] arg The absolute presentation timestamp (PTS)
                                  in milliseconds is the filename multiplied
                                  by this value.
-v [ --verbose ]                  Be verbose about activity.
-h [ --help ]                     Help message.
```

## BIF file specification

The following specification describes the implementation of the BIF (Base Index Frames) file archive. The BIF archive is used to encapsulate a set of still images for supporting video trick modes (e.g. FF/REW) on the Roku Streaming Player. This format has been optimized for the usage pattern inherent in this model and is well-suited and capable of facilitating those patterns in an efficient manner.

### Requirements and usage patterns

It is important that the file format have the following features:

- It must be easy to find and interpret the archive metadata.
- It must be network-access friendly.
- It must minimize levels of indirection.
- It must be compact.
- It must easily accommodate the entire range of possible data.

The format should also be capable of providing future extensions should they be needed.

### Conventions

This specification assumes that all values are stored little-endian.

### File format

All multibyte integers are stored in little-endian format. That is, the first byte is the least significant byte and the last byte is the most significant.

#### Magic number

This is a file identifier. It contains enough information to identify the file type uniquely.

| byte  | 0      | 1      | 2      | 3      | 4      | 5      | 6      | 7      |
| :---- | :----- | :----- | :----- | :----- | :----- | :----- | :----- | :----- |
| value | `0x89` | `0x42` | `0x49` | `0x46` | `0x0d` | `0x0a` | `0x1a` | `0x0a` |

#### Version

This space is reserved for a revision number. The current specification is file format version 0. The value should be incremented for non-backward-compatible revisions of this document.

| byte  | 8 9 10 11 |
| :---- | :-------- |
| value | Version   |

#### Number of BIF images

This is an unsigned 32-bit value (N) that represents the number of BIF images in the file. The number of entries in the index will be N+1, including the end-of-data entry.

| byte  | 12 13 14 15              |
| :---- | :----------------------- |
| value | Number of BIF images (N) |

#### Framewise separation

This specifies the denomination of the frame timestamp values. In order to obtain the "real" timestamp (in milliseconds) of a frame, this value is multiplied by the timestamp entry in the BIF index. If this value is 0, the timestamp multiplier shall be 1000 milliseconds.

| byte  | 16 17 18 19                            |
| :---- | :------------------------------------- |
| value | Timestamp Multiplier (in milliseconds) |

#### Reserved

These bytes are reserved for future expansion. They shall be 0.

| byte  | 20 ... 63     |
| :---- | :------------ |
| value | 0x00 / / 0x00 |

#### BIF index

This space is used for the BIF index entries. There are N+1 entries. Each entry contains two unsigned 32-bit values.

| byte      | 64 65 66 67         | 68 69 70 71              |
| :-------- | :------------------ | :----------------------- |
| index 0   | Frame 0 timestamp   | absolute offset of frame |
| index 1   | Frame 1 timestamp   | absolute offset of frame |
| index 2   | Frame 2 timestamp   | absolute offset of frame |
| ...       |                     |                          |
| index N-1 | Frame N-1 timestamp | absolute offset of frame |
| index N   | 0xffffffff          | last byte of data + 1    |

Because the size of each BIF is determined by subtracting its offset from the offset of the next entry in the index, the BIFs shall appear in the index in the same order as they appear in the data section, and they shall be adjacent.

The absolute timstamps of the BIF captures can be obtained by multiplying the frame timestamp by the timestamp multiplier.

#### Data section

This section contains the BIF images. It begins after the index, though it is not necessary that the first image appear immediately after the index. Each image in the data section must begin at the offset specified in the BIF index.

```
$ path/to/biftool ~/public_html/Movies/HarryPotter/HLS/600000/*.ts
Finding candidate frames in 917 files
Detected stream PTS offset of 10033ms
Captured 2368 candidate frames in 79s
Selected 915 BIFs
Success: ./fileSequence0000-fhd.bif (size=14.096MiB, numImages=915, avgSize=15.767KiB)
Success: ./fileSequence0000-hd.bif (size=8.528MiB, numImages=915, avgSize=9.535KiB)
Success: ./fileSequence0000-sd.bif (size=3.920MiB, numImages=915, avgSize=4.378KiB)
$ mkdir abc-sd abc-hd
$ ffmpeg -i abc.mp4 -r .1 -s 240x180 abc-sd/08d.jpg
$ ffmpeg -i abc.mp4 -r .1 -s 320x240 abc-hd/08d.jpg
$ path/to/biftool -t 10000 abc-sd
$ path/to/biftool -t 10000 abc-hd
$ % j=00000000.jpg; for i in *; do mv ${i} ${j}; j=${i}; done;
  --target arg                      The file(s) or directory on which to
                                    operate.
  -t [ --timestamp-multiplier ] arg The absolute presentation timestamp (PTS)
                                    in milliseconds is the filename multiplied
                                    by this value.
-v [ --verbose ]                    Be verbose about activity.
-h [ --help ].                      Help message.
```

## Sample apps

You can download and install [sample channels](https://github.com/rokudev/trickplay-sample-apps) that demonstrate different ways to incorporate thumbnails from BIF files for trick play purposes.