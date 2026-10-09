---
title: MovieLabs
excerpt: >-
  Orden de entrega, etiquetas, marcadores y validación de esquema específicos de
  Roku para MovieLabs.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página cubre los detalles de implementación **específicos de Roku** para la entrega de metadatos de MovieLabs — las versiones de esquema utilizadas, los mapeos de campos específicos de Roku (etiquetas, TMS ID, ilustraciones), los marcadores de corte publicitario y la validación de esquema. Se asume familiaridad general con los conceptos de MEC/MMC de MovieLabs; para los conceptos fundamentales de MovieLabs, consulta la guía de MovieLabs.

***

## Orden de entrega

El orden de entrega es **fundamental**. Roku no puede procesar el contenido sin la entrega exitosa **tanto** del XML de MMC como del de MEC, y existen dos dependencias de orden distintas que deben cumplirse.

### 1. Los archivos multimedia deben preceder a su XML

* Para cada **MMC**, todos los archivos a los que hace referencia **deben** entregarse antes que el propio XML de MMC, para que la entrega se considere exitosa.
* Para cada **MEC**, todos los archivos a los que hace referencia **deben** entregarse antes que el propio XML de MEC, para que la entrega se considere exitosa.

### 2. Orden de ingesta jerárquico (serie > temporada > episodio)

* **Las películas y los episodios** requieren la entrega exitosa **tanto** del MMC como del MEC para su ingesta.
* **Las series y las temporadas** requieren la entrega exitosa de **al menos el MEC** para su ingesta. (Se admiten los MMC de serie y de temporada si las referencias de ilustraciones se entregan a través del MMC.)
* Un **episodio** no puede ingerirse hasta que el **MEC de su temporada** se haya entregado e ingerido correctamente.
* Una **temporada** no puede ingerirse hasta que el **MEC de su serie** se haya entregado e ingerido correctamente.

**Si el contenido llega fuera de orden:**

* Un episodio procesado antes que su serie o temporada se mantiene en **estado sin ingerir** hasta que la serie o temporada se haya entregado correctamente.
* Una temporada procesada antes que su serie o un episodio perteneciente a ella se mantiene en **estado sin ingerir** hasta que la serie o el episodio se hayan entregado correctamente.
* Una serie procesada antes que una temporada y un episodio pertenecientes a ella se mantiene en **estado sin ingerir** hasta que una temporada y un episodio se hayan entregado correctamente.

***

## Metadatos y archivos multimedia específicos de Roku

Roku Channel admite la entrega de metadatos a través de la especificación de MovieLabs, utilizando los siguientes esquemas:

