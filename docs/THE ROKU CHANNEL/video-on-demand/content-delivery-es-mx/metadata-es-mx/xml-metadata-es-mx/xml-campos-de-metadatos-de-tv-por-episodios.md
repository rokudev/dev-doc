---
title: XML - campos de metadatos de TV por episodios
excerpt: >-
  Referencia XML campo por campo para la entrega de series, temporadas y
  episodios de TV.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta página es la referencia XML campo por campo para el tipo de contenido **TV**, siguiendo la jerarquía de Roku `series > season > episode` (consulta las [Definiciones de tipo de contenido](#content-type-definitions)). Para la descarga del esquema y la muestra anotada, consulta la [Descripción general de metadatos XML de Roku](#roku-xml-metadata-overview).

**Nota sobre la estructura:** dado que los metadatos de TV se entregan como una jerarquía anidada, varios nombres de campo se repiten en distintos niveles — `title`, `short_synopsis`, `long_synopsis`, `cast`, `crew` y `localizations` existen una vez para el **episodio** y otra vez para la **serie**. Cada uno se etiqueta a continuación con su nivel (por ejemplo, "Título del episodio" frente a "Título de la serie") para mantenerlos diferenciados.

Los campos se agrupan en: **Información del paquete**, **Descriptores de contenido del episodio**, **Cortes publicitarios y puntos de referencia**, **Reparto y equipo de filmación del episodio**, **Localizaciones del episodio**, **Bloque de la serie**, **Bloque de la temporada**, **Opciones de reproducción/Disponibilidad** y **Activos**.

***

## Información del paquete

### package

Define el tipo de versión del paquete.

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | `tv1.0`           | Obligatorio |

```xml
<package version="tv1.0">
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

Idioma principal de los metadatos del paquete. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido. Práctica recomendada: incluye un código de región (por ejemplo, `es-MX` frente a `es-ES`).

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
| `/package/video/type` | `tv`              | Obligatorio |

```xml
<type>tv</type>
```

### asset_id (episodio)

Identificador único e inalterable de un **episodio**. Los ID son generados y suministrados por la empresa socia. Debe coincidir con el ID proporcionado en el documento de Avails, para facilitar el seguimiento a lo largo del proceso de Roku. **Límite de 50 caracteres.**

| Xpath XML                 | Valores aceptados                                                                  | Obligatorio |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

```xml
<asset_id>episodeAssetIdHere</asset_id>
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

## Descriptores de contenido del episodio

### Título del episodio

Título del episodio. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — sin datos entre paréntesis ajenos al título (por ejemplo, `(Clásica)`, `(1987)`, `(Temporada 1)`, `(HD)`).

| Xpath XML              | Ejemplo             | Obligatorio |
| ---------------------- | ------------------- | ----------- |
| `/package/video/title` | Título del episodio | Obligatorio |

```xml
<title><![CDATA[Episode Title. Required.]]></title>
```

### episodeNumber

Posición numérica del episodio dentro de su temporada — determina el orden de visualización en la plataforma. Los valores **deben** reflejar el orden original de emisión/exhibición; **no deben** usarse números de producción. Solo números enteros.

| Xpath XML                      | Valores aceptados    | Obligatorio |
| ------------------------------ | -------------------- | ----------- |
| `/package/video/episodeNumber` | Solo números enteros | Obligatorio |

```xml
<episodeNumber>2</episodeNumber>
```

### short_synopsis (episodio)

Una sinopsis breve del episodio. Sección CDATA compatible. **Límite de 250 caracteres.**

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

```xml
<short_synopsis><![CDATA[Short summary of episode. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis (episodio)

Una sinopsis larga del episodio. Sección CDATA compatible. **Límite de 500 caracteres.**

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | Sinopsis de 500 caracteres | Opcional    |

```xml
<long_synopsis><![CDATA[Long summary of episode. 500 characters maximum. Optional.]]></long_synopsis>
```

### closedCaptions

Indica si el episodio contiene subtítulos descriptivos. **Obligatorio para todo el contenido destinado a Roku Channel en EE. UU.**

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

### release_date (episodio)

Fecha original en la que el episodio estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, un **año de estreno** correcto.

| Xpath XML                     | Valores aceptados              | Obligatorio |
| ----------------------------- | ------------------------------ | ----------- |
| `/package/video/release_date` | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### runtime

Duración total del episodio, en **minutos enteros**.

| Xpath XML                | Valores aceptados    | Obligatorio |
| ------------------------ | -------------------- | ----------- |
| `/package/video/runtime` | Solo números enteros | Obligatorio |

```xml
<runtime>45</runtime>
```

### rating (episodio)

Clasificación de contenido/edades de una fuente de clasificación. Se **debe** proporcionar, para cada episodio, una clasificación válida de TV emitida por la autoridad de clasificación (`ratingSystem`) del territorio en el que estará disponible el contenido. Si no ha sido clasificado por la autoridad oficial de ese territorio, usa en su lugar una clasificación válida de `USA_PR`, según las pautas de [tvguidelines.org](http://tvguidelines.org/) (no existe un organismo oficial de clasificación para `USA_PR`).

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

### tag (episodio)

Campo de formato libre para categorizar contenido más allá del Género. Utilizado por el equipo editorial y el motor de recomendaciones de Roku para mostrar contenido. Sin límite de cantidad; sin conjunto de etiquetas definido. **Distingue entre mayúsculas y minúsculas** — entrégalas de forma consistente.

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

Se utiliza para determinar los [cortes publicitarios para contenido financiado con anuncios](#ad-breaks). Los valores **deben** tener precisión de milisegundos. Si hay negros comerciales presentes, proporciona el código de tiempo en el **punto medio**. No es obligatorio para SVOD, pero se pueden ingerir datos con precisión de fotogramas si están disponibles.

| Xpath XML                         | Valores aceptados | Obligatorio                   |
| --------------------------------- | ----------------- | ----------------------------- |
| `/package/video/adBreaks/adBreak` | `HH:MM:SS.sss`    | Preferido para contenido AVOD |

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

Identifica los puntos de entrada/salida de los créditos iniciales, resúmenes, créditos finales y material detrás de cámaras. Las etiquetas `cuePoint` **deben** incluir el atributo `type`. Los valores **deben** tener precisión de milisegundos.

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

Define el tipo de un `cuePoint` dado. El nombre del atributo **debe** ser `type`. **Para cada tipo indicado a continuación: si se proporciona ese cuePoint,&#x20;**`start_time`**&#x20;y&#x20;**`end_time`**&#x20;son ambos obligatorios.**

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

## Reparto y equipo de filmación del episodio

### cast display_name (episodio)

Nombre de un miembro del reparto del episodio. Sección CDATA compatible.

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

### crew display_name (episodio)

Nombre de un miembro del equipo de filmación del episodio. Sección CDATA compatible.

> **Nota entre formatos:** por el momento, Director es la **única** función de `crew_member` admitida para la ingesta en **Excel** (esta referencia XML admite la lista completa de funciones del equipo de filmación; la limitación es específica del formato de entrega en Excel).

| Xpath XML                                      | Valores aceptados | Obligatorio                                 |
| ---------------------------------------------- | ----------------- | ------------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Nombre y apellido | Obligatorio si se proporciona `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### crew role (episodio)

Función del miembro del equipo de filmación indicado en `display_name`. Todo miembro del equipo de filmación **debe** incluir también su función. Consulta la [lista enumerada de funciones del equipo de filmación](#crew-roles). **Las funciones distinguen entre mayúsculas y minúsculas.**

> **Nota entre formatos:** como se indicó arriba, por el momento Director es la única función de `crew_member` admitida para la ingesta en Excel.

| Xpath XML                                    | Valores aceptados                          | Obligatorio                                 |
| -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| `/package/video/crew/crew_member/roles/role` | Consulta la [lista enumerada](#crew-roles) | Obligatorio si se proporciona `crew_member` |

```xml
<role>Director</role>
```

***

## Localizaciones del episodio

### localizations (episodio)

Inicia el bloque que proporciona metadatos localizados del episodio — idioma, título traducido, `short_synopsis` y `long_synopsis`.

| Xpath XML                      | Valores aceptados | Obligatorio |
| ------------------------------ | ----------------- | ----------- |
| `/package/video/localizations` | —                 | Obligatorio |

```xml
<localizations>
```

### localization atributo name (episodio)

Define el idioma de los campos localizados dentro de un bloque `localization` del episodio. El nombre del atributo **debe** ser `name`; el valor debe, como mínimo, ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir código de región, por ejemplo, `es-MX` frente a `es-ES`).

| Xpath XML                                   | Valores aceptados                                                          | Obligatorio |
| ------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `/package/video/localizations/localization` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<localization name="es">
```

### Título localizado del episodio

Título localizado del episodio. Mismas restricciones sobre datos entre paréntesis ajenos al título que en [Título del episodio](#episode-title) arriba. **Debe ir acompañado** de `short_synopsis` y `long_synopsis` localizadas.

| Xpath XML                                         | Valores aceptados              | Obligatorio |
| ------------------------------------------------- | ------------------------------ | ----------- |
| `/package/video/localizations/localization/title` | Título localizado del episodio | Obligatorio |

```xml
<title><![CDATA[Localized Episode Title. Required.]]></title>
```

### short_synopsis localizado (episodio)

Sección CDATA compatible. **Límite de 250 caracteres.** Debe ir acompañado de `title` y `long_synopsis` localizados.

| Xpath XML                                                  | Valores aceptados | Obligatorio |
| ---------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

```xml
<short_synopsis><![CDATA[Localized Short summary of episode. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis localizado (episodio)

Sección CDATA compatible. **Límite de 500 caracteres.** Debe ir acompañado de `title` y `short_synopsis` localizados.

| Xpath XML                                                 | Valores aceptados | Obligatorio |
| --------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/long_synopsis` | 500 caracteres    | Opcional    |

```xml
<long_synopsis><![CDATA[Localized Long summary of episode. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Bloque de la serie

### series

Inicia el bloque que hace referencia a los metadatos del programa al que pertenece el episodio. Roku sigue la definición estadounidense de serie. Los episodios se anidan como `series > season > episode`.

| Xpath XML               | Ejemplo | Obligatorio |
| ----------------------- | ------- | ----------- |
| `/package/video/series` | —       | Obligatorio |

```xml
<series>
```

### series_id

Identificador único e inalterable de una serie. Generado y suministrado por la empresa socia; debe coincidir con el ID del documento de Avails. **Límite de 50 caracteres.**

| Xpath XML                         | Valores aceptados                                                                  | Obligatorio |
| --------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `/package/video/series/series_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

```xml
<series_id>seriesIdHere</series_id>
```

### Título de la serie

Título de la serie. Incluye **únicamente** el nombre tal y como debe aparecer en la plataforma — sin datos entre paréntesis ajenos al título.

| Xpath XML                     | Ejemplo            | Obligatorio |
| ----------------------------- | ------------------ | ----------- |
| `/package/video/series/title` | Título de la serie | Obligatorio |

```xml
<title><![CDATA[Series Title. Required.]]></title>
```

### short_synopsis (serie)

Sección CDATA compatible. **Límite de 250 caracteres.**

| Xpath XML                              | Valores aceptados          | Obligatorio |
| -------------------------------------- | -------------------------- | ----------- |
| `/package/video/series/short_synopsis` | Sinopsis de 250 caracteres | Obligatorio |

```xml
<short_synopsis><![CDATA[Short summary of series. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis (serie)

Sección CDATA compatible. **Límite de 500 caracteres.**

| Xpath XML                             | Valores aceptados          | Obligatorio |
| ------------------------------------- | -------------------------- | ----------- |
| `/package/video/series/long_synopsis` | Sinopsis de 500 caracteres | Opcional    |

```xml
<long_synopsis><![CDATA[Long summary of series. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

Idioma original de producción de la serie. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir código de región).

| Xpath XML                                        | Valores aceptados                                                          | Obligatorio |
| ------------------------------------------------ | -------------------------------------------------------------------------- | ----------- |
| `/package/video/series/original_spoken_language` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

El país principal donde se produjo la **serie**, y donde están establecidos los principales creadores, el equipo de filmación y los productores. Debe ajustarse a un código admitido según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html).

> _Corregido respecto de la fuente original, que aquí hacía referencia a "la película" — este campo aplica a la serie, en consonancia con el resto de este bloque._

| Xpath XML                                 | Valores aceptados                                                                                                | Obligatorio |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `/package/video/series/country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa-2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

```xml
<country_of_origin>US</country_of_origin>
```

### release_date (serie)

Fecha original en la que la serie estuvo disponible por primera vez — normalmente la misma fecha que la del primer episodio. Debe incluir, como mínimo, un **año de estreno** correcto.

| Xpath XML                            | Valores aceptados              | Obligatorio |
| ------------------------------------ | ------------------------------ | ----------- |
| `/package/video/series/release_date` | Formato ISO 8601: `YYYY-MM-DD` | Obligatorio |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### genre

Clasificación por género. Cada episodio **debe** entregarse con **al menos un** género admitido a través de su registro de serie. Consulta la [lista enumerada de géneros](#genres).

| Xpath XML                            | Valores aceptados                                                        | Obligatorio |
| ------------------------------------ | ------------------------------------------------------------------------ | ----------- |
| `/package/video/series/genres/genre` | Consulta la [lista enumerada](#genres). No más de 10 géneros por título. | Obligatorio |

```xml
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

### tag (serie)

Campo de formato libre para categorizar contenido más allá del Género, con las mismas reglas que [tag (episodio)](#tag-episode) arriba — distingue entre mayúsculas y minúsculas, sin límite, sin conjunto definido.

| Xpath XML                        | Valores aceptados                          | Obligatorio                         |
| -------------------------------- | ------------------------------------------ | ----------------------------------- |
| `/package/video/series/tags/tag` | Cualquier cadena de menos de 50 caracteres | Opcional, pero **muy recomendable** |

```xml
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

### cast display_name (serie)

Nombre de un miembro del reparto de la serie. Sección CDATA compatible.

| Xpath XML                                             | Valores aceptados | Obligatorio |
| ----------------------------------------------------- | ----------------- | ----------- |
| `/package/video/series/cast/cast_member/display_name` | Nombre y apellido | Opcional    |

```xml
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

### crew display_name (serie)

Nombre de un miembro del equipo de filmación de la serie. Sección CDATA compatible.

> **Nota entre formatos:** por el momento, Director es la única función de `crew_member` admitida para la ingesta en Excel.

| Xpath XML                                             | Valores aceptados | Obligatorio                                 |
| ----------------------------------------------------- | ----------------- | ------------------------------------------- |
| `/package/video/series/crew/crew_member/display_name` | Nombre y apellido | Obligatorio si se proporciona `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### crew role (serie)

Función del miembro del equipo de filmación indicado en `display_name`. Consulta la [lista enumerada de funciones del equipo de filmación](#crew-roles). **Distingue entre mayúsculas y minúsculas.**

> **Nota entre formatos:** como se indicó arriba, por el momento Director es la única función de `crew_member` admitida para la ingesta en Excel.

| Xpath XML                                           | Valores aceptados                          | Obligatorio                                 |
| --------------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| `/package/video/series/crew/crew_member/roles/role` | Consulta la [lista enumerada](#crew-roles) | Obligatorio si se proporciona `crew_member` |

```xml
<role>Director</role>
```

### localizations (serie)

Inicia el bloque que proporciona metadatos localizados de la serie para paquetes multilingües.

| Xpath XML                             | Valores aceptados | Obligatorio |
| ------------------------------------- | ----------------- | ----------- |
| `/package/video/series/localizations` | —                 | Obligatorio |

```xml
<localizations>
```

### localization atributo name (serie)

Define el idioma de los campos localizados dentro de un bloque `localization` de la serie. El nombre del atributo **debe** ser `name`; el valor debe, como mínimo, ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir código de región).

| Xpath XML                                          | Valores aceptados                                                          | Obligatorio |
| -------------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `/package/video/series/localizations/localization` | [Código de idioma](#language-codes) válido; puede incluir código de región | Obligatorio |

```xml
<localization name="es">
```

### Título localizado de la serie

Título localizado de la serie. Mismas restricciones sobre datos entre paréntesis ajenos al título que en [Título de la serie](#series-title) arriba. **Debe ir acompañado** de `short_synopsis` y `long_synopsis` localizadas.

| Xpath XML                                                | Valores aceptados             | Obligatorio |
| -------------------------------------------------------- | ----------------------------- | ----------- |
| `/package/video/series/localizations/localization/title` | Título localizado de la serie | Obligatorio |

```xml
<title><![CDATA[Localized Series Title. Required.]]></title>
```

### short_synopsis localizado (serie)

Sección CDATA compatible. **Límite de 250 caracteres.** Debe ir acompañado de `title` y `long_synopsis` localizados.

| Xpath XML                                                         | Valores aceptados | Obligatorio |
| ----------------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/series/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

```xml
<short_synopsis><![CDATA[Localized Short summary of series. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis localizado (serie)

Sección CDATA compatible. **Límite de 500 caracteres.** Debe ir acompañado de `title` y `short_synopsis` localizados.

| Xpath XML                                                        | Valores aceptados | Obligatorio |
| ---------------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/series/localizations/localization/long_synopsis` | 500 caracteres    | Opcional    |

```xml
<long_synopsis><![CDATA[Localized Long summary of series. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Bloque de la temporada

### season

Inicia el bloque que hace referencia a los metadatos de la temporada de la serie a la que pertenece el episodio. Los episodios se anidan como `series > season > episode`.

| Xpath XML               | Ejemplo | Obligatorio |
| ----------------------- | ------- | ----------- |
| `/package/video/season` | —       | Obligatorio |

```xml
<season>
```

### season_id

Identificador único e inalterable de una temporada. Generado y suministrado por la empresa socia; debe coincidir con el ID del documento de Avails. **Límite de 50 caracteres.**

| Xpath XML                         | Valores aceptados                                                                  | Obligatorio |
| --------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `/package/video/season/season_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo. | Obligatorio |

```xml
<season_id>seasonIdHere</season_id>
```

### seasonNumber

Posición numérica de la temporada dentro de la serie — determina el orden de visualización de los episodios subyacentes. Los valores **deben** reflejar el orden original de emisión/exhibición. Solo números enteros; **no debe ser 0.**

| Xpath XML                            | Valores aceptados                  | Obligatorio |
| ------------------------------------ | ---------------------------------- | ----------- |
| `/package/video/season/seasonNumber` | Solo números enteros mayores que 0 | Obligatorio |

```xml
<seasonNumber>2</seasonNumber>
```

***

## Opciones de reproducción/Disponibilidad

### playOptions

Inicia el bloque que proporciona la información de disponibilidad: disponibilidad por país/territorio, tipo de monetización, y fechas de inicio/fin de disponibilidad.

| Xpath XML                    | Valores aceptados | Obligatorio |
| ---------------------------- | ----------------- | ----------- |
| `/package/video/playOptions` | —                 | Opcional    |

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

Tipo de monetización del episodio. Se permiten múltiples nodos `vodType` si `country`, `licensePeriodStart` y `licensePeriodEnd` son idénticos entre ellos.

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

El bloque `assets` hace referencia a todos los archivos entregados con el paquete (video, subtítulos descriptivos, audio, subtítulos, ilustraciones), descritos mediante pares `asset`/`data_file` con atributos que identifican el tipo y la función.

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

Describe el audio sidecar del archivo de video fuente — ya sea un doblaje de audio completo para traducción, o una pista de audio descriptivo para accesibilidad. `asset type="full"`; `data_file role="audio"` (doblaje de traducción) o `role="audio description"` (accesibilidad). `<locale>` y `<file_name>` también son obligatorios.

**El audio sidecar puede requerirse** cuando se necesitan activos localizados (el audio de origen no es nativo del territorio de distribución) o para cumplir con las regulaciones de la FCC.

| Xpath XML                               | Valores aceptados                                                          | Obligatorio                                            |
| --------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="audio"` o `role="audio description"` | Opcional\* — se prefiere fuertemente audio description |

```xml
<asset type="full">
  <data_file role="audio">
```

### Full Subtitles

Describe los subtítulos sidecar del archivo de video fuente. `asset type="full"`; `data_file role="subtitles"`. `<locale>` y `<file_name>` también son obligatorios.

**Los subtítulos sidecar pueden requerirse** cuando se necesitan activos localizados (el audio de origen no es nativo del territorio de distribución).

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

Describe el o los archivos de ilustración a nivel de episodio o de serie. `asset type="artwork"`. `<locale>` y `<file_name>` también son obligatorios. Consulta [Ilustraciones](#artwork) para las especificaciones completas de entrega de imágenes.

**Confirmado:** el atributo que distingue es `role` (`role="episode"` / `role="series"`), no `type`. El texto del documento original que describía esto como un atributo `type` era incorrecto y se corrigió a continuación.

| Xpath XML                               | Valores aceptados                                  | Obligatorio |
| --------------------------------------- | -------------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"`; `data_file role="episode"` | Preferido   |
| `/package/video/assets/asset/data_file` | `asset type="artwork"`; `data_file role="series"`  | Preferido   |

```xml
<asset type="artwork">
  <data_file role="episode">
```

```xml
<asset type="artwork">
  <data_file role="series">
```

### locale

Identifica el idioma del `data_file`. Como mínimo, debe ajustarse a un [código de idioma](#language-codes) admitido (se recomienda incluir código de región). Aplica a las funciones de `data_file` `source`, `captions`, `audio`, `subtitles`, y al tipo de activo `artwork`.

| Xpath XML                                      | Valores aceptados                            | Obligatorio |
| ---------------------------------------------- | -------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file/locale` | [Código de idioma](#language-codes) admitido | Obligatorio |

```xml
<locale name="en"/>
```

### file_name

Nombre de archivo del activo indicado por el atributo `role` o `type` del `data_file` que lo contiene. Todos los valores **distinguen entre mayúsculas y minúsculas** y **deben** incluir la extensión de archivo adecuada.

Para archivos de ilustración específicamente, el atributo `type` de la etiqueta `file_name` puede **omitirse** (lo que indica **arte clave**), o establecerse en `type="background_image"`, `type="boxcover"`, o `type="poster"`.

| Tipo de activo                                                                                 | Obligatorio                            |
| ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| Video/subtítulos descriptivos/audio/subtítulos/subtítulos forzados (activos fuente en general) | Obligatorio para cada activo entregado |
| Ilustración — atributo omitido (arte clave)                                                    | Obligatorio                            |
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
