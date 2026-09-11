---
title: Metadatos
excerpt: >-
  Definiciones de tipos de contenido, reglas de ID, períodos de disponibilidad y
  formatos admitidos.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Roku utiliza un **motor de transformación** que normaliza distintos formatos de metadatos para adaptarlos a las necesidades de ingesta de Roku. Los nombres exactos de los elementos o campos que utilices importan menos que la **entrega consistente** de los nombres de elementos/campos acordados — pero, independientemente de la nomenclatura, los _datos_ dentro de cualquier campo **deben** ajustarse a la Especificación de ingesta de Roku Channel.

* Si ya utilizas un formato XML para entregar contenido a otras plataformas, es posible que **puedas** reutilizarlo para la entrega a Roku.
* **Puedes** proporcionar una muestra de tu formato de metadatos existente durante la incorporación para que Roku evalúe su validez para la ingesta.
* Independientemente del formato que se entregue, **se deben proporcionar todos los elementos/campos obligatorios** en el entregable de metadatos.

### Documentación relacionada

Esta página cubre conceptos que aplican a todos los formatos de entrega de metadatos. El detalle específico de cada formato, a nivel de campo, se encuentra en subpáginas dedicadas:

* **MovieLabs**: entrega de MEC/MMC (consulta la Guía de migración a MovieLabs / la guía de MovieLabs)
* **XML de Roku**: tres subpáginas, una por tipo de contenido: **Película**, **TV** y **Clip**
* **Excel de Roku**: tres subpáginas, una por tipo de contenido: **Película**, **TV** y **Clip**

***

## Definiciones de tipos de contenido

Roku Channel admite **tres tipos de contenido**: `tv`, `film` y `clip`. Todo el contenido **debe** entregarse bajo uno de estos tres tipos, y los títulos **deben** entregarse bajo el mismo tipo de contenido en el que el programa se publicó originalmente.

### TV

El contenido estructurado en una jerarquía de **serie > temporada > episodio** debe entregarse bajo la especificación de TV.

* **Serie** — una colección de programas/episodios publicados bajo un título común, con una narrativa, personajes o temática consistentes. En Norteamérica, cada año de una serie se denomina temporada; una serie puede abarcar varias temporadas.
* **Temporada** — un grupo de programas/episodios publicados en un año, atribuidos a una sola serie.
* **Episodio** — un segmento narrativo o informativo autónomo de una serie. Un episodio pertenece exactamente a una temporada de una sola serie.

### Película

Los títulos independientes de larga duración deben entregarse bajo la especificación de Película — cualquier programa que **no** esté destinado a anidarse en una jerarquía de serie/temporada/episodio. Esto incluye especiales de TV independientes y cortometrajes.

### Clip

Los títulos de formato corto, independientes o auxiliares, pensados como complemento de un programa más largo (por ejemplo, eventos deportivos, películas, series de TV), deben entregarse bajo la especificación de Clip.

**La presentación de los Clips y su comportamiento en la plataforma difieren de los de Película:**

* La duración y el título se **superponen directamente sobre la miniatura del contenido** — la persona usuaria ve esta información sin necesidad de entrar al contenido.
* Los Clips **no** cuentan con una página de detalles del contenido. A diferencia de Película, la persona usuaria no puede entrar a un Clip para ver una sinopsis o una pantalla con información adicional.
* En su lugar, se puede acceder a la sinopsis de un Clip presionando el botón **\* (asterisco/opciones)** del control remoto de Roku.

***

## Metadatos mínimos requeridos por tipo de contenido

### Película / Clip — Campos obligatorios

* `provider`
* `content_type`
* `asset_id`
* `title`
* `release_date`
* `runtime`
* `genres`
* `rating`
* `rating_system`
* `short_synopsis`
* `video file_name`
* `captions file_name` _(si se requieren subtítulos)_
* `key_art file_name`

### TV — Campos obligatorios

**A nivel de episodio:**

* `provider`
* `content_type`
* `asset_id`
* `episode title`
* `episodeNumber`
* `episode release_date`
* `runtime`
* `rating`
* `rating_system`
* `episode short_synopsis`
* `video file_name`
* `captions file_name` _(si se requieren subtítulos)_
* `episode thumbnail file_name`

**A nivel de serie:**

* `series_id`
* `series title`
* `series release_date`
* `series genres`
* `series short_synopsis`
* `series key_art file_name`

**A nivel de temporada:**

