---
title: Excel - campos de metadatos de clips de formato corto
excerpt: Referencia campo por campo para la plantilla de Excel de Clip.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia campo por campo para la plantilla de metadatos de Excel de **Clip**. Para las descargas de plantillas y las reglas a nivel de libro de trabajo (formato, estructura, límites de filas, formato de archivo), consulta la [Descripción general de metadatos de Excel](#roku-excel-metadata-overview).

**Cada fila representa una experiencia de idioma de un solo clip.** Los clips admiten dos conjuntos de funciones opcionales que no están presentes en Película/TV: los campos `sub_type`/`parent_*` (que identifican un clip como contenido auxiliar de un programa principal) y los **metadatos deportivos** (`sport_type`, `sport_league`, `sport_teams`) — que reflejan la [Referencia XML de Clip](#).

Los campos se agrupan en: **Información del paquete**, **Descriptores de contenido**, **Reparto y equipo de filmación**, **Activos**, **Ilustraciones**, **Disponibilidad**, **Información del programa principal** y **Metadatos deportivos**.

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
| `contentType`    | `clip`            | Obligatorio |

### sub_type

Define el subtipo de contenido del paquete. Actualmente Roku **no** admite conexiones principales y secundarias de forma nativa — el contenido auxiliar o relacionado puede identificarse con uno de los subtipos que se indican abajo, pero **no se crea ningún vínculo a nivel de sistema entre el activo principal y el secundario**. (Consulta [Información del programa principal](#información-del-programa-principal) más abajo para obtener contexto descriptivo, sin vínculo, sobre un programa principal.)

| Columna de Excel | Valores aceptados                                                                              | Obligatorio |
| ---------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| `sub_type`       | `trailer`, `highlight`, `making_of`, `behind_scenes`, `interview`, `related`, `recap`, `extra` | Opcional    |

### language

Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio o las ilustraciones que se indican en la fila. Debe ajustarse a un [código de idioma](#language-codes) admitido. Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`). **Solo se permite un idioma por fila.**

| Columna de Excel | Valores aceptados                         | Obligatorio |
| ---------------- | ----------------------------------------- | ----------- |
| `language`       | [Valor de idioma](#language-codes) válido | Obligatorio |

### original_spoken_language

Idioma original de producción del clip. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir un código de región).

| Columna de Excel           | Valores aceptados                         | Obligatorio |
| -------------------------- | ----------------------------------------- | ----------- |
| `original_spoken_language` | [Valor de idioma](#language-codes) válido | Obligatorio |

### country_of_origin

El país principal donde se produjo el clip, y donde están establecidos los principales creadores, el equipo de filmación y los productores. Debe ajustarse a un código [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) admitido.

> _Corregido respecto de la fuente original, que aquí hacía referencia a "la película" — este campo aplica al clip, en consonancia con el resto de esta plantilla._

| Columna de Excel    | Valores aceptados                                                                                                | Obligatorio |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

### asset_id

Identificador único e inalterable de un clip. Generado/suministrado por la empresa socia; debe coincidir con el Title ID proporcionado en el documento de Avails, para facilitar el seguimiento a lo largo del proceso de Roku. **Límite de 50 caracteres.**

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

Título del clip, en el idioma definido en la columna `language`. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — no incluyas datos entre paréntesis ajenos al título (por ejemplo, `(Clásica)`, `(1987)`, `(Temporada 1)`, `(HD)`).

| Columna de Excel | Valores aceptados        | Obligatorio |
| ---------------- | ------------------------ | ----------- |
| `title`          | Ejemplo: Título del clip | Obligatorio |

### genres

Clasificación por género del contenido. Cada clip **debe** entregarse con **al menos un** género admitido. Consulta la [lista enumerada de géneros](#genres).

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

`rating_system` contiene la autoridad de clasificación (por ejemplo, `MPAA`), y `ratings` contiene el valor de clasificación correspondiente (por ejemplo, `PG-13`) para dicha autoridad — la misma división intencional en dos columnas confirmada para la [Referencia de Excel de Película](#rating_system-y-ratings). Se **debe** proporcionar, para cada clip, una clasificación válida de cine o TV de la autoridad de clasificación del territorio en el que estará disponible el contenido. Si no ha sido clasificado por la autoridad oficial de ese territorio, usa en su lugar una clasificación válida de `USA_PR`, según las pautas de [tvguidelines.org](http://tvguidelines.org/).

| Columna de Excel | Valores aceptados                                                                                       | Obligatorio |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ----------- |
| `rating_system`  | Consulta los [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |
| `ratings`        | Consulta los [valores de clasificación por sistema y país](#rating-values-by-rating-system-and-country) | Obligatorio |

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

> _Nota: los Valores aceptados de este campo faltaban en la tabla de origen — se restauraron arriba como&#x20;_`1`_–_`6`_, en consonancia con la [Referencia XML de Clip](#)._

***

## Reparto y equipo de filmación

### cast

Nombres de los miembros del reparto.

| Columna de Excel | Valores aceptados                              | Obligatorio |
| ---------------- | ---------------------------------------------- | ----------- |
| `cast`           | Lista de `Nombre Apellido` separados por comas | Preferido   |

### director

Nombre(s) del director del clip.

> **Nota entre formatos:** por el momento, Director es la **única** función del equipo de filmación admitida para la ingesta de metadatos en Excel.

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

Idioma principal del diálogo hablado o del texto visible del archivo de video. Si no hay diálogo ni texto visible, usa el idioma que habla la audiencia prevista. **También aplica a** `caption_file_name` y `forced_subtitle_file_name`. **Solo se permite un idioma.**

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

> **Nota:** a diferencia de Película y TV, la plantilla de Clip incluye únicamente **un** campo de ilustración — en consonancia con la [Especificación de ilustraciones](#), donde los Clips requieren solo un tipo de imagen de Arte clave 16:9.

### keyart_file_name

Nombre de archivo de la imagen de arte clave con texto, en el idioma definido en la columna `language`, entregado mediante Aspera. Debe coincidir exactamente con el archivo entregado. **Distingue entre mayúsculas y minúsculas**; sin espacios en blanco ni caracteres especiales.

| Columna de Excel   | Valores aceptados          | Obligatorio |
| ------------------ | -------------------------- | ----------- |
| `keyart_file_name` | Ejemplo: `movieKeyArt.jpg` | Obligatorio |

***

## Disponibilidad

### territory

Código(s) de país del territorio en el que está disponible el contenido. Se permiten varios códigos de país separados por comas, siempre que `vod_type`, `license_start_date` y `license_end_date` sean idénticos en todos ellos.

| Columna de Excel | Valores aceptados      | Obligatorio |
| ---------------- | ---------------------- | ----------- |
| `territory`      | `US`, `CA`, `GB`, `MX` | Preferido   |

### vod_type

Tipo de monetización del clip. Se permiten varios valores separados por comas, siempre que `territory`, `license_start_date` y `license_end_date` sean idénticos en todos ellos.

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

***

## Información del programa principal

Estos campos proporcionan metadatos **descriptivos y contextuales** sobre el programa del cual se deriva el clip o con el cual se relaciona — se usan en combinación con un valor válido de [`sub_type`](#sub_type) indicado arriba. **Estos son solo metadatos descriptivos; no crean un vínculo navegable ni una relación en la plataforma** entre el clip y su programa principal (en consonancia con la nota de `sub_type` arriba, que indica que Roku no admite de forma nativa las conexiones principales y secundarias).

### parent_type

Tipo de contenido del programa principal del cual se deriva o al cual describe el clip.

| Columna de Excel | Valores aceptados            | Obligatorio |
| ---------------- | ---------------------------- | ----------- |
| `parent_type`    | `episode`, `movie`, `series` | Opcional    |

### parent_title

Título del programa principal, si el programa principal es una película o un episodio.

| Columna de Excel | Valores aceptados                                | Obligatorio |
| ---------------- | ------------------------------------------------ | ----------- |
| `parent_title`   | Ejemplo: Título de la película o serie principal | Opcional    |

### parent_runtime

Duración del programa principal, si este es una película o un episodio.

| Columna de Excel | Valores aceptados | Obligatorio |
| ---------------- | ----------------- | ----------- |
| `parent_runtime` | Número entero     | Opcional    |

### parent_release_date

Fecha de estreno de la película, episodio o serie principal.

| Columna de Excel      | Valores aceptados              | Obligatorio |
| --------------------- | ------------------------------ | ----------- |
| `parent_release_date` | Formato ISO 8601: `YYYY-MM-DD` | Opcional    |

### parent_tms_id

ID de TMS de la película, episodio o serie principal.

| Columna de Excel | Valores aceptados          | Obligatorio |
| ---------------- | -------------------------- | ----------- |
| `parent_tms_id`  | Cualquier ID de TMS válido | Opcional    |

### parent_series

Título de la serie del programa principal, si este es un episodio.

| Columna de Excel | Valores aceptados                     | Obligatorio |
| ---------------- | ------------------------------------- | ----------- |
| `parent_series`  | Ejemplo: Título de la serie principal | Opcional    |

### parent_season

Número de temporada del programa principal, si este es un episodio.

| Columna de Excel | Valores aceptados         | Obligatorio |
| ---------------- | ------------------------- | ----------- |
| `parent_season`  | Número entero mayor que 0 | Opcional    |

### parent_episode

Número de episodio del programa principal, si este es un episodio.

| Columna de Excel | Valores aceptados | Obligatorio |
| ---------------- | ----------------- | ----------- |
| `parent_episode` | Número entero     | Opcional    |

***

## Metadatos deportivos

Los siguientes campos son **obligatorios específicamente para clips deportivos**.

### sport_type

Nombre del deporte que aparece en el clip o momento destacado.

| Columna de Excel | Valores aceptados  | Obligatorio                       |
| ---------------- | ------------------ | --------------------------------- |
| `sport_type`     | Nombre del deporte | Obligatorio para clips deportivos |

### sport_league

Nombre de la liga deportiva que aparece en el clip o momento destacado.

| Columna de Excel | Valores aceptados           | Obligatorio                       |
| ---------------- | --------------------------- | --------------------------------- |
| `sport_league`   | Nombre de la liga deportiva | Obligatorio para clips deportivos |

### sport_teams

Equipos que aparecen en el clip o momento destacado deportivo. Pueden proporcionarse varios equipos separados por comas.

| Columna de Excel | Valores aceptados                                                     | Obligatorio                       |
| ---------------- | --------------------------------------------------------------------- | --------------------------------- |
| `sport_teams`    | Lista separada por comas. Ejemplo: `Chicago Cubs,St. Louis Cardinals` | Obligatorio para clips deportivos |
