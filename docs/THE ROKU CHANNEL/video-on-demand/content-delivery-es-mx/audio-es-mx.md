---
title: Audio
excerpt: >-
  Requisitos de códec de audio, configuración de canales y doblaje/audio
  descriptivo sidecar.
deprecated: false
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
## Alcance

Los requisitos de audio de este documento — incluida la configuración de canales, el etiquetado de canales y la coincidencia de idioma/configuración regional — aplican **independientemente del método de entrega**:

* Audio **multiplexado (muxed) dentro del contenedor** del archivo de video, y
* Audio entregado como un **archivo sidecar** independiente del video

Ambas vías de entrega **deben** cumplir con las mismas reglas de configuración y etiquetado de canales descritas a continuación.

***

## Códec de audio y frecuencia de muestreo

* Se **prefiere** el audio **PCM de 16 o 24 bits, a 48 kHz**, con la mayor tasa de bits disponible.
* Se admite el audio **Dolby AC3**.

**Roku prefiere recibir audio 5.1 y estéreo siempre que sea posible.**

***

## Configuración y etiquetado de canales

Todos los canales **deben** estar claramente etiquetados por posición e idioma (el formato de la etiqueta depende del formato del archivo). Esto aplica tanto al audio multiplexado como al sidecar — consulta [Alcance](#scope).

### Sonido envolvente 5.1 + estéreo 2.0 (preferido)

| Canal   | Etiqueta                  |
| ------- | ------------------------- |
| Canal 1 | Frontal izquierdo (L)     |
| Canal 2 | Frontal derecho (R)       |
| Canal 3 | Central (C)               |
| Canal 4 | LFE (Lfe)                 |
| Canal 5 | Envolvente izquierdo (Ls) |
| Canal 6 | Envolvente derecho (Rs)   |
| Canal 7 | Estéreo izquierdo (SL)    |
| Canal 8 | Estéreo derecho (SR)      |

### Solo sonido envolvente 5.1

_Aceptable si no se dispone de 5.1 + estéreo._

| Canal   | Etiqueta                  |
| ------- | ------------------------- |
| Canal 1 | Frontal izquierdo (L)     |
| Canal 2 | Frontal derecho (R)       |
| Canal 3 | Central (C)               |
| Canal 4 | LFE (Lfe)                 |
| Canal 5 | Envolvente izquierdo (Ls) |
| Canal 6 | Envolvente derecho (Rs)   |

### Solo estéreo 2.0

_Aceptable si no se dispone de 5.1 + estéreo ni de solo 5.1 envolvente._

| Canal   | Etiqueta               |
| ------- | ---------------------- |
| Canal 1 | Estéreo izquierdo (SL) |
| Canal 2 | Estéreo derecho (SR)   |

***

## Entregables de audio sidecar

El contenido entregado con un idioma de audio que **no sea el idioma principal del territorio de distribución** debe entregarse con un archivo de doblaje de audio y/o de subtítulos que traduzca el contenido al idioma principal de ese territorio.

* Las pistas de audio localizadas **pueden** multiplexarse en el archivo de video, o entregarse como un único archivo de audio sidecar entrelazado.
* Independientemente del método de entrega, todas las pistas de audio localizadas **deben** entregarse como una **mezcla de audio completa**. Roku **no** admite pistas de doblaje que contengan solo diálogo.
* El audio sidecar **debe** entregarse como un **único archivo entrelazado**. Roku **no** admite archivos discretos de un solo canal.
* El audio sidecar **debe** estar sincronizado con el archivo de video fuente entregado a Roku.
* Roku admite **un archivo de doblaje de audio sidecar por idioma**.
* El audio sidecar **debe** seguir las mismas reglas de configuración y etiquetado de canales definidas en [Configuración y etiquetado de canales](#channel-configuration--labeling) más arriba.

Entrega el audio sidecar con la mayor tasa de bits y frecuencia de muestreo disponibles.

### Formatos de audio sidecar admitidos

| Contenedor                                             | Códecs                     | Extensión |
| ------------------------------------------------------ | -------------------------- | --------- |
| WAV _(preferido)_                                      | PCM<br />GSM               | .wav      |
| MOV<br />(no debe incluir una pista de video)          | AAC<br />MP3<br />PCM      | .mov      |
| MP4 (MPEG-4)<br />(no debe incluir una pista de video) | AAC<br />FLAC              | .mp4      |
| MPEG-1 Layer 3                                         | MP3                        | .mp3      |
| OGA                                                    | FLAC<br />Opus<br />Vorbis | .ogg      |

***

## Audio descriptivo

El audio descriptivo es una pista de audio alternativa para personas con discapacidad visual, conforme a los [requisitos de descripción de audio de la FCC](https://www.fcc.gov/audio-description).

* Roku **prefiere firmemente** recibir pistas de audio descriptivo siempre que estén disponibles.
* Las entregas de audio descriptivo **deben** seguir los mismos requisitos descritos en [Entregables de audio sidecar](#sidecar-audio-deliverables) más arriba.
* El audio descriptivo **debe** proporcionarse en el mismo idioma y configuración regional que su pista de audio estándar (no descriptiva) correspondiente para ese idioma.
* **El código de idioma de audio de la pista de audio descriptivo debe coincidir exactamente con el código de idioma de audio de su pista de audio estándar correspondiente.** Por ejemplo, una pista descriptiva emparejada con una pista estándar codificada como `en-US` también debe codificarse como `en-US` — no como `en`, `en-GB`, ni ninguna otra variante.

***

## Consejos para el diseño de los canales de audio

Si los archivos de video no pueden crearse con las etiquetas de canal de audio adecuadas incrustadas, se **debe proporcionar un consejo de diseño de audio en los metadatos** del archivo de video entregado. Esto aplica únicamente al audio multiplexado cuando el etiquetado dentro del archivo no es posible; no reemplaza el requisito de etiquetado para los archivos sidecar.

| Descriptor           | Definición                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `stereoOnly`         | Solo audio en estéreo de 2 canales. Puede entregarse en una sola pista o en 2 pistas discretas.          |
| `surroundOnly`       | Solo audio envolvente 5.1 de 6 canales. Puede entregarse en una sola pista o en 6 pistas discretas.      |
| `stereoPlusSurround` | Audio de 8 canales, con estéreo en los canales 1–2, seguido de sonido envolvente 5.1 en los canales 3–8. |
| `surroundPlusStereo` | Audio de 8 canales, con sonido envolvente 5.1 en los canales 1–6, seguido de estéreo en los canales 7–8. |

***

## Glosario

| Término                      | Definición                                                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Muxed / Multiplexado**     | Audio combinado dentro del mismo contenedor de archivo que el video, en lugar de entregarse por separado.                               |
| **Archivo sidecar**          | Un archivo de audio o subtítulos entregado junto al (no incrustado en el) archivo de video, vinculado a este mediante los metadatos.    |
| **Entrelazado**              | Múltiples canales de audio combinados en un único archivo, a diferencia de archivos discretos independientes por canal.                 |
| **Canal discreto**           | Un canal de audio individual entregado como su propio archivo/pista independiente, en lugar de combinarse con otros.                    |
| **LFE**                      | Canal de efectos de baja frecuencia (Low-Frequency Effects) — el ".1" en el sonido envolvente 5.1, normalmente dirigido a un subwoofer. |
| **Mezcla de audio completa** | Una pista de audio mezclada de forma completa (diálogo, música, efectos), a diferencia de una pista parcial o de solo diálogo.          |
| **Código de idioma**         | Un código estandarizado que identifica el idioma y, opcionalmente, la configuración regional (por ejemplo, `en-US`, `es-MX`).           |