* `season_id`
* `seasonNumber`

> Las listas de campos de Película/Clip y de TV se muestran por separado (en lugar de una junto a la otra) porque no corresponden una a una — TV conlleva sustancialmente más campos obligatorios debido a su jerarquía de serie/temporada/episodio.

***

## Requisitos y expectativas de ID

* Roku **no** proporciona los ID — todos los ID son generados y proporcionados **por la empresa socia**.
* Todo **clip y película** debe entregarse con un `asset_id`.
* Todo **episodio** debe entregarse con **tres ID**: `asset_id`, `series_id` y `season_id`.
* Los ID deben ser **significativos para tu equipo**, ya que son la forma en que Roku identifica de manera inequívoca un título en su sistema.
* El `asset_id` en los metadatos de ingesta **debe coincidir** con el Title ID proporcionado en el documento de Avails — esto vincula el contenido a lo largo del proceso de Roku, desde el envío de Avails hasta la publicación.
* Cualquier actualización a un título ya ingerido en el sistema de Roku **DEBE** ir acompañada de su `asset_id`.

**Todos los tipos de ID comparten estas reglas:**

* **Máximo 50 caracteres**
* **Solo caracteres alfanuméricos, guiones y guiones bajos**
* **⚠️ Los espacios o caracteres especiales en cualquier ID provocarán un error en la ingesta**

| ID          | Identifica                        | Regla de unicidad/consistencia                                                                                               | Obligatorio para  |
| ----------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `asset_id`  | Un solo clip, episodio o película | Inmutable, único por activo                                                                                                  | Todo el contenido |
| `series_id` | Una serie                         | Inmutable; debe ser consistente en **todos** los episodios de esa serie; no puede ser igual al ID de temporada o de episodio | Contenido de TV   |
| `season_id` | Una temporada de una serie        | Inmutable; debe ser consistente en todos los episodios **de esa temporada**; no puede ser igual al ID de serie o de episodio | Contenido de TV   |

***

## Hojas y planificadores de disponibilidad

* Durante la incorporación, Roku solicita una **lista de lanzamiento inicial** de títulos/episodios/clips actualmente disponibles para licenciamiento, además de un calendario de cuándo se actualizará el contenido.
* Para la entrega continua, Roku solicita:
  * **Avails** al menos **60 días** antes del inicio de la ventana de licenciamiento
  * **Entrega de contenido** al menos **30 días** antes de la curaduría en el canal

Este tiempo de anticipación permite el procesamiento y el control de calidad antes de que el contenido salga al aire. La capacidad de entrega se coordina después de la firma.

