---
title: XML - campos de metadatos de películas
excerpt: Referencia XML campo por campo para la entrega de contenido de Película.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia XML campo por campo para el tipo de contenido **Película**. Para la descarga del esquema y la muestra anotada, consulta la [Descripción general de metadatos XML de Roku](#roku-xml-metadata-overview). Para conceptos generales de metadatos (definiciones de tipo de contenido, reglas de ID, períodos de disponibilidad) que aplican a todos los tipos de contenido, consulta la [Descripción general de metadatos](#roku-metadata-overview).

Los campos se agrupan a continuación en: **Información del paquete**, **Descriptores de contenido**, **Cortes publicitarios y puntos de referencia**, **Reparto y equipo de filmación**, **Localizaciones**, **Opciones de reproducción/Disponibilidad** y **Activos**.

***

## Información del paquete

### package

Define el tipo de versión del paquete.

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | `film5.0`         | Obligatorio |

```xml
<package version="film5.0">
```

### provider

Nombre del propietario del contenido/estudio/cadena.

| Xpath XML           | Ejemplo        | Obligatorio |
| ------------------- | -------------- | ----------- |
| `/package/provider` | Roku Originals | Obligatorio |

```xml
<provider>Roku Originals</provider>
```

### language

Idioma principal de los metadatos del paquete. Como mínimo, el valor **debe** ajustarse a un [código de idioma](#language-codes) admitido. Como práctica recomendada, **incluye también un código de región** — por ejemplo, para distinguir el español que se habla en México (`es-MX`) del que se habla en España (`es-ES`).

| Xpath XML           | Valores aceptados                                                                                                     | Obligatorio |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| `/package/language` | [Valor de idioma](#language-codes) válido (`en`, `es`, etc.); puede incluir código de región (`en-US`, `es-MX`, etc.) | Obligatorio |

```xml
<language>en</language>
```

### type

Define el tipo de contenido del paquete.

| Xpath XML             | Valores aceptados | Obligatorio |
| --------------------- | ----------------- | ----------- |
| `/package/video/type` | `film`            | Obligatorio |

```xml
<type>film</type>
```

### asset_id

Identificador único e inalterable de una película. Los ID son generados y suministrados **por la empresa socia**. El ID en los metadatos de ingesta **debería** coincidir con el ID proporcionado en el documento de Avails — esto facilita el seguimiento a lo largo del proceso de Roku, desde el envío de Avails hasta la publicación. **Límite de 50 caracteres.**

| Xpath XML                 | Valores aceptados                                                                  | Obligatorio |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

```xml
<asset_id>movieAssetIdHere</asset_id>
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

Título de la película. Incluye **únicamente** el nombre del contenido tal y como debe aparecer en la plataforma — **no** incluyas datos entre paréntesis ajenos al título, como un indicador de versión original/nueva, el año de estreno, la temporada o el formato de video (por ejemplo, `(Clásica)`, `(1987)`, `(Temporada 1)`, `(HD)`).

| Xpath XML              | Ejemplo               | Obligatorio |
| ---------------------- | --------------------- | ----------- |
| `/package/video/title` | Título de la película | Obligatorio |

```xml
<title><![CDATA[Movie Title. Required.]]></title>
```

### short_synopsis

Una sinopsis breve del contenido. Sección CDATA compatible. **Límite de 250 caracteres.**

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

```xml
<short_synopsis><![CDATA[Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis

Una sinopsis larga del contenido. Sección CDATA compatible. **Límite de 500 caracteres.**

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | Sinopsis de 500 caracteres | Opcional    |

```xml
<long_synopsis><![CDATA[Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

El idioma original de producción del título. Como mínimo, el valor **debe** ajustarse a un [código de idioma](#language-codes) admitido. Como práctica recomendada, **incluye también un código de región** (consulta [language](#language) arriba para el ejemplo `es-MX` / `es-ES`).

| Xpath XML                                 | Valores aceptados                                                                            | Obligatorio |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- | ----------- |
| `/package/video/original_spoken_language` | [Valor de idioma](#language-codes) válido (`en`, `es`, etc.); puede incluir código de región | Obligatorio |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

El país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor **debe** ajustarse a un código de país de 2 caracteres admitido según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html).

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
<runtime>120</runtime>
```

### genre

Clasificación por género del contenido. Cada película **debe** entregarse con **al menos un** género admitido. Consulta la [lista enumerada de géneros](#genres).

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

Clasificación de contenido/edades de una fuente de clasificación. Se **debe** proporcionar, para cada película, una clasificación válida de cine o TV emitida por la autoridad de clasificación (`ratingSystem`) del territorio en el que estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de ese territorio, incluye en su lugar una clasificación válida del sistema `USA_PR` — no existe un organismo oficial de clasificación para `USA_PR`; usa las pautas de [tvguidelines.org](http://tvguidelines.org/) para asignar la clasificación adecuada.

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

Un campo de formato libre para categorizar el contenido más allá del conjunto limitado de valores de Género admitidos. El equipo editorial y el motor de recomendaciones de Roku usan las Etiquetas para ayudar a mostrar el contenido en la interfaz de la plataforma — más etiquetas generalmente significa más formas en que el contenido puede curarse/mostrarse. **No hay límite** en la cantidad de etiquetas y **no hay un conjunto enumerado/definido** de etiquetas.

* Las etiquetas **distinguen entre mayúsculas y minúsculas** — `"Rom-Com"` y `"rom-com"` son dos etiquetas distintas. Entrega las etiquetas de forma **consistente**.

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

## Cortes publicitarios y puntos de referencia

### adBreak start_time

Se utiliza para determinar los [cortes publicitarios del contenido financiado con anuncios](#ad-policy). Los valores **deben** tener una precisión de milisegundos. Si el video incluye negros comerciales, proporciona el código de tiempo en el **punto medio** del negro comercial. No es obligatorio para contenido SVOD, pero se pueden ingerir datos de adBreak con precisión de fotogramas si están disponibles.

| Xpath XML                                    | Valores aceptados | Obligatorio                   |
| -------------------------------------------- | ----------------- | ----------------------------- |
| `/package/video/adBreaks/adBreak/start_time` | `HH:MM:SS.sss`    | Preferido para contenido AVOD |

```xml
<adBreaks>
  <adBreak>
    <start_time>00:03:15.000</start_time>
  </adBreak>
  <adBreak>
    <start_time>00:07:45.425</start_time>
  </adBreak>
<!-- Additional adBreaks here-->
</adBreaks>
```

### cuePoint start_time y end_time

Se utiliza para identificar los puntos de entrada/salida de los créditos iniciales, resúmenes de contenido, créditos finales y material detrás de cámaras. Las etiquetas `cuePoint` **deben** incluir el atributo `type`. Los valores **deben** tener una precisión de milisegundos.

| Xpath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cuePoints/cuePoint/start_time` | `HH:MM:SS.sss`    | Preferido   |
| `/package/video/cuePoints/cuePoint/end_time`   | `HH:MM:SS.sss`    | Preferido   |

```xml
<cuePoints>
	<cuePoint type="ad overlay">
		<start_time>00:09:10.456</start_time>
		<end_time>00:09:12.678</end_time>
	</cuePoint>
	<cuePoint type="behind the scenes">
		<start_time>00:07:08.123</start_time>
		<end_time>00:07:59.123</end_time>
	</cuePoint>
	<cuePoint type="intro">
		<start_time>00:01:08.123</start_time>
		<end_time>00:01:59.123</end_time>
	</cuePoint>
	<cuePoint type="recap">
		<start_time>00:21:08.123</start_time>
		<end_time>00:21:59.123</end_time>
	</cuePoint>
	<cuePoint type="end">
		<start_time>00:41:08.123</start_time>
		<end_time>00:41:59.123</end_time>
	</cuePoint>
</cuePoints>
```

### cuePoint atributo type

Define el tipo de un `cuePoint` dado. El nombre del atributo **debe** ser `type`, con uno de los siguientes valores. **Para cada tipo indicado abajo: si se proporciona ese cuePoint,&#x20;**`start_time`**&#x20;y&#x20;**`end_time`**&#x20;son ambos obligatorios.**

| Valor del tipo      | Descripción                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `ad overlay`        | El punto dentro del video para anuncios de posicionamiento de productos dentro del programa. |
| `behind the scenes` | Material detrás de cámaras, normalmente al final de un video.                                |
| `intro`             | Los créditos iniciales del programa.                                                         |
| `recap`             | Un resumen de contenido anterior, típico de la televisión por episodios.                     |
| `end`               | Los créditos finales del programa.                                                           |

| Xpath XML                           | Valores aceptados             | Obligatorio                              |
| ----------------------------------- | ----------------------------- | ---------------------------------------- |
| `/package/video/cuePoints/cuePoint` | Uno de los valores anteriores | Obligatorio si se proporcionan cuePoints |

```xml
<cuePoint type="intro">
```

***

## Reparto y equipo de filmación

### cast display_name

Nombre de un miembro del reparto. Sección CDATA compatible.

| Xpath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cast/cast_member/display_name` | Nombre y apellido | Opcional    |

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

| Xpath XML                                      | Valores aceptados | Obligatorio                                 |
| ---------------------------------------------- | ----------------- | ------------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Nombre y apellido | Obligatorio si se proporciona `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

> **Nota entre formatos:** por el momento, Director es la **única** función de `crew_member` admitida para la ingesta en **Excel** (esta referencia XML admite la lista completa de funciones del equipo de filmación indicada abajo; la limitación es específica del formato de entrega en Excel).

### role

Función del miembro del equipo de filmación indicado en `display_name`. Todo miembro del equipo de filmación incluido **debe** incluir también su función. Consulta la [lista enumerada de funciones del equipo de filmación](#crew-roles). **Las funciones distinguen entre mayúsculas y minúsculas.**

> **Nota entre formatos:** como se indicó arriba, por el momento Director es la única función de `crew_member` admitida para la ingesta en Excel.

| Xpath XML                                    | Valores aceptados                          | Obligatorio                                 |
| -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| `/package/video/crew/crew_member/roles/role` | Consulta la [lista enumerada](#crew-roles) | Obligatorio si se proporciona `crew_member` |

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

Define el idioma de los campos localizados dentro de un bloque `localization`. El nombre del atributo **debe** ser `name`, y su valor **debe**, como mínimo, ajustarse a un [código de idioma](#language-codes) admitido — incluye un código de región como práctica recomendada (consulta [language](#language) arriba).

| Xpath XML                                   | Valores aceptados                                                          | Obligatorio |
| ------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `/package/video/localizations/localization` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<localization name="es">
```

### localized title

Título localizado de la película, en el idioma especificado por el atributo `name` del bloque `localization` que lo contiene. Mismas restricciones de datos entre paréntesis ajenos al título que en [title](#title) arriba. **Debe ir acompañado** de una `short_synopsis` y `long_synopsis` localizadas.

| Xpath XML                                         | Valores aceptados                | Obligatorio |
| ------------------------------------------------- | -------------------------------- | ----------- |
| `/package/video/localizations/localization/title` | Título localizado de la película | Obligatorio |

```xml
<title><![CDATA[Localized Movie Title. Required.]]></title>
```

### localized short_synopsis

Sinopsis breve localizada, en el idioma especificado por el bloque `localization` que la contiene. Sección CDATA compatible. **Límite de 250 caracteres.** Debe ir acompañada de un `title` y `long_synopsis` localizados.

| Xpath XML                                                  | Valores aceptados | Obligatorio |
| ---------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

```xml
<short_synopsis><![CDATA[Localized Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

### localized long_synopsis

Sinopsis larga localizada, en el idioma especificado por el bloque `localization` que la contiene. Sección CDATA compatible. **Límite de 500 caracteres.** Debe ir acompañada de un `title` y `short_synopsis` localizados.

| Xpath XML                                                 | Valores aceptados | Obligatorio |
| --------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/long_synopsis` | 500 caracteres    | Opcional    |

```xml
<long_synopsis><![CDATA[Localized Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Opciones de reproducción/Disponibilidad

### playOptions

Inicia el bloque que proporciona la información de disponibilidad del paquete: disponibilidad por país/territorio, tipo de monetización, y fechas de inicio/fin de disponibilidad.

| Xpath XML                    | Valores aceptados | Obligatorio |
| ---------------------------- | ----------------- | ----------- |
| `/package/video/playOptions` | —                 | Opcional    |

```xml
<playOptions>
```

### country

Código de país del territorio en el que el contenido está disponible. Se permiten múltiples nodos `country`, siempre que `vodType`, `licensePeriodStart` y `licensePeriodEnd` sean idénticos entre ellos.

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

Tipo de monetización de la película. Se permiten múltiples nodos `vodType`, siempre que `country`, `licensePeriodStart` y `licensePeriodEnd` sean idénticos entre ellos.

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

Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. **Una** `licensePeriodStart` por `playOption`. Debe ser cronológicamente **anterior** a `licensePeriodEnd`; ambas **no deben** ser idénticas.

| Xpath XML                                                  | Valores aceptados                       | Obligatorio |
| ---------------------------------------------------------- | --------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Opcional    |

```xml
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

### licensePeriodEnd

Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. **Una** `licensePeriodEnd` por `playOption`. Debe ser cronológicamente **posterior** a `licensePeriodStart`; ambas **no deben** ser idénticas.

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

El bloque `assets` hace referencia a todos los archivos entregados como parte del paquete (video, subtítulos descriptivos, audio, subtítulos, ilustraciones). Cada archivo individual se describe mediante un par `asset`/`data_file`, con atributos que identifican el tipo y la función del activo.

### assets

Inicia el bloque de activos.

| Xpath XML               | Valores aceptados    | Obligatorio |
| ----------------------- | -------------------- | ----------- |
| `/package/video/assets` | `media_type="video"` | Obligatorio |

```xml
<assets media_type="video">
```

### Full Source (Video)

Describe el archivo de video fuente. El atributo de la etiqueta `asset` debe ser `type="full"`, y el atributo de la etiqueta `data_file` debe ser `role="source"`. `<locale>` y `<file_name>` también son obligatorios.

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

Describe el audio sidecar del archivo de video fuente — ya sea un doblaje de audio completo para traducción, o una pista de audio descriptivo para accesibilidad. `asset type="full"`; `data_file role="audio"` (doblaje de traducción) o `role="audio description"` (accesibilidad). `<locale>` y `<file_name>` también son obligatorios.

**El audio sidecar puede requerirse** cuando se necesitan activos localizados (es decir, el audio original de la fuente no es nativo del territorio de distribución) o para cumplir con las regulaciones de la FCC.

| Xpath XML                               | Valores aceptados                                                          | Obligatorio                                            |
| --------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="audio"` o `role="audio description"` | Opcional\* — se prefiere fuertemente audio description |

```xml
<asset type="full">
  <data_file role="audio">
```

### Full Subtitles

Describe los subtítulos sidecar del archivo de video fuente. `asset type="full"`; `data_file role="subtitles"`. `<locale>` y `<file_name>` también son obligatorios.

**Los subtítulos sidecar pueden requerirse** cuando se necesitan activos localizados (es decir, el audio original de la fuente no es nativo del territorio de distribución).

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

| Xpath XML                               | Valores aceptados      | Obligatorio |
| --------------------------------------- | ---------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"` | Obligatorio |

```xml
<asset type="artwork">
  <file_name>

<asset type="artwork">
  <file_name type="background_image">

<asset type="artwork">
  <file_name type="boxcover">

<asset type="artwork">
  <file_name type="poster">
```

> **Confirmado:** el `file_name` sin etiquetar/predeterminado (sin atributo `type`) se entiende como el **arte clave** — este es el comportamiento esperado, no una omisión. Los valores explícitos de `type` solo son necesarios para `background_image`, `boxcover` y `poster`.

### locale

Identifica el idioma del `data_file`. Como mínimo, el valor **debe** ajustarse a un [código de idioma](#language-codes) admitido; incluye un código de región como práctica recomendada. Aplica a las funciones de `data_file` `source`, `captions`, `audio`, `subtitles`, y al tipo de activo `artwork`.

| Xpath XML                                      | Valores aceptados                            | Obligatorio |
| ---------------------------------------------- | -------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file/locale` | [Código de idioma](#language-codes) admitido | Obligatorio |

```xml
<locale name="en"/>
```

### file_name

Nombre de archivo del activo indicado en el atributo `role` o `type` del `data_file` que lo contiene. Todos los valores de `file_name` **distinguen entre mayúsculas y minúsculas** y **deben** incluir la extensión de archivo adecuada.

| Tipo de activo                                                                                 | Obligatorio                            |
| ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| Video/subtítulos descriptivos/audio/subtítulos/subtítulos forzados (activos fuente en general) | Obligatorio para cada activo entregado |
| Ilustración — predeterminada/sin etiquetar                                                     | Obligatorio                            |
| Ilustración — `type="background_image"`                                                        | Preferido                              |
| Ilustración — `type="boxcover"`                                                                | Preferido                              |
| Ilustración — `type="poster"`                                                                  | Preferido                              |

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
