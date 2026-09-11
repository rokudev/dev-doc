---
title: Excel - campos de metadatos de películas
excerpt: Referencia campo por campo para la plantilla de Excel de Película.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia campo por campo para la plantilla de metadatos de Excel de **Película**. Para las descargas de plantillas y las reglas a nivel de libro de trabajo (formato, estructura, límites de filas, formato de archivo), consulta la [Descripción general de metadatos de Excel](#roku-excel-metadata-overview).

**Cada fila representa una experiencia de idioma de una sola película** — la columna `language` define qué idioma aplica al título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, el doblaje de audio y las ilustraciones referenciadas en esa fila (consulta [Descripción general de metadatos de Excel](#multiple-entries-and-volume-limits)).

Los campos se agrupan a continuación en: **Información del paquete**, **Descriptores de contenido**, **Cortes publicitarios y puntos de referencia**, **Reparto y equipo de filmación**, **Activos**, **Ilustraciones** y **Disponibilidad**.

***

## Información del paquete

### provider

Nombre del propietario del contenido/estudio/cadena.

| Columna de Excel | Valores aceptados       | Obligatorio |
| ---------------- | ----------------------- | ----------- |
| `provider`       | Ejemplo: Roku Originals | Obligatorio |

### contentType

Define el tipo de contenido del paquete.

| Columna de Excel | Valores aceptados | Obligatorio |
| ---------------- | ----------------- | ----------- |
| `contentType`    | `film`            | Obligatorio |

### language

Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio y/o las ilustraciones que se indican en la fila. Debe ajustarse a un [código de idioma](#language-codes) admitido. Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`). **Solo se permite un idioma por fila.**

| Columna de Excel | Valores aceptados                         | Obligatorio |
| ---------------- | ----------------------------------------- | ----------- |
| `language`       | [Valor de idioma](#language-codes) válido | Obligatorio |

### original_spoken_language

Idioma original de producción del título. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir un código de región).

| Columna de Excel           | Valores aceptados                         | Obligatorio |
| -------------------------- | ----------------------------------------- | ----------- |
| `original_spoken_language` | [Valor de idioma](#language-codes) válido | Obligatorio |

### country_of_origin

El país principal donde se produjo la película, y donde están establecidos los principales creadores, el equipo de filmación y los productores. Debe ajustarse a un código [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) admitido.

| Columna de Excel    | Valores aceptados                                                                                                | Obligatorio |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

### asset_id

Identificador único e inalterable de una película. Generado/suministrado por la empresa socia; debe coincidir con el ID del título proporcionado en el documento de Avails, para facilitar el seguimiento a lo largo del proceso de Roku. **Límite de 50 caracteres.**

| Columna de Excel | Valores aceptados                                                                  | Obligatorio |
| ---------------- | ---------------------------------------------------------------------------------- | ----------- |
| `asset_id`       | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

### eidr

ID de EIDR, si existe uno.

| Columna de Excel | Valores aceptados           | Obligatorio |
| ---------------- | --------------------------- | ----------- |
| `eidr`           | Cualquier ID de EIDR válido | Opcional    |

### tms_id

ID de Gracenote, si existe uno.

| Columna de Excel | Valores aceptados          | Obligatorio |
| ---------------- | -------------------------- | ----------- |
| `tms_id`         | Cualquier ID de TMS válido | Opcional    |

***

## Descriptores de contenido

### title

Título de la película, en el idioma definido en la columna `language`. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — no incluyas datos entre paréntesis ajenos al título (por ejemplo, `(Clásica)`, `(1987)`, `(Temporada 1)`, `(HD)`).

| Columna de Excel | Valores aceptados           | Obligatorio |
| ---------------- | --------------------------- | ----------- |
| `title`          | Ejemplo: Título de película | Obligatorio |

### genres

Clasificación por género del contenido. Cada película **debe** entregarse con **al menos un** género admitido. Consulta la [lista enumerada de géneros](#genres).

| Columna de Excel | Valores aceptados                                                        | Obligatorio |
| ---------------- | ------------------------------------------------------------------------ | ----------- |
| `genres`         | Consulta la [lista enumerada](#genres). No más de 10 géneros por título. | Obligatorio |

### tags

Campo de categorización de formato libre más allá del Género. Lo usan el equipo editorial y el motor de recomendaciones de Roku para mostrar el contenido. No hay límite en la cantidad; no hay un conjunto de etiquetas definido. **Distingue entre mayúsculas y minúsculas** — entrégalas de forma consistente (por ejemplo, `"Rom-Com"` y `"rom-com"` son dos etiquetas distintas).

| Columna de Excel | Valores aceptados                          | Obligatorio          |
| ---------------- | ------------------------------------------ | -------------------- |
| `tags`           | Cualquier cadena de menos de 50 caracteres | **Muy recomendable** |

### runtime

Duración total del contenido, en **minutos enteros**.

| Columna de Excel | Valores aceptados                   | Obligatorio |
| ---------------- | ----------------------------------- | ----------- |
| `runtime`        | Solo números enteros. Ejemplo: `90` | Obligatorio |

### release_date

Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, un **año de estreno** correcto.

| Columna de Excel | Valores aceptados              | Obligatorio |
| ---------------- | ------------------------------ | ----------- |
| `release_date`   | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

### rating_system y ratings

Se **debe** proporcionar, para cada película, una clasificación válida de cine o TV emitida por la autoridad de clasificación (`ratingSystem`) del territorio en el que estará disponible el contenido. Si no ha sido clasificada por la autoridad oficial de ese territorio, usa en su lugar una clasificación válida de `USA_PR`, según las pautas de [tvguidelines.org](http://tvguidelines.org/) (no existe un organismo oficial de clasificación para `USA_PR`).

| Columna de Excel | Valores aceptados                                                                                   | Obligatorio |
| ---------------- | --------------------------------------------------------------------------------------------------- | ----------- |
| `rating_system`  | Consulta [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |
| `ratings`        | Consulta [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |

### short_synopsis

Una sinopsis breve del contenido, en el idioma definido en la columna `language`. **Límite de 250 caracteres.**

| Columna de Excel | Valores aceptados          | Obligatorio |
| ---------------- | -------------------------- | ----------- |
| `short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

### long_synopsis

Una sinopsis larga del contenido, en el idioma definido en la columna `language`. **Límite de 500 caracteres.**

| Columna de Excel | Valores aceptados          | Obligatorio |
| ---------------- | -------------------------- | ----------- |
| `long_synopsis`  | Sinopsis de 500 caracteres | Opcional    |

### closed_captions

Indica si el título entregado contiene subtítulos descriptivos. **Obligatorio para todo el contenido destinado a Roku Channel en EE. UU.**

| Columna de Excel  | Valores aceptados | Obligatorio |
| ----------------- | ----------------- | ----------- |
| `closed_captions` | `Y` o `N`         | Obligatorio |

### closed_captions_exemption

Código de exención de la FCC para el requisito de subtítulos descriptivos. **Obligatorio en EE. UU. si&#x20;**`closed_captions`**&#x20;=&#x20;**`N`**.**

| Código | Definición                                                                                                                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | El contenido nunca se emitió por televisión en Estados Unidos.                                                                                            |
| 2      | El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.                                                                 |
| 3      | El contenido no se ha emitido por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.                             |
| 4      | El contenido no consiste en programación de video de larga duración.                                                                                      |
| 5      | El contenido no pertenece a una categoría de programación en línea que requiere subtítulos descriptivos según las normas de la FCC (47 C.F.R. § 79.4(b)). |
| 6      | La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.                                |

| Columna de Excel            | Valores aceptados            | Obligatorio                                       |
| --------------------------- | ---------------------------- | ------------------------------------------------- |
| `closed_captions_exemption` | `1`, `2`, `3`, `4`, `5`, `6` | Obligatorio en EE. UU. si `closed_captions` = `N` |

> _Nota: los Valores aceptados de este campo faltaban en la tabla de origen (en la columna de Descripción solo aparecían las definiciones de los códigos) — se restauraron arriba como&#x20;_`1`_–_`6`_, en consistencia con la [Referencia XML de Película](#)._

***

## Cortes publicitarios y puntos de referencia

### ad_breaks

Se utiliza para determinar los [Cortes publicitarios para contenido financiado con anuncios](#ad-breaks). Los valores **deben** tener una precisión de milisegundos. Si hay negros comerciales presentes, proporciona el código de tiempo en el **punto medio**. No es obligatorio para SVOD, pero se pueden ingerir datos con precisión de fotogramas si están disponibles.

| Columna de Excel | Valores aceptados | Obligatorio |
| ---------------- | ----------------- | ----------- |
| `ad_breaks`      | `HH:MM:SS.sss`    | Preferido   |

### cue_points

Identifica los horarios de inicio/fin de los créditos iniciales, los resúmenes, los créditos finales y el material detrás de cámaras. Los valores **deben** tener una precisión de milisegundos.

> **Nota:** a diferencia de los elementos `cuePoint` anidados del formato XML, Excel expresa esto como una **única cadena de texto separada por comas** en una sola celda — esta es una codificación específica de Excel para el mismo concepto subyacente descrito en la [Referencia XML de Película](#cuepoint-start_time-and-end_time), no un modelo de datos diferente.

**Formato:** una lista separada por comas de pares `type=startTime>endTime`.

**Ejemplo:**

```
intro=00:05:10.253>00:07:15.123,recap=00:01:12.456>00:03:12.052
```

| Columna de Excel | Valores aceptados                                                                                                                | Obligatorio |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `cue_points`     | Formato: `type=HH:MM:SS.sss>HH:MM:SS.sss`. Valores `type` permitidos: `ad overlay`, `behind the scenes`, `intro`, `recap`, `end` | Opcional    |

***

## Reparto y equipo de filmación

### cast

Nombres de los miembros del reparto.

| Columna de Excel | Valores aceptados                              | Obligatorio |
| ---------------- | ---------------------------------------------- | ----------- |
| `cast`           | Lista de `Nombre Apellido` separados por comas | Preferido   |

### director

Nombre(s) del director de la película.

> **Nota entre formatos:** por el momento, Director es la **única** función del equipo de filmación admitida para la ingesta de metadatos en **Excel** — la lista completa de funciones del equipo de filmación admitida en XML (consulta la [Referencia XML de Película](#cast--crew)) no está disponible aquí.

| Columna de Excel | Valores aceptados                              | Obligatorio |
| ---------------- | ---------------------------------------------- | ----------- |
| `director`       | Lista de `Nombre Apellido` separados por comas | Preferido   |

***

## Activos

### video_file_name

Nombre de archivo del video, en el idioma definido en la columna `language`, entregado mediante Aspera. **Solo se permite un video por&#x20;**`asset_id`**.** Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel  | Valores aceptados             | Obligatorio |
| ----------------- | ----------------------------- | ----------- |
| `video_file_name` | Ejemplo: `movieVideoFile.mov` | Obligatorio |

### video_file_language

Idioma principal del diálogo hablado y/o el texto visible del archivo de video. Si no hay diálogo ni texto visible, usa el idioma que habla la audiencia prevista. **También aplica a** `caption_file_name` y `forced_subtitle_file_name`. **Solo se permite un idioma.**

| Columna de Excel      | Valores aceptados                            | Obligatorio |
| --------------------- | -------------------------------------------- | ----------- |
| `video_file_language` | Un [valor de idioma](#language-codes) válido | Obligatorio |

### audio_layout

[Descriptor de diseño de audio](#audio-channel-layout-hints) para el archivo de video entregado.

| Columna de Excel | Valores aceptados                                                        | Obligatorio |
| ---------------- | ------------------------------------------------------------------------ | ----------- |
| `audio_layout`   | `stereoOnly`, `surroundOnly`, `stereoPlusSurround`, `surroundPlusStereo` | Opcional    |

### descriptive_audio_file_name

Solo para archivos de audio descriptivo. Nombre de archivo del audio descriptivo, en el idioma definido en `descriptive_audio_language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel              | Valores aceptados           | Obligatorio                                                                                    |
| ----------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| `descriptive_audio_file_name` | Ejemplo: `movieDubFile.wav` | Obligatorio al proporcionar un archivo de audio descriptivo sidecar con fines de accesibilidad |

### descriptive_audio_language

Solo para archivos de audio descriptivo. Idioma principal de la pista de diálogo hablado del archivo de audio. **Solo se permite un idioma.**

| Columna de Excel             | Valores aceptados                            | Obligatorio                                               |
| ---------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| `descriptive_audio_language` | Un [valor de idioma](#language-codes) válido | Obligatorio al proporcionar archivos de audio descriptivo |

### caption_file_name

Nombre de archivo de los subtítulos descriptivos, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales. Su idioma se deriva de `video_file_language`.

| Columna de Excel    | Valores aceptados            | Obligatorio |
| ------------------- | ---------------------------- | ----------- |
| `caption_file_name` | Ejemplo: `movieCaptions.srt` | Obligatorio |

### forced_subtitle_file_name

Nombre de archivo del subtítulo narrativo forzado, en el idioma definido en `video_file_language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales. Su idioma se deriva de `video_file_language`.

| Columna de Excel            | Valores aceptados                  | Obligatorio                                                |
| --------------------------- | ---------------------------------- | ---------------------------------------------------------- |
| `forced_subtitle_file_name` | Ejemplo: `movieForcedSubtitle.srt` | Obligatorio al proporcionar subtítulos narrativos forzados |

***

## Ilustraciones

### keyart_file_name

Nombre de archivo de la imagen de arte clave con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel   | Valores aceptados          | Obligatorio |
| ------------------ | -------------------------- | ----------- |
| `keyart_file_name` | Ejemplo: `movieKeyArt.jpg` | Obligatorio |

### background_file_name

Nombre de archivo de la imagen de fondo sin texto, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel       | Valores aceptados           | Obligatorio |
| ---------------------- | --------------------------- | ----------- |
| `background_file_name` | Ejemplo: `movieBGimage.jpg` | Preferido   |

### boxcover_file_name

Nombre de archivo de la imagen de carátula con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel     | Valores aceptados          | Obligatorio |
| -------------------- | -------------------------- | ----------- |
| `boxcover_file_name` | Ejemplo: `movieBoxArt.jpg` | Preferido   |

### poster_file_name

Nombre de archivo de la imagen de portada con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel   | Valores aceptados          | Obligatorio |
| ------------------ | -------------------------- | ----------- |
| `poster_file_name` | Ejemplo: `moviePoster.jpg` | Preferido   |

***

## Disponibilidad

> **Nota:** al igual que en la [Referencia XML de Película](#play-options--availability), ninguno de los cuatro campos siguientes está marcado como Obligatorio. A diferencia de XML — donde un elemento contenedor (`playOptions`) al menos hacía que el propio contenedor fuera Obligatorio u Opcional como unidad — Excel no tiene un contenedor equivalente, por lo que aquí no existe ningún requisito paralelo "a nivel de bloque" al cual referirse. Esto se presenta como esperado/consistente con el comportamiento confirmado en XML, y no se marca como una nueva omisión.

### territory

Códigos de país del territorio en el que está disponible el contenido. Se permiten varios códigos de país separados por comas, siempre que `vod_type`, `license_start_date` y `license_end_date` sean idénticos en todos ellos.

| Columna de Excel | Valores aceptados      | Obligatorio |
| ---------------- | ---------------------- | ----------- |
| `territory`      | `US`, `CA`, `GB`, `MX` | Preferido   |

### vod_type

Tipo de monetización de la película. Se permiten varios valores separados por comas, siempre que `territory`, `license_start_date` y `license_end_date` sean idénticos en todos ellos.

| Columna de Excel | Valores aceptados                    | Obligatorio |
| ---------------- | ------------------------------------ | ----------- |
| `vod_type`       | Ejemplo: `avod`, `svod`, `avod,svod` | Preferido   |

### license_start_date

Fecha de inicio de la disponibilidad del contenido. Debe ser cronológicamente **anterior** a `license_end_date`; ambas **no deben** ser idénticas.

| Columna de Excel     | Valores aceptados                       | Obligatorio |
| -------------------- | --------------------------------------- | ----------- |
| `license_start_date` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Preferido   |

### license_end_date

Fecha de finalización de la disponibilidad del contenido. Debe ser cronológicamente **posterior** a `license_start_date`; ambas **no deben** ser idénticas.

| Columna de Excel   | Valores aceptados                       | Obligatorio |
| ------------------ | --------------------------------------- | ----------- |
| `license_end_date` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Preferido   |