| Documento                       | Enlace                                                        |
| ------------------------------- | ------------------------------------------------------------- |
| Especificación de Avail de Roku | [Ver especificación](https://go.roku.com/trc-avail-spec)      |
| Plantilla de Avail de Roku      | [Descargar plantilla](https://go.roku.com/trc-avail-template) |

***

## Períodos de disponibilidad

De forma predeterminada, el contenido pasa a estar disponible a las **12:00 a. m. (medianoche)** y caduca a las **11:59:59 p. m.** en la zona horaria local de cada persona usuaria. Si un título debe salir al aire o caducar a una hora específica, esa hora **debe** incluirse en los valores de inicio/fin de la ventana de licencia en los metadatos de ingesta.

Roku admite dos tipos de designación horaria:

| Tipo         | Comportamiento                                                                                               | Ejemplo                                                                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Relativo** | El contenido entra en la ventana a la hora especificada en **la zona horaria local de cada persona usuaria** | Un estreno el sábado a las 9:00 p. m. está disponible a las 9:00 p. m., hora del este, para las personas usuarias en esa zona horaria, y por separado a las 9:00 p. m., hora del Pacífico, para las de esa zona (es decir, tres horas después en tiempo real) |
| **Absoluto** | El contenido entra en la ventana en **un único momento fijo a nivel mundial**                                | Un nuevo episodio programado para las 9:00 p. m., hora del este (absoluto), pasa a estar disponible para las personas usuarias del Pacífico a las 6:00 p. m., hora local — el mismo instante real                                                             |

### Formato del valor de hora

| Tipo de hora   | Formato                | Ejemplo                |
| -------------- | ---------------------- | ---------------------- |
| Relativo       | `yyyy-mm-ddThh:mm:ss`  | `2019-11-01T21:00:00`  |
| Absoluto (UTC) | `yyyy-mm-ddThh:mm:ssZ` | `2019-11-02T01:00:00Z` |

* **Las horas absolutas deben expresarse en UTC.** En el ejemplo anterior, las 9:00 p. m., hora del este, del 1 de noviembre equivalen a la 1:00 a. m. UTC del 2 de noviembre.
* **Si no se proporciona ninguna hora**, Roku asume un inicio relativo de `12:00:00 a. m.` y un fin relativo de `11:59:59 p. m.`.

***

## Caracteres especiales

Roku utiliza **secciones CDATA** para permitir caracteres especiales (por ejemplo, `! @ # $ % ^ & * ( ) { } | [ ] ; : ' " ? / < >`, así como conjuntos de caracteres extranjeros) dentro de **determinados** valores de nodo en el XML de ingesta. Roku **recomienda encarecidamente** empaquetar dichos datos en secciones CDATA para garantizar una ingesta correcta.

> **Este es un contexto distinto al de las reglas de nomenclatura de archivos.** La [Especificación de entrega de archivos](#) prohíbe la mayoría de estos mismos caracteres en los **nombres de archivo**. Aquí, las reglas aplican a los **valores de los campos de metadatos** (como el texto del título o de la sinopsis) — ambos conjuntos de reglas rigen cosas distintas y no están en conflicto.

**Solo los siguientes nodos admiten secciones CDATA:**

* `title`
* `long_synopsis`
* `short_synopsis`
* `display_name`

**Para cualquier otro nodo** (es decir, cualquier campo que no esté en la lista anterior), ciertos caracteres harán que el documento XML sea ilegible para la plataforma de ingesta de Roku, a menos que se manipulen (escapen) correctamente. Estos caracteres **deben** proporcionarse en su forma de escape:

| Nombre del carácter | Carácter | Forma de escape |
| ------------------- | -------- | --------------- |
| Ampersand           | `&`      | `&amp;`         |
| Signo de menor que  | `<`      | `&lt;`          |
| Signo de mayor que  | `>`      | `&gt;`          |
| Comillas            | `"`      | `&quot;`        |
| Apóstrofo           | `'`      | `&apos;`        |

**Nunca deben utilizarse caracteres especiales en los nombres de archivo** ni en las referencias a nombres de archivo dentro de los metadatos en XML o Excel — consulta las [Pautas de nomenclatura de archivos](#file-naming) para ver la lista completa de caracteres prohibidos específicamente para nombres de archivo.

***

## Formatos de metadatos admitidos

* **XML** es el formato **preferido**.
* Se debe entregar **un archivo XML completo** por **cada** archivo de video de película, clip o episodio de TV entregado.
* Los metadatos **deben** entregarse por Aspera en la **misma ubicación de carpeta** que sus archivos asociados de video, subtítulos e ilustraciones.

| Formato           | Extensión | Codificación | Versión(es) del paquete                                                                                             |
| ----------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| XML _(preferido)_ | `.xml`    | UTF-8        | `clip1.0`, `film5.0`, `tv1.0`, `Cablelabs ADI 1.1` _(esquemas XML adicionales admitidos caso por caso)_             |
| Excel             | `.xlsx`   | —            | Consulta las [Pautas de metadatos en Excel de Roku](#roku-excel-metadata-guidelines-and-templates) y las plantillas |

***

## Glosario

| Término                     | Definición                                                                                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Motor de transformación** | Sistema interno de Roku que normaliza campos de metadatos con distintos nombres provenientes de formatos de empresas socias, para adaptarlos al esquema de ingesta de Roku.                               |
| **Sección CDATA**           | Una construcción de XML (`<![CDATA[ ... ]]>`) que indica a un analizador que trate el contenido incluido como texto literal, lo que permite caracteres especiales sin necesidad de escaparlos.            |
| **Avail / Title ID**        | El identificador de un título declarado en el documento de Avails (licenciamiento/disponibilidad) — debe coincidir con el `asset_id` utilizado en los metadatos de ingesta para vincular ambos registros. |
| **Hora relativa**           | Una hora de disponibilidad que se interpreta en la zona horaria local de cada persona usuaria, de modo que el mismo título sale al aire en distintos momentos reales según la zona horaria.               |
| **Hora absoluta**           | Una hora de disponibilidad fija a un único instante real (expresada en UTC), de modo que el título sale al aire simultáneamente en todo el mundo, sin importar la zona horaria de la persona usuaria.     |
