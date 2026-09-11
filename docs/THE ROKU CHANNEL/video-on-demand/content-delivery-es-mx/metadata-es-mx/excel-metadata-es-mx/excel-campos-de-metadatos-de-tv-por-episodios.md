---
title: Excel - campos de metadatos de TV por episodios
excerpt: Referencia campo por campo para la plantilla de Excel de TV.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia campo por campo para la plantilla de metadatos de Excel de **TV**, siguiendo la jerarquía `series > season > episode` de Roku. Para las descargas de plantillas y las reglas a nivel de libro de trabajo (formato, estructura, límites de filas, formato de archivo), consulta la [Descripción general de metadatos de Excel](#roku-excel-metadata-overview).

**Cada fila representa una experiencia de idioma de un solo episodio.** Al igual que en la plantilla de Excel de Película, varios campos se repiten conceptualmente en distintos niveles de la jerarquía — esta referencia los agrupa por nivel (**Serie**, **Temporada**, **Episodio**) para mantener clara esa distinción.

Los campos se agrupan en: **Información del paquete**, **Bloque de la serie**, **Bloque de la temporada**, **Descriptores de contenido del episodio**, **Cortes publicitarios y puntos de referencia**, **Reparto y equipo de filmación del episodio**, **Activos**, **Ilustraciones** y **Disponibilidad**.

***

## Información del paquete

### provider

Nombre del propietario del contenido/estudio/cadena.

| Columna de Excel | Valores aceptados       | Obligatorio |
| ---------------- | ----------------------- | ----------- |
| `provider`       | Ejemplo: Roku Originals | Obligatorio |

### contentType

Define el tipo de contenido del paquete. Para la plantilla de Excel de TV, este valor es `episode` (distinto del valor `tv` que se usa para identificar el tipo de contenido de TV en otros lugares, por ejemplo, en el campo `/package/video/type` de la [Referencia XML de TV](#)).

| Columna de Excel | Valores aceptados | Obligatorio |
| ---------------- | ----------------- | ----------- |
| `contentType`    | `episode`         | Obligatorio |

### language

Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio o las ilustraciones que se indican en la fila. Debe ajustarse a un [código de idioma](#language-codes) admitido. Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`). **Solo se permite un idioma por fila.**

| Columna de Excel | Valores aceptados                            | Obligatorio |
| ---------------- | -------------------------------------------- | ----------- |
| `language`       | Un [valor de idioma](#language-codes) válido | Obligatorio |

### asset_id

Identificador único e inmutable de un **episodio**. Generado/proporcionado por la empresa socia; debe coincidir con el ID del título proporcionado en el documento de Avails, para facilitar el seguimiento a través del proceso de Roku. **Límite de 50 caracteres.**

| Columna de Excel | Valores aceptados                                                                  | Obligatorio |
| ---------------- | ---------------------------------------------------------------------------------- | ----------- |
| `asset_id`       | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

### episode_eidr

ID de EIDR del episodio, si existe uno.

| Columna de Excel | Valores aceptados                       | Obligatorio |
| ---------------- | --------------------------------------- | ----------- |
| `episode_eidr`   | Cualquier ID de EIDR de episodio válido | Opcional    |

### episode_tms_id

ID de Gracenote del episodio, si existe uno.

| Columna de Excel | Valores aceptados                      | Obligatorio |
| ---------------- | -------------------------------------- | ----------- |
| `episode_tms_id` | Cualquier ID de TMS de episodio válido | Opcional    |

***

## Bloque de la serie

### series_id

Identificador único e inmutable de una serie. Generado/proporcionado por la empresa socia; debe coincidir con el ID de la serie proporcionado en el documento de Avails. **Límite de 50 caracteres.**

| Columna de Excel | Valores aceptados                                                                  | Obligatorio |
| ---------------- | ---------------------------------------------------------------------------------- | ----------- |
| `series_id`      | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

### series_title

Título de la serie, en el idioma definido en la columna `language`. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — sin datos entre paréntesis ajenos al título.

| Columna de Excel | Valores aceptados           | Obligatorio |
| ---------------- | --------------------------- | ----------- |
| `series_title`   | Ejemplo: Título de la serie | Obligatorio |

### series_tms_id

ID de Gracenote de la serie, si existe uno.

| Columna de Excel | Valores aceptados                      | Obligatorio |
| ---------------- | -------------------------------------- | ----------- |
| `series_tms_id`  | Cualquier ID de TMS de programa válido | Opcional    |

### series_release_date

Fecha original en que la serie estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, un **año de estreno** correcto.

| Columna de Excel      | Valores aceptados              | Obligatorio |
| --------------------- | ------------------------------ | ----------- |
| `series_release_date` | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

### series_genres

Clasificación por género del contenido. Cada serie **debe** entregarse con **al menos un** género admitido. Consulta la [lista enumerada de géneros](#genres).

> **Nota:** Género es un campo **exclusivo del nivel de serie** — no existe un campo de género independiente a nivel de episodio, en consonancia con la [Referencia XML de TV](#).

| Columna de Excel | Valores aceptados                                                        | Obligatorio |
| ---------------- | ------------------------------------------------------------------------ | ----------- |
| `series_genres`  | Consulta la [lista enumerada](#genres). No más de 10 géneros por título. | Obligatorio |

### series_tags

Campo de categorización de formato libre más allá del Género. Lo usan el equipo editorial y el motor de recomendaciones de Roku para mostrar contenido. Sin límite de cantidad; sin conjunto de etiquetas definido. **Distingue entre mayúsculas y minúsculas** — entrega de forma consistente.

| Columna de Excel | Valores aceptados                          | Obligatorio          |
| ---------------- | ------------------------------------------ | -------------------- |
| `series_tags`    | Cualquier cadena de menos de 50 caracteres | **Muy recomendable** |

### series_cast

Nombres de los miembros del reparto de la serie.

| Columna de Excel | Valores aceptados                             | Obligatorio |
| ---------------- | --------------------------------------------- | ----------- |
| `series_cast`    | Lista separada por comas de `Nombre Apellido` | Preferido   |

### series_directors

Nombre(s) del director de la serie.

> **Nota entre formatos:** por el momento, Director es la **única** función del equipo de filmación admitida para la ingesta de metadatos en Excel.

| Columna de Excel   | Valores aceptados                             | Obligatorio |
| ------------------ | --------------------------------------------- | ----------- |
| `series_directors` | Lista separada por comas de `Nombre Apellido` | Preferido   |

### series_short_synopsis

Una sinopsis breve de la serie, en el idioma definido en la columna `language`. **Límite de 250 caracteres.**

| Columna de Excel        | Valores aceptados          | Obligatorio |
| ----------------------- | -------------------------- | ----------- |
| `series_short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

### series_long_synopsis

Una sinopsis larga de la serie, en el idioma definido en la columna `language`. **Límite de 500 caracteres.**

| Columna de Excel       | Valores aceptados          | Obligatorio |
| ---------------------- | -------------------------- | ----------- |
| `series_long_synopsis` | Sinopsis de 500 caracteres | Opcional    |

***

## Bloque de la temporada

### season_id

Identificador único e inmutable de una temporada. Generado/proporcionado por la empresa socia. **Límite de 50 caracteres.**

| Columna de Excel | Valores aceptados                                                                  | Obligatorio |
| ---------------- | ---------------------------------------------------------------------------------- | ----------- |
| `season_id`      | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

### season_number

Posición numérica de la temporada dentro de la serie — determina el orden de visualización de los episodios subyacentes. Los valores **deben** reflejar el orden original de emisión/exhibición. Solo números enteros; **debe ser mayor que 0.**

| Columna de Excel | Valores aceptados                  | Obligatorio |
| ---------------- | ---------------------------------- | ----------- |
| `season_number`  | Solo números enteros mayores que 0 | Obligatorio |

***

## Descriptores de contenido del episodio

### episode_title

Título del episodio, en el idioma definido en la columna `language`. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — sin datos entre paréntesis ajenos al título.

| Columna de Excel | Valores aceptados            | Obligatorio |
| ---------------- | ---------------------------- | ----------- |
| `episode_title`  | Ejemplo: Título del episodio | Obligatorio |

### episode_number

Posición numérica del episodio dentro de su temporada — determina el orden de visualización en la plataforma. Los valores **deben** reflejar el orden original de emisión/exhibición; **no deben** usarse números de producción. Solo números enteros.

| Columna de Excel | Valores aceptados    | Obligatorio |
| ---------------- | -------------------- | ----------- |
| `episode_number` | Solo números enteros | Obligatorio |

### original_spoken_language

Idioma original de producción del **episodio**. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido. Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`).

> **Nota:** este campo no lleva el prefijo `episode_` en la plantilla, pero aplica a **nivel de episodio**, no a nivel de serie.

| Columna de Excel           | Valores aceptados                            | Obligatorio |
| -------------------------- | -------------------------------------------- | ----------- |
| `original_spoken_language` | Un [valor de idioma](#language-codes) válido | Obligatorio |

### country_of_origin

El país principal donde se produjo el **episodio**, y donde están establecidos los principales creadores, el equipo de filmación y los productores. Debe ajustarse a un código [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) admitido.

> **Nota:** este campo no lleva el prefijo `episode_` en la plantilla, pero aplica a **nivel de episodio**, no a nivel de serie.

| Columna de Excel    | Valores aceptados                                                                                                   | Obligatorio |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `country_of_origin` | Un código de país válido de 2 caracteres según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

### episode_release_date

Fecha original en que el episodio estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, un **año de estreno** correcto.

| Columna de Excel       | Valores aceptados              | Obligatorio |
| ---------------------- | ------------------------------ | ----------- |
| `episode_release_date` | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

### episode_runtime

Duración total del episodio, en **minutos enteros**.

| Columna de Excel  | Valores aceptados                   | Obligatorio |
| ----------------- | ----------------------------------- | ----------- |
| `episode_runtime` | Solo números enteros. Ejemplo: `22` | Obligatorio |

### rating_system y episode_ratings

`rating_system` contiene la autoridad de clasificación (por ejemplo, `MPAA`), y `episode_ratings` contiene el valor de clasificación correspondiente (por ejemplo, `TV-14`) para dicha autoridad — la misma división intencional en dos columnas confirmada para la [Referencia de Excel de Película](#rating_system-and-ratings). Se **debe** proporcionar, para cada episodio, una clasificación de TV válida de la autoridad de clasificación del territorio en el que estará disponible el contenido. Si no ha sido clasificado por la autoridad oficial de ese territorio, usa en su lugar una clasificación válida de `USA_PR`, según las pautas de [tvguidelines.org](http://tvguidelines.org/).

> **Nota:** Clasificación es un campo **exclusivo del nivel de episodio** — no existe un campo de clasificación independiente a nivel de serie.

| Columna de Excel  | Valores aceptados                                                                                   | Obligatorio |
| ----------------- | --------------------------------------------------------------------------------------------------- | ----------- |
| `rating_system`   | Consulta [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |
| `episode_ratings` | Consulta [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |

### episode_tags

Campo de categorización de formato libre más allá del Género, con las mismas reglas que [series_tags](#series_tags) arriba.

| Columna de Excel | Valores aceptados                          | Obligatorio          |
| ---------------- | ------------------------------------------ | -------------------- |
| `episode_tags`   | Cualquier cadena de menos de 50 caracteres | **Muy recomendable** |

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

> _Nota: los Valores aceptados de este campo faltaban en la tabla de origen — se restauraron arriba como&#x20;_`1`_–_`6`_, en consonancia con la [Referencia XML de TV](#)._

***

## Cortes publicitarios y puntos de referencia

> **Nota:** los cortes publicitarios y los puntos de referencia son campos **exclusivos del nivel de episodio** — no existen equivalentes independientes a nivel de serie.

### episode_ad_breaks

Se utiliza para determinar los [Cortes publicitarios para contenido financiado con anuncios](#ad-breaks). Los valores **deben** tener una precisión de milisegundos. Si hay negros comerciales presentes, proporciona el código de tiempo en el **punto medio**. No es obligatorio para SVOD, pero se pueden ingerir datos con precisión de fotogramas si están disponibles.

| Columna de Excel    | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `episode_ad_breaks` | `HH:MM:SS.sss`    | Preferido   |

### episode_cue_points

Identifica los tiempos de inicio/fin de los créditos iniciales, resúmenes, créditos finales y material detrás de cámaras. Los valores **deben** tener una precisión de milisegundos.

> **Nota:** al igual que en la plantilla de Excel de Película, esto es una **única cadena de texto separada por comas** en una sola celda, que codifica el mismo concepto descrito en los elementos `cuePoint` anidados de la [Referencia XML de TV](#cuepoint-start_time-and-end_time).

**Formato:** una lista separada por comas de pares `type=startTime>endTime`.

**Ejemplo:**

```
intro=00:05:10.253>00:07:15.123,recap=00:01:12.456>00:03:12.052
```

| Columna de Excel     | Valores aceptados                                                                                                                   | Obligatorio |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `episode_cue_points` | Formato: `type=HH:MM:SS.sss>HH:MM:SS.sss`. Valores permitidos de `type`: `ad overlay`, `behind the scenes`, `intro`, `recap`, `end` | Opcional    |

***

## Reparto y equipo de filmación del episodio

### episode_cast

Nombres de los miembros del reparto del episodio.

| Columna de Excel | Valores aceptados                             | Obligatorio |
| ---------------- | --------------------------------------------- | ----------- |
| `episode_cast`   | Lista separada por comas de `Nombre Apellido` | Preferido   |

### episode_director

Nombre(s) del director del episodio.

> **Nota entre formatos:** por el momento, Director es la única función del equipo de filmación admitida para la ingesta de metadatos en Excel.

| Columna de Excel   | Valores aceptados                             | Obligatorio |
| ------------------ | --------------------------------------------- | ----------- |
| `episode_director` | Lista separada por comas de `Nombre Apellido` | Preferido   |

***

## Activos

### video_file_name

Nombre de archivo del video, en el idioma definido en la columna `language`, entregado mediante Aspera. **Solo se permite un video por&#x20;**`asset_id`**.** Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel  | Valores aceptados               | Obligatorio |
| ----------------- | ------------------------------- | ----------- |
| `video_file_name` | Ejemplo: `episodeVideoFile.mov` | Obligatorio |

### video_file_language

Idioma principal del diálogo hablado o el texto visible del archivo de video. Si no hay diálogo ni texto visible, usa el idioma hablado por la audiencia a la que está destinado el contenido. **También aplica a** `closed_caption_file_name` y `forced_subtitle_file_name`. **Solo se permite un idioma.**

| Columna de Excel      | Valores aceptados                            | Obligatorio |
| --------------------- | -------------------------------------------- | ----------- |
| `video_file_language` | Un [valor de idioma](#language-codes) válido | Obligatorio |

### audio_layout

[Descriptor de diseño de audio](#audio-channel-layout-hints) para el archivo de video entregado.

| Columna de Excel | Valores aceptados                                                        | Obligatorio |
| ---------------- | ------------------------------------------------------------------------ | ----------- |
| `audio_layout`   | `stereoOnly`, `surroundOnly`, `stereoPlusSurround`, `surroundPlusStereo` | Opcional    |

### descriptive_audio_file_name

Solo para archivos de audio descriptivo. Nombre de archivo del archivo de audio descriptivo, en el idioma definido en `descriptive_audio_language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel              | Valores aceptados           | Obligatorio                                                                                    |
| ----------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| `descriptive_audio_file_name` | Ejemplo: `movieDubFile.wav` | Obligatorio al proporcionar un archivo de audio descriptivo sidecar con fines de accesibilidad |

### descriptive_audio_language

Solo para archivos de audio descriptivo. Idioma principal de la pista de diálogo hablado del archivo de audio. **Solo se permite un idioma.**

| Columna de Excel             | Valores aceptados                            | Obligatorio                                               |
| ---------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| `descriptive_audio_language` | Un [valor de idioma](#language-codes) válido | Obligatorio al proporcionar archivos de audio descriptivo |

### closed_caption_file_name

Nombre de archivo de los subtítulos descriptivos, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales. Su idioma se deriva de `video_file_language`.

| Columna de Excel           | Valores aceptados              | Obligatorio |
| -------------------------- | ------------------------------ | ----------- |
| `closed_caption_file_name` | Ejemplo: `episodeCaptions.srt` | Obligatorio |

### forced_subtitle_file_name

Nombre de archivo de los subtítulos narrativos forzados, en el idioma definido en `video_file_language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales. Su idioma se deriva de `video_file_language`.

| Columna de Excel            | Valores aceptados                    | Obligatorio                                                |
| --------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| `forced_subtitle_file_name` | Ejemplo: `episodeForcedSubtitle.srt` | Obligatorio al proporcionar subtítulos narrativos forzados |

***

## Ilustraciones

### series_keyart_file_name

Nombre de archivo de la imagen de arte clave con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel          | Valores aceptados            | Obligatorio |
| ------------------------- | ---------------------------- | ----------- |
| `series_keyart_file_name` | Ejemplo: `episodeKeyArt.jpg` | Obligatorio |

### series_boxcover_file_name

Nombre de archivo de la imagen de carátula con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel            | Valores aceptados            | Obligatorio |
| --------------------------- | ---------------------------- | ----------- |
| `series_boxcover_file_name` | Ejemplo: `episodeBoxArt.jpg` | Preferido   |

### series_poster_file_name

Nombre de archivo de la imagen de portada con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel          | Valores aceptados           | Obligatorio |
| ------------------------- | --------------------------- | ----------- |
| `series_poster_file_name` | Ejemplo: `seriesPoster.jpg` | Preferido   |

### series_background_file_name

Nombre de archivo de la imagen de fondo sin texto a nivel de **serie**, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

> _Corregido respecto a la fuente, que mostraba el mismo nombre de archivo de ejemplo (_`episodeBGimage.jpg`_) tanto para&#x20;_`series_background_file_name`_&#x20;como para&#x20;_`episode_background_file_name`_&#x20;— se actualizó abajo a un ejemplo específico de la serie para que ambos sean visualmente distintos._

| Columna de Excel              | Valores aceptados            | Obligatorio |
| ----------------------------- | ---------------------------- | ----------- |
| `series_background_file_name` | Ejemplo: `seriesBGimage.jpg` | Preferido   |

### episode_background_file_name

Nombre de archivo de la imagen de fondo sin texto a nivel de **episodio**, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel               | Valores aceptados             | Obligatorio |
| ------------------------------ | ----------------------------- | ----------- |
| `episode_background_file_name` | Ejemplo: `episodeBGimage.jpg` | Preferido   |

***

## Disponibilidad

> **Nota:** al igual que en la [Referencia de Excel de Película](#availability), ninguno de estos campos está marcado como Obligatorio — en consonancia con el comportamiento XML confirmado para `playOptions` y sus elementos secundarios.

### vod_type

Tipo de monetización del episodio. Se permiten varios valores separados por comas, siempre que `territory`, `episode_start_date` y `episode_end_date` sean idénticos entre ellos.

| Columna de Excel | Valores aceptados                    | Obligatorio |
| ---------------- | ------------------------------------ | ----------- |
| `vod_type`       | Ejemplo: `avod`, `svod`, `avod,svod` | Preferido   |

### territory

Código(s) de país del territorio en el que el contenido está disponible. Se permiten varios códigos de país separados por comas, siempre que `vod_type`, `episode_start_date` y `episode_end_date` sean idénticos entre ellos.

| Columna de Excel | Valores aceptados      | Obligatorio |
| ---------------- | ---------------------- | ----------- |
| `territory`      | `US`, `CA`, `GB`, `MX` | Preferido   |

### episode_start_date

Fecha de inicio de la disponibilidad del contenido. Debe ser cronológicamente **anterior** a `episode_end_date`; ambas **no deben** ser idénticas.

| Columna de Excel     | Valores aceptados                       | Obligatorio |
| -------------------- | --------------------------------------- | ----------- |
| `episode_start_date` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Preferido   |

### episode_end_date

Fecha de finalización de la disponibilidad del contenido. Debe ser cronológicamente **posterior** a `episode_start_date`; ambas **no deben** ser idénticas.

| Columna de Excel   | Valores aceptados                       | Obligatorio |
| ------------------ | --------------------------------------- | ----------- |
| `episode_end_date` | Formato ISO 8601: `YYYY-MM-DDTHH:MM:SS` | Preferido   |