* **MMC y MEC:** el servicio MovieLabs de Roku Channel se desarrolló con la versión **MEC v2.9** y **MMC v1.10**, tal y como se define en el [sitio web de MovieLabs](https://www.movielabs.com/md/).
* **EMA Avails:** Roku Channel admite la última versión de la [especificación de EMA](https://movielabs.com/md/avails/), entregada mediante `.xlsx`.

Todos los archivos de [video](#video-requirements), [audio](#audio-requirements), [subtítulos descriptivos](#closed-captions), [subtítulos](#subtitles) e [imagen](#artwork), junto con los [requisitos mínimos de metadatos](#minimum-required-metadata-by-content-type), los [géneros](#genres) y las [clasificaciones/fuentes de clasificación](#rating-values-by-rating-system-and-country), **deben** cumplir con los formatos y requisitos definidos en el resto de esta especificación — esta página cubre únicamente la mecánica de entrega específica de MovieLabs para ese mismo contenido.

### Etiquetas

Las etiquetas para fines de merchandising/curaduría pueden entregarse a través del nodo `Keyword`, compatible con el XML de MEC de MovieLabs. Consulta el [esquema MEC de MovieLabs](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link116) para conocer la ubicación correcta.

```xml
<md:LocalizedInfo language="en">
	<md:TitleDisplayUnlimited>Gran título de mi programa</md:TitleDisplayUnlimited>
	<md:Summary190>Resumen breve de mi programa.</md:Summary190>
	<md:Summary400>Resumen más extenso de mi programa.</md:Summary400>
	<md:Genre id="genre"/>
	<md:Keyword>palabra clave</md:Keyword>
</md:LocalizedInfo>
```

### TMS ID

Los TMS ID de Gracenote pueden entregarse a través del XML de MEC de MovieLabs, como un `Identifier` con `Namespace` `TMSID` dentro del nodo `AltIdentifier`. Consulta el [esquema MEC de MovieLabs](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link121) para conocer la estructura correcta.

```xml
<md:AltIdentifier>
	<md:Namespace>TMSID</md:Namespace>
	<md:Identifier>EP012345678910</md:Identifier>
</md:AltIdentifier>
```

### Cortes publicitarios y puntos de referencia en el XML de MMC

Los puntos de referencia de corte publicitario, créditos iniciales y créditos finales se proporcionan en el XML de MMC de MovieLabs a través del nodo `Markers`. Consulta el [esquema MMC de MovieLabs](https://movielabs.com/md/manifest/v1.10/manifest-v1.10/manifest-v1.10.html#Link184) para conocer la estructura correcta.

**Nota:** Roku solo necesita un único **punto de inicio** para los marcadores de corte publicitario — el reproductor de Roku pausa la reproducción en ese punto, reproduce el bloque de anuncios y reanuda desde el mismo punto.

```xml
    <manifest:Markers>

    <!--Punto de referencia de créditos iniciales: inicio y fin-->
      <manifest:Marker>
        <manifest:Timecode format="seconds">155.071</manifest:Timecode>
        <manifest:DisplayLabel>FIRST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
        <manifest:Label>FFEI</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">200.867</manifest:Timecode>
        <manifest:DisplayLabel>LAST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
        <manifest:Label>LFEI</manifest:Label>
      </manifest:Marker>

      <!--Punto de referencia de créditos finales: inicio y fin-->

      <manifest:Marker>
        <manifest:Timecode format="seconds">3669.207</manifest:Timecode>
        <manifest:DisplayLabel>FIRST_FRAME_UP_NEXT</manifest:DisplayLabel>
        <manifest:Label>FFUN</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">3812.517</manifest:Timecode>
        <manifest:DisplayLabel>LAST_FRAME_UP_NEXT</manifest:DisplayLabel>
        <manifest:Label>LFUN</manifest:Label>
      </manifest:Marker>

      <!--Puntos de referencia de corte publicitario (Roku solo necesita un punto de inicio. Nuestro reproductor pausará la reproducción del video en este punto, reproducirá el bloque de anuncios y reanudará desde este mismo punto)-->

      <manifest:Marker>
        <manifest:Timecode format="seconds">737.111</manifest:Timecode>
        <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
        <manifest:Label>FPCI</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">1361.276</manifest:Timecode>
        <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
        <manifest:Label>FPCI</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">1948.821</manifest:Timecode>
        <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
        <manifest:Label>FPCI</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">2841.421</manifest:Timecode>
        <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
        <manifest:Label>FPCI</manifest:Label>
      </manifest:Marker>
      <manifest:Marker>
        <manifest:Timecode format="seconds">3270.100</manifest:Timecode>
        <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
        <manifest:Label>FPCI</manifest:Label>
      </manifest:Marker>
    </manifest:Markers>
```

### ArtReference de MEC para Roku Channel

Los archivos de imagen específicos de Roku se identifican mediante el atributo `purpose` de `ArtReference` del MEC de MovieLabs:

| Valor del atributo `purpose` | Tipo de ilustración de Roku                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `keyart`                     | Arte clave en 16:9 con texto y tratamiento del título para películas/formato corto/series, **O** imagen en 16:9 sin texto para episodios |
| `boxcover`                   | Carátula en 4:3 o 3:4 con texto y tratamiento del título                                                                                 |
| `poster`                     | Portada en 2:3 con texto y tratamiento del título                                                                                        |
| `background`                 | Imagen de fondo en 16:9 sin texto                                                                                                        |

```xml
<md:LocalizedInfo language="en" default="true">
	<md:TitleDisplayUnlimited>Ahed's Knee</md:TitleDisplayUnlimited>

	<!--Referencias de imagen de MEC-->
	<!--Arte clave en 16:9 con texto y tratamiento del título para películas/formato corto/series, para entregarse con purpose="keyart"-->
	<md:ArtReference resolution="1920x1080" purpose="keyart">16x9_texted_image_with_title_treatment.jpg</md:ArtReference>

	<!--Imagen en 16:9 sin texto para episodios, para entregarse con purpose="keyart"-->
	<md:ArtReference resolution="1920x1080" purpose="keyart">16x9_textless_episode_image.jpg</md:ArtReference>

	<!--Imagen de carátula en 4:3 o 3:4 con texto y tratamiento del título, para entregarse con purpose="boxcover". La relación de aspecto depende del tipo de contenido-->
	<md:ArtReference resolution="2560x1920" purpose="boxcover">4x3_texted_image_with_title_treatment.jpg</md:ArtReference> <!--para el tipo de contenido de serie-->
	<md:ArtReference resolution="1920x2560" purpose="boxcover">3x4_texted_image_with_title_treatment.jpg</md:ArtReference> <!--para el tipo de contenido de película-->

	<!--Imagen de portada en 2:3 con texto y tratamiento del título, para entregarse con purpose="poster"-->
	<md:ArtReference resolution="2000x3000" purpose="poster">2x3_texted_image_with_title_treatment.jpg</md:ArtReference>

	<!--Imagen de fondo en 16:9 sin texto, para entregarse con purpose="background"-->
	<md:ArtReference resolution="1920x1080" purpose="background">16x9_textless_background_image.jpg</md:ArtReference>

	<md:Summary190>Resumen breve del programa en el idioma especificado</md:Summary190>
	<md:Summary400>Resumen largo del programa en el idioma especificado</md:Summary400>
	<md:Genre>Drama</md:Genre>
</md:LocalizedInfo>
```

***

## Validación del esquema de MovieLabs

Roku utiliza Apache [xmlbeans](https://xmlbeans.apache.org/download/index.html) para analizar y validar los archivos XML de MEC/MMC. Su herramienta de validación por línea de comandos puede usarse para verificar los archivos antes de la entrega.

1. Descarga y extrae xmlbeans en tu equipo.
2. Desde la línea de comandos, ve (`cd`) al directorio `bin` de xmlbeans.
3. Dentro de `bin`, ubica la herramienta `validate`.
4. Descarga los archivos XSD del esquema oficial de MovieLabs en tu equipo:
   * [manifest-v1.10.xsd](https://movielabs.com/schema/manifest/v1.10/manifest-v1.10.xsd) (para MMC)
   * [mdmec-v2.9.xsd](https://movielabs.com/schema/mdmec/v2.9/mdmec-v2.9.xsd) (para MEC)
5. Ejecuta: `validate schema.xsd instance.xml` — apunta `schema.xsd` a `mdmec-v2.9.xsd` para archivos MEC, o a `manifest-v1.10.xsd` para archivos MMC.
6. El resultado en la línea de comandos indicará si el XML dado es válido.

**Ejemplo de uso:**

```bash
./validate ~/dev/movielabsSpec/schema/mdmec-v2.9.xsd /path/to/file/directory/MEC_SAMPLE_123456789.xml
```

**Ejemplo de respuesta:**

```text
XMLBEANS_LIB=./../lib
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...
/path/to/file/directory/MEC_SAMPLE_123456789.xml valid
```

> **📌 Nota — comportamiento esperado de la validación:** el esquema oficial de MovieLabs **puede fallar en la validación** al usar los valores de género admitidos por Roku. **Esto es esperado y no representa un problema** — el envío de los valores de género admitidos por Roku **no** hará fallar la validación en el propio proceso de ingesta de Roku, aunque la herramienta independiente xmlbeans pueda marcarlo. No interpretes un error de xmlbeans relacionado con el género como una señal de que tu archivo no es válido para la entrega a Roku.

***

## Glosario

| Término          | Definición                                                                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MEC**          | Media Entertainment Core: el esquema de metadatos de MovieLabs que describe el contenido en sí.                                                                        |
| **MMC**          | Media Manifest Core: el esquema de MovieLabs que describe el manifiesto de activos entregables (video, audio, imágenes) vinculados a un título.                        |
| **EMA Avails**   | La especificación de MovieLabs/EMA que expresa los términos de licenciamiento y disponibilidad de un contenido.                                                        |
| **Nodo Markers** | El elemento del XML de MMC que contiene los códigos de tiempo de los puntos de referencia para cortes publicitarios, créditos iniciales y créditos finales.            |
| **ArtReference** | El elemento del XML de MEC que hace referencia a un archivo de ilustración, etiquetado con un atributo `purpose` que identifica qué tipo de imagen de Roku representa. |
| **TMS ID**       | Un identificador asignado por Gracenote para un título, entregable a través del nodo `AltIdentifier` del MEC.                                                          |
| **xmlbeans**     | Una biblioteca/herramienta de Apache que Roku utiliza para validar los archivos XML de MEC/MMC contra el esquema oficial de MovieLabs.                                 |
