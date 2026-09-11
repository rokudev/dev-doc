---
title: Subtítulos descriptivos y subtítulos
excerpt: >-
  Requisitos para subtítulos descriptivos, subtítulos completos y subtítulos
  narrativos forzados.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Roku admite tres tipos distintos de pistas de texto: **Subtítulos descriptivos (SDH)**, **Subtítulos completos** y **Subtítulos narrativos forzados**. Aunque visualmente son similares para quien los ve, cumplen propósitos distintos y siguen reglas diferentes.

**Restricción crítica:** el reproductor de Roku muestra **solo una pista de texto a la vez**. Esto tiene dos consecuencias directas que determinan el resto de este documento:

* Cualquier pista de subtítulos descriptivos (SDH) o subtítulos completos **debe** contener una transcripción/traducción completa de todo el diálogo narrativamente importante y del texto en pantalla. Quien vea el contenido nunca verá dos pistas superpuestas.
* El contenido de narrativa forzada **también debe duplicarse dentro** de cualquier pista de subtítulos descriptivos (SDH) o subtítulos completos, ya que activar una de esas pistas suprimirá por completo la pista de narrativa forzada.

***

## Comparación de tipos de pista

|                                       | Subtítulos descriptivos / SDH                                                                                                                                                       | Subtítulos completos                                                                                                                                                                                  | Subtítulos narrativos forzados                                                                                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Propósito**                         | Accesibilidad para personas sordas o con dificultades auditivas                                                                                                                     | Localización: traduce el diálogo/texto para quienes no comprenden el idioma del audio                                                                                                                 | Localización para momentos específicos ininteligibles para quien ve el contenido (fragmentos en idioma extranjero, texto en pantalla ilegible, audio inaudible) |
| **Activación por la persona usuaria** | Se puede activar/desactivar                                                                                                                                                         | Se puede activar/desactivar                                                                                                                                                                           | **No se puede** activar/desactivar — se muestra automáticamente                                                                                                 |
| **Emparejamiento de idioma/audio**    | Debe coincidir con el idioma y la configuración regional de su pista de audio correspondiente; no está disponible si no se entrega una pista de audio con el idioma correspondiente | Disponible sin importar qué pista(s) de audio se entreguen                                                                                                                                            | Vinculada a la pista de audio que haya seleccionado quien ve el contenido; se muestra automáticamente cuando esa pista incluye contenido ininteligible          |
| **Contenido incluido**                | Transcripción completa del diálogo + efectos de sonido/indicaciones musicales/letras + todo el contenido de narrativa forzada                                                       | Traducción completa del diálogo/texto narrativamente importante; no describe efectos de sonido ni indicaciones musicales (las letras de canciones se traducen solo si son narrativamente importantes) | Solo los momentos específicos ininteligibles — no una transcripción completa                                                                                    |
| **Regulatorio**                       | Puede ser exigido por agencias regulatorias en determinados territorios                                                                                                             | —                                                                                                                                                                                                     | —                                                                                                                                                               |

***

## Subtítulos narrativos forzados

Las narrativas forzadas traducen o transmiten información que quien ve el contenido, de otro modo, no captaría, incluyendo:

* Diálogo hablado en un idioma distinto al de la pista de audio seleccionada por quien ve el contenido
* Texto en pantalla en un idioma distinto al de la pista de audio seleccionada por quien ve el contenido
* Audio inaudible o difícil de escuchar (por ejemplo, escenas ruidosas, grabaciones de mala calidad)

**Importante:** la _pista_ de narrativa forzada viaja junto con la pista de audio que seleccione quien ve el contenido — no es, en sí misma, una opción de idioma de audio independiente. Su _contenido_, sin embargo, cubre específicamente los momentos dentro de esa pista de audio en los que el diálogo o el texto aparece en un idioma distinto, o es de otro modo ininteligible.

Debido a que el reproductor de Roku muestra solo una pista de texto a la vez, activar una pista de subtítulos descriptivos (SDH) o subtítulos completos suprimirá la pista de narrativa forzada. Por esta razón, **las pistas de subtítulos descriptivos (SDH) y de subtítulos completos deben incluir todo el contenido de narrativa forzada**, para que quien ve el contenido nunca pierda esa información al activar los subtítulos descriptivos o los subtítulos.

***

## Subtítulos descriptivos / SDH

_También conocidos como: subtítulos para personas sordas o con dificultades auditivas (SDH)._

Roku **prefiere** recibir los subtítulos descriptivos (SDH) de todo el contenido.

### Requisitos regulatorios (EE. UU.)

