---
title: Video
excerpt: >-
  Requisitos de archivo, formato, resolución y edición de video para todas las
  entregas.
deprecated: false
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
## Política de idioma y versión

Roku admite **un solo archivo de video por título**. Cuando un título requiera compatibilidad con idiomas adicionales, dicha compatibilidad **debe** entregarse como:

* Archivos de subtítulos sidecar, y/o
* Pistas de audio adicionales

asociados al único activo de video — **no** como archivos de video independientes.

**Las versiones de video independientes producidas en idiomas alternativos** (por ejemplo, archivos de video doblados o reeditados por región) **no se admiten** como activos entregables por separado para un título determinado, sin importar el territorio. Solo se ingerirá un video por título en todos los territorios. Cualquier requisito de idioma adicional debe expresarse mediante elementos de audio o subtítulos sidecar vinculados a ese único archivo de video.

> **Excepción:** las empresas socias que requieran la entrega de versiones de video en idiomas alternativos (por ejemplo, versiones con subtítulos abiertos o subtítulos incrustados) deben coordinar directamente con Roku Content Operations. Estas entregas quedan fuera de la compatibilidad de ingesta estándar de EMA Avails/MovieLabs MEC-MMC y pueden requerir un registro de título independiente o un acuerdo de entrega fuera de esta especificación.

***

## Contenido del programa y edición

Todo el video entregado a Roku **debe** contener **solo el programa completo**:

* Sin barras ni tonos ni pizarras al inicio del programa
* Sin video sin texto tras la finalización del programa
* No más de 2 segundos de negro al inicio del programa (**negro inicial**)
* No más de 2 segundos de negro tras la finalización del programa (**negro final**)
* Sin advertencias del FBI ni tarjetas de la MPAA
* Sin material promocional que haga referencia a fechas de estreno en cines, video doméstico o streaming

Los archivos de video **deberían** tener **muy poco texto** — es decir, pueden conservarse los créditos iniciales y finales, pero deben eliminarse todos los subtítulos de los diálogos en idioma extranjero. _(También conocido como "con texto sin subtítulos" o "sin texto con texto principal, final y gráfico".)_

***

## Publicidad y negros comerciales

* **No** deben incluirse anuncios dentro del video. Todos los puntos de inserción de anuncios para el contenido financiado con anuncios se proporcionan por separado en el archivo de metadatos, según las [pautas de la Política de anuncios de Roku](#ad-policy).
* Pueden incluirse **negros comerciales** (fotogramas en negro en los puntos internos de corte publicitario, distintos del negro inicial/final mencionado arriba), siempre que ninguno dure más de 2 segundos.
* Los negros comerciales son aceptables en el contenido de TV por episodios, pero no se esperan en el contenido de películas.

***

## Formato de entrega de archivo

* El video **debe** entregarse como un **único archivo sin interrupciones**.
* **No** entregues archivos fragmentados (es decir, divididos en segmentos en los puntos de corte publicitario).
* Las llamadas a la acción (CTA) o los enlaces a plataformas/sitios externos (incluidos códigos QR) **no están permitidos** y deben eliminarse antes de la entrega.
* Se **prefieren archivos de nivel intermedio (mezzanine) de alta calidad** — debe utilizarse la mayor tasa de bits y resolución disponibles.

***

## Relación de aspecto y cuadro

* Se **prefiere la presentación de cuadro completo (relación de aspecto de 1.78)**, siempre que esté disponible.
* Se permite el uso del formato letterboxed en 16:9, pero **debe reducirse al mínimo**.
* El contenido de video HD **debe** entregarse en un contenedor 16:9.
* El contenido SD en 16:9 **no debe** entregarse en un contenedor 4:3 con letterboxing (es decir, no apliques pillarbox a contenido 16:9 dentro de un cuadro 4:3).

***

## Velocidad de fotogramas del video

Roku admite una gran variedad de velocidades de fotogramas y tipos de escaneo. Todos los archivos de video **deben** entregarse con su **velocidad de fotogramas y tipo de escaneo nativos y originales** — sin conversión de velocidad de fotogramas.

***

## Resolución de video

| Tipo  | Ancho | Alto | Relación de aspecto de pixeles   |
| ----- | ----- | ---- | -------------------------------- |
| SD    | 720   | 480  | 4:3 o 16:9 (pixeles anamórficos) |
| SD    | 640   | 480  | 1:1 (pixeles cuadrados)          |
| SD    | 853   | 480  | 1:1 (pixeles cuadrados)          |
| SD    | 720   | 576  | 4:3 o 16:9 (pixeles anamórficos) |
| SD    | 768   | 576  | 1:1 (pixeles cuadrados)          |
| SD    | 1024  | 576  | 1:1 (pixeles cuadrados)          |
| HD    | 1280  | 720  | 1:1 (pixeles cuadrados)          |
| FHD   | 1920  | 1080 | 1:1 (pixeles cuadrados)          |
| UHD\* | 3840  | 2160 | 1:1 (pixeles cuadrados)          |

\* UHD se admite únicamente como **resolución de entrada**. Actualmente, Roku no codifica ni muestra video en 4K UHD en Roku Channel.

***

## Formatos de video

| Nombre        | Códecs                                                                                                     | Extensión | Tasa de bits                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------- |
| Apple® ProRes | ProRes 444 (todos los perfiles)<br />ProRes 4444 (todos los perfiles)<br />ProRes 422 (todos los perfiles) | .mov      | 50 Mbps o más                                |
| XDCam         |                                                                                                            | .mxf      | 50 Mbps o más                                |
| MPEG-2        | MPEG-2                                                                                                     | .ts, .mpg | HD = 15 Mbps o más<br />SD = 3.75 Mbps o más |
| MPEG-4        | H.264                                                                                                      | .mp4      | 5 Mbps o más                                 |

***

## Glosario

| Término                                | Definición                                                                                                                                         |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Archivo sidecar**                    | Un archivo de subtítulos o audio entregado junto al (no incrustado en el) archivo de video, vinculado a este mediante los metadatos.               |
| **Archivo mezzanine**                  | Un archivo maestro de alta calidad, típicamente casi sin pérdida, utilizado como fuente para una codificación posterior.                           |
| **Píxeles anamórficos**                | Píxeles no cuadrados utilizados para ajustar una imagen panorámica a un tamaño de cuadro estándar.                                                 |
| **Píxeles cuadrados**                  | Píxeles con una relación de aspecto de 1:1, comunes en el video digital moderno.                                                                   |
| **Fragmentado (hard-parted)**          | Un archivo de video dividido físicamente en varios segmentos en los puntos de corte publicitario, en lugar de entregarse como un archivo continuo. |
| **Con muy poco texto (semi-textless)** | Video con los créditos iniciales/finales intactos, pero sin los subtítulos de diálogos en idioma extranjero.                                       |
