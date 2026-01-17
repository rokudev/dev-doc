---
title: "roImageMetadata"
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


The roImageMetadata component provides developers access to image file metadata included in many .jpg EXIF headers.

roImageMetadata currently only works with local file Urls. 

This object is created without any arguments:

``CreateObject("roImageMetadata")``
 
#### EXIF Background

Each EXIF tag represents one piece of metadata. Each tag is uniquely identified by a tag number and the IFD in which it was found. All the tags are grouped into a small set of IFDs (Image File Directory). The EXIF specification describes 5 IFDs:

| Number | Name             | Notes                                                                                                                                    |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 0      | image            | Tags related to image structure and some additional basic information                                                                    |
| 1      | thumbnail        | Tags related to the thumbnail image structure                                                                                            |
| 2      | exif             | Tags related to non-image structure data. I know this is an odd name. Usually stuff like ApertureValue that a digital camera would write |
| 3      | gps              | Tags related to GPS                                                                                                                      |
| 4      | interoperability |                                                                                                                                          |


The associative array returned by GetRawExif() function on the roImageMetadata component is organized as a tree where the first level consists of the IFDs, the second level is the tag name, and the third (leaf) level is tag associative array. 

Each tag associative array contains the following values:

| Number | Name    | Notes                                                                              |
| ------ | ------- | ---------------------------------------------------------------------------------- |
| Tag    | Integer | The tag number                                                                     |
| Value  | String  | This is a string representation of the data regardless of the underlying data type |


Tag values can be one of several types (string, bytes, rational, enum, etc.) We are using a that converts most values to a string. In the future or time permitting, we may add more values to the tag aa to give access to raw bytes. 

The best way to illustrate how the EXIF data is accessed is through some concrete examples using the data in the reference section below. Assume that the associative array aa contains the results of the GetRawExif() function.

- To get the camera model: aa.image.model.value
- To get the gps latitude: aa.gps.GPSLatitude.value

#### Reference

For reference here are all the fields from an image taken from my camera (with the addition of GPS attributes I added using Picasa). 

The format is IFD#, Tag#[Tag Name], Data Format, Value. The Value is a string representation of data. 

~~~~
0, 272[ Model], ASCII,Canon PowerShot SD700 IS
0, 274[ Orientation], Short,top - left
0, 283[ YResolution], Rational,180.00
0, 296[ ResolutionUnit], Short,Inch
0, 305[ Software], ASCII,Picasa 3.0
0, 306[ DateTime], ASCII,2007:08:14 10:06:48
0, 531[ YCbCrPositioning], Short,centered
0, 282[ XResolution], Rational,72.00
1, 259[ Compression], Short,JPEG compression
1, 282[ XResolution], Rational,180.00
1, 283[ YResolution], Rational,180.00
1, 296[ ResolutionUnit], Short,Inch
2,33434[ ExposureTime], Rational,1/320 sec.
2,33437[ FNumber], Rational,f/2.8
2,36864[ ExifVersion], Undefined,Exif Version 2.2
2,36867[ DateTimeOriginal], ASCII,2007:08:14 10:06:48
2,36868[ DateTimeDigitized], ASCII,2007:08:14 10:06:48
2,37121[ ComponentsConfiguration], Undefined,Y Cb Cr -
2,37122[ CompressedBitsPerPixel], Rational,5.00
2,37377[ ShutterSpeedValue], SRational,8.31 EV (1/317 sec.)
2,37378[ ApertureValue], Rational,2.97 EV (f/2.8)
2,37380[ ExposureBiasValue], SRational,0.00 EV
2,37381[ MaxApertureValue], Rational,2.97 EV (f/2.8)
2,37383[ MeteringMode], Short,Pattern
2,37385[ Flash], Short,Flash did not fire, auto mode
2,37386[ FocalLength], Rational,5.8 mm
2,37500[ MakerNote], Undefined,1838 bytes undefined data
2,37510[ UserComment], Undefined,
2,40960[ FlashPixVersion], Undefined,FlashPix Version 1.0
2,40961[ ColorSpace], Short,sRGB
2,40962[ PixelXDimension], Short,2816
2,40963[ PixelYDimension], Short,2112
2,41486[ FocalPlaneXResolution], Rational,12515.56
2,41487[ FocalPlaneYResolution], Rational,12497.04
2,41488[ FocalPlaneResolutionUnit], Short,Inch
2,41495[ SensingMethod], Short,One-chip color area sensor
2,41728[ FileSource], Undefined,DSC
2,41985[ CustomRendered], Short,Normal process
2,41986[ ExposureMode], Short,Auto exposure
2,41987[ WhiteBalance], Short,Auto white balance
2,41988[ DigitalZoomRatio], Rational,1.00
2,41990[ SceneCaptureType], Short,Standard
2,42016[ ImageUniqueID], ASCII,ba6ad9a9d88ffd9576ea6155afa6c6ef
3, 0[ GPSVersionID], Byte,2.2.0.0
3, 1[ GPSLatitudeRef], ASCII,N
3, 2[ GPSLatitude], Rational,40.00, 12.00, 44.79
3, 3[ GPSLongitudeRef], ASCII,W
3, 4[ GPSLongitude], Rational,75.00, 37.00, 47.58
3, 5[ GPSAltitudeRef], Byte,Sea level
4, 1[ InteroperabilityIndex], ASCII,R98
4, 2[ InteroperabilityVersion], Undefined,0100
4, 4097[ RelatedImageWidth], Short,2816
4, 4098[ RelatedImageLength], Short,2112
~~~~

**Example**

~~~~
REM printAA() is from generalUtils.brs in our sample apps
REM and used to print an associative Array
Sub SaveExifImage(filename As String)
    meta = CreateObject("roImageMetadata")
    meta.SetUrl(filename)
    print "------------- GetRawExif() ----------------------"
    allexif = meta.GetRawExif()
    printAA(allexif)
    print "------------- GetMetadata() ---------------------"
    simple = meta.GetMetadata()
    printAA(simple)
    print "------------- GetRawExifTag() -------------------"
    rawexiftag = meta.GetRawExifTag(2,36868)
    printAA(rawexiftag)
    print "------------- GetThumbnail() --------------------"
    thumbnail = meta.GetThumbnail()
    if (thumbnail <> invalid) then
        if (thumbnail.bytes = invalid) then
            return
        end if
        imgtype = thumbnail.type
        image_ext=""
        if (imgtype = "image/jpeg" or imgtype = "jpg") then
            image_ext = "jpg"
        else if (imgtype = "image/png" or imgtype = "png") then
            image_ext = "png"
        else
            image_ext = "jpg"
        end if
        tmp_img = "tmp:/TmpExifImage" + "." + image_ext
        if (tmp_img <> invalid) then
            DeleteFile(tmp_img)
        end if
        thumbnail.bytes.Writefile(tmp_img)
    end if
End Sub
~~~~


## Supported interfaces

- [ifImageMetadata](/docs/references/brightscript/interfaces/ifimagemetadata.md "ifImageMetadata")