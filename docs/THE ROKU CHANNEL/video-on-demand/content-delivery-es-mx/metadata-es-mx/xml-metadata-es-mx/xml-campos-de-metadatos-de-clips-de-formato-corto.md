---
title: XML - campos de metadatos de clips de formato corto
excerpt: Referencia XML campo por campo para la entrega de contenido de Clip.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia XML campo por campo para el tipo de contenido **Clip** — títulos de formato corto, independientes o auxiliares (consulta [Definiciones de tipo de contenido](#content-type-definitions)). Para la descarga del esquema y la muestra anotada, consulta la [Descripción general de metadatos XML de Roku](#roku-xml-metadata-overview).

Los clips admiten dos conjuntos de funciones opcionales que no están presentes en Película/TV: `subType`**/**`parentInfo` (para identificar un clip como auxiliar de un programa principal) y **metadatos deportivos** (`sportType`, `sportLeague`, `teams`).

Los campos se agrupan en: **Información del paquete**, **Descriptores de contenido**, **Reparto y equipo de filmación**, **Localizaciones**, **Opciones de reproducción/Disponibilidad**, **Activos**, **Información principal** y **Metadatos deportivos**.

***

## Información del paquete

### package

Define el tipo de versión del paquete.

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | `clip1.0`         | Obligatorio |

```xml
<package version="clip1.0">
```

### provider

Nombre del propietario del contenido/estudio/cadena.

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/provider` | Roku Originals    | Obligatorio |

```xml
<provider>Roku Originals</provider>
```

### language

Idioma principal de los metadatos del paquete. Como mínimo, debe ajustarse a un [código de idioma admitido](#language-codes). Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`).

| Xpath XML           | Valores aceptados                          | Obligatorio |
| ------------------- | ------------------------------------------ | ----------- |
| `/package/language` | [Código de idioma válido](#language-codes) | Obligatorio |

```xml
<language>en</language>
```

### type

Define el tipo de contenido del paquete.

| Xpath XML             | Valores aceptados | Obligatorio |
| --------------------- | ----------------- | ----------- |
| `/package/video/type` | `clip`            | Obligatorio |

```xml
<type>clip</type>
```

### subType

Define el subtipo (subType) de contenido del paquete. Actualmente Roku no admite conexiones principales y secundarias de forma nativa: el contenido auxiliar o relacionado puede entregarse e identificarse con uno de los siguientes subtipos, pero **no se crea ningún vínculo a nivel de sistema entre el activo principal y el secundario**. (Consulta [Información principal](#parent-info) más adelante para saber cómo puede proporcionarse contexto descriptivo, sin vínculo, sobre un programa principal.)

| Xpath XML                | Valores aceptados                                                                              | Obligatorio |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ----------- |
| `/package/video/subType` | `trailer`, `highlight`, `making_of`, `behind_scenes`, `interview`, `related`, `recap`, `extra` | Opcional    |

```xml
<subType>trailer</subType>
```

### asset_id

Identificador único e inalterable de un clip de formato corto. Generado y suministrado por la empresa socia; debe coincidir con el ID del documento de Avails, para facilitar el seguimiento a lo largo del proceso de Roku. **Límite de 50 caracteres.**

| Xpath XML                 | Valores aceptados                                                                  | Obligatorio |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

```xml
<asset_id>clipAssetIdHere</asset_id>
```

### eidr

ID de EIDR, si existe uno.

| Xpath XML             | Valores aceptados           | Obligatorio |
| --------------------- | --------------------------- | ----------- |
| `/package/video/eidr` | Cualquier ID de EIDR válido | Opcional    |

```xml
<eidr></eidr>
```

### tmsId

ID de Gracenote, si existe uno.

| Xpath XML              | Valores aceptados          | Obligatorio |
| ---------------------- | -------------------------- | ----------- |
| `/package/video/tmsId` | Cualquier ID de TMS válido | Opcional    |

```xml
<tmsId></tmsId>
```

***

## Descriptores de contenido

### title

Título del clip de formato corto. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — sin datos entre paréntesis ajenos al título (por ejemplo, `(Clásica)`, `(1987)`, `(Temporada 1)`, `(HD)`).

| Xpath XML              | Ejemplo         | Obligatorio |
| ---------------------- | --------------- | ----------- |
| `/package/video/title` | Título del clip | Obligatorio |

```xml
<title><![CDATA[Clip Title. Required.]]></title>
```

### short_synopsis

Una sinopsis breve del contenido. Sección CDATA compatible. **Límite de 250 caracteres.**

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

```xml
<short_synopsis><![CDATA[Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis

Una sinopsis larga del contenido. Sección CDATA compatible. **Límite de 500 caracteres.**

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | Sinopsis de 500 caracteres | Opcional    |

```xml
<long_synopsis><![CDATA[Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

Idioma original de producción del título. Como mínimo, debe ajustarse a un [código de idioma admitido](#language-codes) (se recomienda incluir un código de región).

| Xpath XML                                 | Valores aceptados                                                          | Obligatorio |
| ----------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `/package/video/original_spoken_language` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

El país principal donde se produjo el clip, y donde están establecidos los principales creadores, el equipo de filmación y los productores. Debe ajustarse a un código [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) admitido.

| Xpath XML                          | Valores aceptados                                                                                                | Obligatorio |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `/package/video/country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

```xml
<country_of_origin>US</country_of_origin>
```

### closedCaptions

Indica si el título entregado contiene subtítulos descriptivos. **Obligatorio para todo el contenido destinado a Roku Channel en EE. UU.**

| Xpath XML                       | Valores aceptados | Obligatorio                           |
| ------------------------------- | ----------------- | ------------------------------------- |
| `/package/video/closedCaptions` | `Y` o `N`         | Obligatorio para contenido en EE. UU. |

```xml
<closedCaptions>Y</closedCaptions>
```

### closedCaptionsExemption

Código de exención de la FCC para el requisito de subtítulos descriptivos. **Obligatorio si&#x20;**`closedCaptions`**&#x20;=&#x20;**`N`**.**

| Código | Definición                                                                                                                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | El contenido nunca se emitió por televisión en Estados Unidos.                                                                                            |
| 2      | El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.                                                                 |
| 3      | El contenido no se ha emitido por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.                             |
| 4      | El contenido no consiste en programación de video de larga duración.                                                                                      |
| 5      | El contenido no pertenece a una categoría de programación en línea que requiere subtítulos descriptivos según las normas de la FCC (47 C.F.R. § 79.4(b)). |
| 6      | La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.                                |

| Xpath XML                                | Valores aceptados            | Obligatorio                           |
| ---------------------------------------- | ---------------------------- | ------------------------------------- |
| `/package/video/closedCaptionsExemption` | `1`, `2`, `3`, `4`, `5`, `6` | Obligatorio si `closedCaptions` = `N` |

```xml
<closedCaptionsExemption>1</closedCaptionsExemption>
```

### release_date

Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, un **año de estreno** correcto.

| Xpath XML                     | Valores aceptados              | Obligatorio |
| ----------------------------- | ------------------------------ | ----------- |
| `/package/video/release_date` | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### runtime

Duración total del contenido, en **minutos enteros**.

| Xpath XML                | Valores aceptados    | Obligatorio |
| ------------------------ | -------------------- | ----------- |
| `/package/video/runtime` | Solo números enteros | Obligatorio |

```xml
<runtime>3</runtime>
```

### genre

Clasificación por género del contenido. Cada clip de formato corto **debe** entregarse con **al menos un** género admitido. Consulta la [lista enumerada de géneros](#genres).

| Xpath XML                     | Valores aceptados                                                        | Obligatorio |
| ----------------------------- | ------------------------------------------------------------------------ | ----------- |
| `/package/video/genres/genre` | Consulta la [lista enumerada](#genres). No más de 10 géneros por título. | Obligatorio |

```xml
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

### rating

Clasificación de contenido/edades de una fuente de clasificación. Se **debe** proporcionar, para cada clip de formato corto, una clasificación válida de cine o TV de la autoridad de clasificación (`ratingSystem`) del territorio en el que estará disponible el contenido. Si no está clasificado por la autoridad oficial de ese territorio, usa en su lugar una clasificación válida de `USA_PR`, según las pautas de [tvguidelines.org](http://tvguidelines.org/) (no existe un organismo oficial de clasificación para `USA_PR`).

| Xpath XML                                                           | Valores aceptados                                                                                                                                          | Obligatorio |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `/package/video/ratings/rating` (debe incluir el atributo `system`) | Consulta [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country). Se permiten múltiples pares de clasificación/sistema. | Obligatorio |

```xml
<ratings>
  <rating system="MPAA" reason="For drug content, some sensuality and war violence.">PG-13</rating>
  <rating system="BBFC">12A</rating>
  <rating system="CHVRS">14A</rating>
</ratings>
```

### tag

Campo de categorización de formato libre más allá de Género. Lo usan el equipo editorial de Roku y el motor de recomendaciones para mostrar contenido. Sin límite en la cantidad; sin un conjunto de etiquetas definido. **Distingue entre mayúsculas y minúsculas** — entrégalas de forma consistente.

| Xpath XML                 | Valores aceptados                          | Obligatorio                         |
| ------------------------- | ------------------------------------------ | ----------------------------------- |
| `/package/video/tags/tag` | Cualquier cadena de menos de 50 caracteres | Opcional, pero **muy recomendable** |

```xml
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

***

## Reparto y equipo de filmación

### cast display_name

Nombre de un miembro del reparto. Sección CDATA compatible.

| Xpath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cast/cast_member/display_name` | Nombre Apellido   | Opcional    |

```xml
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

### crew display_name

Nombre de un miembro del equipo de filmación. Sección CDATA compatible.

> **Nota entre formatos:** por el momento, Director es la **única** función de `crew_member` admitida para la ingesta en **Excel** (esta referencia XML admite la lista completa de funciones del equipo de filmación; la limitación es específica del formato de entrega en Excel).

| Xpath XML                                      | Valores aceptados | Obligatorio                                    |
| ---------------------------------------------- | ----------------- | ---------------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Nombre Apellido   | Obligatorio si se proporciona un `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### role

Función del miembro del equipo de filmación indicado en `display_name`. Todo miembro del equipo de filmación **debe** incluir también su función. Consulta la [lista enumerada de funciones del equipo de filmación](#crew-roles). **Las funciones distinguen entre mayúsculas y minúsculas.**

> **Nota entre formatos:** como se indicó arriba, Director es por el momento la única función de `crew_member` admitida para la ingesta en Excel.

| Xpath XML                                    | Valores aceptados                          | Obligatorio                                    |
| -------------------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| `/package/video/crew/crew_member/roles/role` | Consulta la [lista enumerada](#crew-roles) | Obligatorio si se proporciona un `crew_member` |

```xml
<role>Director</role>
```

***

## Localizaciones

### localizations

Inicia el bloque que proporciona metadatos localizados para paquetes multilingües — idioma, título traducido, `short_synopsis` y `long_synopsis`.

| Xpath XML                      | Valores aceptados | Obligatorio |
| ------------------------------ | ----------------- | ----------- |
| `/package/video/localizations` | —                 | Obligatorio |

```xml
<localizations>
```

### localization atributo name

Define el idioma de los campos localizados dentro de un bloque `localization`. El nombre del atributo **debe** ser `name`; el valor debe, como mínimo, ajustarse a un [código de idioma admitido](#language-codes) (se recomienda incluir un código de región).

| Xpath XML                                   | Valores aceptados                                                          | Obligatorio |
| ------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `/package/video/localizations/localization` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<localization name="es">
```

### localized title

Título localizado del clip de formato corto. Mismas restricciones de datos entre paréntesis ajenos al título que en [title](#title) arriba.

| Xpath XML                                         | Ejemplo                    | Obligatorio |
| ------------------------------------------------- | -------------------------- | ----------- |
| `/package/video/localizations/localization/title` | Título localizado del clip | Obligatorio |

```xml
<title><![CDATA[Localized Clip Title. Required.]]></title>
```

### localized short_synopsis

Sección CDATA compatible. **Límite de 250 caracteres.**

| Xpath XML                                                  | Valores aceptados | Obligatorio |
| ---------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

```xml
<short_synopsis><![CDATA[Localized Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

### localized long_synopsis

Sección CDATA compatible. **Límite de 500 caracteres.**

| Xpath XML                                                 | Valores aceptados | Obligatorio |
| --------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/long_synopsis` | 500 caracteres    | Opcional    |

```xml
<long_synopsis><![CDATA[Localized Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Opciones de reproducción/Disponibilidad

### playOptions

Inicia el bloque que proporciona la información de disponibilidad: disponibilidad por país/territorio, tipo de monetización, y fechas de inicio/fin de disponibilidad.

| Xpath XML                    | Valores aceptados | Obligatorio |
| ---------------------------- | ----------------- | ----------- |
| `/package/video/playOptions` | —                 | Obligatorio |

```xml
<playOptions>
```

### country

Código de país del territorio en el que el contenido está disponible. Se permiten múltiples nodos `country` si `vodType`, `licensePeriodStart` y `licensePeriodEnd` son idénticos entre ellos.

| Xpath XML                                       | Valores aceptados      | Obligatorio |
| ----------------------------------------------- | ---------------------- | ----------- |
| `/package/video/playOptions/playOption/country` | `US`, `CA`, `GB`, `MX` | Preferido   |

```xml
<playOption>
  <country>US</country>
  <!-- Additional country nodes here -->
</playOption>
```

### vodType

Tipo de monetización del clip de formato corto. Se permiten múltiples nodos `vodType` si `country`, `licensePeriodStart` y `licensePeriodEnd` son idénticos entre ellos.

| Xpath XML                                       | Valores aceptados | Obligatorio |
| ----------------------------------------------- | ----------------- | ----------- |
| `/package/video/playOptions/playOption/vodType` | `AVOD`, `SVOD`    | Preferido   |

```xml
<playOption>
  <vodType>AVOD</vodType>
  <!-- Additional vodType nodes here -->
</playOption>
```

### licensePeriodStart

Fecha de inicio de la disponibilidad del contenido. **Una** por `playOption`. Debe ser cronológicamente **anterior** a `licensePeriodEnd`; ambas **no deben** ser idénticas.

| Xpath XML                                                  | Valores aceptados                       | Obligatorio |
| ---------------------------------------------------------- | --------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Opcional    |

```xml
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

### licensePeriodEnd

Fecha de finalización de la disponibilidad del contenido. **Una** por `playOption`. Debe ser cronológicamente **posterior** a `licensePeriodStart`; ambas **no deben** ser idénticas.

| Xpath XML                                                | Valores aceptados                       | Obligatorio |
| -------------------------------------------------------- | --------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Opcional    |

```xml
<playOption>
  <licensePeriodEnd>YYYY-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

***

## Activos

El bloque `assets` hace referencia a todos los archivos entregados como parte del paquete (video, subtítulos descriptivos, audio, subtítulos, ilustraciones), cada uno descrito mediante un par `asset`/`data_file`.

### assets

Inicia el bloque de activos.

| Xpath XML               | Valores aceptados    | Obligatorio |
| ----------------------- | -------------------- | ----------- |
| `/package/video/assets` | `media_type="video"` | Obligatorio |

```xml
<assets media_type="video">
```

### Full Source (Video)

Describe el archivo de video fuente. `asset type="full"`; `data_file role="source"`. `<locale>` y `<file_name>` también son obligatorios.

| Xpath XML                               | Valores aceptados                              | Obligatorio |
| --------------------------------------- | ---------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="source"` | Obligatorio |

```xml
<asset type="full">
  <data_file role="source">
```

### Full Captions

Describe los subtítulos descriptivos del archivo de video fuente. `asset type="full"`; `data_file role="captions"`. `<locale>` y `<file_name>` también son obligatorios.

| Xpath XML                               | Valores aceptados                                | Obligatorio            |
| --------------------------------------- | ------------------------------------------------ | ---------------------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="captions"` | Obligatorio en EE. UU. |

```xml
<asset type="full">
  <data_file role="captions">
```

### Full Audio

Describe el audio sidecar del archivo de video fuente — ya sea un doblaje de audio completo para traducción de idioma, o una pista de audio descriptivo para accesibilidad. `asset type="full"`; `data_file role="audio"` (doblaje de traducción) o `role="audio description"` (accesibilidad). `<locale>` y `<file_name>` también son obligatorios.

**El audio sidecar puede requerirse** cuando se necesitan activos localizados (el audio fuente no es nativo del territorio de distribución) o para cumplir con las regulaciones de la FCC.

| Xpath XML                               | Valores aceptados                                                          | Obligatorio                                            |
| --------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="audio"` o `role="audio description"` | Opcional\* — se prefiere fuertemente audio description |

```xml
<asset type="full">
  <data_file role="audio">
```

### Full Subtitles

Describe los subtítulos sidecar del archivo de video fuente. `asset type="full"`; `data_file role="subtitles"`. `<locale>` y `<file_name>` también son obligatorios.

**Los subtítulos sidecar pueden requerirse** cuando se necesitan activos localizados (el audio fuente no es nativo del territorio de distribución).

| Xpath XML                               | Valores aceptados                                 | Obligatorio |
| --------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="subtitles"` | Opcional\*  |

```xml
<asset type="full">
  <data_file role="subtitles">
```

### Forced Subtitles

Describe los subtítulos narrativos forzados sidecar del archivo de video fuente. `asset type="full"`; `data_file role="forced subtitles"`. `<locale>` y `<file_name>` también son obligatorios.

| Xpath XML                               | Valores aceptados                                        | Obligatorio |
| --------------------------------------- | -------------------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="forced subtitles"` | Opcional\*  |

```xml
<asset type="full">
  <data_file role="forced subtitles">
```

### Artwork

Describe el o los archivos de ilustración. `asset type="artwork"`. `<locale>` y `<file_name>` también son obligatorios. Consulta [Ilustraciones](#artwork) para las especificaciones completas de entrega de imágenes.

> **Nota:** a diferencia de Película y TV, las ilustraciones de Clip no se dividen aquí en variantes `background_image`/`boxcover`/`poster` — esto es congruente con la [Especificación de ilustraciones](#), donde los Clips solo requieren un único tipo de imagen de Arte clave 16:9.

| Xpath XML                               | Valores aceptados      | Obligatorio |
| --------------------------------------- | ---------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"` | Obligatorio |

```xml
<asset type="artwork">
  <data_file>
```

### locale

Identifica el idioma del `data_file`. Como mínimo, debe ajustarse a un [código de idioma admitido](#language-codes) (se recomienda incluir un código de región). Aplica a las funciones `source`, `captions`, `audio` y `subtitles` de `data_file`, y al tipo de activo `artwork`.

| Xpath XML                                      | Valores aceptados                            | Obligatorio |
| ---------------------------------------------- | -------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file/locale` | [Código de idioma admitido](#language-codes) | Obligatorio |

```xml
<locale name="en"/>
```

### file_name

Nombre de archivo del activo indicado en el atributo `role` o `type` del `data_file` que lo contiene. Todos los valores **distinguen entre mayúsculas y minúsculas** y **deben** incluir la extensión de archivo adecuada.

| Xpath XML                                         | Valores aceptados                                                              | Obligatorio                            |
| ------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| `/package/video/assets/asset/data_file/file_name` | Consulta las pautas anteriores para las especificaciones de entrega de activos | Obligatorio para cada activo entregado |

```xml
<file_name>VideoFilename.mxf</file_name>
```

### audio

[Descriptor de diseño de audio](#audio-channel-layout-hints) para el archivo de video entregado.

| Xpath XML                                     | Valores aceptados                                                        | Obligatorio |
| --------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file/audio` | `stereoOnly`, `surroundOnly`, `stereoPlusSurround`, `surroundPlusStereo` | Opcional    |

```xml
<audio>stereoOnly</audio>
```

***

## Información principal

`parentInfo` proporciona metadatos **descriptivos y contextuales** sobre el programa del cual se deriva o con el cual se relaciona un clip — se usa en combinación con un valor [`subType`](#subtype) válido, indicado arriba. **Esto es solo metadato descriptivo; no crea un vínculo navegable ni una relación en la plataforma** entre el clip y su programa principal (de forma congruente con la nota de `subType` arriba, que indica que Roku no admite conexiones principales/secundarias de forma nativa).

### parentInfo

Inicia el bloque que proporciona la información principal del paquete.

| Xpath XML                   | Valores aceptados | Obligatorio |
| --------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo` | —                 | Opcional    |

```xml
<parentInfo>
```

### contentType principal

Tipo de contenido del programa principal del cual se deriva o al cual describe el clip.

| Xpath XML                               | Valores aceptados            | Obligatorio |
| --------------------------------------- | ---------------------------- | ----------- |
| `/package/video/parentInfo/contentType` | `episode`, `movie`, `series` | Opcional    |

```xml
<parentInfo>
  <contentType>episode</contentType>
</parentInfo>
```

### title principal

Título del programa principal, si el programa principal es una película o un episodio.

| Xpath XML                         | Valores aceptados                       | Obligatorio |
| --------------------------------- | --------------------------------------- | ----------- |
| `/package/video/parentInfo/title` | Título de la película o serie principal | Opcional    |

```xml
<parentInfo>
  <title>Title of Parent Movie or Series</title>
</parentInfo>
```

### runtime principal

Duración del programa principal, si el programa principal es una película o un episodio.

| Xpath XML                           | Valores aceptados | Obligatorio |
| ----------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/runtime` | Número entero     | Opcional    |

```xml
<parentInfo>
  <runtime>45</runtime>
</parentInfo>
```

### releaseDate principal

Fecha de estreno de la película, el episodio o la serie principal.

| Xpath XML                               | Valores aceptados              | Obligatorio |
| --------------------------------------- | ------------------------------ | ----------- |
| `/package/video/parentInfo/releaseDate` | Formato ISO 8601: `YYYY-MM-DD` | Opcional    |

```xml
<parentInfo>
  <releaseDate>YYYY-MM-DD</releaseDate>
</parentInfo>
```

### tmsId principal

ID de TMS de la película, el episodio o la serie principal.

| Xpath XML                         | Valores aceptados | Obligatorio |
| --------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/tmsId` | ID de TMS válido  | Opcional    |

```xml
<parentInfo>
  <tmsId>TMSID</tmsId>
</parentInfo>
```

### seriesTitle principal

Título de la serie del programa principal, si el programa principal es un episodio.

| Xpath XML                               | Valores aceptados            | Obligatorio |
| --------------------------------------- | ---------------------------- | ----------- |
| `/package/video/parentInfo/seriesTitle` | Título de la serie principal | Opcional    |

```xml
<parentInfo>
  <seriesTitle>Parent Series Title</seriesTitle>
</parentInfo>
```

### seasonNumber principal

Número de temporada del programa principal, si el programa principal es un episodio.

| Xpath XML                                | Valores aceptados         | Obligatorio |
| ---------------------------------------- | ------------------------- | ----------- |
| `/package/video/parentInfo/seasonNumber` | Número entero mayor que 0 | Opcional    |

```xml
<parentInfo>
  <seasonNumber>2</seasonNumber>
</parentInfo>
```

### episodeNumber principal

Número de episodio del programa principal, si el programa principal es un episodio.

| Xpath XML                                 | Valores aceptados | Obligatorio |
| ----------------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/episodeNumber` | Número entero     | Opcional    |

```xml
<parentInfo>
  <episodeNumber>14</episodeNumber>
</parentInfo>
```

***

## Metadatos deportivos

Los siguientes campos son **obligatorios específicamente para clips deportivos**.

### sportType

Nombre del deporte que aparece en el clip/momento destacado.

| Xpath XML                  | Valores aceptados  | Obligatorio                       |
| -------------------------- | ------------------ | --------------------------------- |
| `/package/video/sportType` | Nombre del deporte | Obligatorio para clips deportivos |

```xml
<sportType>Baseball</sportType>
```

### sportLeague

Nombre de la liga deportiva que aparece en el clip/momento destacado.

| Xpath XML                    | Valores aceptados           | Obligatorio                       |
| ---------------------------- | --------------------------- | --------------------------------- |
| `/package/video/sportLeague` | Nombre de la liga deportiva | Obligatorio para clips deportivos |

```xml
<sportLeague>MLB</sportLeague>
```

### teams

Equipos que aparecen en el clip/momento destacado deportivo. Los equipos local y visitante se definen mediante el atributo `location`.

> **Nota:** por el momento, Roku solo admite metadatos de participantes **basados en equipos**. Los deportes individuales/en solitario (por ejemplo, tenis, golf) serán compatibles en una fecha posterior.

| Xpath XML                   | Valores aceptados                              | Obligatorio                       |
| --------------------------- | ---------------------------------------------- | --------------------------------- |
| `/package/video/teams/team` | `team location="away"`; `team location="home"` | Obligatorio para clips deportivos |

```xml
<teams>
	<team location="away">Chicago Cubs</team>
	<team location="home">St. Louis Cardinals</team>
</teams>
```
