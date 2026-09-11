---
title: Actualizaciones de metadatos (MDU) y reemplazos de archivos
excerpt: Cómo actualizar metadatos o reemplazar/agregar archivos después de la entrega.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Las actualizaciones son **automatizadas** y pueden enviarse siempre que sea necesario modificar los metadatos o los archivos de activos de un programa **ya entregado** a Roku Channel.

Toda actualización de metadatos y/o reemplazo de archivos **debe** incluir lo siguiente, exactamente como se entregó originalmente, para que la actualización se procese con éxito:

* **Provider**
* **Asset ID**
* **Content Type**

**El control de versiones lo gestiona por completo el sistema de Roku** — no es necesario proporcionar información de versión en los propios metadatos.

> **Nota — dos significados distintos de "versionado":** esta regla se refiere al versionado interno de _registros_ de Roku (no necesitas indicarle a Roku "esta es la versión 3 de los metadatos"). Es independiente de la regla de nomenclatura de archivos en [Reemplazos y adiciones de archivos](#file-replacements-and-additions) más abajo, que exige dar al **propio archivo de reemplazo** un nombre único (por ejemplo, un sufijo `_v2`). Ambas reglas aplican al mismo tiempo y no entran en conflicto — una trata sobre registros de metadatos, la otra sobre nombres de archivo.

### Campos admitidos para la actualización automatizada de metadatos (MDU)

Roku actualmente admite la actualización de los siguientes campos a través de la MDU automatizada:

* ID de TMS
* ID de EIDR
* Títulos (principales y localizados)
* Descripciones breves (principales y localizadas)
* Descripciones extensas (principales y localizadas)
* Fecha de lanzamiento
* Títulos de series
* Número de temporada
* Número de episodio
* Idioma (e idiomas localizados)
* Períodos de disponibilidad
* Tipos de licencias
* Países
* Géneros
* Etiquetas de proveedores
* Clasificación de contenido (sistema y clasificación)
* Créditos
* Cortes publicitarios
* Puntos de referencia

***

## Actualización de metadatos (MDU)

Las actualizaciones de metadatos se procesan de la misma manera que el contenido nuevo de ingesta. Para actualizar **únicamente** los metadatos (sin cambios de archivo), sigue los requisitos a continuación.

### Requisitos

* Las actualizaciones de metadatos **deben** entregarse en el **mismo formato** que los metadatos de la ingesta original.
* Las actualizaciones de metadatos **deben** incluir **exactamente el mismo Asset ID** utilizado en la ingesta original. _(¿Necesitas un listado completo de los Asset ID tal como existen en el sistema de Roku? Contacta a [contentoperations@roku.com](mailto:contentoperations@roku.com).)_
* **Deben eliminarse todas las referencias a nombres de archivo** de una actualización de solo metadatos. Esto incluye:
  * Nombre de archivo de video fuente
  * Nombre de archivo de subtítulos descriptivos
  * Nombre de archivo de subtítulos
  * Nombre de archivo de doblaje de audio
  * Nombres de archivo de arte clave, fondo y/o portada

### Grupos de campos

Algunos campos deben actualizarse en conjunto, en grupos completos — **deben proporcionarse todos los campos obligatorios de un grupo**, o la actualización no se procesará.

**Grupo de metadatos:**

| Campo               | ¿Obligatorio? |
| ------------------- | ------------- |
| Idioma              | Obligatorio   |
| Título              | Obligatorio   |
| Descripción breve   | Obligatorio   |
| Descripción extensa | **Opcional**  |

**Grupo de disponibilidad:**

| Campo                 | ¿Obligatorio? |
| --------------------- | ------------- |
| Tipo de licencia      | Obligatorio   |
| País                  | Obligatorio   |
| Fecha de inicio       | Obligatorio   |
| Fecha de finalización | Obligatorio   |

### Procedimiento

1. Carga la actualización de metadatos en la carpeta `/prod` de Aspera.

> Si la actualización no se refleja en Roku Channel dentro de un plazo de **24 horas**, contacta a [contentoperations@roku.com](mailto:contentoperations@roku.com).

***

## Reemplazos y adiciones de archivos

Los reemplazos y las adiciones de archivos se procesan de la misma manera que el contenido nuevo de ingesta.

* Un **reemplazo de archivo** reemplaza un archivo que actualmente existe en la biblioteca de Roku Channel.
* Una **adición de archivo** agrega un nuevo archivo a un registro existente — por ejemplo, agregar subtítulos o doblajes localizados a un título que antes no los tenía.

### Requisitos

* Los reemplazos/adiciones de archivos **deben** entregarse en el **mismo formato** que los metadatos de la ingesta original.
* Los reemplazos/adiciones de archivos **deben** incluir **exactamente el mismo Asset ID** utilizado en la ingesta original. _(¿Necesitas un listado completo de Asset ID? Contacta a [contentoperations@roku.com](mailto:contentoperations@roku.com).)_
* Los archivos de reemplazo **deben** entregarse con un **nombre único**, tanto en los metadatos como en el propio archivo, para que la actualización se procese correctamente. Agregar un sufijo de versión (`_v2`, `_v3`, etc.) es suficiente — por ejemplo, `movie_title_v2.mov`.
  * _Los reemplazos de archivos de MovieLabs pueden usar el nodo&#x20;_`md5`_&#x20;en lugar de un nombre de archivo versionado._
* Los archivos de reemplazo **deben** entregarse en la **misma carpeta exacta** que la entrega original.
* **Solo** deben aparecer en el archivo de metadatos las referencias a los nombres de los archivos que realmente se estén reemplazando o agregando. Los archivos que no se reemplacen o agreguen **no** deben entregarse ni referenciarse.
* Si se reemplaza el archivo de video fuente **y** su duración cambia, los archivos relacionados (subtítulos descriptivos, subtítulos, doblajes de audio) **deberían** reemplazarse también, para mantenerse sincronizados.
* Los reemplazos de archivos **requieren** que se proporcionen valores de idioma para actualizarse correctamente.

### Archivos admitidos para reemplazo/adición automatizados

* Archivo de video
* Archivo de arte clave de la serie
* Archivo de portada de la serie
* Archivo de imagen de fondo de la serie
* Archivo de imagen del episodio
* Archivo de arte clave de la película
* Archivo de portada de la película
* Archivo de imagen de fondo de la película
* Archivo de arte clave de formato corto
* Archivo de subtítulos descriptivos
* Archivo de subtítulos completos
* Archivo de subtítulos narrativos forzados
* Archivo de audio sidecar (doblajes de audio y audio descriptivo)

### Procedimiento

1. Carga los metadatos de reemplazo o adición de archivos en la carpeta `/prod` de Aspera.

***

## Eliminación de contenido

Si los derechos cambian después de que el contenido se haya entregado a Roku, y es necesario retirarlo de Roku Channel — ya sea de forma inmediata o en una fecha futura programada — la **fecha de finalización de la disponibilidad** puede modificarse mediante una actualización de metadatos, siguiendo el proceso de [Actualización de metadatos (MDU)](#metadata-update-mdu) descrito arriba.

* **Deben proporcionarse actualizaciones explícitas para cada territorio** del que deba retirarse el contenido — un retiro en un territorio no aplica automáticamente en otros.
* **Ten en cuenta:** las fechas de finalización proporcionadas sin un valor de hora explícito caducarán a las **11:59:59 p. m.** de esa fecha (hora local), según el comportamiento predeterminado descrito en la sección de [Períodos de disponibilidad](#availability-windows) de la Descripción general de metadatos.

***

## Glosario

| Término             | Definición                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MDU**             | Metadata Update (actualización de metadatos): una actualización automatizada de los campos de metadatos de un título, sin modificar ningún archivo entregado.                               |
| **Asset ID**        | El identificador inmutable, asignado por la empresa socia, para una pieza de contenido; obligatorio, sin cambios, en cada actualización de ese contenido.                                   |
| **Grupo de campos** | Un conjunto de campos que deben proporcionarse todos juntos para que una actualización a ese grupo se procese correctamente — proporcionar solo algunos campos de un grupo no se procesará. |
| **Nodo md5**        | Un elemento de MMC/MEC de MovieLabs que puede identificar un archivo de reemplazo mediante un checksum, en lugar de depender de un nombre de archivo versionado.                            |