Para el contenido destinado a EE. UU., Roku se adhiere a las **normas de subtitulado descriptivo de la FCC para la programación de video por internet**: [https://www.fcc.gov/consumers/guides/captioning-internet-video-programming](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming)

* El contenido que la FCC **exige** que incluya subtítulos descriptivos **debe** entregarse con SDH, ajustados y sincronizados con el programa.
* El contenido **exento** del requisito **debe** incluir un número de código de exención válido en los metadatos.

**Códigos de exención:**

| Código | Definición                                                                                                                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | El contenido nunca se emitió por televisión en Estados Unidos.                                                                                            |
| 2      | El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.                                                                 |
| 3      | El contenido no se ha emitido por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.                             |
| 4      | El contenido no consiste en programación de video de larga duración.                                                                                      |
| 5      | El contenido no pertenece a una categoría de programación en línea que requiere subtítulos descriptivos según las normas de la FCC (47 C.F.R. § 79.4(b)). |
| 6      | La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.                                |

Para el contenido destinado a territorios fuera de EE. UU., Roku cumple con los requisitos de cada territorio.

### Método de entrega

Los subtítulos descriptivos (SDH) **pueden** proporcionarse como:

* **EIA-608/CEA-708** incrustados en el flujo del archivo de video, o
* Un archivo **sidecar** de subtítulos descriptivos/SDH

Roku **prefiere** un archivo sidecar legible por humanos (`.ttml`, `.dfxp`, `.vtt` o `.srt`).

### Reglas de entrega

* Los subtítulos descriptivos/SDH sidecar **deben** estar sincronizados con la hora de código de tiempo `00:00:00:00` — el codificador de Roku **no** respeta el código de tiempo incrustado en el archivo de video.
* **No** proporciones un archivo vacío (un archivo sin texto) como entregable de subtítulos descriptivos/SDH sidecar.
* Los datos de posición de TTML y WebVTT **sí** se admiten y se respetarán tal como se definan en el archivo.
* Los archivos de video de QuickTime **deben** ir acompañados de un archivo sidecar de subtítulos descriptivos — Roku **no** admite la pista de texto de QuickTime.
* La compatibilidad de estilo de texto se limita a: etiquetas en negrita (`<b>`) y cursiva (`<i>`), color de texto y posicionamiento de texto. _(Esto aplica de manera idéntica a los Subtítulos completos — consulta&#x20;_[Compatibilidad de estilo de texto](#text-styling-support)_.)_

### Formatos admitidos

| Nombre del formato                          | Datos de posición | Datos de estilo | Extensión          | Codificación | Tipo de entrega             | Idiomas                                                                |
| ------------------------------------------- | ----------------- | --------------- | ------------------ | ------------ | --------------------------- | ---------------------------------------------------------------------- |
| Timed Text Markup Language (TTML)           | Sí                | Sí              | `.ttml`            | UTF-8        | Sidecar                     | Sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Web Video Text Track (WebVTT)               | Sí                | Sí              | `.vtt` o `.webvtt` | UTF-8        | Sidecar                     | Sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Distribution Format Exchange Profile (DFXP) | No                | No              | `.dfxp`            | UTF-8        | Sidecar                     | Sigue el idioma de audio del archivo de video o del archivo de doblaje |
| EBU Subtitle Data Exchange Format (STL)     | No                | No              | `.stl`             | UTF-8        | Sidecar                     | Sigue el idioma de audio del archivo de video o del archivo de doblaje |
| SubRip Text (SRT)                           | No                | No              | `.srt`             | UTF-8        | Sidecar                     | Sigue el idioma de audio del archivo de video o del archivo de doblaje |
| EIA-608/CEA-708                             | No                | No              | n/a                | n/a          | Incrustado en el flujo MPEG | Incrustado en el archivo de video                                      |

> **Nota sobre el idioma de CC/SDH:** debido a que los subtítulos descriptivos/SDH son un complemento de accesibilidad para una pista de audio _específica_, su idioma simplemente sigue la pista de audio (principal o de doblaje) que acompañan — no requieren una declaración de código de idioma independiente, como sí la requieren los Subtítulos completos (ver más abajo).

#### Formato heredado (admitido, no preferido)

| Nombre del formato                                                         | Datos de posición | Datos de estilo | Extensión | Codificación | Tipo de entrega | Idiomas                                                                |
| -------------------------------------------------------------------------- | ----------------- | --------------- | --------- | ------------ | --------------- | ---------------------------------------------------------------------- |
| ~~SCC~~ _(heredado — usa un formato de los anteriores cuando sea posible)_ | No                | No              | `.scc`    | ASCII        | Sidecar         | Sigue el idioma de audio del archivo de video o del archivo de doblaje |

***

## Subtítulos completos

El contenido entregado con un idioma de audio que no sea el principal del territorio de distribución **debe** entregarse con un doblaje de audio y/o un archivo de subtítulos que traduzca el contenido al idioma principal de ese territorio. (Este es el mismo concepto descrito en [Comparación de tipos de pista](#track-types-compared) más arriba.)

### Reglas de entrega

* Los subtítulos **NO deben** grabarse (incrustarse de forma permanente) en el video.
* Roku **prefiere** un archivo sidecar legible por humanos (`.ttml`, `.dfxp`, `.vtt` o `.srt`).
* Los subtítulos sidecar **deben** estar sincronizados con la hora de código de tiempo `00:00:00:00` — el codificador de Roku **no** respeta el código de tiempo incrustado en el archivo de video.
* **No** proporciones un archivo vacío (un archivo sin texto) como entregable de subtítulos sidecar.
* Los datos de posición de TTML y WebVTT **sí** se admiten y se respetarán tal como se definan en el archivo.

### Compatibilidad de estilo de texto

Tanto los Subtítulos descriptivos/SDH como los Subtítulos completos se limitan a la misma compatibilidad de estilo:

* Etiquetas en negrita (`<b>`) y cursiva (`<i>`)
* Color de texto
* Posicionamiento de texto

### Formatos admitidos

| Nombre del formato                          | Datos de posición | Datos de estilo | Extensión          | Codificación | Tipo de entrega | Idiomas                                                                                                          |
| ------------------------------------------- | ----------------- | --------------- | ------------------ | ------------ | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Timed Text Markup Language (TTML)           | Sí                | Sí              | `.ttml`            | UTF-8        | Sidecar         | Debe ajustarse a un [código de idioma](#language-codes) admitido; incluye el código de región cuando sea posible |
| Web Video Text Track (WebVTT)               | Sí                | Sí              | `.vtt` o `.webvtt` | UTF-8        | Sidecar         | Debe ajustarse a un [código de idioma](#language-codes) admitido; incluye el código de región cuando sea posible |
| Distribution Format Exchange Profile (DFXP) | No                | No              | `.dfxp`            | UTF-8        | Sidecar         | Debe ajustarse a un [código de idioma](#language-codes) admitido; incluye el código de región cuando sea posible |
| EBU Subtitle Data Exchange Format (STL)     | No                | No              | `.stl`             | UTF-8        | Sidecar         | Debe ajustarse a un [código de idioma](#language-codes) admitido; incluye el código de región cuando sea posible |
| SubRip Text (SRT)                           | No                | No              | `.srt`             | UTF-8        | Sidecar         | Debe ajustarse a un [código de idioma](#language-codes) admitido; incluye el código de región cuando sea posible |

> **Nota sobre el idioma de los Subtítulos:** a diferencia de CC/SDH (que simplemente sigue su pista de audio correspondiente), los Subtítulos completos se etiquetan de forma independiente por idioma, ya que un mismo título puede llevar pistas de subtítulos en muchos idiomas, sin importar qué pistas de audio se entreguen.

***

## Glosario

| Término                             | Definición                                                                                                                                                                                                                                                     |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SDH**                             | Subtítulos para personas sordas o con dificultades auditivas — funcionalmente idénticos a los subtítulos descriptivos en esta especificación.                                                                                                                  |
| **EIA-608/CEA-708**                 | Estándares de subtitulado de transmisión incrustados directamente en el flujo de video (in-stream), a diferencia de un archivo sidecar.                                                                                                                        |
| **Narrativa forzada**               | Una pista de texto que no se puede activar/desactivar y que se muestra únicamente para momentos específicos ininteligibles (diálogo en idioma extranjero, texto ilegible, audio inaudible) dentro de la pista de audio seleccionada por quien ve el contenido. |
| **Subtítulos grabados/incrustados** | Texto de subtítulos renderizado de forma permanente dentro de la imagen del video, en lugar de entregarse como una pista independiente y activable. No se permite para los Subtítulos completos.                                                               |
| **Ajustados y sincronizados**       | Subtítulos que han sido alineados en el tiempo y verificados para coincidir exactamente con el corte final del programa.                                                                                                                                       |
| **Datos de posición**               | Información dentro de un archivo de subtítulos que especifica en qué parte de la pantalla debe aparecer el texto, en lugar de usar una posición fija predeterminada.                                                                                           |
