---
title: Metadatos de Excel
excerpt: >-
  Reglas del libro de trabajo para los metadatos de Excel: formato, estructura y
  tipo de archivo.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Los metadatos de Excel **solo se aceptarán** si se entregan utilizando una de las plantillas aprobadas por Roku que se indican a continuación. Esta página cubre las reglas que aplican a las tres plantillas; el detalle a nivel de campo para cada tipo de contenido se encuentra en su propia subpágina:

* [**Excel de Roku: Película**](https://developer.roku.com/dev/update/docs/excel-film-metadata-fields)
* [**Excel de Roku: TV**](https://developer.roku.com/dev/update/docs/excel-episodic-tv-metadata-fields)
* [**Excel de Roku: Clip**](https://developer.roku.com/dev/update/docs/excel-shortform-clip-metadata-fields)

***

## Plantillas

| Metadatos de Excel                             | Enlace de descarga                                        |
| ---------------------------------------------- | --------------------------------------------------------- |
| Plantilla de metadatos de Excel para películas | [Descargar aquí](https://go.roku.com/film-excel-template) |
| Plantilla de metadatos de Excel para TV        | [Descargar aquí](https://go.roku.com/tv-excel-template)   |
| Plantilla de metadatos de Excel para clips     | [Descargar aquí](https://go.roku.com/clip-excel-template) |

***

## Reglas para completar la plantilla

La plantilla de metadatos de Excel de Roku **debe** enviarse con todos los campos obligatorios completos.

* La **fila 2** de cada plantilla contiene indicaciones que resaltan las celdas obligatorias y cualquier formato especial necesario — consulta estas indicaciones al completar la plantilla.
* **No elimines** la fila de leyenda/indicaciones (fila 2).

***

## Requisitos de formato

* Las fechas **deben** proporcionarse en formato `AAAA-MM-DD`. (Cambia el formato de la celda a **"Texto"** si Excel está convirtiendo automáticamente el valor.)
* Los nombres de archivo **no deben** contener [caracteres especiales ni espacios](#special-characters).

***

## Reglas de estructura del libro de trabajo

* **No** enlaces a datos externos ni a otros libros de Excel — todos los datos **deben** estar autocontenidos dentro del libro entregado a Roku.
* **No** agregues hojas adicionales al libro.
* **No** agregues columnas adicionales al libro.
* Cualquier fórmula utilizada **debe** convertirse a texto plano antes del envío. **⚠️ Incluir una fórmula activa provocará el rechazo de las entregas y retrasos o fallos en el procesamiento.**

***

## Reglas de población de datos

* **No** proporciones un valor de `"N/A"` ni `"n/a"` en ningún lugar del libro.
  * Las celdas obligatorias **deben** contener datos válidos.
  * Las celdas opcionales **pueden** dejarse en blanco.

***

## Múltiples entradas y límites de volumen

Se pueden proporcionar múltiples entradas del **mismo tipo de contenido** en un solo libro de Excel (por ejemplo, varias películas en un libro de Película, o varios episodios en un libro de TV) — dado que cada tipo de contenido tiene su propia plantilla dedicada, un solo libro no está pensado para combinar filas de Película, TV y Clip.

* **Cada fila** representa una **experiencia lingüística** única de un episodio/película/clip.
* **⚠️ No dejes una fila en blanco entre las entradas.** El sistema de Roku **dará por terminado el procesamiento en la primera fila vacía** — cualquier contenido después de una fila en blanco no se procesará, sin previo aviso.
* **No incluyas más de 900 filas** en una sola hoja.

***

## Formato de archivo y exportación

Roku acepta `.xlsx` y `.csv` — **no se admite** `.xls`.

* Si exportas desde **Microsoft Excel**, guarda como `.xlsx`.
* Si utilizas un programa de hojas de cálculo distinto (uno que no genere un archivo `.xlsx` válido), exporta como `.csv` en su lugar.
