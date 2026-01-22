---
title: "Especificaciones para la ingesta"
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

# Especificaciones para la ingesta

A continuación, encontrarás una lista completa de los requisitos de formato para los activos multimedia y metadatos de las empresas socias, incluidas las plantillas de archivo y las pautas de entrega. La plataforma de ingesta de Roku está totalmente automatizada y el pleno cumplimiento de esta especificación garantizará el procesamiento puntual y sin errores del contenido para su distribución en Roku Channel. Si fuera necesario realizar algún cambio en el flujo de trabajo establecido durante la incorporación, avisa a un representante de Roku lo antes posible para organizar cualquier prueba o configuración nueva. Roku espera que el contenido y los metadatos se entreguen de la manera acordada durante la fase de incorporación y prueba. Asegúrate de que el conocimiento sobre las entregas se transfiera al nuevo personal en caso de que se actualicen o cambien los equipos.

### MovieLabs

Como alternativa a esta especificación, Roku Channel admite la entrega de contenido a través de la especificación de MovieLabs.

* **MMC y MEC:** el servicio MovieLabs de Roku Channel se desarrolló con la versión 2.9 de MEC y la versión 1.10 de MMC, tal y como se define en el sitio web de MovieLabs: [https://www.movielabs.com/md/](https://www.movielabs.com/md/)
* **EMA Avails:** Roku Channel admite la última versión de la [especificación de EMA](https://movielabs.com/md/avails/) a través del archivo entregable en formato xlsx

Roku prefiere los entregables de MovieLabs de todas las empresas socias de suscripción prémium (SVOD). Consulta los detalles adicionales de entrega de MovieLabs específicos para Roku Channel [aquí](#entrega-de-contenido-de-movielabs)

## Políticas de contenido de Roku

### Política de anuncios

Roku mostrará hasta 8 minutos de anuncios por hora de visualización. La política de anuncios de Roku está sujeta a cambios.

#### Contenido financiado con anuncios en Roku Channel

Roku Channel busca contenido financiado con anuncios que sea adecuado para nuestras personas usuarias y anunciantes; por ejemplo, Roku Channel no quiere contenido financiado con anuncios con desnudez excesiva o violencia extrema o gráfica.  Utiliza el sentido común a la hora de compartir contenido. Si un activo te genera dudas, busca alguna opción alternativa para compartir. Nos reservamos el derecho a eliminar o rechazar cualquier contenido que consideremos inadecuado.

#### Cortes publicitarios

Los códigos de tiempo de los cortes publicitarios se deben entregar en conformidad con la Política de anuncios de Roku en los nodos adBreak de los metadatos de la película, el episodio o el clip para activar los cortes publicitarios durante la reproducción en la plataforma. Los adBreaks deben proporcionarse con una precisión de milisegundos. Convierte cualquier valor de velocidad de fotogramas a su equivalente en milisegundos. Recomendamos incluir los adBreaks en los metadatos de ingesta, ya que así se acelerará el proceso de control de calidad. Todos los datos de adBreak deben suministrarse como HH:MM:SS.sss (por ejemplo, 01:23:45.678).

##### Política de anuncios en películas

- No se deben incluir adBreaks durante los 10 primeros minutos de reproducción.
- No se debe incluir ningún adBreak previo al video: 00:00:00.000.
- Los puntos de referencia del adBreak deben proporcionarse en las pausas naturales de la escena o en las transiciones a negro.
- No debe haber menos de 10 minutos entre cada adBreak.
- No se admiten adBreaks a menos de 10 minutos de los créditos finales.

##### Política de anuncios en episodios de series

Contenido con una duración mayor a 15 minutos:

- No se deben incluir adBreaks durante los primeros 5 minutos de reproducción.
- No se debe incluir ningún adBreak previo al video: 00:00:00.000.
- Los puntos de referencia del adBreak deben proporcionarse en las pausas naturales de la escena o en las transiciones a negro.
- No debe haber menos de 7 minutos entre cada adBreak.
- No se admiten adBreaks a menos de 5 minutos de los créditos finales.

### Política de contenido dirigido a niños

El “contenido dirigido a niños” es contenido que: (i) está dirigido a niños según la definición de la legislación aplicable de la jurisdicción en la que se muestra el contenido (por ejemplo, [La Ley de Protección de la Privacidad Infantil en Internet](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa)); o (ii) se creó para ser visto principalmente por niños dentro de la jurisdicción en la que se muestra el contenido.

- Debe informarse a Roku de la intención de enviar o distribuir contenido dirigido a niños.
- SE PROHÍBE el envío o la distribución de contenido dirigido a niños sin la aprobación expresa por escrito de Roku.
- Cuando Roku aprueba el envío o la distribución de contenido dirigido a niños, todos los metadatos del contenido deben incluir lo que se detalla a continuación: 
  - Para contenido de películas: 
    - La leyenda `<tag>` “kidsdirected” (todo en minúscula) debe incluirse como una de las etiquetas para cada película
    - Debe incluirse una [clasificación](#valores-de-clasificación-por-sistema-de-clasificación-y-país) por edades válida de MPAA, USA_PR o TV. Las clasificaciones “UNRATED” y “Not Rated” no son aceptables para el contenido dirigido a niños.

  - Para contenido de series por episodios: 
    - La leyenda `<tag>` “kidsdirected” (todo en minúscula) debe incluirse como una de las etiquetas de la serie y los episodios para cada serie y episodio
    - Debe incluirse una [clasificación](#valores-de-clasificación-por-sistema-de-clasificación-y-país) por edades de TV válida. Las clasificaciones “UNRATED” y “Not Rated” no son aceptables para el contenido dirigido a niños.

Consulta [aquí](https://docs.roku.com/published/madeforkids) para obtener más información y asesoramiento sobre contenido “creado para niños”

### Marcas y llamadas a la acción (CTA) externas

Roku Channel no permite marcas o enlaces a URL o llamadas a la acción externas en el arte clave o dentro del video y los subtítulos descriptivos. Las llamadas a la acción son recursos creativos o segmentos de contenido que dirigen a las personas usuarias fuera del ecosistema de Roku Channel para consumir contenido en servicios externos. Deben editarse los videos y eliminar los enlaces o las indicaciones que dirigen a las personas usuarias a visitar sitios externos. Esto incluye:

- logotipos de marca
- URL de sitios web
- códigos QR
- invitación verbal o textual a la audiencia a “hacer clic”, “suscribirse”, “comprar ahora”, “ir a”, etc.

Comunícate con tu representante de Roku para obtener más información.

### Hojas de referencia musical

Las hojas de referencia musical pueden enviarse a Roku para contenido distribuido en Roku Channel a través del siguiente enlace:

https://go.roku.com/music-cue-sheet-submission

No envíes hojas de referencia musical con los entregables del paquete de video a través de Aspera. Las hojas de referencia que se entreguen con el paquete de video estarán sujetas a eliminación.

## Experiencia de uso en Roku Channel


Roku aumenta los metadatos y las ilustraciones que aparecen en Roku Channel en los dispositivos Roku, navegadores web, apps móviles y otros reproductores fuera de la plataforma con datos suministrados por la base de datos de Gracenote, siempre que estén disponibles. Los datos de Gracenote contribuyen a una experiencia unificada de un mismo título en todas las plataformas y en todo el ecosistema de Roku. Roku intentará que todo el contenido entregado por nuestras empresas socias coincida con el registro correspondiente en la base de datos de Gracenote. *En este momento, todos los metadatos e ilustraciones que aparecen en Roku Channel provienen de Gracenote, si dicho contenido se encuentra en su base de datos.* 

Gracenote utiliza la “personalización de las ilustraciones”, mediante la cual proporciona imágenes alternativas para diversificar las ilustraciones de los títulos para distintas personas usuarias en función de varios factores (demografía, popularidad, etc.). Este cambio ha aumentado la participación de los usuarios en nuestra plataforma. Gracenote acepta el arte clave oficial de las empresas socias, sin embargo, no todas las personas usuarias verán el arte oficial, a menos que el algoritmo lo muestre.  Gracenote suministra ~3 imágenes únicas y crea versiones alternativas de ilustraciones procedentes de diversos lugares (por ej., emisora original, estudio de producción, agencia creativa). Gracenote le informó a Roku que todas las imágenes están sujetas a una licencia de uso justo y que aplica los mismos estándares de calidad tanto a las imágenes personalizadas como al arte clave suministrado por las empresas socias, por ejemplo, sin grandes revelaciones de la trama, sin imágenes oscuras, borrosas o granuladas, sin imágenes violentas o sugestivas y sin referencias al tabaquismo.

Nuestros sistemas utilizan varios métodos para hacer coincidir un título con su registro de Gracenote correcto. Las empresas socias pueden facilitar la correspondencia con un registro de Gracenote al brindar metadatos precisos, entre los que se incluyen:

- El título exacto de una serie, película, especial de TV o video de formato corto.
- Las fechas de lanzamiento que correspondan al año de lanzamiento original del título en cualquier plataforma.
- La numeración exacta de las temporadas y los episodios según el orden de lanzamiento original.
- Los ID de TMS (Gracenote) precisos según el tipo de contenido. 
  - El contenido clasificado como un episodio en Gracenote debe entregarse a Roku como un episodio.
  - El contenido clasificado como una película en Gracenote debe entregarse a Roku como una película.
  - El contenido clasificado como un especial de TV en Gracenote debe entregarse a Roku como un especial de TV.

Las empresas socias pueden ayudar en la selección de su contenido en Roku Channel al brindar etiquetas con cada película, episodio o clip. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas y los géneros proporcionados para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan, más formas habrá de seleccionar y presentar el contenido a la persona usuaria final. Consulta [Prácticas recomendadas: etiquetas y metadatos del contenido](https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md) para obtener más información.

## Pautas de activos multimedia

### Requisitos de video

- Todo el contenido de video debe ser **solo el programa completo** :

  - sin barras ni tonos ni pizarras al inicio del programa
  - sin video sin texto tras la finalización del programa
  - no más de 2 segundos de negro al inicio del programa
  - no más de 2 segundos de negro tras la finalización del programa


- Los archivos de video deben tener muy poco texto (lo que también se conoce como “con texto sin subtítulos” o “sin texto con texto principal, final y gráfico”). El video puede incluir los crédito iniciales y finales, pero deben eliminarse todos los subtítulos de los diálogos en idioma extranjero.
- No deben incluirse anuncios en el video. Todos los puntos de inserción de anuncios para el contenido financiado con anuncios se proporcionarán en el archivo de metadatos según las [pautas de la Política de anuncios de Roku.](#política-de-anuncios)
- Pueden incluirse fotogramas en negro para comerciales en el video siempre que no duren más de 2 segundos.
- Pueden incluirse fotogramas en negro para comerciales en el contenido de TV por episodios, pero no en el contenido de películas.
- Los archivos de video deben entregarse como un único archivo de video sin interrupciones.
- No deben entregarse archivos de video fragmentados (divididos en segmentos en los puntos de corte publicitario).
- No se permiten las llamadas a la acción (CTA) ni los enlaces a plataformas o sitios externos, y deben eliminarse del video antes de entregarlo a Roku.
- El contenido de video HD debe entregarse en un contenedor 16:9.
- Se prefiere la presentación de cuadro completo (relación de aspecto de 1.78), siempre que esté disponible.
- Se permite el uso del formato letterboxed en 16:9, pero debe reducirse al mínimo.
- No debe entregarse contenido SD en 16:9 en un contenedor 4:3 con letterboxing.
- Se prefieren archivos de nivel intermedio de alta calidad con la mayor tasa de bits y la mayor resolución posible.

#### Velocidad de fotogramas del video

Roku admite una gran variedad de velocidades de fotogramas y tipos de escaneo. Todos los archivos de video deben entregarse con su velocidad de fotogramas y tipo de escaneo originales.

#### Resolución de video

| Tipo    | Ancho | Alto | Relación de aspecto de pixeles   |
| ------- | ----- | ---- | -------------------------------- |
| SD      | 720   | 480  | 4:3 o 16:9 (pixeles anamórficos) |
| SD      | 640   | 480  | 1:1 (pixeles cuadrados)          |
| SD      | 853   | 480  | 1:1 (pixeles cuadrados)          |
| SD      | 720   | 576  | 4:3 o 16:9 (pixeles anamórficos) |
| SD      | 768   | 576  | 1:1 (pixeles cuadrados)          |
| SD      | 1024  | 576  | 1:1 (pixeles cuadrados)          |
| HD      | 1280  | 720  | 1:1 (pixeles cuadrados)          |
| FHD     | 1920  | 1080 | 1:1 (pixeles cuadrados)          |
| UHD\*\* | 3840  | 2160 | 1:1 (pixeles cuadrados)          |

*\*\*La resolución UHD solo se admite como resolución de entrada. Actualmente, Roku no codifica ni muestra video en formato 4K UHD en Roku Channel.* 

#### Formatos de video


<table>
<thead>
<tr>
<th>Nombre</th>
<th>Códecs</th>
<th>Extensión</th>
<th>Tasa de bits</th>
</tr>
</thead>
<tbody>
<tr>
<td>Apple® ProRes</td>
<td>ProRes 444 (todos los perfiles)<br />ProRes 4444 (todos los perfiles)<br />ProRes 422 (todos los perfiles)</td>
<td>.mov</td>
<td>50 Mbps o más</td>
</tr>
<tr>
<td>XDCam</td>
<td></td>
<td>.mxf</td>
<td>50 Mbps o más</td>
</tr>
<tr>
<td>MPEG-2</td>
<td></td>
<td>.ts.mpg</td>
<td>HD = 15 Mbps o más SD= 3.75 Mbps o más</td>
</tr>
<tr>
<td>MPEG-4</td>
<td>H.264</td>
<td>.mp4</td>
<td>5 Mbps o más</td>
</tr>
</tbody>
</table>


### Requisitos de audio

*La configuración de audio de los archivos debe ser la estándar de la industria, con todos los canales claramente etiquetados por posición e idioma* (según el formato del archivo)

- Es preferible el audio PCM de 16 bits o 24 bits a 48 kHz con la tasa de bits más alta.
- El audio Dolby AC3 es compatible.

**Roku prefiere recibir audio 5.1 y estéreo siempre que sea posible.** 

| Sonido envolvente 5.1 y sonido estéreo 2.0 | Etiqueta del canal        |
| ------------------------------------------ | ------------------------- |
| Canal 1                                    | Frontal izquierdo (L)     |
| Canal 2                                    | Frontal derecho (R)       |
| Canal 3                                    | Central (C)               |
| Canal 4                                    | LFE (Lfe)                 |
| Canal 5                                    | Envolvente izquierdo (Ls) |
| Canal 6                                    | Envolvente derecho (Rs)   |
| Canal 7                                    | Estéreo izquierdo (SL)    |
| Canal 8                                    | Estéreo derecho (SR)      |

**Solo se acepta sonido envolvente 5.1 si no se dispone de 5.1 y estéreo** 

| Solo sonido envolvente 5.1 | Etiqueta del canal        |
| -------------------------- | ------------------------- |
| Canal 1                    | Frontal izquierdo (L)     |
| Canal 2                    | Frontal derecho (R)       |
| Canal 3                    | Central (C)               |
| Canal 4                    | LFE (Lfe)                 |
| Canal 5                    | Envolvente izquierdo (Ls) |
| Canal 6                    | Envolvente derecho (Rs)   |

**Solo se acepta sonido estéreo si no se dispone de 5.1 y estéreo o sonido envolvente 5.1 solo.** 

| Estéreo 2.0 | Etiqueta del canal     |
| ----------- | ---------------------- |
| Canal 1     | Estéreo izquierdo (SL) |
| Canal 2     | Estéreo derecho (SR)   |

### Entregables de audio secundario

El contenido que se entregue con audio en un idioma que no sea el principal del territorio de distribución debe entregarse con un archivo de doblaje de audio o subtítulos que traduzcan el contenido al idioma principal de ese territorio. Las pistas de audio secundarias pueden multiplexarse con el archivo de video entregable o entregarse en un único archivo de audio sidecar entrelazado. Todas las pistas de audio secundarias, ya sea que estén multiplexadas en el video o entregadas como un archivo sidecar entrelazado, deben entregarse como una mezcla de audio completa. Roku no admite pistas de doblaje que solo contengan diálogo.

#### Audio secundario sidecar

- El audio sidecar debe entregarse como un único archivo entrelazado. Roku no admite archivos discretos de un solo canal.
- El audio sidecar debe sincronizarse con el archivo fuente de video que se entregó a Roku.
- Roku admite un archivo de doblaje de audio sidecar por idioma.

A continuación, se enumeran los formatos de audio sidecar compatibles. Entrega audio sidecar con la mayor tasa de bits y frecuencia de muestreo disponibles.

| Contenedor      | Códecs       | Extensión |
| --------------- | ------------ | --------- |
| WAV (preferido) | PCM          | .wav      |
| MPEG-1 Layer 3  | MP3          | .mp3      |
| OGA             | Opus, Vorbis | .ogg      |

#### Audio descriptivo

El audio descriptivo es una pista de audio alternativa para las personas con discapacidad visual. Puedes consultar la documentación oficial de la FCC sobre descripción de audio en el siguiente enlace:

https://www.fcc.gov/audio-description

Roku prefiere recibir pistas de audio descriptivo siempre que sea posible. El material de audio descriptivo debe entregarse de acuerdo con las pautas indicadas en la sección anterior de [Entregables de audio secundario](#entregables-de-audio-secundario)

#### Consejos para el diseño de los canales de audio

En caso de que los archivos de video no puedan crearse para incluir etiquetas de canal de audio adecuadas, se debe proporcionar un consejo de diseño de audio en los metadatos para los archivos de video que se entreguen. A continuación, se definen los consejos disponibles.

##### Consejos de diseño de audio

| Descriptor         | Definición                                                   |
| ------------------ | ------------------------------------------------------------ |
| stereoOnly         | Solo audio en estéreo de 2 canales. Puede entregarse en una sola pista o en 2 pistas discretas. |
| surroundOnly       | Solo audio envolvente 5.1 de 6 canales. Puede entregarse en una sola pista o en 6 pistas discretas. |
| stereoPlusSurround | Audio de 8 canales con sonido estéreo en los canales 1 y 2 seguido de sonido envolvente 5.1 en los canales 3 al 8 |
| surroundPlusStereo | Audio de 8 canales con 5.1 del canal 1 al 6 seguido de sonido estéreo en los canales 7 y 8 |

### Subtítulos descriptivos

Roku prefiere recibir los subtítulos descriptivos de todo el contenido para brindar la mejor experiencia de uso posible.

Para el contenido destinado a los EE. UU., Roku se adhiere a las normas de subtitulado descriptivo de la FCC en lo que respecta a la programación de video por internet. Puedes encontrar dichas normas en el siguiente enlace:

https://www.fcc.gov/consumers/guides/captioning-internet-video-programming

Todo el contenido que, según la FCC, debe tener subtítulos descriptivos, debe entregarse a Roku con subtítulos descriptivos, los cuales deben estar ajustados y sincronizados con el programa. En el caso del contenido que está exento del requisito de subtítulos descriptivos de acuerdo con las normas de la FCC, debe incluirse un número de código de exención válido en los metadatos. Números de código de exención permitidos y sus definiciones:

1 - El contenido nunca se emitió por televisión en Estados Unidos.
2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.
3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.
4 - El contenido no consiste en programación de video de larga duración.
5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).
6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.

Para el contenido destinado a territorios fuera de EE. UU., Roku cumplirá con los requisitos de cada territorio.

Los subtítulos descriptivos pueden proporcionarse en una de las dos siguientes formas:

- EIA-608 o CEA-708 incrustados en el flujo de video del archivo de video
- Archivo de subtítulos descriptivos sidecar 
- Roku prefiere un archivo de subtítulos sidecar legible por humanos como .ttml, .dfxp, .vtt o .srt.
- Más adelante, puedes ver una lista de todos los archivos de subtítulos descriptivos sidecar compatibles.
- Los subtítulos descriptivos sidecar deben comenzar en la hora de código de tiempo 00:00:00:00, ya que el codificador de Roku no respeta el código de tiempo incrustado en el archivo de video.
- No se debe proporcionar un archivo vacío (un archivo sin texto) para los subtítulos descriptivos sidecar.
- Se admiten datos de posición TTML y WebVTT.
- Los datos de posición proporcionados en los subtítulos descriptivos TTML y WebVTT se respetarán tal y como se definen en el archivo proporcionado.

*Solo se admiten los siguientes estilos de texto para los subtítulos descriptivos:* 

- *etiquetas en negrita <b> y cursiva <i>* 
- *color del texto* 
- *posicionamiento del texto* 

*Los archivos de video de Quicktime deben ir acompañados de un archivo de subtítulos descriptivos sidecar. Roku no admite la pista de texto de Quicktime.* 

| **Nombre del formato**-                     | Admite datos de posición | **Extensión del archivo** | Codificación  | **Tipo de entrega**-        | **Idiomas**-                                                 |
| ------------------------------------------- | ------------------------ | ------------------------- | ------------- | --------------------------- | ------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | SÍ                       | .ttml                     | UTF-8         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Web Video Text Track (WebVTT)               | SÍ                       | .vtt o .webvtt            | UTF-8         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Distribution Format Exchange Profile (DFXP) | NO                       | .dfxp                     | UTF-8         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| EBU Subtitle Data Exchange Format (STL)     | NO                       | .stl                      | UTF-8         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| SubRip Text (SRT)                           | NO                       | .srt                      | UTF-8         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| EIA-608 o CEA-708                           | NO                       | no disponible             | no disponible | Incrustado en el flujo MPEG | incrustado en el archivo de video                            |
| SCC                                         | NO                       | .scc                      | ASCII         | sidecar                     | sigue el idioma de audio del archivo de video o del archivo de doblaje |

### Subtítulos

El contenido que se entregue con audio en un idioma que no sea el principal del territorio de distribución debe entregarse con un archivo de doblaje de audio o subtítulos que traduzcan el contenido al idioma principal de ese territorio.

- Los subtítulos completos NO deben grabarse en el video.
- Roku prefiere un archivo de subtítulos sidecar legible por humanos como .ttml, .dfxp, .vtt o .srt.
- Más adelante, puedes ver una lista de todos los archivos de subtítulos sidecar compatibles.
- Los subtítulos sidecar deben comenzar en la hora de código de tiempo 00:00:00:00, ya que el codificador de Roku no respeta el código de tiempo incrustado en el archivo de video.
- No se debe proporcionar un archivo vacío (un archivo sin texto) para los subtítulos sidecar.
- Se admiten datos de posición TTML y WebVTT.
- Los datos de posición proporcionados en los subtítulos descriptivos TTML y WebVTT se respetarán tal y como se definen en el archivo proporcionado.

*Solo se admiten los siguientes estilos de texto para los subtítulos:* 

- *etiquetas en negrita <b> y cursiva <i>* 
- *color del texto* 
- *posicionamiento del texto* 

| **Nombre del formato**                      | Admite datos de posición | **Extensión delarchivo** | Codificación | **Tipo de entrega** | **Idiomas**                                                  |
| ------------------------------------------- | ------------------------ | ------------------------ | ------------ | ------------------- | ------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | SÍ                       | .ttml                    | UTF-8        | sidecar             | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Web Video Text Track (WebVTT)               | SÍ                       | .vtt o .webvtt           | UTF-8        | sidecar             | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| Distribution Format Exchange Profile (DFXP) | NO                       | .dfxp                    | UTF-8        | sidecar             | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| EBU Subtitle Data Exchange Format (STL)     | NO                       | .stl                     | UTF-8        | sidecar             | sigue el idioma de audio del archivo de video o del archivo de doblaje |
| SubRip Text (SRT)                           | NO                       | .srt                     | UTF-8        | sidecar             | sigue el idioma de audio del archivo de video o del archivo de doblaje |

### Ilustraciones

Roku admite tres tipos de imagen para cada contenido. Cada tipo de imagen se utilizará en una ubicación diferente dentro de Roku Channel. Roku prefiere recibir los tres tamaños de la ilustración, siempre que sea posible. Cada imagen debe entregarse en formato JPEG o PNG. Proporciona las imágenes en la resolución de imagen preferida de Roku para evitar retrasos en la publicación. Las imágenes *deben* tener al menos la resolución mínima y *entregarse* en la relación de aspecto *exacta* definida para cada tipo de imagen.

#### Definiciones de tipo de imagen


<table>
<thead>
<tr>
<th>Formato</th>
<th>Extensión</th>
<th>Tipo de imagen</th>
<th>Resolución mínima</th>
<th>Resolución preferida</th>
<th>Relación de aspecto</th>
</tr>
</thead>
<tbody>
<tr>
<td><ul><li>JPEG o PNG</li><li>RGB</li><li>72 ppp</li></ul></td>
<td>.jpg <br />.jpeg<br />.png</td>
<td>Arte clave Imagen con tratamiento de título</td>
<td>800x450</td>
<td>1920x1080</td>
<td>16:9</td>
</tr>
<tr>
<td><ul><li>JPEG o PNG</li><li>RGB</li><li>72 ppp</li></ul></td>
<td>.jpg<br />.jpeg<br />.png</td>
<td>Fondo Imagen sin texto utilizada en el fondo de la página del programa</td>
<td>800x450</td>
<td>1920x1080</td>
<td>16:9</td>
</tr>
<tr>
<td><ul><li>JPEG o PNG</li><li>RGB</li><li>72 ppp</li></ul></td>
<td>.jpg<br />.jpeg<br />.png</td>
<td>Portada Imagen de póster vertical con tratamiento del título</td>
<td>534x801</td>
<td>2000x3000</td>
<td>2:3</td>
</tr>
</tbody>
</table>



#### Requisitos de ilustración mínimos por tipo de contenido

**Requisitos de ilustración para contenido de clips** 

| Ilustración        | Obligatorio o preferido | Notas                                                       |
| ------------------ | ----------------------- | ----------------------------------------------------------- |
| Arte clave en 16:9 | Obligatorio             | Solo se necesita la imagen con texto en 16:9 para los clips |

**Requisitos de ilustración para contenido de películas**

| Ilustración        | Obligatorio o preferido | Notas                                                        |
| :----------------- | ----------------------- | ------------------------------------------------------------ |
| Arte clave en 16:9 | Obligatorio             | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una película. Se prefieren los 3 tipos de imágenes. |
| Portada en 2:3     | Preferido               | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una película. Se prefieren los 3 tipos de imágenes. |
| Fondo en 16:9      | Preferido               | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una película. Se prefieren los 3 tipos de imágenes. |

**Requisitos de ilustración para contenido de TV**

| ***Tipo de contenido de series***    |                             |                                                              |
| ------------------------------------ | --------------------------- | ------------------------------------------------------------ |
| **Ilustración**                      | **Obligatorio o preferido** | **Notas**                                                    |
| Arte clave en 16:9                   | Obligatorio                 | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una serie. Se prefieren los 3 tipos de imágenes. |
| Portada en 2:3                       | Preferido                   | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una serie. Se prefieren los 3 tipos de imágenes. |
| Fondo en 16:9                        | Preferido                   | Como mínimo, Roku requiere el arte clave en 16:9 para todos los activos de una serie. Se prefieren los 3 tipos de imágenes. |
| ***Tipo de contenido de episodios*** |                             |                                                              |
| **Ilustración**                      | **Obligatorio o preferido** | **Notas**                                                    |
| Fondo en 16:9                        | Obligatorio                 | La imagen de los episodios puede estar en formato letterbox o pillarbox según el video fuente. Las imágenes en formato windowbox serán rechazadas. Las imágenes de los episodios deben ser únicas para cada episodio y representar el contenido de este. |

#### Pautas de las ilustraciones de contenido

- Arte clave (gráfico con el título completo del activo visible).
- Sin ilustraciones explícitas ni violencia gráfica.
- Las ilustraciones deben ser posteriores a la fecha de estreno y no incluir expresiones como *En cartelera* o *Próximamente* .
- Se prefieren las ilustraciones diseñadas específicamente para la entrega digital.
- Las ilustraciones para territorios internacionales deben localizarse para cada territorio.
- Para el contenido de Roku Channel, Roku no aceptará ilustraciones de marca sin aprobación previa para ningún activo de video individual ni para entidades de temporadas o series.
- No se permiten las llamadas a la acción (CTA) ni los enlaces a plataformas o sitios externos, y deben eliminarse del archivo de imagen antes de entregarlo a Roku.

#### Ejemplo de ubicaciones de las ilustraciones en la plataforma

**Ilustraciones de películas: experiencia de navegación**

Ejemplo resaltado de la imagen en 16:9 con texto y tratamiento de título

![roku400px - movieGrid](https://image.roku.com/ZHZscHItMTc2/movieBrowse.jpg)

**Ilustraciones de películas: experiencia de los detalles**

Ejemplo resaltado de la imagen en 16:9 sin texto

![roku400px - movieDetails](https://image.roku.com/ZHZscHItMTc2/movieDetail.jpg)

**Ilustraciones de series: experiencia de navegación** 

Ejemplo resaltado de la imagen de la serie en 16:9 con texto y tratamiento de título

![roku400px - seriesGrid](https://image.roku.com/ZHZscHItMTc2/seriesBrowse.jpg)

**Ilustraciones de series: experiencia de los detalles** 

Ejemplo resaltado de la imagen de la serie en 16:9 sin texto

![roku400px - seriesDetail](https://image.roku.com/ZHZscHItMTc2/seriesDetails.jpg)

**Ilustraciones de episodios: experiencia del selector de episodios** 

Ejemplo resaltado de las imágenes de los episodios en 16:9 sin texto

![roku400px - episodePicker](https://image.roku.com/ZHZscHItMTc2/episodePicker.jpg)

**Ilustraciones de episodios: experiencia de los detalles de episodios** 

Ejemplo resaltado de la imagen del episodio en 16:9 sin texto

![roku400px - episodeDetail](https://image.roku.com/ZHZscHItMTc2/episodeDetail.jpg)

**Ilustraciones de clips: experiencia de navegación** 

Ejemplo resaltado de la imagen en 16:9 con texto y tratamiento de título

![roku400px - clipGrid](https://image.roku.com/ZHZscHItMTc2/clipBrowse.jpg)

**Ilustraciones de póster: experiencia de búsqueda** 

Ejemplo resaltado de la imagen en 2:3 con texto y tratamiento de título de la experiencia de búsqueda. Se prefieren las imágenes en 2:3 para los tipos de contenido de series y películas

![posterSearch](https://image.roku.com/ZHZscHItMTc2/posterSearch.jpg)

## Pautas para la entrega

Roku acepta contenido a través de Aspera, que puede configurarse como Aspera Shares (con el complemento de Aspera Connect Browser) o como una conexión de Aspera P2P o Enterprise (con Aspera Client o Console).

Los métodos alternativos de transferencia de archivos o entrega física pueden evaluarse caso por caso y Roku debe aprobarlos. No se devolverá ninguna unidad de disco duro o medio físico que Roku acepte.

### Entrega a través de Aspera Shares

Deberás proporcionar los nombres y las direcciones de correo electrónico de las personas usuarias que transmitirán contenido a Roku para Roku Channel.

URL de Aspera Shares de Roku: https://aspera.sr.roku.com

Deberás instalar el complemento del navegador Aspera Connect para cargar contenido a través de Aspera Shares.

Las invitaciones para crear una cuenta de Aspera Shares se enviarán desde el servidor de Aspera Shares de Roku. Es posible que estos correos electrónicos de invitación automáticos se marquen como correo no deseado, o que el sistema de filtrado de correo electrónico o el cortafuegos de una organización los bloquee. Comprueba si la invitación está en la carpeta de correo no deseado y cambia su ubicación antes de acceder al enlace proporcionado.

### Entrega a través de Aspera Enterprise, P2P o HSTS

Roku realiza la autenticación mediante el intercambio de claves RSA públicas o privadas. Para completar esta configuración, proporciona una clave pública RSA-SSH.

Puedes consultar los pasos para crear claves SSH en la [documentación oficial de Aspera](https://download.asperasoft.com/download/docs/ascp/3.5.2/html/dita/creating_public_key.html)

Roku proporcionará información sobre el host y el nombre de persona usuaria durante la incorporación.

**Aspera Client** 
[Descarga de Aspera Client](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client&release=All&platform=All&function=all)

#### Ancho de banda de transferencia

Roku recomienda verificar o actualizar las preferencias globales y de uso de Aspera Client para que se ajusten a tu ancho de banda de carga preferido. Ten en cuenta que Roku aplica un límite global de ancho de banda de 300 Mbps.

![asperaPreferences](https://image.roku.com/ZHZscHItMTc2/asperaPreferences.jpg)

Según el cliente que se utilice, hay diferentes configuraciones que pueden afectar la velocidad de transferencia.

- Si se utiliza la interfaz gráfica de uso para clientes de escritorio, se puede establecer una configuración global https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings
- La velocidad de transferencia también puede configurarse por nivel de conexión (la configuración de “Velocidad” en el paso 7): https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections
- Si se realiza la conexión mediante la línea de comandos, hay un conmutador específico: `-l 100m` establecería la velocidad de transferencia en 100 Mbps
- Si se realiza la conexión mediante Aspera Shares, las velocidades deseadas pueden establecerse para todo el sistema o para cada persona usuaria en la interfaz web de Shares
  https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings
  https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings

### Entrega de archivos

- Todos los archivos de video, subtítulos descriptivos e ilustraciones deben *entregarse antes de entregar los metadatos.*
- Los archivos de producción DEBEN entregarse en la carpeta **`/prod`** . La automatización depende de la entrega de archivos en la ubicación correcta. Si no se entregan los archivos en la carpeta correcta, se producirán retrasos en el procesamiento o el contenido no se procesará en absoluto.
- Los archivos de prueba pueden entregarse en la carpeta **`/testing`** .
- Se prefiere que el contenido no se entregue en subcarpetas. En caso de que sea necesario crear subcarpetas, sigue las siguientes pautas: 
  - Las subcarpetas **no** deben comenzar con un guion bajo.
  - **No** separes los archivos en subcarpetas por tipo de archivo.
  - Todos los archivos multimedia de un mismo título (episodio, película o formato corto) deben entregarse en el mismo directorio.
  - La plataforma de ingesta asume que los archivos multimedia a los que se hace referencia en los metadatos se encuentran en el mismo directorio que el archivo de metadatos. Por lo tanto, los metadatos deben entregarse en el mismo directorio que los archivos multimedia que contienen.
- Las notificaciones de entrega pueden enviarse a [deliverynotifications@roku.com](mailto:deliverynotifications@roku.com)

#### Conservación de archivos

La ubicación de entrega es una ubicación temporal para que nuestras empresas socias carguen archivos para la ingesta en la biblioteca de contenido de Roku Channel. Tras completar la ingesta, la automatización moverá los archivos desde la ubicación de entrega hasta una ubicación de archivo en la que se almacenarán por tiempo indefinido. Se espera que todos los archivos cargados en la ubicación de entrega se ingieran en un plazo razonable que no supere los 30 días. Los metadatos válidos y completos deben entregarse poco después de la entrega de los archivos para garantizar la ingesta oportuna. Los archivos en la ubicación de entrega que no se hayan ingerido al cabo de 30 días están sujetos a eliminación.

*Es posible hacer excepciones a la política de conservación de archivos para los archivos de la carpeta **`/testing`*** 

#### Denominación de archivos

Los archivos de video fuente, subtítulos descriptivos e ilustraciones entregados para su ingesta deben cumplir las siguientes pautas:

- Los nombres de los archivos no deben tener más de 125 caracteres.
- Los nombres de los archivos deben coincidir con la referencia al nombre del archivo en los metadatos suministrados para el título entregado.
- Los nombres de archivo distinguen entre mayúsculas y minúsculas.
- Los nombres de los archivos deben terminar con la extensión adecuada. Las extensiones de los archivos deben estar en minúsculas.

<ul>
<li>No deben incluirse espacios en blanco ni caracteres especiales como <code>!@#$%^&amp;*()\{\}|[]\;:’”?/&gt;&lt;,</code> en ningún nombre de archivo.</li>
</ul>

- Puede utilizarse la misma imagen para cada episodio de una serie, pero no es lo ideal. Si se utiliza la misma imagen para cada episodio, esa imagen debe entregarse varias veces y con un nombre único para cada episodio. Por ejemplo, “episode.jpg” debe entregarse como “episode_01.jpg”, “episode_02.jpg”, etc.

##### Caracteres permitidos en los nombres de archivo


<table>
<thead>
<tr>
<th>Conjuntos de caracteres</th>
</tr>
</thead>
<tbody>
<tr>
<td><ul><li>0-9</li><li>a-z</li><li>A-Z</li></ul><p><em>Tanto la ubicación correcta como la cadencia adecuada al momento de la entrega de los archivos, así como la denominación adecuada de estos, es responsabilidad de nuestras empresas socias, ya que estas son las expertas en su propio contenido y no siempre tenemos conocimiento de los plazos de entrega de cada empresa socia particular.</em></td>
</tr>
</tbody>
</table>


| Nombre del carácter | Carácter |
| ------------------- | -------- |
| Guion               | -        |
| Punto               | .        |
| Guion bajo          | _        |

##### Caracteres prohibidos en los nombres de archivo


<table>
<thead>
<tr>
<th>Nombre del carácter</th>
<th>Carácter</th>
<th>Nombre del carácter</th>
<th>Carácter</th>
</tr>
</thead>
<tbody>
<tr>
<td>Símbolo arroba</td>
<td>@</td>
<td>Corchete izquierdo</td>
<td>[</td>
</tr>
<tr>
<td>Ampersand</td>
<td>&amp;</td>
<td>Menos de</td>
<td>&lt;</td>
</tr>
<tr>
<td>Asterisco</td>
<td>*</td>
<td>Porcentaje</td>
<td>%</td>
</tr>
<tr>
<td>Barra inversa</td>
<td>\</td>
<td>Más</td>
<td>+</td>
</tr>
<tr>
<td>Caret</td>
<td>^</td>
<td>Numeral o etiqueta</td>
<td>#</td>
</tr>
<tr>
<td>Dos puntos</td>
<td>:</td>
<td>Signo de interrogación</td>
<td>?</td>
</tr>
<tr>
<td>Coma</td>
<td>,</td>
<td>Comillas o comillas dobles</td>
<td>"</td>
</tr>
<tr>
<td>Dólar</td>
<td>$</td>
<td>Llave derecha</td>
<td>}</td>
</tr>
<tr>
<td>Igual a</td>
<td>=</td>
<td>Corchete derecho</td>
<td>]</td>
</tr>
<tr>
<td>Barra</td>
<td>/</td>
<td>Punto y coma</td>
<td>;</td>
</tr>
<tr>
<td>Acento grave</td>
<td>`</td>
<td>Espacio</td>
<td></td>
</tr>
<tr>
<td>Mayor de</td>
<td>&gt;</td>
<td>Tilde</td>
<td>~</td>
</tr>
<tr>
<td>Llave izquierda</td>
<td>{</td>
<td>Barra vertical</td>
<td>|</td>
</tr>
</tbody>
</table>



## Entrega de contenido de MovieLabs

El orden de entrega es importante. El servicio MovieLabs de Roku requerirá que el archivo MMC XML se entregue después de completarse la entrega de todos los archivos multimedia a los que se hace referencia en él. Roku no puede procesar el contenido si no se entregaron correctamente los archivos MMC y MEC XML. Consulta los ejemplos a continuación:

- Para cada archivo MMC, todos los archivos a los que se hace referencia en él deben entregarse antes del archivo MMC XML para considerarse una entrega correcta.
- Para cada archivo MEC, todos los archivos a los que se hace referencia en él deben entregarse antes del archivo MEC XML para considerarse una entrega correcta.
- Las películas, las series, las temporadas y los episodios requieren la entrega correcta tanto del archivo MMC como del MEC para su ingesta.
- No es posible realizar la ingesta de los episodios sin la entrega e ingesta correctas de los archivos MMC y MEC de la temporada a la que pertenece el episodio.
- No es posible realizar la ingesta de las temporadas sin la entrega e ingesta correctas de los archivos MMC y MEC de la serie a la que pertenece la temporada.
- Los episodios procesados por el sistema de Roku antes que la serie o temporada a la que pertenece el episodio se mantendrán en estado de ingesta pendiente hasta que la serie o temporada se hayan entregado correctamente.
- Las temporadas procesadas por el sistema de Roku antes que la serie a la que pertenece la temporada o un episodio perteneciente a esa temporada se mantendrán en un estado de ingesta pendiente hasta que la serie o el episodio se hayan entregado correctamente.
- Las series procesadas por el sistema de Roku antes que una temporada y un episodio perteneciente a esa serie se mantendrán en un estado de ingesta pendiente hasta que una temporada y un episodio se hayan entregado correctamente.

### Metadatos y archivos multimedia específicos de Roku

[Los archivos de video](#requisitos-de-video), [archivos de audio](#requisitos-de-audio), [archivos de subtítulos descriptivos](#subtítulos-descriptivos), [archivos de subtítulos](#subtítulos), [archivos de imágenes](#ilustraciones), [requisitos mínimos de metadatos](#metadatos-mínimos-requeridos-por-tipo-de-contenido), [géneros](#géneros) y [clasificaciones y fuentes de clasificación](#valores-de-clasificación-por-sistema-de-clasificación-y-país) deben adherirse a los formatos y requisitos compatibles definidos en esta especificación

#### Tags

Las etiquetas para merchandising/curación se pueden enviar a través del nodo de palabras clave compatible con el XML de MovieLabs MEC. Consulte [el esquema MEC de MovieLabs](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link116) para la correcta colocación del nodo de palabra clave.

<u>Ejemplo:</u>

```
<md:LocalizedInfo language=“en”>
<md:TitleDisplayUnlimited>Gran título de mi programa</md:TitleDisplayUnlimited>
<md:Summary190>Resumen breve de mi programa.</md:Summary190>
<md:Summary400>Resumen más extenso de mi programa.</md:Summary400>
<md:Genre id=“genero”/>
<md:Keyword>palabra clave</md:Keyword>
</md:LocalizedInfo>
```

#### IDs TMS

Los TMS IDs de Gracenote se pueden enviar a través del XML de MovieLabs MEC como un identificador con el Namespace TMSID en el nodo AltIdentifier. Consulte [el esquema MEC de MovieLabs](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link121) para conocer la estructura adecuada del nodo AltIdentifier 

<u>Ejemplo:</u>

```
<md:AltIdentifier>
	<md:Namespace>TMSID</md:Namespace>
	<md:Identifier>EP012345678910</md:Identifier>
</md:AltIdentifier>
```

####  Entrega MMC XML adBreak and cuePoint

adBreak, intro credit, and end credit cuePoints pueden ser entregado en MovieLabs MMC XML in el nodo marcado, Por favor revise la siguiente información  [MovieLabs MMC Schema](https://movielabs.com/md/manifest/v1.10/manifest-v1.10/manifest-v1.10.html#Link184) para una apropiada estructura de los nodos de Markeres 
<u>Ejemplo:</u>

```
      <manifest:Markers>
      
      <!--Opening credit cuePoint inicio y fin-->
        <manifest:Marker>
          <manifest:Timecode format="seconds">155.071</manifest:Timecode>
          <manifest:DisplayLabel>FIRST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
          <manifest:Label>FFEI</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">200.867</manifest:Timecode>
          <manifest:DisplayLabel>LAST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
          <manifest:Label>LFEI</manifest:Label>
        </manifest:Marker>
        
        <!--End credit cuePoint inicion y fin-->
        
        <manifest:Marker>
          <manifest:Timecode format="seconds">3669.207</manifest:Timecode>
          <manifest:DisplayLabel>FIRST_FRAME_UP_NEXT</manifest:DisplayLabel>
          <manifest:Label>FFUN</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">3812.517</manifest:Timecode>
          <manifest:DisplayLabel>LAST_FRAME_UP_NEXT</manifest:DisplayLabel>
          <manifest:Label>LFUN</manifest:Label>
        </manifest:Marker>
        
        <!--adBreak cuePoints (Roku solo necesita un punto de inicio. Nuestro reproductor, pausara efectivamente la reproduccion del video en este punto, reproducira el anuncion, y reanudara desde este mismo punto)-->

        <manifest:Marker>
          <manifest:Timecode format="seconds">737.111</manifest:Timecode>
          <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
          <manifest:Label>FPCI</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">1361.276</manifest:Timecode>
          <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
          <manifest:Label>FPCI</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">1948.821</manifest:Timecode>
          <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
          <manifest:Label>FPCI</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">2841.421</manifest:Timecode>
          <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
          <manifest:Label>FPCI</manifest:Label>
        </manifest:Marker>
        <manifest:Marker>
          <manifest:Timecode format="seconds">3270.100</manifest:Timecode>
          <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
          <manifest:Label>FPCI</manifest:Label>
        </manifest:Marker>
      </manifest:Markers>
```

### Validación del esquema de MovieLabs

Roku utiliza Apache [xmlbeans](https://xmlbeans.apache.org/download/index.html) para analizar y validar los archivos MEC y MMC XML. Puedes utilizar la herramienta de línea de comandos proporcionada en xmlbeans para llevar a cabo la validación.

1. Descarga y extrae xmlbeans a tu equipo.
2. Desde la línea de comandos, ve al directorio bin de xmlbeans.
3. Dentro del directorio bin, encontrarás la herramienta de validación.
4. Descarga también los archivos xsd del esquema oficial de MovieLab en tu equipo ( https://movielabs.com/schema/manifest/v1.10/manifest-v1.10.xsd https://movielabs.com/schema/mdmec/v2.9/mdmec-v2.9.xsd )
5. Uso: valida schema.xsd instance.xml (asegúrate de apuntar schema.xsd a mdmec-v2.9.xsd para MEC, y manifest-v1.10.xsd para MMC)
6. A partir del resultado de la línea de comandos, puedes saber si ese xml es válido o no.

**Uso de ejemplo** 

```
./validate ~/dev/movielabsSpec/schema/mdmec-v2.9.xsd /path/to/file/directory/MEC_SAMPLE_123456789.xml
```

**Respuesta de ejemplo** 

```
XMLBEANS_LIB=./../lib
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...
/path/to/file/directory /MEC_SAMPLE_123456789.xml valid
```

## Requisitos de metadatos

Roku utiliza un motor de transformación que puede “normalizar” diferentes formatos de metadatos para adaptarlos a las necesidades de ingesta de Roku. Los nombres exactos de los elementos o campos no son tan importantes como la entrega consistente de los nombres acordados de los elementos o campos. Los datos dentro de cualquier campo deben ajustarse a la Especificación de ingesta de Roku Channel, independientemente del nombre del elemento o del campo. Si utilizas un formato XML para entregar tu contenido a otras plataformas, puedes reutilizarlo para entregarlo a Roku. Puedes proporcionar una muestra de este formato de metadatos existente durante la incorporación para que Roku evalúe su validez para la ingesta en Roku Channel. Independientemente del formato utilizado, el entregable de metadatos debe incluir todos los elementos y campos obligatorios.

### Metadatos mínimos requeridos por tipo de contenido


<table>
<thead>
<tr>
<th>Requisitos de películas y clips</th>
<th>Requisitos de TV</th>
</tr>
</thead>
<tbody>
<tr>
<td><ul><li>provider</li><li>content type</li><li>asset_id</li><li>title</li><li>release_date</li><li>runtime</li><li>genres</li><li>rating</li><li>rating system</li><li>short_synopsis</li><li>video file_name</li><li>captions file_name (si se requieren subtítulos descriptivos)</li><li>key art file_name</li></ul></td>
<td><ul><li>provider</li><li>content type</li><li>asset_id</li><li>episode title</li><li>episodeNumber</li><li>episode release_date</li><li>runtime</li><li>rating</li><li>rating system</li><li>episode short_synopsis</li><li>series_id</li><li>series title</li><li>series release_date</li><li>series genres</li><li>series short_synopsis</li><li>season_id</li><li>seasonNumber</li><li>video file_name</li><li>captions file_name (si se requieren subtítulos descriptivos)</li><li>episode thumbnail file_name</li><li>series key art file_name</li></ul></td>
</tr>
</tbody>
</table>




### Definiciones del tipo de contenido

Roku Channel admite 3 tipos de contenido: tv, películas y clips. Todo el contenido debe entregarse como uno de estos 3 tipos. Los títulos deben entregarse a Roku Channel en el mismo tipo de contenido en el que el programa estaba disponible originalmente. Las siguientes definiciones pueden ser útiles para clasificar el contenido destinado a Roku Channel.

**TV** 

El contenido por episodios que se estructura en una jerarquía de serie --> temporada --> episodio debe entregarse según las especificaciones de TV.

**Película** 

Los títulos completos, de formato largo e independientes deben entregarse según las especificaciones de las películas. Cualquier programa que no está destinado a anidarse en una jerarquía de serie, temporada y episodio y dura más de 15 minutos debe considerarse una película. Esto incluye los especiales de TV independientes.

**Clip** 

Los títulos de formato corto independientes que duran menos de 15 minutos deben entregarse según las especificaciones de clips.

### Requisitos y expectativas para los ID

Roku no proporciona ID para el contenido. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. Todos los clips y películas deben entregarse con un asset_id. Todos los episodios deben entregarse con 3 ID: un asset_id, un series_id y un season_id. Los ID deben ser significativos para tu equipo, ya que son la forma en que identificamos positivamente un título en nuestro sistema. El asset id en los metadatos de ingesta debe coincidir con el title id proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Cualquier actualización del título una vez introducido en nuestro sistema DEBE ir acompañada del asset id. A continuación, figuran las pautas y definiciones de los ID:

| **ID **   | Definiciones                                                 |
| --------- | ------------------------------------------------------------ |
| asset_id  | Identificador único e inalterable de un clip, un episodio o una película. Obligatorio para todo el contenido. 50 caracteres como máximo. Solo caracteres alfanuméricos, guiones y guiones bajos: **LOS ESPACIOS O CARACTERES ESPECIALES EN CUALQUIER ID PROVOCARÁN UN ERROR EN LA INGESTA** |
| series_id | Identificador único e inalterable de una serie. No puede ser igual al ID de temporada o episodio único. Debe entregarse con todos los episodios de una serie y debe ser consistente para todos los episodios de una serie. Obligatorio para el contenido de TV. 50 caracteres como máximo. Solo caracteres alfanuméricos, guiones y guiones bajos: **LOS ESPACIOS O CARACTERES ESPECIALES EN CUALQUIER ID PROVOCARÁN UN ERROR EN LA INGESTA** |
| season_id | Identificador único e inalterable de una temporada. No puede ser igual al ID de serie o episodio único. Debe entregarse con todos los episodios de una temporada de una serie y debe ser consistente para todos los episodios de una temporada. Obligatorio para el contenido de TV. 50 caracteres como máximo. Solo caracteres alfanuméricos, guiones y guiones bajos: **LOS ESPACIOS O CARACTERES ESPECIALES EN CUALQUIER ID PROVOCARÁN UN ERROR EN LA INGESTA** |

### Hojas y planificadores de disponibilidad

Roku solicita una lista de lanzamiento inicial de títulos, episodios o clips de la biblioteca actual que estén disponibles para Roku al momento de la incorporación y un calendario al momento de actualización del contenido. Para una producción en curso, Roku solicita que la información de Avails se proporcione 60 días antes del inicio del período de licencias y que el contenido se entregue al menos 30 días antes de su inclusión en el canal. De este modo, habrá tiempo suficiente para procesar y controlar la calidad del contenido antes de que se publique en Roku Channel. La capacidad de entrega se coordinará después de la firma

| Documentos                         |                                                              |
| ---------------------------------- | ------------------------------------------------------------ |
| Especificaciones de avails de Roku | Consulta la página de las especificaciones de avails [aquí](https://go.roku.com/trc-avail-spec) |
| Plantilla de avails de Roku        | Descarga la plantilla de avails de Roku [aquí](https://go.roku.com/trc-avail-template) |

### Períodos de disponibilidad

Roku permite que el contenido se muestre en el dispositivo y que la persona usuaria lo reproduzca a una hora de inicio determinada. De forma predeterminada, el contenido pasará a estar disponible a las 12:00 a. m. (medianoche) y caducará a las 11:59:59 p. m. en la zona horaria de la persona usuaria.

Si el contenido debe publicarse a una hora que no sea a medianoche o caducar a una hora que no sea las 11:59:59 p. m., los valores de inicio o fin del periodo de licencia en los metadatos de entrada deben incluir los horarios deseados.

Existen dos tipos de designaciones horarias específicas: relativas y absolutas.

- Horario relativo: el estreno de una película el sábado por la noche entra en período de disponibilidad a las 9:00 p. m., hora local, para todas las personas usuarias. Una persona usuaria en la zona horaria del este lo ve a las 9:00 p. m., pero una persona usuaria en la zona horaria del Pacífico, en el mismo momento exacto (6:00 p. m. PT), no puede ver ese contenido.
- Horario absoluto: un nuevo episodio de una serie entra en el período de disponibilidad a las 9:00 p. m., hora del este, y pasa a estar disponible inmediatamente en todas las zonas horarias. Una persona usuaria en la zona horaria del Pacífico puede ver el contenido a las 6.:00 p. m., hora local.

Si bien la configuración horaria la dicta el propietario del contenido, Roku necesitará los metadatos en el siguiente formato:

- Si el contenido tiene un horario de inicio relativo, ese horario debe indicarse en los metadatos de ingesta y tener el formato “aaaa-mm-ddThh:mm:ss” (2019-11-01T21:00:00)
- Si el contenido tiene un horario de inicio absoluto, ese horario debe indicarse en los metadatos de ingesta. El horario debe presentarse como hora UTC y tener el formato “aaaa-mm-ddThh:mm:ssZ” (2019-11-02T01:00:00Z).
- En este ejemplo, las 9:00 p. m., hora del este, del 1 de noviembre son la 1 a. m., UTC (https://www.thetimezoneconverter.com)
- Si los metadatos de ingesta se reciben sin hora, Roku asumirá una hora de inicio relativa de medianoche y una hora de finalización relativa a las 11:59:59 p. m.

### Caracteres especiales


<p>Roku utiliza secciones CDATA para permitir caracteres especiales (p. ej.,  !@#$%^&amp;<em>(){}|[]\;:’”?/&gt;&lt;, así como conjuntos de caracteres extranjeros) dentro de determinados valores de nodo del XML de ingesta. Roku recomienda empaquetar los datos en secciones CDATA para asegurar la correcta ingesta del contenido. Los siguientes nodos son los </em><em>únicos</em>* nodos que admiten secciones CDATA:</p>


- title
- long_synopsis
- short_synopsis
- display_name

Ciertos caracteres en un XML harán que el documento sea ilegible para la plataforma de ingesta de Roku, a menos que se manipulen (escapen) adecuadamente. Los siguientes caracteres deben proporcionarse en su formato de escape para todos los valores de nodo que no admitan secciones CDATA:

| Nombre del carácter | Carácter | Formato de escape |
| ------------------- | -------- | ----------------- |
| Ampersand           | &        | `&amp;`           |
| Menos de            | <        | `&lt;`            |
| Mayor de            | >        | `&gt;`            |
| Comillas            | "        | `&quot;`          |
| Apóstrofe           | '        | `'`               |

Nunca deben utilizarse caracteres especiales en los nombres de archivo ni en las referencias a nombres de archivo dentro de los metadatos en formato XML o Excel. [Consulta las Pautas de denominación de archivos](#entrega-de-archivos) para obtener más información al respecto.

### Formatos de metadatos compatibles

Se prefiere el formato XML. Se debe entregar un XML completo por cada archivo de video de película, clip o episodio de TV entregado. Los metadatos se deben entregar a través de Aspera en la misma carpeta que los archivos de video, subtítulos descriptivos e ilustraciones.

**Formatos de metadatos compatibles** 


<table>
<thead>
<tr>
<th>Nombre del formato</th>
<th>Extensión del formato</th>
<th>Codificación</th>
<th>Versión del paquete</th>
</tr>
</thead>
<tbody>
<tr>
<td>XML (preferido)</td>
<td>.xml</td>
<td>UTF-8</td>
<td>clip1.0<br />film5.0<br />tv1.0<br />Cablelabs ADI 1.1<br /><br /><strong><em>La compatibilidad de esquemas XML adicionales se define caso por caso</em></strong></td>
</tr>
<tr>
<td>Excel</td>
<td>.xlsx</td>
<td>Consulta <a href="#pautas-y-plantillas-de-metadatos-de-excel-de-roku">las plantillas de metadatos de Excel</a> y <a href="#pautas-y-plantillas-de-metadatos-de-excel-de-roku">las pautas de metadatos de Excel de Roku</a> más adelante</td>
<td></td>
</tr>
</tbody>
</table>


### Actualización de metadatos (MDU) y reemplazos de archivos

Las actualizaciones son automatizadas y pueden enviarse si hay necesidad de modificar metadatos o archivos de activos para cualquier programa que haya sido previamente entregado a Roku Channel. Todas las actualizaciones de metadatos o reemplazos de archivos deben incluir el **Provider** , el **asset_id** y el **Content Type** del programa tal como se entregó originalmente a Roku para que la actualización resulte exitosa. Roku gestionará el control de versiones, no hay necesidad de proporcionar información de versiones en los metadatos.

Roku actualmente admite la actualización de los siguientes campos de metadatos a través de la MDU automatizada:

- ID de TMS
- ID de EIDR
- Títulos (principales y localizados)
- Descripciones breves (principales y localizadas)
- Descripciones extensas (principales y localizadas)
- Fecha de lanzamiento
- Títulos de series
- Número de temporada
- Número de episodio
- Idioma (e idiomas localizados)
- Períodos de disponibilidad
- Tipos de licencias
- Países
- Géneros
- Etiquetas de proveedores
- Clasificación de contenido (sistema y clasificación)
- Créditos
- Cortes publicitarios
- Puntos de referencia

**Actualización de metadatos (MDU)**

Las actualizaciones de metadatos (MDU) están automatizadas y se procesarán de la misma manera que el contenido que necesita incorporarse a la biblioteca de contenido de Roku Channel. Sigue el procedimiento que se describe a continuación para actualizar solo los metadatos.

Las actualizaciones de metadatos deben entregarse en el mismo formato que los metadatos para la ingesta.

Las actualizaciones de metadatos deben incluir **exactamente el mismo asset_id  que se incluyó cuando se realizó la ingesta del contenido por primera vez.**

*Ponte en contacto con [contentoperations@roku.com](mailto:contentoperations@roku.com) si necesitas un listado completo de los asset_id  tal y como aparecen en el sistema de Roku Channel.* 

Todas las referencias a nombres de archivo deben eliminarse de una actualización de solo metadatos. Esto incluye:

-  nombre de archivo de video fuente
-  nombre de archivo de subtítulos descriptivos
-  nombre de archivo de subtítulos
-  nombre de archivo de audio de doblaje
-  nombres de archivos de arte clave, fondos o ilustraciones de pósters

Algunos campos deben actualizarse en “grupos”. Para que la actualización se procese correctamente, se deben proporcionar todos los campos obligatorios de un grupo. A continuación, se detallan los grupos actuales:

-  Grupo de metadatos (todos los campos obligatorios deben estar presentes para que se pueda actualizar uno de estos):
 -  Idioma (obligatorio)
 -  Título (obligatorio)
 -  Descripción breve (obligatoria)
 -  Descripción extensa (opcional)

-  Grupo de disponibilidad (todos los campos obligatorios deben estar presentes para que se pueda actualizar uno de estos).
 -  Tipo de licencia (obligatoria)
 -  País (obligatorio)
 -  Fecha de inicio (obligatoria)
 -  Fecha de finalización (obligatoria)

Carga la actualización de metadatos en la carpeta “prod” de Aspera

*Si no ves reflejada la actualización en Roku Channel en un plazo de 24 horas, ponte en contacto con [contentoperations@roku.com](mailto:contentoperations@roku.com)* 

**Reemplazos y adiciones de archivos** 

Los reemplazos y las adiciones de archivos están automatizados y se procesarán de la misma manera que el contenido que necesita incorporarse en la biblioteca de contenido de Roku Channel. Un reemplazo de archivo reemplazará a un archivo que existe actualmente en la biblioteca de Roku Channel. Una adición de archivo agregará un nuevo archivo a un registro existente en la biblioteca de Roku Channel. Una adición de archivo se utiliza para agregar subtítulos o doblaje localizados a un registro existente. Sigue el procedimiento que se detalla a continuación para reemplazar uno o varios archivos.

1. Los reemplazos y adiciones de archivos deben entregarse en el mismo formato que los metadatos para la ingesta.
2. Los reemplazos y adiciones de archivos deben incluir **exactamente el mismo asset_id** que se incluyó cuando se realizó la ingesta del contenido por primera vez. 
   - *Ponte en contacto con [contentoperations@roku.com](mailto:contentoperations@roku.com) si necesitas un listado completo de los asset_id tal y como aparecen en el sistema de Roku Channel.* 
3. En el archivo de metadatos solo deben incluirse las referencias a los nombres de los archivos que se reemplazarán o agregarán. Cualquier archivo que no se reemplace o agregue no debe entregarse ni mencionarse en el archivo de metadatos.
4. Si se reemplaza el archivo de video fuente y hay un cambio en la duración de la fuente, cualquier archivo relacionado (subtítulos descriptivos, subtítulos, doblajes de audio) también deberá reemplazarse.
5. Los reemplazos de archivos requieren valores de idioma para su correcta actualización.
6. Carga los metadatos de reemplazo o adición de archivos en la carpeta "prod" de Aspera.

*Se recomienda proporcionar archivos de reemplazo con un nombre único, tanto en los metadatos como en el mismo archivo. Agregar un número de versión (_v2, _v3, etc.) es suficiente. Por ejemplo:* `título de_película_v2.mov`

**Eliminación de contenido** 

Si los derechos cambian desde el momento en que el contenido se entregó originalmente a Roku y es necesario retirarlo de Roku Channel, ya sea de forma inmediata o programada, la fecha de finalización de la disponibilidad se puede cambiar mediante una actualización de metadatos como se define [más adelante](#actualización-de-metadatos-mdu-y-reemplazos-de-archivos). Se deben proporcionar actualizaciones explícitas para todos los territorios en los que se debe eliminar el contenido. Ten en cuenta que las fechas de finalización proporcionadas sin valores de tiempo específicos caducarán a las 11:59:59 p. m. de dicha fecha.

### Requisitos, muestras y esquemas de metadatos XML de Roku

| Esquema XML de Roku                            | Enlace de descarga                                         |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Esquema XML para películas                     | [Descargar aquí](https://go.roku.com/film-xml-schema)      |
| Esquema XML para TV                            | [Descargar aquí](https://go.roku.com/tv-xml-schema)        |
| Esquema XML para clips                         | [Descargar aquí](https://go.roku.com/clip-xml-schema)      |
| **Muestras XML de Roku**                       | **Enlace de descarga**                                     |
| XML anotado para películas de Roku             | [Descargar aquí](https://go.roku.com/film-xml-example)     |
| XML anotado para Roku TV                       | [Descargar aquí](https://go.roku.com/tv-xml-example)       |
| XML anotado para clips de Roku                 | [Descargar aquí](https://go.roku.com/clip-xml-example)     |
| **Muestra de metadatos ADI de Cablelabs**      | **Enlace de descarga**                                     |
| Ejemplo de XML ADI para películas de Cablelabs | [Descargar aquí](https://go.roku.com/film-adi-xml-example) |
| Ejemplo de XML ADI para TV de Cablelabs        | [Descargar aquí](https://go.roku.com/tv-adi-xml-example)   |
| Ejemplo de XML ADI para clips de Cablelabs     | [Descargar aquí](https://go.roku.com/clip-adi-xml-example) |

**NOTA:** Las muestras de ADI de Cablelabs tienen fines ilustrativos y no deben tomarse necesariamente como plantillas. Los datos requeridos deben suministrarse en un nodo estático en cada XML.

------

### XML: campos de metadatos de películas

**package** 

Define el tipo de versión del paquete

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | film5.0           | Obligatorio |

<u>Ejemplo</u> 

```
<package version="film5.0">
```

**provider**

Nombre del estudio, cadena o propietario del contenido

| Xpath XML           | Ejemplo        | Obligatorio |
| ------------------- | -------------- | ----------- |
| `/package/provider` | Roku Originals | Obligatorio |

<u>Ejemplo:</u>

```
<provider>Roku Originals</provider>
```

**language** 

Idioma principal de los metadatos del paquete. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| Xpath XML           | Valores aceptados                                            | Obligatorio |
| ------------------- | ------------------------------------------------------------ | ----------- |
| `/package/language` | [Valor de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<language>en</language>
```

**type** 

Define el tipo de contenido del paquete

| Xpath XML             | Valores aceptados | Obligatorio |
| --------------------- | ----------------- | ----------- |
| `/package/video/type` | film              | Obligatorio |

<u>Ejemplo:</u>

```
<type>film</type>
```

**asset_id** 

Identificador único e inalterable de una película. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres

| Xpath XML                 | Valores aceptados                                            | Obligatorio |
| ------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo | Obligatorio |

<u>Ejemplo:</u>

```
<asset_id>movieAssetIdHere</asset_id>
```

**eidr**


ID de EIDR si existe uno

| Xpath XML             | Valores aceptados           | Obligatorio |
| --------------------- | --------------------------- | ----------- |
| `/package/video/eidr` | Cualquier ID de EIDR válido | Opcional    |

<u>Ejemplo:</u>

```
<eidr></eidr>
```

**tmsId** 

ID de Gracenote si existe uno

| Xpath XML              | Valores aceptados          | Obligatorio |
| ---------------------- | -------------------------- | ----------- |
| `/package/video/tmsId` | Cualquier ID de TMS válido | Opcional    |

<u>Ejemplo:</u>

```
<tmsId></tmsId>
```

**title** 

Título de la película. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)

| Xpath XML              | Ejemplo               | Obligatorio |
| ---------------------- | --------------------- | ----------- |
| `/package/video/title` | Título de la película | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título de la película. Obligatorio.]]></title>
```

**short_synopsis** 

Una breve sinopsis del contenido. Sección CDATA compatible. Límite de 250 caracteres.

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | sinopsis de 250 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve de la película. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**long_synopsis** 

Una sinopsis larga del contenido. Sección CDATA compatible. Límite de 500 caracteres.

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | sinopsis de 500 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo de la película. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**original_spoken_language** 

Define el idioma original de producción del título que se entrega. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                 | Valores aceptados                                            | Obligatorio |
| ----------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/original_spoken_language` | [Valor de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<original_spoken_language>en</original_spoken_language>
```

**country_of_origin** 

Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html).

| Xpath XML                          | Valores aceptados                                            | Obligatorio |
| ---------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

<u>Ejemplo:</u>

```
<country_of_origin>en</ country_of_origin >
```

**closedCaptions** 

Indica si el título entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.

| Xpath XML                       | Valores aceptados | Obligatorio                              |
| ------------------------------- | ----------------- | ---------------------------------------- |
| `/package/video/closedCaptions` | Y o N             | Obligatorio para el contenido en EE. UU. |

<u>Ejemplo:</u>

```
<closedCaptions>Y</closedCaptions>
```

**closedCaptionsExemption** 

Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es obligatorio si el valor `closedCaptions` = “N”

Valores permitidos y sus definiciones:


### XML: campos de metadatos de TV por episodios

**package** 

Define el tipo de versión del paquete

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | tv1.0             | Obligatorio |

<u>Ejemplo:</u>

```
<package version="tv1.0">
```

**provider** 

Nombre del estudio, cadena o propietario del contenido

| Xpath XML           | Ejemplo        | Obligatorio |
| ------------------- | -------------- | ----------- |
| `/package/provider` | Roku Originals | Obligatorio |


<u>Ejemplo:</u>

```
<provider>Roku Originals</provider>
```

**language** 

Idioma principal de los metadatos del paquete. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| Xpath XML           | Valores aceptados                             | Obligatorio |
| ------------------- | --------------------------------------------- | ----------- |
| `/package/language` | [Código de idioma válido](#códigos-de-idioma) | Obligatorio |

<u>Ejemplo:</u>

```
<language>en</language>
```

**type** 

Define el tipo de contenido del paquete

| Xpath XML             | Valores aceptados | Obligatorio |
| --------------------- | ----------------- | ----------- |
| `/package/video/type` | tv                | Obligatorio |

<u>Ejemplo:</u>

```
<type>tv</type>
```

**asset_id** 

Identificador único e inalterable de un episodio. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres

| Xpath XML                 | Valores aceptados                                            | Obligatorio |
| ------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo | Obligatorio |

<u>Ejemplo:</u>

```
<asset_id>episodeAssetIdHere</asset_id>
```

**eidr** 

ID de EIDR si existe uno

| Xpath XML             | Valores aceptados           | Obligatorio |
| --------------------- | --------------------------- | ----------- |
| `/package/video/eidr` | Cualquier ID de EIDR válido | Opcional    |

<u>Ejemplo:</u>

```
<eidr></eidr>
```

**tmsId** 

ID de Gracenote si existe uno

| Xpath XML              | Valores aceptados          | Obligatorio |
| ---------------------- | -------------------------- | ----------- |
| `/package/video/tmsId` | Cualquier ID de TMS válido | Opcional    |

<u>Ejemplo:</u>

```
<tmsId></tmsId>
```

**title** 

Título del episodio. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)

| Xpath XML              | Ejemplo             | Obligatorio |
| ---------------------- | ------------------- | ----------- |
| `/package/video/title` | Título del episodio | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título del episodio. Obligatorio.]]></title>
```

**episodeNumber** 

Posición numérica del episodio dentro de una temporada de una serie. Este valor determinará el orden en que se verán los episodios en la plataforma. Los valores de episodeNumber deben entregarse tal y como se emitieron o exhibieron originalmente en cualquier plataforma. No deben 
proporcionarse números de producción. Solo se permiten valores numéricos (enteros).

| Xpath XML                      | Valores aceptados    | Obligatorio |
| ------------------------------ | -------------------- | ----------- |
| `/package/video/episodeNumber` | Solo números enteros | Obligatorio |

<u>Ejemplo:</u>

```
<episodeNumber>2</episodeNumber>
```

**short_synopsis** 

Una breve sinopsis del episodio. Sección CDATA compatible. Límite de 250 caracteres.

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | sinopsis de 250 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve del episodio. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**long_synopsis** 

Una sinopsis larga del episodio. Sección CDATA compatible. Límite de 500 caracteres.

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | sinopsis de 500 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo del episodio. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**closedCaptions** 

Indica si el episodio entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.

| Xpath XML                       | Valores aceptados | Obligatorio                              |
| ------------------------------- | ----------------- | ---------------------------------------- |
| `/package/video/closedCaptions` | Y o N             | Obligatorio para el contenido en EE. UU. |

<u>Ejemplo:</u>

```
<closedCaptions>Y</closedCaptions>
```

**closedCaptionsExemption** 

Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es obligatorio si el valor `closedCaptions` = “N”

Valores permitidos y sus definiciones:

1 - El contenido nunca se emitió por televisión en Estados Unidos.
2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.
3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.
4 - El contenido no consiste en programación de video de larga duración.
5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).
6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.

| XPath XML                                | Valores aceptados | Obligatorio                       |
| ---------------------------------------- | ----------------- | --------------------------------- |
| `/package/video/closedCaptionsExemption` | 1, 2, 3, 4, 5, 6  | Obligatorio si closedCaptions = N |

<u>Ejemplo:</u>

```
<closedCaptionsExemption>1</closedCaptionsExemption>
```

**release_date** 

Fecha original en la que el episodio estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno

| Xpath XML                     | Valores aceptados                        | Obligatorio |
| ----------------------------- | ---------------------------------------- | ----------- |
| `/package/video/release_date` | Conforme al formato ISO 8601: AAAA-MM-DD | Obligatorio |

<u>Ejemplo:</u>

```
<release_date>AAAA-MM-DD</release_date>
```

**runtime** 

Tiempo de duración total del contenido en minutos enteros

| Xpath XML                | Valores aceptados    | Obligatorio |
| ------------------------ | -------------------- | ----------- |
| `/package/video/runtime` | Solo números enteros | Obligatorio |

<u>Ejemplo:</u>

```
<runtime>120</runtime>
```

**rating** 

Clasificación por edades o de contenido del episodio según una fuente de clasificación. Se facilitará para cada episodio una clasificación válida de TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en [http://tvguidelines.org/](http://tvguidelines.org/) para asignar la clasificación adecuada. Valor de clasificación múltiple

| XPath XML                                                    | Valores aceptados                                            | Obligatorio |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------- |
| `/package/video/ratings/rating` `debe incluir el atributo del sistema` | Consulta [más adelante](#valores-de-clasificación-por-sistema-de-clasificación-y-país) las clasificaciones permitidas por el sistema de clasificación. Se permiten múltiples pares de clasificación y sistemas de clasificación | Obligatorio |

<u>Ejemplo:</u>

```
<ratings>
<rating system="mpaa" reason="For drug content, some sensuality and war violence.">PG-13</rating>
<rating system="bbfc">12A</rating>
<rating system="chvrs">14A</rating>
</ratings>
```

**tag** 

La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.

| Xpath XML                 | Valores aceptados                          | Obligatorio                     |
| ------------------------- | ------------------------------------------ | ------------------------------- |
| `/package/video/tags/tag` | cualquier cadena de menos de 50 caracteres | Opcional, pero MUY recomendable |

<u>Ejemplo:</u>

```
<tags>
<tag>energy</tag>
<tag>dance</tag>
<!-- Etiquetas adicionales aquí-->
</tags>
```

**adBreak start_time** 

Se utiliza para determinar[los cortes publicitarios del contenido financiado con anuncios](#cortes-publicitarios). Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.

| Xpath XML                         | Valores aceptados | Obligatorio                            |
| --------------------------------- | ----------------- | -------------------------------------- |
| `/package/video/adBreaks/adBreak` | HH:MM:SS.sss      | Preferiblemente para el contenido AVOD |

<u>Ejemplo:</u>

```
<adBreaks>
<adBreak>
<start_time>00:03:15.000</start_time>
</adBreak>
<adBreak>
<start_time>00:07:45.425</start_time>
</adBreak>
<!-- adBreaks adicionales aquí-->
</adBreaks>
```

**start_time y end_time de cuePoint** 

Se utiliza para identificar los puntos de entrada y salida de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Las etiquetas cuePoint deben incluir el atributo de tipo. Los valores start_time y end_time de cuePoint deben tener una precisión de milisegundos.

| XPath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cuePoints/cuePoint/start_time` | HH:MM:SS.sss      | Preferido   |
| `/package/video/cuePoints/cuePoint/end_time`   | HH:MM:SS.sss      | Preferido   |

<u>Ejemplo:</u>

```
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

**Atributo de tipo de cuePoint** 

Define el tipo de cuePoint del cuePoint proporcionado dentro del bloque de cuePoints. El atributo de la etiqueta de cuePoint debe ser de tipo y el valor proporcionado debe ser uno de los siguientes valores:

| Valor del tipo      | Descripción                                                  |
| ------------------- | ------------------------------------------------------------ |
| `ad overlay`        | Identifica el cuePoint como el punto dentro del video para anuncios de posicionamiento de productos dentro del programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time |
| `behind the scenes` | Identifica el cuePoint como material de detrás de escena, normalmente al final de un video. En caso de proporcionarse, es obligatorio incluir start_time y end_time |
| `intro`             | Identifica el cuePoint como los créditos iniciales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time |
| `recap`             | Identifica el cuePoint como un resumen de contenido anterior, típico de los programas de televisión por episodios. En caso de proporcionarse, es obligatorio incluir start_time y end_time |
| `end`               | Identifica el cuePoint como los créditos finales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time |



| Xpath XML                           | Valores aceptados                             | Obligatorio                                         |
| ----------------------------------- | --------------------------------------------- | --------------------------------------------------- |
| `/package/video/cuePoints/cuePoint` | Uno de los valores de la enumeración anterior | Obligatorio si se proporcionan puntos de referencia |

<u>Ejemplo:</u>

```
<cuePoint type="intro">
```

**cast display_name** 

Nombre de un miembro del reparto del episodio\*\*.\*\* Sección CDATA compatible.

| XPath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cast/cast_member/display_name` | Nombre Apellido   | Opcional    |

<u>Ejemplo:</u>

```
<cast>
<cast_member>
<display_name><![CDATA[Harrison Ford]]></display_name>
</cast_member>
<!-- Otros miembros del reparto aquí-->
</cast>
```

**crew display_name** 

Nombre de un miembro del equipo de filmación del episodio. Sección CDATA compatible.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| XPath XML                                      | Valores aceptados | Obligatorio                               |
| ---------------------------------------------- | ----------------- | ----------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Nombre Apellido   | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<display_name><![CDATA[George Lucas]]></display_name>
```

**role** 

Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la [enumeración](#funciones-del-equipo-de-filmación) de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| Xpath XML                              | Valores aceptados                                            | Obligatorio                               |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| `/package/video/crew/crew_member/role` | Consulta la [enumeración](#funciones-del-equipo-de-filmación) más adelante | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<role>director</role>
```

**localizations** 

Inicia el bloque de activos que proporciona metadatos localizados del episodio para paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.

| Xpath XML                      | Valores aceptados | Obligatorio |
| ------------------------------ | ----------------- | ----------- |
| `/package/video/localizations` |                   | Obligatorio |

<u>Ejemplo:</u>

```
<localizations>
```

**localization name attribute** 

Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                   | Valores aceptados                                            | Obligatorio |
| ------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/localizations/localization` | [Código de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<localization name="es">
```

**localized title** 

Título localizado del episodio en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del episodio tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD). El `title` localizado debe estar acompañado de una `short_synopsis` localizada y una `long_synopsis` localizada

| XPath XML                                         | Valores aceptados              | Obligatorio |
| ------------------------------------------------- | ------------------------------ | ----------- |
| `/package/video/localizations/localization/title` | Título del episodio localizado | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título del episodio localizado. Obligatorio.]]></title>
```

**localized short_synopsis** 

Una sinopsis breve localizada del episodio en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres. La `short_synopsis` localizada debe estar acompañada de un `title` localizado y una `long_synopsis` localizada

| XPath XML                                                  | Valores aceptados | Obligatorio |
| ---------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve localizado del episodio. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**localized long_synopsis** 

Una sinopsis larga localizada del episodio en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres. La `long_synopsis` localizada debe estar acompañada de un `title` localizado y una `short_synopsis` localizada

| XPath XML                                                 | Valores aceptados | Obligatorio |
| --------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/long_synopsis` | 500 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo localizado del episodio. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**series** 

Inicia el bloque de la serie que hace referencia a los metadatos del programa al que pertenece el episodio. Roku sigue la definición de serie de EE. UU. Los episodios están anidados dentro de una temporada de una serie con la siguiente jerarquía: serie -> temporada -> episodio

| Xpath XML               | Ejemplo | Obligatorio |
| ----------------------- | ------- | ----------- |
| `/package/video/series` |         | Obligatorio |

<u>Ejemplo:</u>

```
<series>
```

**series_id** 

Identificador único e inalterable de una serie. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres

| Xpath XML                         | Valores aceptados                                            | Obligatorio |
| --------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/series/series_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo | Obligatorio |

<u>Ejemplo:</u>

```
<series_id>seriesIdHere</series_id>
```

**title** 

Título de la serie. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)

| Xpath XML                     | Ejemplo             | Obligatorio |
| ----------------------------- | ------------------- | ----------- |
| `/package/video/series/title` | Título del episodio | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título del episodio. Obligatorio.]]></title>
```

**short_synopsis** 

Una breve sinopsis de la serie. Sección CDATA compatible. Límite de 250 caracteres.

| Xpath XML                              | Valores aceptados          | Obligatorio |
| -------------------------------------- | -------------------------- | ----------- |
| `/package/video/series/short_synopsis` | sinopsis de 250 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve del episodio. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**long_synopsis** 

Una sinopsis larga de la serie. Sección CDATA compatible. Límite de 500 caracteres.

| Xpath XML                             | Valores aceptados          | Obligatorio |
| ------------------------------------- | -------------------------- | ----------- |
| `/package/video/series/long_synopsis` | sinopsis de 500 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo del episodio. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**original_spoken_language** 

Define el idioma original de producción del episodio que se entrega. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                        | Valores aceptados                                            | Obligatorio |
| ------------------------------------------------ | ------------------------------------------------------------ | ----------- |
| `/package/video/series/original_spoken_language` | [Código de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<original_spoken_language>en</original_spoken_language>
```

**country_of_origin** 

Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html).

| XPath XML                                 | Valores aceptados                                            | Obligatorio |
| ----------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/series/country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

<u>Ejemplo:</u>

```
<country_of_origin>US</ country_of_origin>
```

**release_date** 

Fecha original en la que la serie estuvo disponible por primera vez en cualquier presentación. Suele coincidir con la fecha del primer episodio de la serie. Debe incluir, como mínimo, el año correcto del estreno

| Xpath XML                            | Valores aceptados                        | Obligatorio |
| ------------------------------------ | ---------------------------------------- | ----------- |
| `/package/video/series/release_date` | Conforme al formato ISO 8601: AAAA-MM-DD | Obligatorio |

<u>Ejemplo:</u>

```
<release_date>AAAA-MM-DD</release_date>
```

**genre** 

Clasificación del contenido por género. Roku requiere que cada episodio se entregue con al menos un género compatible. Consulta la [enumeración](#géneros) de los géneros que admite Roku.

| Xpath XML                            | Valores aceptados                                            | Obligatorio |
| ------------------------------------ | ------------------------------------------------------------ | ----------- |
| `/package/video/series/genres/genre` | Consulta la [enumeración](#géneros) más adelante. Pueden enviarse hasta 10 géneros por título | Obligatorio |

<u>Ejemplo:</u>

```
<genres>
<genre>drama</genre>
<!-- Géneros adicionales aquí-->
</genres>
```

**tag** 

La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.

| Xpath XML                        | Valores aceptados                          | Obligatorio                     |
| -------------------------------- | ------------------------------------------ | ------------------------------- |
| `/package/video/series/tags/tag` | cualquier cadena de menos de 50 caracteres | Opcional, pero MUY recomendable |

<u>Ejemplo:</u>

```
<tags>
<tag>energy</tag>
<tag>dance</tag>
<!-- Etiquetas adicionales aquí-->
</tags>
```

**cast display_name** 

Nombre de un miembro del reparto de la serie\*\*.\*\* Sección CDATA compatible.

| XPath XML                                             | Valores aceptados | Obligatorio |
| ----------------------------------------------------- | ----------------- | ----------- |
| `/package/video/series/cast/cast_member/display_name` | Nombre Apellido   | Opcional    |

<u>Ejemplo:</u>

```
<cast>
<cast_member>
<display_name><![CDATA[Harrison Ford]]></display_name>
</cast_member>
<!-- Otros miembros del reparto aquí-->
</cast>
```

**crew display_name** 

Nombre de un miembro del equipo de filmación de la serie. Sección CDATA compatible.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| XPath XML                                             | Valores aceptados | Obligatorio                               |
| ----------------------------------------------------- | ----------------- | ----------------------------------------- |
| `/package/video/series/crew/crew_member/display_name` | Nombre Apellido   | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<display_name><![CDATA[George Lucas]]></display_name>
```

**role** 

Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la [enumeración](#funciones-del-equipo-de-filmación) de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| XPath XML                                     | Valores aceptados                                            | Obligatorio                               |
| --------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| `/package/video/series/crew/crew_member/role` | Consulta la [enumeración](#funciones-del-equipo-de-filmación) más adelante | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<role>director</role>
```

**localizations** 

Inicia el bloque de activos que proporciona metadatos localizados para la serie en paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.

| Xpath XML                             | Valores aceptados | Obligatorio |
| ------------------------------------- | ----------------- | ----------- |
| `/package/video/series/localizations` |                   | Obligatorio |

<u>Ejemplo:</u>

```
<localizations>
```

**localization name attribute** 

Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                          | Valores aceptados                                            | Obligatorio |
| -------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/series/localizations/localization` | [Código de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<localization name="es">
```

**localized title** 

Título localizado de la serie en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD). El `title` localizado debe estar acompañado de una `short_synopsis` localizada y una `long_synopsis` localizada

| XPath XML                                                | Valores aceptados              | Obligatorio |
| -------------------------------------------------------- | ------------------------------ | ----------- |
| `/package/video/series/localizations/localization/title` | Título del episodio localizado | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título del episodio localizado. Obligatorio.]]></title>
```

**localized short_synopsis** 

Una sinopsis breve localizada de la serie en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres. La `short_synopsis` localizada debe estar acompañada de un `title` localizado y una `long_synopsis` localizada

| XPath XML                                                    | Valores aceptados | Obligatorio |
| ------------------------------------------------------------ | ----------------- | ----------- |
| `/package/video/series/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve localizado del episodio. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**localized long_synopsis** 

Una sinopsis larga localizada de la serie en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres. La `long_synopsis` localizada debe estar acompañada de un `title` localizado y una `short_synopsis` localizada

| XPath XML                                                    | Valores aceptados | Obligatorio |
| ------------------------------------------------------------ | ----------------- | ----------- |
| `/package/video/series/localizations/localization/long_synopsis` | 500 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo localizado del episodio. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**season** 

Inicia el bloque de la temporada que hace referencia a los metadatos para la temporada de la serie a la que pertenece el episodio. Roku sigue la definición de serie de EE. UU. Los episodios están anidados dentro de una temporada de una serie con la siguiente jerarquía: serie -> temporada -> episodio

| Xpath XML               | Ejemplo | Obligatorio |
| ----------------------- | ------- | ----------- |
| `/package/video/season` |         | Obligatorio |

<u>Ejemplo:</u>

```
<season>
```

**season_id** 

Identificador único e inalterable de una temporada. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres

| Xpath XML                         | Valores aceptados                                            | Obligatorio |
| --------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/season/season_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo | Obligatorio |

<u>Ejemplo:</u>

```
<season_id>seasonIdHere</season_id>
```


**seasonNumber** 

Posición numérica de la temporada dentro de una serie. Este valor determinará el orden en que se verán los episodios subyacentes en la plataforma. Los valores de seasonNumber deben entregarse tal y como se emitieron o exhibieron originalmente en cualquier plataforma. Solo se permiten valores numéricos (enteros).

| Xpath XML                            | Valores aceptados    | Obligatorio |
| ------------------------------------ | -------------------- | ----------- |
| `/package/video/season/seasonNumber` | Solo números enteros | Obligatorio |

<u>Ejemplo:</u>

```
<seasonNumber>2</seasonNumber>
```

**playOptions** 

Inicia el bloque de activos que proporciona la información de disponibilidad del paquete. playOptions consiste en la disponibilidad por país o territorio, el tipo de monetización y las fechas de inicio y fin de la disponibilidad del título en el paquete.

| Xpath XML                    | Valores aceptados | Obligatorio |
| ---------------------------- | ----------------- | ----------- |
| `/package/video/playOptions` |                   | Obligatorio |

<u>Ejemplo:</u>

```
<playOptions>
```

**country** 

Código de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.

| XPath XML                                       | Valores aceptados | Obligatorio |
| ----------------------------------------------- | ----------------- | ----------- |
| `/package/video/playOptions/playOption/country` | US CA GB MX       | Preferido   |

<u>Ejemplo:</u>

```
<playOption>
<country>US</country>
<!-- Otros nodos de país aquí -->
</playOption>
```

**vodType** 

Tipo de monetización del episodio. Se pueden proporcionar varios nodos vodType, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.

| XPath XML                                       | Valores aceptados | Obligatorio |
| ----------------------------------------------- | ----------------- | ----------- |
| `/package/video/playOptions/playOption/vodType` | AVOD SVOD         | Preferido   |

<u>Ejemplo:</u>

```
<playOption>
<vodType>AVOD</vodType>
<!-- Otros nodos vodType aquí -->
</playOption>
```

**licensePeriodStart** 

Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodStart por playOption. Las fechas de licensePeriodStart deben ser cronológicamente anteriores a las de licensePeriodEnd. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas

| XPath XML                                                  | Valores aceptados                                 | Obligatorio |
| ---------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS | Opcional    |

<u>Ejemplo:</u>

```
<playOption>
<licensePeriodStart>AAAA-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

**licensePeriodEnd** 

Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodEnd por playOption. Las fechas de licensePeriodEnd deben ser cronológicamente posteriores a las de licensePeriodStart. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas

| XPath XML                                                | Valores aceptados                                 | Obligatorio |
| -------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS | Opcional    |

<u>Ejemplo:</u>

```
<playOption>
<licensePeriodEnd>AAAA-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

**assets** 

Inicia el bloque de activos que hace referencia a los archivos entregados en el paquete

| Xpath XML               | Valores aceptados  | Obligatorio |
| ----------------------- | ------------------ | ----------- |
| `/package/video/assets` | media_type="video" | Obligatorio |

<u>Ejemplo:</u>

```
<assets media_type="video">
```

**data_file** 
**full source** 

El bloque que describe el archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="source". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio |
| --------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="source"` | Obligatorio |

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="source">
```

**full captions** 

El bloque que describe los subtítulos descriptivos del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="captions". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio            |
| --------------------------------------- | ------------------------------------------------------------ | ---------------------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="captions"` | Obligatorio en EE. UU. |

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="captions">
```

**full audio** 

El bloque que describe el audio sidecar del archivo de video fuente. El archivo de audio puede ser un doblaje completo para la traducción lingüística o una pista de audio descriptivo para fines de accesibilidad. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="audio" para el doblaje de traducción o role=”audio.descriptive” para fines de accesibilidad. También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio                              |
| --------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="audio"` `data_file role="audio.descriptive"` | Opcional \*se prefiere audio.descriptive |

**el audio sidecar puede requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución o para cumplir con las normativas de la FCC**

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="audio">
```

**full subtitles** 

El bloque que describe los subtítulos sidecar del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="subtitles". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                                                    | Valores aceptados                                            | Obligatorio |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file`                      | Valores de atributos: `asset type="full` `data_file role="subtitles"` | Opcional\*  |
| \* *los subtítulos sidecar pueden requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución.* |                                                              |             |

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="subtitles">
```

**artwork** 

El bloque que describe los archivos de ilustración. El atributo de la etiqueta del activo debe ser type="artwork". El atributo de la etiqueta data_file puede ser type="episode" para la entrega de imágenes al nivel del episodio, o type="series" para la entrega de imágenes al nivel de la serie. También se requieren  los nodos <locale> y <file_name>. Consulta [Ilustraciones](#ilustraciones) para conocer las especificaciones completas sobre la entrega de imágenes.

| Xpath XML                               | Valores aceptados                                            | Obligatorio |
| --------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="artwork"` `data_file type="episode"` | Preferido   |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="artwork"` `data_file type="series"` | Preferido   |

<u>Ejemplo:</u>

```
<asset type="artwork">
<data_file role="episode">
<asset type="artwork">
<data_file role="series">
```

**locale** 

Identifica el idioma del data_file. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).
Aplica para las funciones del data_file: fuente, subtítulos descriptivos, audio, subtítulos y para el tipo de activo de ilustración.

| XPath XML                                      | Valores aceptados                                 | Obligatorio |
| ---------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file/locale` | [Código de idioma compatible](#códigos-de-idioma) | Obligatorio |

<u>Ejemplo:</u>

```
<locale name="en"/>
```

**file_name** 

Nombre de archivo del activo indicado en el atributo de tipo o función del data_file. Todos los valores de file_name distinguen entre mayúsculas y minúsculas y deben tener la extensión de archivo adecuada.
En el caso de los archivos de ilustraciones, el atributo de la etiqueta file_name puede omitirse (para indicar arte clave), o ser type="background_image" o type="thumbnail_boxcover".


<table>
<thead>
<tr>
<th>XPath XML</th>
<th>Valores aceptados</th>
<th>Obligatorio</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/package/video/assets/asset/data_file/file_name</code></td>
<td>Consulta las especificaciones para la entrega de activos más adelante</td>
<td>Obligatorio para cada activo entregado</td>
</tr>
<tr>
<td><code>/package/video/assets/asset/data_file/file_name</code></td>
<td></td>
<td>Obligatorio</td>
</tr>
<tr>
<td><code>/package/video/assets/asset/data_file/file_name</code></td>
<td>Valores de atributos:<br /><code>type="background_image"</code></td>
<td>Preferido</td>
</tr>
<tr>
<td><code>/package/video/assets/asset/data_file/file_name</code></td>
<td>Valores de atributos:<br /><code>type="thumbnail_boxcover"</code></td>
<td>Preferido</td>
</tr>
</tbody>
</table>


<u>Ejemplo:</u>

```
<file_name>VideoFilename.mxf</file_name>
```

**audio** 

[Descriptor de diseño de audio](#audio-descriptivo) para el archivo de video entregado. Consulta las pautas más adelante

| XPath XML                                     | Valores aceptados                                            | Obligatorio |
| --------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file/audio` | Valores permitidos: stereoOnly surroundOnly stereoPlusSurround surroundPlusStereo | Opcional    |

<u>Ejemplo:</u>

```
<audio>stereoOnly</audio>
```

------

### XML: campos de metadatos de clips de formato corto

**package** 

Define el tipo de versión del paquete

| Xpath XML           | Valores aceptados | Obligatorio |
| ------------------- | ----------------- | ----------- |
| `/package/@version` | clip1.0           | Obligatorio |

<u>Ejemplo:</u>

```
<package version="clip1.0">
```

**provider** 

Nombre del estudio, cadena o propietario del contenido

| Xpath XML           | Valores aceptados       | Obligatorio |
| ------------------- | ----------------------- | ----------- |
| `/package/provider` | Ejemplo: Roku Originals | Obligatorio |

<u>Ejemplo:</u>

```
<provider>Roku Originals</provider>
```

**language** 

Idioma principal de los metadatos del paquete. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| Xpath XML           | Valores aceptados                             | Obligatorio |
| ------------------- | --------------------------------------------- | ----------- |
| `/package/language` | [Código de idioma válido](#códigos-de-idioma) | Obligatorio |

<u>Ejemplo:</u>

```
<language>en</language>
```

**type** 

Define el tipo de contenido del paquete

| Xpath XML             | Valores aceptados | Obligatorio |
| --------------------- | ----------------- | ----------- |
| `/package/video/type` | clip              | Obligatorio |

<u>Ejemplo:</u>

```
<type>clip</type>
```

**subType** 

Define el subType (subtipo) de contenido del paquete. Actualmente Roku no admite conexiones principales y secundarias de forma nativa. El contenido auxiliar o relacionado puede entregarse e identificarse con uno de los siguientes subtipos (subTypes). *No existe ningún vínculo entre los activos principales y secundarios* 


<table>
<thead>
<tr>
<th>Xpath XML</th>
<th>Valores aceptados</th>
<th>Obligatorio</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/package/video/subType</code></td>
<td><ul><li>trailer</li><li>highlight</li><li>making_of</li><li>behind_scenes</li><li>interview</li><li>related</li><li>recap</li><li>extra</li></ul><hr /></td>
<td>Opcional</td>
</tr>
</tbody>
</table>


<u>Ejemplo:</u>

```
<subType>trailer</subType>
```

**asset_id** 

Identificador único e inalterable de un clip de formato corto La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres

| Xpath XML                 | Valores aceptados                                            | Obligatorio |
| ------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/asset_id` | Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo | Obligatorio |

<u>Ejemplo:</u>

```
<asset_id>clipAssetIdHere</asset_id>
```

**eidr** 

ID de EIDR si existe uno

| Xpath XML             | Valores aceptados           | Obligatorio |
| --------------------- | --------------------------- | ----------- |
| `/package/video/eidr` | Cualquier ID de EIDR válido | Opcional    |

<u>Ejemplo:</u>

```
<eidr></eidr>
```

**tmsId** 

ID de Gracenote si existe uno

| Xpath XML              | Valores aceptados          | Obligatorio |
| ---------------------- | -------------------------- | ----------- |
| `/package/video/tmsId` | Cualquier ID de TMS válido | Opcional    |

<u>Ejemplo:</u>

```
<tmsId></tmsId>
```

**title** 

Título de clip de formato corto Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)

| Xpath XML              | Ejemplo         | Obligatorio |
| ---------------------- | --------------- | ----------- |
| `/package/video/title` | Título del clip | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título del clip. Obligatorio.]]></title>
```

**short_synopsis** 

Una breve sinopsis del contenido. Sección CDATA compatible. Límite de 250 caracteres.

| Xpath XML                       | Valores aceptados          | Obligatorio |
| ------------------------------- | -------------------------- | ----------- |
| `/package/video/short_synopsis` | sinopsis de 250 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve del clip. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**long_synopsis** 

Una sinopsis larga del contenido. Sección CDATA compatible. Límite de 500 caracteres.

| Xpath XML                      | Valores aceptados          | Obligatorio |
| ------------------------------ | -------------------------- | ----------- |
| `/package/video/long_synopsis` | sinopsis de 500 caracteres | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo del clip. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**original_spoken_language** 

Define el idioma original de producción del título que se entrega. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                 | Valores aceptados                                            | Obligatorio |
| ----------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/original_spoken_language` | [Código de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<original_spoken_language>en</original_spoken_language>
```

**country_of_origin** 

Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html).

| Xpath XML                          | Valores aceptados                                            | Obligatorio |
| ---------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/country_of_origin` | Código de país válido de 2 caracteres según [ISO 3166-1 alfa 2](https://www.iso.org/iso-3166-country-codes.html) | Preferido   |

<u>Ejemplo:</u>

```
<country_of_origin>en</country_of_origin >
```

**closedCaptions** 

Indica si el título entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.

| Xpath XML                       | Valores aceptados | Obligatorio                              |
| ------------------------------- | ----------------- | ---------------------------------------- |
| `/package/video/closedCaptions` | Y o N             | Obligatorio para el contenido en EE. UU. |

<u>Ejemplo:</u>

```
<closedCaptions>Y</closedCaptions>
```

**closedCaptionsExemption** 

Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es obligatorio si el valor `closedCaptions` = “N”

Valores permitidos y sus definiciones:

1 - El contenido nunca se emitió por televisión en Estados Unidos.
2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.
3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.
4 - El contenido no consiste en programación de video de larga duración.
5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).
6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.

| XPath XML                                | Valores aceptados | Obligatorio                       |
| ---------------------------------------- | ----------------- | --------------------------------- |
| `/package/video/closedCaptionsExemption` | 1, 2, 3, 4, 5, 6  | Obligatorio si closedCaptions = N |

<u>Ejemplo:</u>

```
<closedCaptionsExemption>1</closedCaptionsExemption>
```

**release_date** 

Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno

| Xpath XML                     | Valores aceptados                        | Obligatorio |
| ----------------------------- | ---------------------------------------- | ----------- |
| `/package/video/release_date` | Conforme al formato ISO 8601: AAAA-MM-DD | Obligatorio |

<u>Ejemplo:</u>

```
<release_date>AAAA-MM-DD</release_date>
```

**runtime** 

Tiempo de duración total del contenido en minutos enteros

| Xpath XML                | Valores aceptados    | Obligatorio |
| ------------------------ | -------------------- | ----------- |
| `/package/video/runtime` | Solo números enteros | Obligatorio |

<u>Ejemplo:</u>

```
<runtime>120</runtime>
```

**genre** 

Clasificación del contenido por género. Roku requiere que cada clip de formato corto se entregue con al menos un género compatible. Consulta la [enumeración](#géneros) de los géneros que admite Roku.

| Xpath XML                     | Valores aceptados                                            | Obligatorio |
| ----------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/genres/genre` | Consulta la [enumeración](#géneros) más adelante. Pueden enviarse hasta 10 géneros por título | Obligatorio |

<u>Ejemplo:</u>

```
<genres>
<genre>drama</genre>
<!-- Géneros adicionales aquí-->
</genres>
```

**rating** 

Clasificación por edades o de contenido del clip de formato corto según una fuente de clasificación. Se facilitará para cada clip de formato corto una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en [http://tvguidelines.org/](http://tvguidelines.org/) para asignar la clasificación adecuada. Valor de clasificación múltiple

| XPath XML                                                    | Valores aceptados                                            | Obligatorio |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------- |
| `/package/video/ratings/rating` `debe incluir el atributo del sistema` | Consulta [más adelante](#valores-de-clasificación-por-sistema-de-clasificación-y-país) las clasificaciones permitidas por el sistema de clasificación. Se permiten múltiples pares de clasificación y sistemas de clasificación | Obligatorio |

<u>Ejemplo:</u>

```
<ratings>
<rating system="mpaa" reason="For drug content, some sensuality and war violence.">PG-13</rating>
<rating system="bbfc">12A</rating>
<rating system="chvrs">14A</rating>
</ratings>
```

**tag** 

La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.

| Xpath XML                 | Valores aceptados                          | Obligatorio                     |
| ------------------------- | ------------------------------------------ | ------------------------------- |
| `/package/video/tags/tag` | cualquier cadena de menos de 50 caracteres | Opcional, pero MUY recomendable |

<u>Ejemplo:</u>

```
<tags>
<tag>energy</tag>
<tag>dance</tag>
<!-- Etiquetas adicionales aquí-->
</tags>
```

**cast display_name** 

Nombre de un miembro del reparto\*\*.\*\* Sección CDATA compatible.

| XPath XML                                      | Valores aceptados | Obligatorio |
| ---------------------------------------------- | ----------------- | ----------- |
| `/package/video/cast/cast_member/display_name` | Nombre Apellido   | Opcional    |

<u>Ejemplo:</u>

```
<cast>
<cast_member>
<display_name><![CDATA[Harrison Ford]]></display_name>
</cast_member>
<!-- Otros miembros del reparto aquí-->
</cast>
```

**crew display_name** 

Nombre de un miembro del equipo de filmación. Sección CDATA compatible.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| XPath XML                                      | Valores aceptados | Obligatorio                               |
| ---------------------------------------------- | ----------------- | ----------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Nombre Apellido   | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<display_name><![CDATA[George Lucas]]></display_name>
```

**role** 

Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la [enumeración](#funciones-del-equipo-de-filmación) de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.
\*NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel

| Xpath XML                              | Valores aceptados                                            | Obligatorio                               |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| `/package/video/crew/crew_member/role` | Consulta la [enumeración](#funciones-del-equipo-de-filmación) más adelante | Obligatorio si se proporciona crew_member |

<u>Ejemplo:</u>

```
<role>director</role>
```

**localizations** 

Inicia el bloque de activos que proporciona metadatos localizados para paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.

| Xpath XML                      | Valores aceptados | Obligatorio |
| ------------------------------ | ----------------- | ----------- |
| `/package/video/localizations` |                   | Obligatorio |

<u>Ejemplo:</u>

```
<localizations>
```

**localization name attribute** 

Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).

| XPath XML                                   | Valores aceptados                                            | Obligatorio |
| ------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/localizations/localization` | [Código de idioma](#códigos-de-idioma) válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.) | Obligatorio |

<u>Ejemplo:</u>

```
<localization name="es">
```

**localized title** 

Título localizado del clip de formato corto en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)

| XPath XML                                         | Ejemplo                    | Obligatorio |
| ------------------------------------------------- | -------------------------- | ----------- |
| `/package/video/localizations/localization/title` | Título localizado del clip | Obligatorio |

<u>Ejemplo:</u>

```
<title><![CDATA[Título localizado del clip. Obligatorio.]]></title>
```

**localized short_synopsis** 

Una sinopsis breve localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres.

| XPath XML                                                  | Valores aceptados | Obligatorio |
| ---------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/short_synopsis` | 250 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<short_synopsis><![CDATA[Resumen breve localizado del clip. 250 caracteres como máximo. Obligatorio]]></short_synopsis>
```

**localized long_synopsis** 

Una sinopsis larga localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres.

| XPath XML                                                 | Valores aceptados | Obligatorio |
| --------------------------------------------------------- | ----------------- | ----------- |
| `/package/video/localizations/localization/long_synopsis` | 500 caracteres    | Obligatorio |

<u>Ejemplo:</u>

```
<long_synopsis><![CDATA[Resumen largo localizado del clip. 500 caracteres como máximo. Obligatorio.]]></long_synopsis>
```

**playOptions** 

Inicia el bloque de activos que proporciona la información de disponibilidad del paquete. playOptions consiste en la disponibilidad por país o territorio, el tipo de monetización y las fechas de inicio y fin de la disponibilidad del título en el paquete.

| Xpath XML                    | Valores aceptados | Obligatorio |
| ---------------------------- | ----------------- | ----------- |
| `/package/video/playOptions` |                   | Obligatorio |

<u>Ejemplo:</u>

```
<playOptions>
```

**country** 

Código de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.

| XPath XML                                       | Valores aceptados | Obligatorio |
| ----------------------------------------------- | ----------------- | ----------- |
| `/package/video/playOptions/playOption/country` | US CA GB MX       | Preferido   |

<u>Ejemplo:</u>

```
<playOption>
<country>US</country>
<!-- Otros nodos de país aquí -->
</playOption>
```

**vodType** 

Tipo de monetización del clip de formato corto Se pueden proporcionar varios nodos vodType, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.

| XPath XML                                       | Valores aceptados | Obligatorio |
| ----------------------------------------------- | ----------------- | ----------- |
| `/package/video/playOptions/playOption/vodType` | AVOD SVOD         | Preferido   |

<u>Ejemplo:</u>

```
<playOption>
<vodType>AVOD</vodType>
<!-- Otros nodos vodType aquí -->
</playOption>
```

**licensePeriodStart** 

Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de `licensePeriodStart` por playOption. Las fechas de licensePeriodStart deben ser cronológicamente anteriores a las de licensePeriodEnd. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas

| XPath XML                                                  | Valores aceptados                                 | Obligatorio |
| ---------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS | Opcional    |

<u>Ejemplo:</u>

```
<playOption>
<licensePeriodStart>AAAA-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

**licensePeriodEnd** 

Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de `licensePeriodEnd` por playOption. Las fechas de licensePeriodEnd deben ser cronológicamente posteriores a las de licensePeriodStart. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas

| XPath XML                                                | Valores aceptados                                 | Obligatorio |
| -------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS | Opcional    |

<u>Ejemplo:</u>

```
<playOption>
<licensePeriodEnd>AAAA-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

**assets** 

Inicia el bloque de activos que hace referencia a los archivos entregados en el paquete

| Xpath XML               | Valores aceptados  | Obligatorio |
| ----------------------- | ------------------ | ----------- |
| `/package/video/assets` | media_type="video" | Obligatorio |

<u>Ejemplo:</u>

```
<assets media_type="video">
```

**data_file** 
**full source** 

El bloque que describe el archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="source". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio |
| --------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="source"` | Obligatorio |

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="source">
```

**full captions** 

El bloque que describe los subtítulos descriptivos del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="captions". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio            |
| --------------------------------------- | ------------------------------------------------------------ | ---------------------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="captions"` | Obligatorio en EE. UU. |

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="captions">
```

**full audio** 

El bloque que describe el audio sidecar del archivo de video fuente. El archivo de audio puede ser un doblaje completo para la traducción lingüística o una pista de audio descriptivo para fines de accesibilidad. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="audio" para el doblaje de traducción o role=”audio.descriptive” para fines de accesibilidad. También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio                              |
| --------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="audio"` `data_file role="audio.descriptive"` | Opcional \*se prefiere audio.descriptive |

*el audio sidecar puede requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución o para cumplir con las normativas de la FCC*

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="audio">
```

**full subtitles** 

El bloque que describe los subtítulos sidecar del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="subtitles". También se requieren  los nodos <locale> y <file_name>

| Xpath XML                               | Valores aceptados                                            | Obligatorio |
| --------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="full"` `data_file role="subtitles"` | Opcional\*  |

*los subtítulos sidecar pueden requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución.*

<u>Ejemplo:</u>

```
<asset type="full">
<data_file role="subtitles">
```

**artwork** 

El bloque que describe los archivos de ilustración. El atributo de la etiqueta del activo debe ser type="artwork". También se requieren  los nodos <locale> y <file_name>. Consulta [Ilustraciones](#ilustraciones) para conocer las especificaciones completas sobre la entrega de imágenes.

| Xpath XML                               | Valores aceptados                            | Obligatorio |
| --------------------------------------- | -------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file` | Valores de atributos: `asset type="artwork"` | Obligatorio |

<u>Ejemplo:</u>

```
<asset type="artwork">
<data_file>
```

**locale** 
Identifica el idioma del data_file. Como mínimo, el valor debe ajustarse a un [código de idioma compatible](#códigos-de-idioma). Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).
Aplica para las funciones del data_file: fuente, subtítulos descriptivos, audio y subtítulos, y para el tipo de activo de ilustración.

| XPath XML                                      | Valores aceptados                                 | Obligatorio |
| ---------------------------------------------- | ------------------------------------------------- | ----------- |
| `/package/video/assets/asset/data_file/locale` | [Código de idioma compatible](#códigos-de-idioma) | Obligatorio |

<u>Ejemplo:</u>

```
<locale name="en"/>
```

**file_name** 

Nombre de archivo del activo indicado en el atributo de tipo o función del data_file. Todos los valores de file_name distinguen entre mayúsculas y minúsculas y deben tener la extensión de archivo adecuada.

| XPath XML                                         | Valores aceptados                                            | Obligatorio                            |
| ------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------- |
| `/package/video/assets/asset/data_file/file_name` | Consulta las especificaciones para la entrega de activos más adelante | Obligatorio para cada activo entregado |

<u>Ejemplo:</u>

```
<file_name>VideoFilename.mxf</file_name>
```

**audio** 

[Descriptor de diseño de audio](#audio-descriptivo) para el archivo de video entregado. Consulta las pautas más adelante

| XPath XML                                     | Valores aceptados                                            | Obligatorio |
| --------------------------------------------- | ------------------------------------------------------------ | ----------- |
| `/package/video/assets/asset/data_file/audio` | Valores permitidos: stereoOnly surroundOnly stereoPlusSurround surroundPlusStereo | Opcional    |

<u>Ejemplo:</u>

```
<audio>stereoOnly</audio>
```

**parentInfo** 

Inicia el bloque de activos que proporciona la información principal del paquete. parentInfo consta del contentType, título del episodio o película, duración del episodio o película, releaseDate, ID de TMS, seriesTitle, seasonNumber y episodeNumber del contenido principal. Se utiliza en combinación con un subType válido

| Xpath XML                   | Valores aceptados | Obligatorio |
| --------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo` |                   | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
```

**contentType** 
Tipo de contenido del contenido principal del cual se deriva o describe el clip

| Xpath XML                               | Valores aceptados    | Obligatorio |
| --------------------------------------- | -------------------- | ----------- |
| `/package/video/parentInfo/contentType` | episode movie series | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<contentType>episode</contentType>
</parentInfo>
```

**title** 

Título del programa principal si este es una película o un episodio

| Xpath XML                         | Valores aceptados                       | Obligatorio |
| --------------------------------- | --------------------------------------- | ----------- |
| `/package/video/parentInfo/title` | Título de la película o serie principal | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<title>Título de la película o serie principal</title>
</parentInfo>
```

**runtime** 

Duración del programa principal si este es una película o episodio

| Xpath XML                           | Valores aceptados | Obligatorio |
| ----------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/runtime` | Números enteros   | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<runtime>45</runtime>
</parentInfo>
```

**releaseDate** 

Fecha de estreno de la película, episodio o serie principal

| Xpath XML                               | Valores aceptados                        | Obligatorio |
| --------------------------------------- | ---------------------------------------- | ----------- |
| `/package/video/parentInfo/releaseDate` | Conforme al formato ISO 8601: AAAA-MM-DD | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<releaseDate>AAAA-MM-DD</releaseDate>
</parentInfo>
```

**tmsId** 

ID de TMS de la película, episodio o serie principal

| Xpath XML                         | Valores aceptados | Obligatorio |
| --------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/tmsId` | ID de TMS válido  | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<tmsId>TMSID</tmsId>
</parentInfo>
```

**seriesTitle** 

Título de la serie del programa principal si este es un episodio

| Xpath XML                               | Valores aceptados            | Obligatorio |
| --------------------------------------- | ---------------------------- | ----------- |
| `/package/video/parentInfo/seriesTitle` | Título de la serie principal | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<seriesTitle>Título de la serie principal</seriesTitle>
</parentInfo>
```

**seasonNumber** 

Número de temporada del programa principal si este es un episodio

| XPath XML                                | Valores aceptados | Obligatorio |
| ---------------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/seasonNumber` | Números enteros   | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<seasonNumber>2</seasonNumber>
</parentInfo>
```

**episodeNumber** 

Número de episodio del programa principal si este es un episodio

| XPath XML                                 | Valores aceptados | Obligatorio |
| ----------------------------------------- | ----------------- | ----------- |
| `/package/video/parentInfo/episodeNumber` | Números enteros   | Opcional    |

<u>Ejemplo:</u>

```
<parentInfo>
<episodeNumber>14</episodeNumber>
</parentInfo>
```

**sportType** 

Nombre del deporte que aparece en el clip o momento destacado

| Xpath XML                  | Valores aceptados  | Obligatorio                        |
| -------------------------- | ------------------ | ---------------------------------- |
| `/package/video/sportType` | Nombre del deporte | Obligatorio para clips de deportes |

<u>Ejemplo:</u>

```
<sportType>Baseball</sportType>
```

**sportLeague** 

Nombre de la liga deportiva que aparece en el clip o momento destacado

| Xpath XML                    | Valores aceptados           | Obligatorio                        |
| ---------------------------- | --------------------------- | ---------------------------------- |
| `/package/video/sportLeague` | Nombre de la liga deportiva | Obligatorio para clips de deportes |

<u>Ejemplo:</u>

```
<sportLeague>MLB</sportLeague>
```

**teams** 

Equipos que aparecen en el clip o momento destacado deportivo. Las condiciones de local y visitante de los equipos se definirán en el atributo de Ubicación
*En este momento, Roku solo admite metadatos de participantes basados en equipos. Los deportes individuales serán compatibles en el futuro* 

| Xpath XML                   | Valores aceptados                                            | Obligatorio                        |
| --------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| `/package/video/teams/team` | Valores de atributos: `team location="away"` `team location="home"` | Obligatorio para clips de deportes |

<u>Ejemplo:</u>

```
<teams>
	<team location="away">Chicago Cubs</team>
	<team location="home">St. Louis Cardinals</team>
</teams>
```

------

### Pautas y plantillas de metadatos de Excel de Roku

Los metadatos de Excel solo se aceptarán si se entregan en los formatos aprobados por ROKU que se indican a continuación:

| Metadatos de Excel                             | Enlace de descarga                                        |
| ---------------------------------------------- | --------------------------------------------------------- |
| Plantilla de metadatos de Excel para películas | [Descargar aquí](https://go.roku.com/film-excel-template) |
| Plantilla de metadatos de Excel para TV        | [Descargar aquí](https://go.roku.com/tv-excel-template)   |
| Plantilla de metadatos de Excel para clips     | [Descargar aquí](https://go.roku.com/clip-excel-template) |

La plantilla de metadatos de Excel de Roku debe enviarse con todos los campos obligatorios completos. Roku incluyó consejos en la fila 2 de cada plantilla de metadatos en los que se indica qué celdas se deben resaltar y el formato especial necesario para cada celda. Consulta estos consejos al momento de completar la plantilla de metadatos de Excel. Otras cuestiones a tener en cuenta a la hora de completar una plantilla incluyen:

- Las fechas deben proporcionarse en formato AAAA-MM-DD (cambia el formato de la celda a “Texto” de ser necesario).
- Los nombres de los archivos no deben tener [caracteres especiales ni espacios](#caracteres-especiales)
- Las fórmulas utilizadas deben convertirse en texto antes del envío. Si se incluye una fórmula, las entregas serán rechazadas y se producirán retrasos o fallos en el procesamiento del contenido
- No incluyas enlaces a datos o libros de Excel externos. Todos los datos deben estar incluidos en el libro de Excel entregado a Roku.
- No agregues hojas adicionales al libro.
- No agregues columnas adicionales al libro.
- No elimines la fila de leyenda y consejos (fila 2).
- No introduzcas los valores “N/A” o “n/a”. Las celdas obligatorias deben contener datos válidos y las opcionales pueden dejarse en blanco.
- Se pueden incluir varias películas, clips y episodios en un mismo libro de Excel. 
  - Cada fila se considera una experiencia lingüística única de un episodio, película o clip.
  - No dejes una fila en blanco entre las entradas de una hoja de cálculo. El sistema dará por terminado el procesamiento en la primera fila vacía.
  - No incluyas más de 900 filas en una sola hoja
- Los metadatos de Excel deben guardarse con la extensión .xlsx y exportarse desde Microsoft Excel. Si utilizas otro programa, expórtalos como CSV.

### Excel: campos de metadatos de películas


<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
<th>Valores aceptados</th>
<th>Obligatorio</th>
</tr>
</thead>
<tbody>
<tr>
<td>provider</td>
<td>Nombre del estudio, cadena o propietario del contenido</td>
<td>Ejemplo: Roku Originals</td>
<td>obligatorio</td>
</tr>
<tr>
<td>contentType</td>
<td>Define el tipo de contenido del paquete</td>
<td>film</td>
<td>obligatorio</td>
</tr>
<tr>
<td>language</td>
<td>Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio y las ilustraciones que se enumeran en la fila. El valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma</a> compatible. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES). Solo se permite un idioma.</td>
<td><a href="#códigos-de-idioma">Valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>original_spoken_language</td>
<td>Define el idioma original de producción del título que se entrega. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</td>
<td><a href="#códigos-de-idioma">Valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>country_of_origin</td>
<td>Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a>.</td>
<td>Código de país válido de 2 caracteres según <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a></td>
<td>preferido</td>
</tr>
<tr>
<td>asset_id</td>
<td>Identificador único e inalterable de una película. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID del título proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres</td>
<td>Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo</td>
<td>obligatorio</td>
</tr>
<tr>
<td>title</td>
<td>Título de la película en el idioma definido en la columna de idioma. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)</td>
<td>Ejemplo:<br />Título de película</td>
<td>obligatorio</td>
</tr>
<tr>
<td>genres</td>
<td>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</td>
<td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td>
<td>obligatorio</td>
</tr>
<tr>
<td>tags</td>
<td>Las etiquetas son campos de formato libre que pueden utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</td>
<td>cualquier cadena de menos de 50 caracteres</td>
<td>MUY recomendado</td>
</tr>
<tr>
<td>runtime</td>
<td>Tiempo de duración total del contenido en minutos enteros</td>
<td>Solo números enteros.<br />Ejemplo: 90</td>
<td>obligatorio</td>
</tr>
<tr>
<td>release_date</td>
<td>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DD</td>
<td>obligatorio</td>
</tr>
<tr>
<td>adBreaks</td>
<td>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</td>
<td>HH:MM:SS.sss</td>
<td>preferido</td>
</tr>
<tr>
<td>cuePoints</td>
<td>Se utiliza para identificar los horarios de inicio y de finalización de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Los valores de los horarios de inicio y finalización de cuePoint deben tener una precisión de milisegundos. lista separada por comas con el siguiente formato: <code>type</code>=<code>startTime</code>&gt;<code>endTime</code> Ejemplo: intro=00:05:10.253&gt;00:07:15:123, recap=00:01:12.456&gt;00:03:12.052</td>
<td>Formato:<br />type=HH:MM:SS.sss<br />HH:MM:SS.sss <br />Valores de tipos permitidos:<br /><code>ad overlay</code><br /> <code>behind the scenes</code><br /> <code>intro</code><br /> <code>recap</code><br /> <code>end</code></td>
<td>opcional</td>
</tr>
<tr>
<td>ratingSystem</td>
<td>Para cada película, se proporcionará la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>obligatorio</td>
</tr>
<tr>
<td>ratings</td>
<td>Clasificación por edades o de contenido de la película según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>obligatorio</td>
</tr>
<tr>
<td>cast</td>
<td>Nombres de los miembros del reparto</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>director</td>
<td>Nombre(s) del director de la película. Por el momento, director es la única función dentro del equipo de filmación que se admite para la ingesta de metadatos de Excel.</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>short_synopsis</td>
<td>Una sinopsis breve del contenido en el idioma definido en la columna de idioma. Límite de 250 caracteres.</td>
<td>sinopsis de 250 caracteres</td>
<td>obligatorio</td>
</tr>
<tr>
<td>long_synopsis</td>
<td>Una sinopsis larga del contenido en el idioma definido en la columna de idioma. Límite de 500 caracteres.</td>
<td>sinopsis de 500 caracteres</td>
<td>opcional</td>
</tr>
<tr>
<td>eidr</td>
<td>ID de EIDR si existe uno</td>
<td>Cualquier ID de EIDR válido</td>
<td>opcional</td>
</tr>
<tr>
<td>tms_id</td>
<td>ID de Gracenote si existe uno</td>
<td>Cualquier ID de TMS válido</td>
<td>opcional</td>
</tr>
<tr>
<td>closed_captions</td>
<td>Indica si el título entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.</td>
<td>Y o N</td>
<td>obligatorio</td>
</tr>
<tr>
<td>closed_captions_exemption</td>
<td>Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es necesario si el valor <code>closedCaptions</code> = “N” 1 - El contenido nunca se emitió por televisión en Estados Unidos.2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.4 - El contenido no consiste en programación de video de larga duración.5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/closedCaptionsExemption</code></td><td>1, 2, 3, 4, 5, 6</td><td>Obligatorio si closedCaptions = N</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;closedCaptionsExemption&gt;1&lt;/closedCaptionsExemption&gt;</code></pre><p><strong>release_date</strong> </p><p>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/release_date</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DD</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;release_date&gt;AAAA-MM-DD&lt;/release_date&gt;</code></pre><p><strong>runtime</strong> </p><p>Tiempo de duración total del contenido en minutos enteros</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/runtime</code></td><td>Solo números enteros</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;runtime&gt;120&lt;/runtime&gt;</code></pre><p><strong>genre</strong> </p><p>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/genres/genre</code></td><td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;genres&gt;&lt;genre&gt;drama&lt;/genre&gt;&lt;!-- Géneros adicionales aquí--&gt;&lt;/genres&gt;</code></pre><p><strong>rating</strong> </p><p>Clasificación por edades o de contenido de la película según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada. Valor de clasificación múltiple</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/ratings/rating</code> <code>debe incluir el atributo del sistema</code></td><td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación Se permiten múltiples pares de clasificación y sistemas de clasificación</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;ratings&gt;&lt;rating system=&quot;mpaa&quot; reason=&quot;For drug content, some sensuality and war violence.&quot;&gt;PG-13&lt;/rating&gt;&lt;rating system=&quot;bbfc&quot;&gt;12A&lt;/rating&gt;&lt;rating system=&quot;chvrs&quot;&gt;14A&lt;/rating&gt;&lt;/ratings&gt;</code></pre><p><strong>tag</strong> </p><p>La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/tags/tag</code></td><td>cualquier cadena de menos de 50 caracteres</td><td>Opcional, pero MUY recomendable</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;tags&gt;&lt;tag&gt;energy&lt;/tag&gt;&lt;tag&gt;dance&lt;/tag&gt;&lt;!-- Etiquetas adicionales aquí--&gt;&lt;/tags&gt;</code></pre><p><strong>adBreak</strong> <strong>start_time</strong> </p><p>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/adBreaks/adBreak/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferiblemente para el contenido AVOD</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;adBreaks&gt;&lt;adBreak&gt;&lt;start_time&gt;00:03:15.000&lt;/start_time&gt;&lt;/adBreak&gt;&lt;adBreak&gt;&lt;start_time&gt;00:07:45.425&lt;/start_time&gt;&lt;/adBreak&gt;&lt;!-- adBreaks adicionales aquí--&gt;&lt;/adBreaks&gt;</code></pre><p><strong>start_time y end_time de cuePoint</strong> </p><p>Se utiliza para identificar los puntos de entrada y salida de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Las etiquetas cuePoint deben incluir el atributo de tipo. Los valores start_time y end_time de cuePoint deben tener una precisión de milisegundos.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr><tr><td><code>/package/video/cuePoints/cuePoint/end_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoints&gt;    &lt;cuePoint type=&quot;ad overlay&quot;&gt;        &lt;start_time&gt;00:09:10.456&lt;/start_time&gt;        &lt;end_time&gt;00:09:12.678&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;behind the scenes&quot;&gt;        &lt;start_time&gt;00:07:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:07:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;intro&quot;&gt;        &lt;start_time&gt;00:01:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:01:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;recap&quot;&gt;        &lt;start_time&gt;00:21:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:21:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;end&quot;&gt;        &lt;start_time&gt;00:41:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:41:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;&lt;/cuePoints&gt;</code></pre><p><strong>Atributo de tipo de cuePoint</strong> </p><p>Define el tipo de cuePoint del cuePoint proporcionado dentro del bloque de cuePoints. El atributo de la etiqueta de cuePoint debe ser de tipo y el valor proporcionado debe ser uno de los siguientes valores:</p><table><thead><tr><th>Valor del tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>ad overlay</code></td><td>Identifica el cuePoint como el punto dentro del video para anuncios de posicionamiento de productos dentro del programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>behind the scenes</code></td><td>Identifica el cuePoint como material de detrás de escena, normalmente al final de un video. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>intro</code></td><td>Identifica el cuePoint como los créditos iniciales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>recap</code></td><td>Identifica el cuePoint como un resumen de contenido anterior, típico de los programas de televisión por episodios. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>end</code></td><td>Identifica el cuePoint como los créditos finales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr></tbody></table><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint</code></td><td>Uno de los valores de la enumeración anterior</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoint type=&quot;intro&quot;&gt;</code></pre><p><strong>cast display_name</strong> </p><p>Nombre de un miembro del reparto<strong>.</strong> Sección CDATA compatible.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cast/cast_member/display_name</code></td><td>Nombre y apellido</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cast&gt;&lt;cast_member&gt;&lt;display_name&gt;&lt;![CDATA[Harrison Ford]]&gt;&lt;/display_name&gt;&lt;/cast_member&gt;&lt;!-- Otros miembros del reparto aquí--&gt;&lt;/cast&gt;</code></pre><p><strong>crew display_name</strong> </p><p>Nombre de un miembro del equipo de filmación. Sección CDATA compatible.<em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/display_name</code></td><td>Nombre y apellido</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;display_name&gt;&lt;![CDATA[George Lucas]]&gt;&lt;/display_name&gt;</code></pre><p><strong>role</strong> </p><p>Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.</em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/role</code></td><td>Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> más adelante</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;role&gt;director&lt;/role&gt;</code></pre><p><strong>localizations</strong> </p><p>Inicia el bloque de activos que proporciona metadatos localizados para paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localizations&gt;</code></pre><p><strong>localization name attribute</strong> </p><p>Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization</code></td><td><a href="#códigos-de-idioma">Código de idioma</a> válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.)</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localization name=&quot;es&quot;&gt;</code></pre><p><strong>localized title</strong> </p><p>Título localizado de la película en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD). El <code>title</code> localizado debe estar acompañado de una <code>short_synopsis</code> localizada y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/title</code></td><td>Título localizado de la película</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;title&gt;&lt;![CDATA[Título localizado de la película. Obligatorio.]]&gt;&lt;/title&gt;</code></pre><p><strong>localized short_synopsis</strong> </p><p>Una sinopsis breve localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres.  La <code>short_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/short_synopsis</code></td><td>250 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;short_synopsis&gt;&lt;![CDATA[Sinopsis breve localizada de la película. 250 caracteres como máximo. Obligatorio]]&gt;&lt;/short_synopsis&gt;</code></pre><p><strong>localized long_synopsis</strong> </p><p>Una sinopsis larga localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres. La <code>long_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>short_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/long_synopsis</code></td><td>500 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;long_synopsis&gt;&lt;![CDATA[Sinopsis larga localizada de la película. 500 caracteres como máximo. Obligatorio.]]&gt;&lt;/long_synopsis&gt;</code></pre><p><strong>playOptions</strong> </p><p>Inicia el bloque de activos que proporciona la información de disponibilidad del paquete. playOptions consiste en la disponibilidad por país o territorio, el tipo de monetización y las fechas de inicio y fin de la disponibilidad del título en el paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOptions&gt;</code></pre><p><strong>country</strong> </p><p>Código de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/country</code></td><td>US CA GB MX</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;country&gt;US&lt;/country&gt;&lt;!-- Otros nodos de país aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>vodType</strong> </p><p>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/vodType</code></td><td>AVOD SVOD</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;vodType&gt;AVOD&lt;/vodType&gt;&lt;!-- Otros nodos vodType aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodStart</strong> </p><p>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodStart por playOption. Las fechas de licensePeriodStart deben ser cronológicamente anteriores a las de licensePeriodEnd. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodStart</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodStart&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodStart&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodEnd</strong> </p><p>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodEnd por playOption. Las fechas de licensePeriodEnd deben ser cronológicamente posteriores a las de licensePeriodStart. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodEnd</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodEnd&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodEnd&gt;&lt;/playOption&gt;</code></pre><p><strong>assets</strong> </p><p>Inicia el bloque de activos que hace referencia a los archivos entregados en el paquete</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets</code></td><td>media_type="video"</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;assets media_type=&quot;video&quot;&gt;</code></pre><p><strong>data_file</strong> <strong>full source</strong> </p><p>El bloque que describe el archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="source". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="source"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;source&quot;&gt;</code></pre><p><strong>full captions</strong> </p><p>El bloque que describe los subtítulos descriptivos del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="captions". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="captions"</code></td><td>Obligatorio en EE. UU.</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;captions&quot;&gt;</code></pre><p><strong>full audio</strong> </p><p>El bloque que describe el audio sidecar del archivo de video fuente. El archivo de audio puede ser un doblaje completo para la traducción lingüística o una pista de audio descriptivo para fines de accesibilidad. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="audio" para el doblaje de traducción o role=”audio.descriptive” para fines de accesibilidad. También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="audio"</code> <code>data_file role="audio.descriptive"</code></td><td>Opcional<em> se prefiere audio.descriptive</td></tr></tbody></table><p></em><em>el audio sidecar puede requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución o para cumplir con las normativas de la FCC</em> </p><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;audio&quot;&gt;</code></pre><p><strong>full subtitles</strong> </p><p>El bloque que describe los subtítulos sidecar del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="subtitles". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="subtitles"</code></td><td>Opcional<em></td></tr><tr><td></em> <em>los subtítulos sidecar pueden requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución.</em></td><td></td><td></td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;subtitles&quot;&gt;</code></pre><p><strong>artwork</strong> </p><p>El bloque que describe los archivos de ilustración. El atributo de la etiqueta del activo debe ser type="artwork". También se requieren  los nodos <locale> y <file_name>. Consulta <a href="#ilustraciones">Ilustraciones</a> para conocer las especificaciones completas sobre la entrega de imágenes.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="artwork"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplos</u> </p><pre><code>&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;background_image&quot;&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;thumbnail_boxcover&quot;&gt;</code></pre><p><strong>locale</strong> </p><p>Identifica el idioma del data_file. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).Aplica para las funciones del data_file: fuente, subtítulos descriptivos, audio, subtítulos y para el tipo de activo de ilustración.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/locale</code></td><td><a href="#códigos-de-idioma">Código de idioma compatible</a></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;locale name=&quot;en&quot;/&gt;</code></pre><p><strong>file_name</strong> </p><p>Nombre de archivo del activo indicado en el atributo de tipo o función del data_file. Todos los valores de file_name distinguen entre mayúsculas y minúsculas y deben tener la extensión de archivo adecuada.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Consulta las especificaciones para la entrega de activos más adelante</td><td>Obligatorio para cada activo entregado</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td></td><td>Obligatorio</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="background_image"</code></td><td>Preferido</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="thumbnail_boxcover"</code></td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;file_name&gt;VideoFilename.mxf&lt;/file_name&gt;</code></pre><p><strong>audio</strong> </p><p><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado. Consulta las pautas más adelante</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/audio</code></td><td>Valores permitidos: stereoOnly surroundOnly stereoPlusSurround surroundPlusStereo</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;audio&gt;stereoOnly&lt;/audio&gt;</code></pre><hr /></td>
<td></td>
<td>obligatorio en EE. UU. si closed_captions = N</td>
</tr>
<tr>
<td>video_file_name</td>
<td>El nombre de archivo del video en el idioma definido en la columna de idioma que se entregó a través de Aspera. Solo se permite 1 video por asset_id. El video_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo:<br />movieVideoFile.mov</td>
<td>obligatorio</td>
</tr>
<tr>
<td>audio_layout</td>
<td><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado.</td>
<td>Valores permitidos:<br />stereoOnly <br />surroundOnly <br />stereoPlusSurround <br />surroundPlusStereo<br /></td>
<td>opcional</td>
</tr>
<tr>
<td>sidecar_audio_file_name</td>
<td>El nombre del archivo de audio sidecar en el idioma definido en la columna de idioma que se entregó a través de Aspera. El sidecar_audio_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieDubFile.wav</td>
<td>opcional Para la entrega de archivos de audio sidecar con fines de traducción o accesibilidad</td>
</tr>
<tr>
<td>sidecar_audio_label</td>
<td>Para uso exclusivo con archivos de descripción de audio. Dejar esta columna en blanco para doblajes de audio.</td>
<td>Valor permitido: <br />descripción de audio</td>
<td>obligatorio para archivos de audio descriptivo</td>
</tr>
<tr>
<td>caption_file_name</td>
<td>El nombre de archivo de los subtítulos descriptivos en el idioma definido en la columna de idioma que se entregó a través de Aspera. El caption_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieCaptions.srt</td>
<td>obligatorio</td>
</tr>
<tr>
<td>subtitle_file_name</td>
<td>El nombre de archivo de los subtítulos completos en el idioma definido en la columna de idioma que se entregó a través de Aspera. El localized_subtitle_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieSubtitle.srt</td>
<td>obligatorio al proporcionar metadatos localizados o activos localizados</td>
</tr>
<tr>
<td>keyart_file_name</td>
<td>El nombre de archivo de la imagen de arte clave con texto en el idioma definido en la columna de idioma que se entregó a través de Aspera. El keyart_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieKeyArt.jpg</td>
<td>obligatorio</td>
</tr>
<tr>
<td>background_file_name</td>
<td>El nombre de archivo de la imagen de fondo sin texto que se entregó a través de Aspera. El background_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieBGimage.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>boxcover_file_name</td>
<td>El nombre de archivo de la imagen de la portada en el idioma definido en la columna de idioma que se entregó a través de Aspera. boxcover_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieBoxArt.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>territory</td>
<td>Los códigos de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países separados por comas, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</td>
<td>Valores permitidos:<br />US<br />CA<br />GB<br />MX</td>
<td>preferido</td>
</tr>
<tr>
<td>vodType</td>
<td>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType separados por comas, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</td>
<td>Ejemplo: avod<br />svod<br />avod,svod</td>
<td>preferido</td>
</tr>
<tr>
<td>license_start_date</td>
<td>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. La license_start_date debe ser cronológicamente anterior a la license_end_date. Las license_start_date y license_end_date no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
<tr>
<td>license_end_date</td>
<td>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. La license_end_date debe ser cronológicamente posterior a la license_start_date. Las license_start_date y license_end_date no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
</tbody>
</table>


------

### Excel: campos de metadatos de TV por episodios


<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
<th>Valores aceptados</th>
<th>Obligatorio</th>
</tr>
</thead>
<tbody>
<tr>
<td>provider</td>
<td>Nombre del estudio, cadena o propietario del contenido</td>
<td>Ejemplo:<br />Roku Originals</td>
<td>obligatorio</td>
</tr>
<tr>
<td>contentType</td>
<td>Define el tipo de contenido del paquete</td>
<td>episodio</td>
<td>obligatorio</td>
</tr>
<tr>
<td>Language</td>
<td>Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio y las ilustraciones que se enumeran en la fila. El valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma</a> compatible. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES). Solo se permite un idioma.</td>
<td>Un <a href="#códigos-de-idioma">valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>original_spoken_language</td>
<td>Define el idioma original de producción del título que se entrega. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</td>
<td>Un <a href="#códigos-de-idioma">valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>country_of_origin</td>
<td>Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a>.</td>
<td>Un código de país válido de 2 caracteres según <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a></td>
<td>preferido</td>
</tr>
<tr>
<td>series_id</td>
<td>Identificador único e inalterable de una serie. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID de la serie proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres</td>
<td>Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_title</td>
<td>Título de la serie en el idioma definido en la columna de idioma. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)</td>
<td>Ejemplo:<br />Título de la serie</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_tmsId</td>
<td>ID de Gracenote si existe uno</td>
<td>Cualquier ID de TMS de programa válido</td>
<td>opcional</td>
</tr>
<tr>
<td>series_release_date</td>
<td>Fecha original en que la serie estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DD</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_genres</td>
<td>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</td>
<td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_tags</td>
<td>Las etiquetas son campos de formato libre que pueden utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</td>
<td>cualquier cadena de menos de 50 caracteres</td>
<td>MUY recomendado</td>
</tr>
<tr>
<td>series_cast</td>
<td>Nombres de los miembros del reparto de la serie</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>series_directors</td>
<td>Nombre(s) del director de la serie. Por el momento, director es la única función dentro del equipo de filmación que se admite para la ingesta de metadatos de Excel.</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>series_short_synopsis</td>
<td>Una sinopsis breve de la serie en el idioma definido en la columna de idioma. Límite de 250 caracteres.</td>
<td>sinopsis de 250 caracteres</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_long_synopsis</td>
<td>Una sinopsis larga de la serie en el idioma definido en la columna de idioma. Límite de 500 caracteres.</td>
<td>sinopsis de 500 caracteres</td>
<td>Opcional</td>
</tr>
<tr>
<td>season_id</td>
<td>Identificador único e inalterable de una temporada. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. Límite de 50 caracteres</td>
<td>Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo</td>
<td>obligatorio</td>
</tr>
<tr>
<td>season_number</td>
<td>Posición numérica de la temporada dentro de una serie. Este valor determinará el orden en que se verán los episodios subyacentes en la plataforma. Los valores de seasonNumber deben entregarse tal y como se emitieron o exhibieron originalmente en cualquier plataforma. Solo se permiten valores numéricos (enteros).</td>
<td>Solo números enteros</td>
<td>obligatorio</td>
</tr>
<tr>
<td>season_tmsIdo</td>
<td>ID de Gracenote si existe uno</td>
<td>Cualquier ID de TMS de temporada válido</td>
<td>opcional</td>
</tr>
<tr>
<td>asset_id</td>
<td>Identificador único e inalterable de un episodio. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID del título proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres</td>
<td>Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_title</td>
<td>Título del episodio en el idioma definido en la columna de idioma. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)</td>
<td>Ejemplo:<br />Título de película</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_number</td>
<td>Posición numérica del episodio dentro de una temporada de una serie. Este valor determinará el orden en que se verán los episodios en la plataforma. Los valores de episodeNumber deben entregarse tal y como se emitieron o exhibieron originalmente en cualquier plataforma. No deben proporcionarse números de producción. Solo se permiten valores numéricos (enteros).</td>
<td>Solo números enteros</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_release_date</td>
<td>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DD</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_runtime</td>
<td>Tiempo de duración total del contenido en minutos enteros</td>
<td>Solo números enteros.<br />Ejemplo: 22</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_adBreaks</td>
<td>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</td>
<td>HH:MM:SS.sss</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_cuePoints</td>
<td>Se utiliza para identificar los horarios de inicio y de finalización de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Los valores de los horarios de inicio y finalización de cuePoint deben tener una precisión de milisegundos. lista separada por comas con el siguiente formato: <code>type</code>=<code>startTime</code>&gt;<code>endTime</code> Ejemplo: intro=00:05:10.253&gt;00:07:15:123, recap=00:01:12.456&gt;00:03:12.052</td>
<td>Formato:<br />type=HH:MM:SS.sss<br /> HH:MM:SS.sss<br /> Valores de tipos permitidos:<br /> <code>ad overlay</code><br /> <code>behind the scenes</code><br /> <code>intro</code><br /> <code>recap</code><br /> <code>end</code></td>
<td>opcional</td>
</tr>
<tr>
<td>ratingSystem</td>
<td>Para cada película, se proporcionará la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>Obligatorio</td>
</tr>
<tr>
<td>episode_ratings</td>
<td>Clasificación por edades o de contenido para el contenido según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_tags</td>
<td>Las etiquetas son campos de formato libre que pueden utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</td>
<td>cualquier cadena de menos de 50 caracteres</td>
<td>MUY recomendado</td>
</tr>
<tr>
<td>episode_cast</td>
<td>Nombres de los miembros del reparto</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_director</td>
<td>Nombre(s) del director del episodio. Por el momento, director es la única función dentro del equipo de filmación que se admite para la ingesta de metadatos de Excel.</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_short_synopsis</td>
<td>Una sinopsis breve del episodio en el idioma definido en la columna de idioma. Límite de 250 caracteres.</td>
<td>sinopsis de 250 caracteres</td>
<td>obligatorio</td>
</tr>
<tr>
<td>episode_long_synopsis</td>
<td>Una sinopsis larga del episodio en el idioma definido en la columna de idioma. Límite de 500 caracteres.</td>
<td>sinopsis de 500 caracteres</td>
<td>opcional</td>
</tr>
<tr>
<td>episode_eidr</td>
<td>ID de EIDR si existe uno</td>
<td>Cualquier ID de EIDR de episodio válido</td>
<td>opcional</td>
</tr>
<tr>
<td>episode_tmsId</td>
<td>ID de Gracenote si existe uno</td>
<td>Cualquier ID de TMS de episodio válido</td>
<td>opcional</td>
</tr>
<tr>
<td>closed_captions</td>
<td>Indica si el título entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.</td>
<td>Y o N</td>
<td>obligatorio</td>
</tr>
<tr>
<td>closed_captions_exemption</td>
<td>Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es necesario si el valor <code>closedCaptions</code> = “N” 1 - El contenido nunca se emitió por televisión en Estados Unidos.2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.4 - El contenido no consiste en programación de video de larga duración.5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/closedCaptionsExemption</code></td><td>1, 2, 3, 4, 5, 6</td><td>Obligatorio si closedCaptions = N</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;closedCaptionsExemption&gt;1&lt;/closedCaptionsExemption&gt;</code></pre><p><strong>release_date</strong> </p><p>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/release_date</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DD</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;release_date&gt;AAAA-MM-DD&lt;/release_date&gt;</code></pre><p><strong>runtime</strong> </p><p>Tiempo de duración total del contenido en minutos enteros</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/runtime</code></td><td>Solo números enteros</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;runtime&gt;120&lt;/runtime&gt;</code></pre><p><strong>genre</strong> </p><p>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/genres/genre</code></td><td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;genres&gt;&lt;genre&gt;drama&lt;/genre&gt;&lt;!-- Géneros adicionales aquí--&gt;&lt;/genres&gt;</code></pre><p><strong>rating</strong> </p><p>Clasificación por edades o de contenido de la película según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada. Valor de clasificación múltiple</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/ratings/rating</code> <code>debe incluir el atributo del sistema</code></td><td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación Se permiten múltiples pares de clasificación y sistemas de clasificación</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;ratings&gt;&lt;rating system=&quot;mpaa&quot; reason=&quot;For drug content, some sensuality and war violence.&quot;&gt;PG-13&lt;/rating&gt;&lt;rating system=&quot;bbfc&quot;&gt;12A&lt;/rating&gt;&lt;rating system=&quot;chvrs&quot;&gt;14A&lt;/rating&gt;&lt;/ratings&gt;</code></pre><p><strong>tag</strong> </p><p>La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/tags/tag</code></td><td>cualquier cadena de menos de 50 caracteres</td><td>Opcional, pero MUY recomendable</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;tags&gt;&lt;tag&gt;energy&lt;/tag&gt;&lt;tag&gt;dance&lt;/tag&gt;&lt;!-- Etiquetas adicionales aquí--&gt;&lt;/tags&gt;</code></pre><p><strong>adBreak</strong> <strong>start_time</strong> </p><p>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/adBreaks/adBreak/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferiblemente para el contenido AVOD</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;adBreaks&gt;&lt;adBreak&gt;&lt;start_time&gt;00:03:15.000&lt;/start_time&gt;&lt;/adBreak&gt;&lt;adBreak&gt;&lt;start_time&gt;00:07:45.425&lt;/start_time&gt;&lt;/adBreak&gt;&lt;!-- adBreaks adicionales aquí--&gt;&lt;/adBreaks&gt;</code></pre><p><strong>start_time y end_time de cuePoint</strong> </p><p>Se utiliza para identificar los puntos de entrada y salida de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Las etiquetas cuePoint deben incluir el atributo de tipo. Los valores start_time y end_time de cuePoint deben tener una precisión de milisegundos.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr><tr><td><code>/package/video/cuePoints/cuePoint/end_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoints&gt;    &lt;cuePoint type=&quot;ad overlay&quot;&gt;        &lt;start_time&gt;00:09:10.456&lt;/start_time&gt;        &lt;end_time&gt;00:09:12.678&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;behind the scenes&quot;&gt;        &lt;start_time&gt;00:07:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:07:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;intro&quot;&gt;        &lt;start_time&gt;00:01:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:01:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;recap&quot;&gt;        &lt;start_time&gt;00:21:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:21:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;end&quot;&gt;        &lt;start_time&gt;00:41:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:41:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;&lt;/cuePoints&gt;</code></pre><p><strong>Atributo de tipo de cuePoint</strong> </p><p>Define el tipo de cuePoint del cuePoint proporcionado dentro del bloque de cuePoints. El atributo de la etiqueta de cuePoint debe ser de tipo y el valor proporcionado debe ser uno de los siguientes valores:</p><table><thead><tr><th>Valor del tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>ad overlay</code></td><td>Identifica el cuePoint como el punto dentro del video para anuncios de posicionamiento de productos dentro del programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>behind the scenes</code></td><td>Identifica el cuePoint como material de detrás de escena, normalmente al final de un video. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>intro</code></td><td>Identifica el cuePoint como los créditos iniciales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>recap</code></td><td>Identifica el cuePoint como un resumen de contenido anterior, típico de los programas de televisión por episodios. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>end</code></td><td>Identifica el cuePoint como los créditos finales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr></tbody></table><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint</code></td><td>Uno de los valores de la enumeración anterior</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoint type=&quot;intro&quot;&gt;</code></pre><p><strong>cast display_name</strong> </p><p>Nombre de un miembro del reparto<strong>.</strong> Sección CDATA compatible.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cast/cast_member/display_name</code></td><td>Nombre y apellido</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cast&gt;&lt;cast_member&gt;&lt;display_name&gt;&lt;![CDATA[Harrison Ford]]&gt;&lt;/display_name&gt;&lt;/cast_member&gt;&lt;!-- Otros miembros del reparto aquí--&gt;&lt;/cast&gt;</code></pre><p><strong>crew display_name</strong> </p><p>Nombre de un miembro del equipo de filmación. Sección CDATA compatible.<em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/display_name</code></td><td>Nombre y apellido</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;display_name&gt;&lt;![CDATA[George Lucas]]&gt;&lt;/display_name&gt;</code></pre><p><strong>role</strong> </p><p>Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.</em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/role</code></td><td>Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> más adelante</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;role&gt;director&lt;/role&gt;</code></pre><p><strong>localizations</strong> </p><p>Inicia el bloque de activos que proporciona metadatos localizados para paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localizations&gt;</code></pre><p><strong>localization name attribute</strong> </p><p>Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization</code></td><td><a href="#códigos-de-idioma">Código de idioma</a> válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.)</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localization name=&quot;es&quot;&gt;</code></pre><p><strong>localized title</strong> </p><p>Título localizado de la película en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD). El <code>title</code> localizado debe estar acompañado de una <code>short_synopsis</code> localizada y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/title</code></td><td>Título localizado de la película</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;title&gt;&lt;![CDATA[Título localizado de la película. Obligatorio.]]&gt;&lt;/title&gt;</code></pre><p><strong>localized short_synopsis</strong> </p><p>Una sinopsis breve localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres.  La <code>short_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/short_synopsis</code></td><td>250 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;short_synopsis&gt;&lt;![CDATA[Sinopsis breve localizada de la película. 250 caracteres como máximo. Obligatorio]]&gt;&lt;/short_synopsis&gt;</code></pre><p><strong>localized long_synopsis</strong> </p><p>Una sinopsis larga localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres. La <code>long_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>short_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/long_synopsis</code></td><td>500 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;long_synopsis&gt;&lt;![CDATA[Sinopsis larga localizada de la película. 500 caracteres como máximo. Obligatorio.]]&gt;&lt;/long_synopsis&gt;</code></pre><p><strong>playOptions</strong> </p><p>Inicia el bloque de activos que proporciona la información de disponibilidad del paquete. playOptions consiste en la disponibilidad por país o territorio, el tipo de monetización y las fechas de inicio y fin de la disponibilidad del título en el paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOptions&gt;</code></pre><p><strong>country</strong> </p><p>Código de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/country</code></td><td>US CA GB MX</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;country&gt;US&lt;/country&gt;&lt;!-- Otros nodos de país aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>vodType</strong> </p><p>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/vodType</code></td><td>AVOD SVOD</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;vodType&gt;AVOD&lt;/vodType&gt;&lt;!-- Otros nodos vodType aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodStart</strong> </p><p>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodStart por playOption. Las fechas de licensePeriodStart deben ser cronológicamente anteriores a las de licensePeriodEnd. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodStart</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodStart&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodStart&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodEnd</strong> </p><p>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodEnd por playOption. Las fechas de licensePeriodEnd deben ser cronológicamente posteriores a las de licensePeriodStart. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodEnd</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodEnd&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodEnd&gt;&lt;/playOption&gt;</code></pre><p><strong>assets</strong> </p><p>Inicia el bloque de activos que hace referencia a los archivos entregados en el paquete</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets</code></td><td>media_type="video"</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;assets media_type=&quot;video&quot;&gt;</code></pre><p><strong>data_file</strong> <strong>full source</strong> </p><p>El bloque que describe el archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="source". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="source"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;source&quot;&gt;</code></pre><p><strong>full captions</strong> </p><p>El bloque que describe los subtítulos descriptivos del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="captions". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="captions"</code></td><td>Obligatorio en EE. UU.</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;captions&quot;&gt;</code></pre><p><strong>full audio</strong> </p><p>El bloque que describe el audio sidecar del archivo de video fuente. El archivo de audio puede ser un doblaje completo para la traducción lingüística o una pista de audio descriptivo para fines de accesibilidad. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="audio" para el doblaje de traducción o role=”audio.descriptive” para fines de accesibilidad. También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="audio"</code> <code>data_file role="audio.descriptive"</code></td><td>Opcional<em> se prefiere audio.descriptive</td></tr></tbody></table><p></em><em>el audio sidecar puede requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución o para cumplir con las normativas de la FCC</em> </p><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;audio&quot;&gt;</code></pre><p><strong>full subtitles</strong> </p><p>El bloque que describe los subtítulos sidecar del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="subtitles". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="subtitles"</code></td><td>Opcional<em></td></tr><tr><td></em> <em>los subtítulos sidecar pueden requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución.</em></td><td></td><td></td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;subtitles&quot;&gt;</code></pre><p><strong>artwork</strong> </p><p>El bloque que describe los archivos de ilustración. El atributo de la etiqueta del activo debe ser type="artwork". También se requieren  los nodos <locale> y <file_name>. Consulta <a href="#ilustraciones">Ilustraciones</a> para conocer las especificaciones completas sobre la entrega de imágenes.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="artwork"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplos</u> </p><pre><code>&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;background_image&quot;&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;thumbnail_boxcover&quot;&gt;</code></pre><p><strong>locale</strong> </p><p>Identifica el idioma del data_file. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).Aplica para las funciones del data_file: fuente, subtítulos descriptivos, audio, subtítulos y para el tipo de activo de ilustración.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/locale</code></td><td><a href="#códigos-de-idioma">Código de idioma compatible</a></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;locale name=&quot;en&quot;/&gt;</code></pre><p><strong>file_name</strong> </p><p>Nombre de archivo del activo indicado en el atributo de tipo o función del data_file. Todos los valores de file_name distinguen entre mayúsculas y minúsculas y deben tener la extensión de archivo adecuada.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Consulta las especificaciones para la entrega de activos más adelante</td><td>Obligatorio para cada activo entregado</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td></td><td>Obligatorio</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="background_image"</code></td><td>Preferido</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="thumbnail_boxcover"</code></td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;file_name&gt;VideoFilename.mxf&lt;/file_name&gt;</code></pre><p><strong>audio</strong> </p><p><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado. Consulta las pautas más adelante</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/audio</code></td><td>Valores permitidos: stereoOnly surroundOnly stereoPlusSurround surroundPlusStereo</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;audio&gt;stereoOnly&lt;/audio&gt;</code></pre><hr /></td>
<td></td>
<td>obligatorio en EE. UU. si closed_captions = N</td>
</tr>
<tr>
<td>video_file_name</td>
<td>El nombre de archivo del video en el idioma definido en la columna de idioma que se entregó a través de Aspera. Solo se permite 1 video por asset_id. El video_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeVideoFile.mov</td>
<td>obligatorio</td>
</tr>
<tr>
<td>audio_layout</td>
<td><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado.</td>
<td>Valores permitidos: <br />stereoOnly <br />surroundOnly <br />stereoPlusSurround <br />surroundPlusStereo</td>
<td>opcional</td>
</tr>
<tr>
<td>sidecar_audio_file_name</td>
<td>El nombre del archivo de audio sidecar en el idioma definido en la columna de idioma que se entregó a través de Aspera. El sidecar_audio_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieDubFile.wav</td>
<td>opcional Para la entrega de archivos de audio sidecar con fines de traducción o accesibilidad</td>
</tr>
<tr>
<td>sidecar_audio_label</td>
<td>Para uso exclusivo con archivos de descripción de audio. Dejar esta columna en blanco para doblajes de audio.</td>
<td>Valor permitido: <br />descripción de audio</td>
<td>obligatorio para archivos de audio descriptivo</td>
</tr>
<tr>
<td>closed_caption_file_name</td>
<td>El nombre de archivo de los subtítulos descriptivos en el idioma definido en la columna de idioma que se entregó a través de Aspera. El caption_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeCaptions.srt</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_keyart_file_name</td>
<td>El nombre de archivo de la imagen de arte clave con texto en el idioma definido en la columna de idioma que se entregó a través de Aspera. El keyart_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeKeyArt.jpg</td>
<td>obligatorio</td>
</tr>
<tr>
<td>series_boxcover_file_name</td>
<td>El nombre de archivo de la imagen de la portada en el idioma definido en la columna de idioma que se entregó a través de Aspera. boxcover_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeBoxArt.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>series_background_file_name</td>
<td>El nombre de archivo de la imagen de fondo sin texto que se entregó a través de Aspera. El background_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeBGimage.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_background_file_name</td>
<td>El nombre de archivo de la imagen de fondo sin texto que se entregó a través de Aspera. El background_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />episodeBGimage.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>vodType</td>
<td>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType separados por comas, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</td>
<td>Ejemplo: <br />avod <br />svod <br />avod,svod</td>
<td>preferido</td>
</tr>
<tr>
<td>territory</td>
<td>Los códigos de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países separados por comas, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</td>
<td>Valores permitidos:<br />US<br />CA<br />GB<br />MX</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_startDate</td>
<td>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. La episode_startDate debe ser cronológicamente anterior a la episode_endDate. Las episode_startDate y episode_endDate no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
<tr>
<td>episode_endDate</td>
<td>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. La episode_endDate debe ser cronológicamente posterior a la episode_startDate. Las episode_startDate y episode_endDate no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
</tbody>
</table>


------

### Excel: campos de metadatos de clips de formato corto


<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
<th>Valores aceptados</th>
<th>Obligatorio</th>
</tr>
</thead>
<tbody>
<tr>
<td>provider</td>
<td>Nombre del estudio, cadena o propietario del contenido</td>
<td>Ejemplo:<br />Roku Originals</td>
<td>obligatorio</td>
</tr>
<tr>
<td>contentType</td>
<td>Define el tipo de contenido del paquete</td>
<td>clip</td>
<td>obligatorio</td>
</tr>
<tr>
<td>subType</td>
<td>Define el subType (subtipo) de contenido del paquete. Actualmente Roku no admite conexiones principales y secundarias de forma nativa. El contenido auxiliar o relacionado puede entregarse e identificarse con uno de los siguientes subtipos (subTypes). <em>No existe ningún vínculo entre los activos principales y secundarios</em> subTypes compatibles: <ul><li>trailer</li><li>highlight</li><li>making_of</li><li>behind_scenes</li><li>interview</li><li>related</li><li>recap</li><li>extra</li></ul><hr /></td>
<td>Valores permitidos: <br />trailer<br />highlight<br />making_of<br />behind_scenes<br />interview<br />related<br />recap<br />extra</td>
<td>opcional</td>
</tr>
<tr>
<td>language</td>
<td>Idioma del título, las sinopsis, el video, los subtítulos descriptivos, los subtítulos, los doblajes de audio y las ilustraciones que se enumeran en la fila. El valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma</a> compatible. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES). Solo se permite un idioma.</td>
<td><a href="#códigos-de-idioma">Valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>original_spoken_language</td>
<td>Define el idioma original de producción del título que se entrega. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</td>
<td><a href="#códigos-de-idioma">Valor de idioma</a> válido</td>
<td>obligatorio</td>
</tr>
<tr>
<td>country_of_origin</td>
<td>Define el país principal donde se produjo la película y donde están establecidos los principales creadores, el equipo de filmación y los productores. El valor debe ajustarse a uno de los códigos de país compatibles definidos en la lista de códigos de país de 2 caracteres <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a>.</td>
<td>Código de país válido de 2 caracteres según <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alfa 2</a></td>
<td>preferido</td>
</tr>
<tr>
<td>asset_id</td>
<td>Identificador único e inalterable de una película. La empresa socia debe generar y suministrar los ID para el contenido que se entrega a Roku. El ID en los metadatos de ingesta debe coincidir con el ID del título proporcionado en el documento de avails. Esto será de gran ayuda en el seguimiento del contenido a lo largo de todo el proceso de Roku, desde el envío de Avails hasta su publicación en Roku Channel. Límite de 50 caracteres</td>
<td>Solo caracteres alfanuméricos, guiones y guiones bajos. 50 caracteres como máximo</td>
<td>obligatorio</td>
</tr>
<tr>
<td>title</td>
<td>Título del clip en el idioma definido en la columna de idioma. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD)</td>
<td>Ejemplo:<br />Título de película</td>
<td>obligatorio</td>
</tr>
<tr>
<td>genres</td>
<td>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</td>
<td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td>
<td>obligatorio</td>
</tr>
<tr>
<td>tags</td>
<td>Las etiquetas son campos de formato libre que pueden utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</td>
<td>cualquier cadena de menos de 50 caracteres</td>
<td>MUY recomendado</td>
</tr>
<tr>
<td>runtime</td>
<td>Tiempo de duración total del contenido en minutos enteros</td>
<td>Solo números enteros.<br />Ejemplo: 90</td>
<td>obligatorio</td>
</tr>
<tr>
<td>release_date</td>
<td>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DD</td>
<td>obligatorio</td>
</tr>
<tr>
<td>adBreaks</td>
<td>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</td>
<td>HH:MM:SS.sss</td>
<td>preferido</td>
</tr>
<tr>
<td>cuePoints</td>
<td></td>
<td></td>
<td>opcional</td>
</tr>
<tr>
<td>ratingSystem</td>
<td>Para cada película, se proporcionará la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>obligatorio</td>
</tr>
<tr>
<td>ratings</td>
<td>Clasificación por edades o de contenido de la película según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada.</td>
<td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación.</td>
<td>obligatorio</td>
</tr>
<tr>
<td>cast</td>
<td>Nombres de los miembros del reparto</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>director</td>
<td>Nombre(s) del director de la película. Por el momento, director es la única función dentro del equipo de filmación que se admite para la ingesta de metadatos de Excel.</td>
<td>Lista de nombres y apellidos separados por comas</td>
<td>preferido</td>
</tr>
<tr>
<td>short_synopsis</td>
<td>Una sinopsis breve del contenido en el idioma definido en la columna de idioma. Límite de 250 caracteres.</td>
<td>sinopsis de 250 caracteres</td>
<td>obligatorio</td>
</tr>
<tr>
<td>long_synopsis</td>
<td>Una sinopsis larga del contenido en el idioma definido en la columna de idioma. Límite de 500 caracteres.</td>
<td>sinopsis de 500 caracteres</td>
<td>obligatorio</td>
</tr>
<tr>
<td>eidr</td>
<td>ID de EIDR si existe uno</td>
<td>Cualquier ID de EIDR válido</td>
<td>opcional</td>
</tr>
<tr>
<td>tms_id</td>
<td>ID de Gracenote si existe uno</td>
<td>Cualquier ID de TMS válido</td>
<td>opcional</td>
</tr>
<tr>
<td>closed_captions</td>
<td>Indica si el título entregado contiene subtítulos descriptivos. Los valores aceptados son Y o N. Este campo es obligatorio para todo el contenido destinado a Roku Channel en EE. UU.</td>
<td>Y o N</td>
<td>obligatorio</td>
</tr>
<tr>
<td>closed_captions_exemption</td>
<td>Código de exención de la FCC para el requisito de subtítulos descriptivos. Este nodo es necesario si el valor <code>closedCaptions</code> = “N” 1 - El contenido nunca se emitió por televisión en Estados Unidos.2 - El contenido solo se emitió por televisión en Estados Unidos sin subtítulos descriptivos.3 - El contenido no se emite por televisión en Estados Unidos con subtítulos descriptivos desde el 30 de septiembre de 2012.4 - El contenido no consiste en programación de video de larga duración.5 - El contenido no pertenece a una categoría de programación en línea que requiera subtítulos descriptivos según la normativa de la FCC (49 C.F.R. § 79.4(b)).6 - La FCC o el Congreso de EE. UU. concedieron una exención de los requisitos de subtítulos descriptivos para este contenido.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/closedCaptionsExemption</code></td><td>1, 2, 3, 4, 5, 6</td><td>Obligatorio si closedCaptions = N</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;closedCaptionsExemption&gt;1&lt;/closedCaptionsExemption&gt;</code></pre><p><strong>release_date</strong> </p><p>Fecha original en la que el contenido estuvo disponible por primera vez en cualquier presentación. Debe incluir, como mínimo, el año correcto del estreno</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/release_date</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DD</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;release_date&gt;AAAA-MM-DD&lt;/release_date&gt;</code></pre><p><strong>runtime</strong> </p><p>Tiempo de duración total del contenido en minutos enteros</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/runtime</code></td><td>Solo números enteros</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;runtime&gt;120&lt;/runtime&gt;</code></pre><p><strong>genre</strong> </p><p>Clasificación del contenido por género. Roku requiere que cada película se entregue con al menos un género compatible. Consulta la <a href="#géneros">enumeración</a> de los géneros que admite Roku.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/genres/genre</code></td><td>Consulta la <a href="#géneros">enumeración</a> más adelante. Pueden enviarse hasta 10 géneros por título</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;genres&gt;&lt;genre&gt;drama&lt;/genre&gt;&lt;!-- Géneros adicionales aquí--&gt;&lt;/genres&gt;</code></pre><p><strong>rating</strong> </p><p>Clasificación por edades o de contenido de la película según una fuente de clasificación. Se facilitará para cada película una clasificación válida de película o TV de parte de la autoridad de clasificación (ratingSystem) del territorio en el cual estará disponible el contenido. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, incluye una clasificación válida del USA_PR ratingSystem. No existe ningún organismo oficial que asigne clasificaciones para el USA_PR ratingSystem. Toma como referencia las pautas que se enumeran en <a href="http://tvguidelines.org/">http://tvguidelines.org/</a> para asignar la clasificación adecuada. Valor de clasificación múltiple</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/ratings/rating</code> <code>debe incluir el atributo del sistema</code></td><td>Consulta <a href="#valores-de-clasificación-por-sistema-de-clasificación-y-país">más adelante</a> las clasificaciones permitidas por el sistema de clasificación Se permiten múltiples pares de clasificación y sistemas de clasificación</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;ratings&gt;&lt;rating system=&quot;mpaa&quot; reason=&quot;For drug content, some sensuality and war violence.&quot;&gt;PG-13&lt;/rating&gt;&lt;rating system=&quot;bbfc&quot;&gt;12A&lt;/rating&gt;&lt;rating system=&quot;chvrs&quot;&gt;14A&lt;/rating&gt;&lt;/ratings&gt;</code></pre><p><strong>tag</strong> </p><p>La etiqueta es un campo de formato libre que puede utilizarse para categorizar el contenido más allá del número limitado de valores de género compatibles. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas proporcionadas para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan en un clip, episodio o película, más formas habrá de seleccionar el contenido y mostrarlo a la persona usuaria final. No hay límite para el número de etiquetas que pueden entregarse con un título y no hay un conjunto definido de etiquetas. Las etiquetas distinguen entre mayúsculas y minúsculas. Por ejemplo, las etiquetas “Rom-Com” y “rom-com” se considerarían dos etiquetas únicas. Asegúrate de que todas las etiquetas se entreguen de forma consistente.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/tags/tag</code></td><td>cualquier cadena de menos de 50 caracteres</td><td>Opcional, pero MUY recomendable</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;tags&gt;&lt;tag&gt;energy&lt;/tag&gt;&lt;tag&gt;dance&lt;/tag&gt;&lt;!-- Etiquetas adicionales aquí--&gt;&lt;/tags&gt;</code></pre><p><strong>adBreak</strong> <strong>start_time</strong> </p><p>Se utiliza para determinar<a href="#cortes-publicitarios">los cortes publicitarios del contenido financiado con anuncios</a>. Los valores de adBreak deben tener una precisión de milisegundos. Si el video proporcionado incluye fotogramas en negro para comerciales, proporciona el código de tiempo igual al punto medio de dichos fotogramas. Si bien no es necesario para el contenido SVOD, se pueden ingerir datos adBreak con precisión de fotogramas si están disponibles.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/adBreaks/adBreak/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferiblemente para el contenido AVOD</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;adBreaks&gt;&lt;adBreak&gt;&lt;start_time&gt;00:03:15.000&lt;/start_time&gt;&lt;/adBreak&gt;&lt;adBreak&gt;&lt;start_time&gt;00:07:45.425&lt;/start_time&gt;&lt;/adBreak&gt;&lt;!-- adBreaks adicionales aquí--&gt;&lt;/adBreaks&gt;</code></pre><p><strong>start_time y end_time de cuePoint</strong> </p><p>Se utiliza para identificar los puntos de entrada y salida de los créditos iniciales, los resúmenes de contenido, los créditos finales y el material de detrás de escena. Las etiquetas cuePoint deben incluir el atributo de tipo. Los valores start_time y end_time de cuePoint deben tener una precisión de milisegundos.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint/start_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr><tr><td><code>/package/video/cuePoints/cuePoint/end_time</code></td><td>HH:MM:SS.sss</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoints&gt;    &lt;cuePoint type=&quot;ad overlay&quot;&gt;        &lt;start_time&gt;00:09:10.456&lt;/start_time&gt;        &lt;end_time&gt;00:09:12.678&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;behind the scenes&quot;&gt;        &lt;start_time&gt;00:07:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:07:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;intro&quot;&gt;        &lt;start_time&gt;00:01:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:01:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;recap&quot;&gt;        &lt;start_time&gt;00:21:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:21:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;    &lt;cuePoint type=&quot;end&quot;&gt;        &lt;start_time&gt;00:41:08.123&lt;/start_time&gt;        &lt;end_time&gt;00:41:59.123&lt;/end_time&gt;    &lt;/cuePoint&gt;&lt;/cuePoints&gt;</code></pre><p><strong>Atributo de tipo de cuePoint</strong> </p><p>Define el tipo de cuePoint del cuePoint proporcionado dentro del bloque de cuePoints. El atributo de la etiqueta de cuePoint debe ser de tipo y el valor proporcionado debe ser uno de los siguientes valores:</p><table><thead><tr><th>Valor del tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>ad overlay</code></td><td>Identifica el cuePoint como el punto dentro del video para anuncios de posicionamiento de productos dentro del programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>behind the scenes</code></td><td>Identifica el cuePoint como material de detrás de escena, normalmente al final de un video. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>intro</code></td><td>Identifica el cuePoint como los créditos iniciales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>recap</code></td><td>Identifica el cuePoint como un resumen de contenido anterior, típico de los programas de televisión por episodios. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr><tr><td><code>end</code></td><td>Identifica el cuePoint como los créditos finales de un programa. En caso de proporcionarse, es obligatorio incluir start_time y end_time</td></tr></tbody></table><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th></tr></thead><tbody><tr><td><code>/package/video/cuePoints/cuePoint</code></td><td>Uno de los valores de la enumeración anterior</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cuePoint type=&quot;intro&quot;&gt;</code></pre><p><strong>cast display_name</strong> </p><p>Nombre de un miembro del reparto<strong>.</strong> Sección CDATA compatible.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/cast/cast_member/display_name</code></td><td>Nombre y apellido</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;cast&gt;&lt;cast_member&gt;&lt;display_name&gt;&lt;![CDATA[Harrison Ford]]&gt;&lt;/display_name&gt;&lt;/cast_member&gt;&lt;!-- Otros miembros del reparto aquí--&gt;&lt;/cast&gt;</code></pre><p><strong>crew display_name</strong> </p><p>Nombre de un miembro del equipo de filmación. Sección CDATA compatible.<em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/display_name</code></td><td>Nombre y apellido</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;display_name&gt;&lt;![CDATA[George Lucas]]&gt;&lt;/display_name&gt;</code></pre><p><strong>role</strong> </p><p>Función del miembro del equipo de filmación que figura en el display_name. Roku requiere que los metadatos incluyan no solo el miembro del equipo de filmación, sino también su función. Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> de las funciones del equipo de filmación que admite Roku. Las funciones distinguen entre mayúsculas y minúsculas.</em>NOTA: Por el momento, director es el único miembro del equipo de filmación (crew_member) que se admite para la ingesta en formato Excel</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/crew/crew_member/role</code></td><td>Consulta la <a href="#funciones-del-equipo-de-filmación">enumeración</a> más adelante</td><td>Obligatorio si se proporciona crew_member</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;role&gt;director&lt;/role&gt;</code></pre><p><strong>localizations</strong> </p><p>Inicia el bloque de activos que proporciona metadatos localizados para paquetes con múltiples idiomas. Las localizaciones definen el idioma y proporcionan el título, la short_synopsis y la long_synopsis traducidos del paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localizations&gt;</code></pre><p><strong>localization name attribute</strong> </p><p>Define el idioma del título localizado, la short_synopsis y la long_synopsis que se proporcionan dentro del bloque de localización. El atributo de la etiqueta de localización debe ser el nombre y el valor proporcionado en el nombre debe, como mínimo, ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization</code></td><td><a href="#códigos-de-idioma">Código de idioma</a> válido (en, es, etc.) También puede incluir códigos de región (en-US, es-MX, etc.)</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;localization name=&quot;es&quot;&gt;</code></pre><p><strong>localized title</strong> </p><p>Título localizado de la película en el idioma especificado en el atributo de nombre de la etiqueta de localización. Incluye únicamente el nombre del contenido tal y como debe aparecer en la plataforma. No incluyas datos aparte del título entre paréntesis, como un indicador de versión original o nueva, el año de estreno, la temporada o el formato de video, por ejemplo: (Clásica), (1987), (Temporada 1) o (HD). El <code>title</code> localizado debe estar acompañado de una <code>short_synopsis</code> localizada y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/title</code></td><td>Título localizado de la película</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;title&gt;&lt;![CDATA[Título localizado de la película. Obligatorio.]]&gt;&lt;/title&gt;</code></pre><p><strong>localized short_synopsis</strong> </p><p>Una sinopsis breve localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 250 caracteres.  La <code>short_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>long_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/short_synopsis</code></td><td>250 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;short_synopsis&gt;&lt;![CDATA[Sinopsis breve localizada de la película. 250 caracteres como máximo. Obligatorio]]&gt;&lt;/short_synopsis&gt;</code></pre><p><strong>localized long_synopsis</strong> </p><p>Una sinopsis larga localizada del contenido en el idioma especificado en el atributo de nombre de la etiqueta de localización. Sección CDATA compatible. Límite de 500 caracteres. La <code>long_synopsis</code> localizada debe estar acompañada de un <code>title</code> localizado y una <code>short_synopsis</code> localizada</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/localizations/localization/long_synopsis</code></td><td>500 caracteres</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;long_synopsis&gt;&lt;![CDATA[Sinopsis larga localizada de la película. 500 caracteres como máximo. Obligatorio.]]&gt;&lt;/long_synopsis&gt;</code></pre><p><strong>playOptions</strong> </p><p>Inicia el bloque de activos que proporciona la información de disponibilidad del paquete. playOptions consiste en la disponibilidad por país o territorio, el tipo de monetización y las fechas de inicio y fin de la disponibilidad del título en el paquete.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions</code></td><td></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOptions&gt;</code></pre><p><strong>country</strong> </p><p>Código de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/country</code></td><td>US CA GB MX</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;country&gt;US&lt;/country&gt;&lt;!-- Otros nodos de país aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>vodType</strong> </p><p>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/vodType</code></td><td>AVOD SVOD</td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;vodType&gt;AVOD&lt;/vodType&gt;&lt;!-- Otros nodos vodType aquí --&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodStart</strong> </p><p>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodStart por playOption. Las fechas de licensePeriodStart deben ser cronológicamente anteriores a las de licensePeriodEnd. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodStart</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodStart&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodStart&gt;&lt;/playOption&gt;</code></pre><p><strong>licensePeriodEnd</strong> </p><p>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. Se permite una fecha de licensePeriodEnd por playOption. Las fechas de licensePeriodEnd deben ser cronológicamente posteriores a las de licensePeriodStart. Las fechas de licensePeriodStart y licensePeriodEnd no deben ser idénticas</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/playOptions/playOption/licensePeriodEnd</code></td><td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;playOption&gt;&lt;licensePeriodEnd&gt;AAAA-MM-DDTHH:MM:SS&lt;/licensePeriodEnd&gt;&lt;/playOption&gt;</code></pre><p><strong>assets</strong> </p><p>Inicia el bloque de activos que hace referencia a los archivos entregados en el paquete</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets</code></td><td>media_type="video"</td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;assets media_type=&quot;video&quot;&gt;</code></pre><p><strong>data_file</strong> <strong>full source</strong> </p><p>El bloque que describe el archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="source". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="source"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;source&quot;&gt;</code></pre><p><strong>full captions</strong> </p><p>El bloque que describe los subtítulos descriptivos del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="captions". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="captions"</code></td><td>Obligatorio en EE. UU.</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;captions&quot;&gt;</code></pre><p><strong>full audio</strong> </p><p>El bloque que describe el audio sidecar del archivo de video fuente. El archivo de audio puede ser un doblaje completo para la traducción lingüística o una pista de audio descriptivo para fines de accesibilidad. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="audio" para el doblaje de traducción o role=”audio.descriptive” para fines de accesibilidad. También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="audio"</code> <code>data_file role="audio.descriptive"</code></td><td>Opcional<em> se prefiere audio.descriptive</td></tr></tbody></table><p></em><em>el audio sidecar puede requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución o para cumplir con las normativas de la FCC</em> </p><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;audio&quot;&gt;</code></pre><p><strong>full subtitles</strong> </p><p>El bloque que describe los subtítulos sidecar del archivo de video fuente. El atributo de la etiqueta del activo debe ser type="full" y el atributo de la etiqueta data_file debe ser role="subtitles". También se requieren  los nodos <locale> y <file_name></p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="full"</code> <code>data_file role="subtitles"</code></td><td>Opcional<em></td></tr><tr><td></em> <em>los subtítulos sidecar pueden requerirse si se necesitan activos localizados cuando el audio original del archivo fuente no es nativo del territorio de distribución.</em></td><td></td><td></td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;asset type=&quot;full&quot;&gt;&lt;data_file role=&quot;subtitles&quot;&gt;</code></pre><p><strong>artwork</strong> </p><p>El bloque que describe los archivos de ilustración. El atributo de la etiqueta del activo debe ser type="artwork". También se requieren  los nodos <locale> y <file_name>. Consulta <a href="#ilustraciones">Ilustraciones</a> para conocer las especificaciones completas sobre la entrega de imágenes.</p><table><thead><tr><th>Xpath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file</code></td><td>Valores de atributos: <code>asset type="artwork"</code></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplos</u> </p><pre><code>&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;background_image&quot;&gt;&lt;asset type=&quot;artwork&quot;&gt;&lt;data_file type=&quot;thumbnail_boxcover&quot;&gt;</code></pre><p><strong>locale</strong> </p><p>Identifica el idioma del data_file. Como mínimo, el valor debe ajustarse a un <a href="#códigos-de-idioma">código de idioma compatible</a>. Se recomienda que, al proporcionar el idioma, incluyas también un código de región para brindar información útil, como la distinción entre el español que se habla en México (es-MX) y el que se habla en España (es-ES).Aplica para las funciones del data_file: fuente, subtítulos descriptivos, audio, subtítulos y para el tipo de activo de ilustración.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/locale</code></td><td><a href="#códigos-de-idioma">Código de idioma compatible</a></td><td>Obligatorio</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;locale name=&quot;en&quot;/&gt;</code></pre><p><strong>file_name</strong> </p><p>Nombre de archivo del activo indicado en el atributo de tipo o función del data_file. Todos los valores de file_name distinguen entre mayúsculas y minúsculas y deben tener la extensión de archivo adecuada.</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Consulta las especificaciones para la entrega de activos más adelante</td><td>Obligatorio para cada activo entregado</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td></td><td>Obligatorio</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="background_image"</code></td><td>Preferido</td></tr><tr><td><code>/package/video/assets/asset/data_file/file_name</code></td><td>Valores de atributos:<br /><code>type="thumbnail_boxcover"</code></td><td>Preferido</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;file_name&gt;VideoFilename.mxf&lt;/file_name&gt;</code></pre><p><strong>audio</strong> </p><p><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado. Consulta las pautas más adelante</p><table><thead><tr><th>XPath XML</th><th>Valores aceptados</th><th>Obligatorio</th></tr></thead><tbody><tr><td><code>/package/video/assets/asset/data_file/audio</code></td><td>Valores permitidos: stereoOnly surroundOnly stereoPlusSurround surroundPlusStereo</td><td>Opcional</td></tr></tbody></table><p><u>Ejemplo:</u></p><pre><code>&lt;audio&gt;stereoOnly&lt;/audio&gt;</code></pre><hr /></td>
<td></td>
<td>obligatorio en EE. UU. si closed_captions = N</td>
</tr>
<tr>
<td>video_file_name</td>
<td>El nombre de archivo del video en el idioma definido en la columna de idioma que se entregó a través de Aspera. Solo se permite 1 video por asset_id. El video_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieVideoFile.mov</td>
<td>obligatorio</td>
</tr>
<tr>
<td>audio_layout</td>
<td><a href="#audio-descriptivo">Descriptor de diseño de audio</a> para el archivo de video entregado.</td>
<td>Valores permitidos: <br />stereoOnly <br />surroundOnly <br />stereoPlusSurround<br />surroundPlusStereo</td>
<td>opcional</td>
</tr>
<tr>
<td>sidecar_audio_file_name</td>
<td>El nombre del archivo de audio sidecar en el idioma definido en la columna de idioma que se entregó a través de Aspera. El sidecar_audio_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieDubFile.wav</td>
<td>opcional Para la entrega de archivos de audio sidecar con fines de traducción o accesibilidad</td>
</tr>
<tr>
<td>sidecar_audio_label</td>
<td>Para uso exclusivo con archivos de descripción de audio. Dejar esta columna en blanco para doblajes de audio.</td>
<td>Valor permitido: <br />descripción de audio</td>
<td>obligatorio para archivos de audio descriptivo</td>
</tr>
<tr>
<td>caption_file_name</td>
<td>El nombre de archivo de los subtítulos descriptivos en el idioma definido en la columna de idioma que se entregó a través de Aspera. El caption_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieCaptions.srt</td>
<td>obligatorio</td>
</tr>
<tr>
<td>keyart_file_name</td>
<td>El nombre de archivo de la imagen de arte clave con texto en el idioma definido en la columna de idioma que se entregó a través de Aspera. El keyart_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieKeyArt.jpg</td>
<td>obligatorio</td>
</tr>
<tr>
<td>background_file_name</td>
<td>El nombre de archivo de la imagen de fondo sin texto que se entregó a través de Aspera. El background_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieBGimage.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>boxcover_file_name</td>
<td>El nombre de archivo de la imagen de la portada en el idioma definido en la columna de idioma que se entregó a través de Aspera. boxcover_file_name debe coincidir exactamente con el archivo entregado. Los nombres de archivo distinguen entre mayúsculas y minúsculas y no deben contener espacios en blanco ni caracteres especiales</td>
<td>Ejemplo: <br />movieBoxArt.jpg</td>
<td>preferido</td>
</tr>
<tr>
<td>territory</td>
<td>Los códigos de país del territorio en el que está disponible el contenido. Se pueden proporcionar varios nodos de países separados por comas, siempre que el vodType y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los países.</td>
<td>Valores permitidos:<br />US<br />CA<br />GB<br />MX</td>
<td>preferido</td>
</tr>
<tr>
<td>vodType</td>
<td>Tipo de monetización de la película. Se pueden proporcionar varios nodos vodType separados por comas, siempre que el país y las fechas de licensePeriodStart y licensePeriodEnd sean iguales en todos los vodType.</td>
<td>Ejemplo:<br />avod<br />svod<br />avod,svod</td>
<td>preferido</td>
</tr>
<tr>
<td>license_start_date</td>
<td>Fecha de inicio de la disponibilidad del contenido para las personas usuarias de Roku Channel. La license_start_date debe ser cronológicamente anterior a la license_end_date. Las license_start_date y license_end_date no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
<tr>
<td>license_end_date</td>
<td>Fecha de finalización de la disponibilidad del contenido para las personas usuarias de Roku Channel. La license_end_date debe ser cronológicamente posterior a la license_start_date. Las license_start_date y license_end_date no deben ser idénticas.</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DDTHH:MM:SS</td>
<td>preferido</td>
</tr>
<tr>
<td>parent_type</td>
<td>Tipo de contenido del contenido principal del cual se deriva o describe el clip</td>
<td>Valores permitidos: episode movie series</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_title</td>
<td>Título del programa principal si se trata de contenido principal</td>
<td>Ejemplo:<br />Título de la película o serie principal</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_runtime</td>
<td>Duración del programa principal si este es una película o episodio</td>
<td>Números enteros</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_release_date</td>
<td>Fecha de estreno de la película, episodio o serie principal</td>
<td>Conforme al formato ISO 8601: AAAA-MM-DD</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_tms_id</td>
<td>ID de TMS de la película, episodio o serie principal</td>
<td>Cualquier ID de TMS válido</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_series</td>
<td>Título de la serie del programa principal si este es un episodio</td>
<td>Ejemplo:<br />Título de la serie principal</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_season</td>
<td>Número de temporada del programa principal si este es un episodio</td>
<td>Números enteros</td>
<td>opcional</td>
</tr>
<tr>
<td>parent_episode</td>
<td>Número de episodio del programa principal si este es un episodio</td>
<td>Números enteros</td>
<td>opcional</td>
</tr>
<tr>
<td>sport_type</td>
<td>Nombre del deporte que aparece en el clip o momento destacado</td>
<td>Nombre del deporte</td>
<td>obligatorio para clips de deportes</td>
</tr>
<tr>
<td>sport_league</td>
<td>Nombre de la liga deportiva que aparece en el clip o momento destacado</td>
<td>Nombre de la liga deportiva</td>
<td>obligatorio para clips de deportes</td>
</tr>
<tr>
<td>sport_teams</td>
<td>Equipos que aparecen en el clip o momento destacado deportivo. Pueden proporcionarse varios equipos separados por comas. <em>En este momento, Roku solo admite metadatos de participantes basados en equipos. Los deportes individuales serán compatibles en el futuro.</em></td>
<td>Lista separada por comas. Ejemplo:<br />Chicago Cubs,St. Louis Cardinals</td>
<td>obligatorio para clips de deportes</td>
</tr>
</tbody>
</table>



## Valores que admite Roku

### Funciones del equipo de filmación

- Actor
- Anchor
- Host
- Narrator
- Voice
- Director
- Producer
- Screenwriter

### Géneros


<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>3x3 basketball<br />action<br />action sports<br />adventure<br />aerobics<br />agriculture<br />animals<br />animated<br />anime<br />anthology<br />archery<br />arm wrestling<br />art<br />artistic gymnastics<br />artistic swimming<br />arts/crafts<br />athletics<br />auction<br />auto<br />auto racing<br />aviation<br />awards<br />badminton<br />ballet<br />baseball<br />basketball<br />beach soccer<br />beach volleyball<br />biathlon<br />bicycle<br />bicycle racing<br />billiards<br />biography<br />blackjack<br />bmx racing<br />boat<br />boat racing<br />bobsled<br />bodybuilding<br />bowling<br />boxing<br />bullfighting<br />bus./financial<br />canoe<br />canoe/kayak<br />card games<br />ceremony<br />cheerleading<br />children<br />children-music<br />children-special<br />children-talk<br />collectibles<br />comedy<br />comedy drama<br />community<br />computers<br />consumer<br />cooking<br />cricket<br />crime<br />crime drama<br />curling<br />cycling<br />dance<br />dark comedy<br />darts<br />debate<br />diving<br />docudrama<br />documentary<br />dog racing<br />dog show<br />dog sled<br />drag racing<br />drama</td>
<td>educational<br />entertainment<br />environment<br />equestrian<br />erotic<br />event<br />exercise<br />faith<br />fantasy<br />fashion<br />fencing<br />field hockey<br />figure skating<br />fishing<br />food<br />football<br />fundraiser<br />gaelic football<br />game show<br />gaming<br />gay/lesbian<br />golf<br />gymnastics<br />handball<br />health<br />historical drama<br />history<br />hockey<br />holiday<br />holiday music<br />holiday music special<br />holiday special<br />holiday-children<br />holiday-children special<br />home improvement<br />horror<br />horse<br />house/garden<br />how-to<br />hunting<br />hurling<br />hydroplane racing<br />indoor soccer<br />interview<br />intl soccer<br />judo<br />karate<br />kayaking<br />lacrosse<br />law<br />live<br />luge<br />martial arts<br />medical<br />military<br />miniseries<br />mixed martial arts<br />modern pentathlon<br />motorcycle<br />motorcycle racing<br />motorsports<br />mountain biking<br />music<br />music special<br />music talk<br />musical<br />musical comedy<br />mystery<br />nature<br />news<br />newsmagazine<br />olympics<br />opera<br />outdoors<br />parade<br />paranormal</td>
<td>parenting<br />performing arts<br />playoff sports<br />poker<br />politics<br />polo<br />pool<br />pro wrestling<br />public affairs<br />racquet<br />reality<br />religious<br />rhythmic gymnastics<br />ringuette<br />road cycling<br />rodeo<br />roller derby<br />romance<br />romantic comedy<br />rowing<br />rugby<br />running<br />sailing<br />science<br />science fiction<br />self improvement<br />shooting<br />shopping<br />sitcom<br />skateboarding<br />skating<br />skeleton<br />skiing<br />snooker<br />snowboarding<br />snowmobile<br />soap<br />soap special<br />soap talk<br />soccer<br />softball<br />special<br />speed skating<br />sport climbing<br />sports<br />sports talk<br />squash<br />standup<br />sumo wrestling<br />surfing<br />suspense<br />swimming<br />table tennis<br />taekwondo<br />talk<br />technology<br />tennis<br />theater<br />thriller<br />track cycling<br />track/field<br />trampoline<br />travel<br />triathlon<br />variety<br />volleyball<br />war<br />water polo<br />water skiing<br />watersports<br />weather<br />weightlifting<br />western<br />wrestling<br />yacht racing</td>
</tr>
</tbody>
</table>


### Valores de clasificación por sistema de clasificación y país

Se facilitará para cada película, episodio o video de formato corto una clasificación válida de cine o TV de parte de la autoridad de clasificación (fuente de clasificación) del territorio en el cual estará disponible el título. Si el título no ha sido clasificado por la autoridad oficial de clasificación de ese territorio, se puede proporcionar una clasificación NR (sin clasificar). Sin embargo, ten en cuenta que Roku prefiere una clasificación más específica para todo el contenido. Los títulos con calificación NR (sin clasificar) estarán sujetos a verificación manual, lo que puede retrasar el proceso de selección y publicación en Roku Channel. La visibilidad en Roku Channel también puede verse afectada en el caso de títulos con clasificación NR (sin clasificar) y se prohibirá su inclusión en la experiencia para toda la familia. En lugar de la clasificación NR (sin clasificar), el título debe autoclasificarse con el sistema de clasificación USA_PR. Las pautas relativas a las calificaciones USA_PR pueden consultarse [aquí](http://tvguidelines.org)


<table>
<thead>
<tr>
<th><strong>Autoridades de clasificación y territorio</strong></th>
<th><strong>País</strong></th>
<th><strong>ratingSystem</strong></th>
<th><strong>Valor de clasificación</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>British Board of Film Classification<br />Reino Unido</td>
<td>GB</td>
<td>BBFC</td>
<td>U<br />PG<br />12A<br />12-A<br />12<br />15<br />18<br />NR<br />R18<br />R-1</td>
</tr>
<tr>
<td>Canadian Home Video Rating System<br />Canadá</td>
<td>CA</td>
<td>CHVRS</td>
<td>G<br />PG<br />14A<br />14-A<br />18A<br />18-A<br />NR<br />RE</td>
</tr>
<tr>
<td>Motion Picture Associate of America<br />Estados Unidos</td>
<td>US</td>
<td>MPAA</td>
<td>G<br />PG<br />PG13<br />PG-13<br />R<br />NC-17<br />NC17<br />NR</td>
</tr>
<tr>
<td>Canadian Parental Rating<br />Canadá</td>
<td>CA</td>
<td>CPR</td>
<td>14+<br />18+<br />C<br />C8<br />C-8<br />G<br />NR<br />PG<br />E</td>
</tr>
<tr>
<td>Dirección General de Radio, Televisión y Cinematografía<br />México</td>
<td>MX</td>
<td>RTC</td>
<td>AA<br />A<br />B<br />B-15<br />B15<br />C<br />DD<br />D<br />NR</td>
</tr>
<tr>
<td>USA Parental Rating (V-Chip)<br />Estados Unidos</td>
<td>US</td>
<td>USA_PR</td>
<td>TV-Y<br />TVY<br />TV-Y7<br />TVY7<br />TV-G<br />TVG<br />TV-PG<br />TVPG<br />TV-14<br />TV14<br />TV-MA<br />TVMA<br />NR</td>
</tr>
</tbody>
</table>


### Códigos de idioma

La siguiente lista contiene todos los códigos de idioma que Roku admite actualmente para la ingesta de contenido. Esta lista es una versión simplificada de la especificación [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646).

| Código de idioma | Language                  | Código de idioma | Language                       |
| ---------------- | ------------------------- | ---------------- | ------------------------------ |
| af               | Afrikáans                 | km               | Jemer                          |
| sq               | Albanés                   | rw               | Kinyarwanda                    |
| am               | Amhárico                  | ko               | Coreano                        |
| ar               | Árabe                     | ko-kr            | Coreano (Corea)                |
| ar-dz            | Árabe (Algeria)           | ku               | Kurdo                          |
| ar-bh            | Árabe (Baréin)            | ky               | Kirguís                        |
| ar-eg            | Árabe (Egipto)            | lo               | Lao                            |
| ar-iq            | Árabe (Irak)              | la               | Latín                          |
| ar-jo            | Árabe (Jordania)          | lv               | Letón                          |
| ar-kw            | Árabe (Kuwait)            | lt               | Lituano                        |
| ar-lb            | Árabe (Líbano)            | mk               | Macedonio                      |
| ar-ly            | Árabe (Libia)             | mg               | Malgache                       |
| ar-ma            | Árabe (Marruecos)         | ms               | Malayo                         |
| ar-om            | Árabe (Omán)              | ms-my            | Malayo (Malasia)               |
| ar-qa            | Árabe (Catar)             | ml               | Malabar                        |
| ar-sa            | Árabe (Arabia Saudita)    | mt               | Maltés                         |
| ar-sy            | Árabe (Siria)             | mr               | Maratí                         |
| ar-tn            | Árabe (Túnez)             | mn               | Mongol                         |
| ar-ae            | Árabe (E.A.U.)            | nd               | Ndebele                        |
| ar-ye            | Árabe (Yemen)             | ne               | Nepalí                         |
| hy               | Armenio                   | no               | Noruego                        |
| as               | Asamés                    | no-no            | Noruego (Noruega)              |
| az               | Azerí                     | or               | Oriya                          |
| eu               | Vasco                     | om               | Oromo                          |
| be               | Bielorruso                | ps               | Pastún                         |
| bn               | Bengalí                   | fa               | Persa (Farsi)                  |
| bh               | Bihari                    | pl               | Polaco                         |
| bs               | Bosnio                    | pl-pl            | Polaco (Polonia)               |
| bg               | Búlgaro                   | pt               | Portugués                      |
| bg-bg            | Búlgaro (Bulgaria)        | pt-br            | Portugués (Brasil)             |
| my               | Birmano                   | pt-pt            | Portugués (Portugal)           |
| ca               | Catalán                   | pa               | Panyabí                        |
| zh               | Chino                     | qu               | Quechua                        |
| zh-hk            | Chino (Hong Kong)         | rm               | Retorrománico                  |
| zh-cn            | Chino (RPC)               | ro               | Rumano                         |
| zh-sg            | Chino (Singapur)          | ro-md            | Rumano (Moldavia)              |
| zh-tw            | Chino (Taiwán)            | ro-ro            | Rumano (Rumania)               |
| zh-hans          | Chino (simplificado)      | rn               | Kirundi                        |
| zh-hant          | Chino (tradicional)       | ru               | Ruso                           |
| hr               | Croata                    | ru-md            | Ruso (Moldavia)                |
| hr-hr            | Croata (Croacia)          | ru-ru            | Ruso (Rusia)                   |
| cs               | Checo                     | se               | Sami                           |
| cs-cz            | Checo (República Checa)   | sa               | Sánscrito                      |
| da               | Danés                     | gd               | Escocés (gaélico)              |
| da-dk            | Danés (Dinamarca)         | sr               | Serbio                         |
| dv               | Divehi                    | sn               | Shona                          |
| nl               | Neerlandés                | ii               | Yi de Sichuan                  |
| nl-be            | Neerlandés (Bélgica)      | sd               | Sindi                          |
| nl-nl            | Neerlandés (Países Bajos) | si               | Singalés                       |
| dz               | Dzongkha                  | sk               | Eslovaco                       |
| en               | Inglés                    | sl               | Esloveno                       |
| en-au            | Inglés (Australia)        | sl-si            | Esloveno (Eslovenia)           |
| en-bz            | Inglés (Belice)           | so               | Somalí                         |
| en-ca            | Inglés (Canadá)           | st               | Sesoto                         |
| en-ie            | Inglés (Irlanda)          | es               | Español                        |
| en-jm            | Inglés (Jamaica)          | es-ar            | Español (Argentina)            |
| en-nz            | Inglés (Nueva Zelanda)    | es-bo            | Español (Bolivia)              |
| en-za            | Inglés (Sudáfrica)        | es-cl            | Español (Chile)                |
| en-tt            | Inglés (Trinidad)         | es-co            | Español (Colombia)             |
| en-gb            | Inglés (Reino Unido)      | es-cr            | Español (Costa Rica)           |
| en-us            | Inglés (Estados Unidos)   | es-do            | Español (República Dominicana) |
| et               | Estonio                   | es-ec            | Español (Ecuador)              |
| fo               | Feroés                    | es-sv            | Español (El Salvador)          |
| fi               | Finlandés                 | es-gt            | Español (Guatemala)            |
| fr               | Francés                   | es-hn            | Español (Honduras)             |
| fr-be            | Francés (Bélgica)         | es-mx            | Español (México)               |
| fr-ca            | Francés (Canadá)          | es-ni            | Español (Nicaragua)            |
| fr-lu            | Francés (Luxemburgo)      | es-pa            | Español (Panamá)               |
| fr-ch            | Francés (Suiza)           | es-py            | Español (Paraguay)             |
| fy               | Frisón                    | es-pe            | Español (Perú)                 |
| ff               | Fulfulfe (Fula)           | es-pr            | Español (Puerto Rico)          |
| gl               | Gallego                   | es-es            | Español (España)               |
| ka               | Georgiano                 | es-uy            | Español (Uruguay)              |
| de               | Alemán                    | es-ve            | Español (Venezuela)            |
| de-at            | Alemán (Austria)          | sw               | Suajili                        |
| de-de            | Alemán (Alemania)         | sv               | Sueco                          |
| de-li            | Alemán (Liechtenstein)    | sv-fi            | Sueco (Finlandia)              |
| de-lu            | Alemán (Luxemburgo)       | sv-se            | Sueco (Suecia)                 |
| de-ch            | Alemán (Suiza)            | tl               | Tagalo                         |
| el               | Griego                    | ty               | Tahitiano                      |
| el-gr            | Griego (Grecia)           | tg               | Tayiko                         |
| gn               | Guaraní                   | ta               | Tamil                          |
| gu               | Guyarati                  | tt               | Tártaro                        |
| ht               | Haitiano (criollo)        | te               | Télugu                         |
| ha               | Hausa                     | th               | Tailandés                      |
| he               | Hebreo                    | th-th            | Tailandés (Tailandia)          |
| hi               | Hindi                     | bo               | Tibetano                       |
| hu               | Húngaro                   | ti               | Tigriña                        |
| hu-hu            | Húngaro (Hungría)         | ts               | Tsonga                         |
| is               | Islandés                  | tn               | Setsuana                       |
| ig               | Igbo                      | tr               | Turco                          |
| id               | Indonesio                 | tr-tr            | Turco (Turquía)                |
| iu               | Inuit                     | tk               | Turcomano                      |
| ik               | Iñupiaq                   | uk               | Ucraniano                      |
| ga               | Irlandés                  | ur               | Urdu                           |
| it               | Italiano                  | uz               | Uzbeko                         |
| it-it            | Italiano (Italia)         | ve               | Venda                          |
| it-ch            | Italiano (Suiza)          | vi               | Vietnamita                     |
| ja               | Japonés                   | vi-vn            | Vietnamita (Vietnam)           |
| ja-jp            | Japonés (Japón)           | cy               | Galés                          |
| kn               | Canarés                   | xh               | Xhosa                          |
| kr               | Kanuri                    | yi               | Yidis                          |
| ks               | Cachemiro                 | yo               | Yoruba                         |
| kk               | Kazajo                    | zu               | Zulú                           |

## Glosario

| Término                                                      | Definición                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Paquete / Paquete completo / Paquete de activos / Paquete de activos completo | Entrega completa de una película, episodio o video de formato corto. Un paquete está compuesto por: video, subtítulos descriptivos (si están disponibles), ilustraciones y metadatos. Cuando se entregan títulos en varios idiomas, el paquete también puede incluir: doblaje de audio, subtítulos, ilustraciones localizadas y metadatos localizados. |
| MDU                                                          | [Actualización de metadatos](#actualización-de-metadatos-mdu-y-reemplazos-de-archivos) |

------

Recursos
--------

| Recurso                                                     | Enlace                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| Plantilla de metadatos de Excel para películas              | [https://go.roku.com/film-excel-template](https://go.roku.com/film-excel-template) |
| Plantilla de metadatos de Excel para TV                     | [https://go.roku.com/tv-excel-template](https://go.roku.com/tv-excel-template) |
| Plantilla de metadatos de Excel para clips                  | [https://go.roku.com/clip-excel-template](https://go.roku.com/clip-excel-template) |
| Esquema XML para películas                                  | [https://go.roku.com/film-xml-schema](https://go.roku.com/film-xml-schema) |
| Esquema XML para TV                                         | [https://go.roku.com/tv-xml-schema](https://go.roku.com/tv-xml-schema) |
| Esquema XML para clips                                      | [https://go.roku.com/clip-xml-schema](https://go.roku.com/clip-xml-schema) |
| XML anotado para películas                                  | [https://go.roku.com/film-xml-example](https://go.roku.com/film-xml-example) |
| XML anotado para TV                                         | [https://go.roku.com/tv-xml-example](https://go.roku.com/tv-xml-example) |
| XML anotado para clips                                      | [https://go.roku.com/clip-xml-example](https://go.roku.com/clip-xml-example) |
| Ejemplo de XML ADI para películas                           | [https://go.roku.com/film-adi-xml-example](https://go.roku.com/film-adi-xml-example) |
| Ejemplo de XML ADI para TV                                  | [https://go.roku.com/tv-adi-xml-example](https://go.roku.com/tv-adi-xml-example) |
| Ejemplo de XML ADI para clips                               | [https://go.roku.com/clip-adi-xml-example](https://go.roku.com/clip-adi-xml-example) |
| Todas las plantillas, ejemplos y esquemas de metadatos      | [https://go.roku.com/metadata-docs](https://go.roku.com/metadata-docs) |
| Prácticas recomendadas: etiquetas y metadatos del contenido | [https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md](https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md) |
| Envío de hojas de referencia musical                        | [https://go.roku.com/music-cue-sheet-submission](https://go.roku.com/music-cue-sheet-submission) |
| Aspera Client                                               | https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client&release=All&platform=All&function=all |
| Sistema de clasificaciones de la MPAA de EE. UU.            | [https://www.filmratings.com/](https://www.filmratings.com/) |
| Sistema de clasificaciones de TV de EE. UU.                 | [http://tvguidelines.org/](http://tvguidelines.org/)         |
| Sistema de clasificaciones de la BBFC del Reino Unido       | [https://bbfc.co.uk/](https://bbfc.co.uk/)                   |
| Sistema de clasificaciones de cine canadiense               | [https://www.mpa-canada.org/film-ratings/](https://www.mpa-canada.org/film-ratings/) |
| Sistema de clasificaciones de TV canadiense                 | [https://www.cbsc.ca/tools/for-english-ca-and-third-language-broadcasters/](https://www.cbsc.ca/tools/for-english-ca-and-third-language-broadcasters/) |

## Registro de cambios

**v2.3 - 03-02-2025** 

* Se actualizaron todas las referencias a The Roku Channel a Roku Channel.
* Se agregó la compatibilidad con MovieLabs y EMA.
* Se agregó una descripción de la personalización de ilustraciones de Gracenote utilizada por Roku Channel.
* Se agregaron las expectativas posteriores a la incorporación.
* Se agregó la política de contenido financiado con anuncios.
* Se agregaron la definición y algunos ejemplos de llamadas a la acción.
* Se agregó un enlace para enviar las hojas de referencia musical.
* Se actualizaron los requisitos de video para requerir video con muy poco texto.
* Se actualizaron los archivos de subtítulos descriptivos y subtítulos sidecar preferidos de Roku.
* Se identificaron qué subtítulos descriptivos y subtítulos sidecar admiten datos de posición.
* Se actualizaron los requisitos y las preferencias de clasificación. Se desaconsejó la clasificación NR y se eliminó la compatibilidad con la clasificación UR.
* Se actualizó la resolución mínima de imagen en 2:3 para alinear las dimensiones a exactamente 2:3.
* Se actualizaron los ejemplos de imágenes en la plataforma.
* Se agregaron algunas pautas sobre el suministro de imágenes.
* Se indicó que las imágenes por episodios deben ser únicas para cada episodio.
* Se indicó que los subtítulos y subtítulos descriptivos sidecar no deben ser archivos vacíos.
* Se agregó un enlace a la página “creado para niños” de Roku.
* Se corrigió un error tipográfico en la muestra de Xpath para el tipo de contenido de “episodio” a “tv”.
* Se indicó que los documentos de Excel no deben contener enlaces a datos externos.
* Se aclaró que las fechas de inicio deben ser cronológicamente anteriores a las de finalización.
* Se aclaró que las fechas de inicio y fin no pueden ser idénticas.
* Se actualizaron las plantillas de ingesta para agregar consejos adicionales.
* Se agregaron nodos de metadatos de deportes a las especificaciones y plantillas de clips.
* Se eliminó el enlace a la plantilla de actualización de archivos.
* Se actualizaron los documentos XSD para reflejar los cambios anteriores.

**v2.2 - 18-05-2023** 

* Se eliminó la compatibilidad con las MDU heredadas.
* Se eliminaron los requisitos de long_synopsis.
* Se actualizó el lenguaje para los reemplazos de archivos y las MDU automatizadas
* Se agregó una política de retención de 30 días para los archivos en la ubicación de entrega.
* Se agregó una lista de caracteres permitidos y prohibidos para los nombres de archivo.
* Se agregó un enlace a la página Prácticas recomendadas: etiquetas de contenido y metadatos.
* Se agregó end_time como requisito para los cuePoint de los créditos
* Se agregó la compatibilidad con cuePoints de superposición de anuncios.
* Se agrego lenguaje sobre la prohibición de entrega de segmentos de videos fragmentados.
* Se agregó lenguaje sobre la posibilidad de entregar miniaturas por episodios en formato letterboxed o pillarboxed.
* Se agregó un enlace a un archivo .zip con todos los documentos de muestra.
* Se corrigieron errores tipográficos.

**v2.1 - 28-10-2022** 

* Se actualizó la documentación de MDU, se agregó la compatibilidad con las MDU automatizadas y se cambió el nombre del método heredado.
* Se separaron las descripciones de campos de metadatos de Excel de las descripciones de campos de metadatos de XML.
* Se modificó el formato de las descripciones de campos de metadatos de XML para mejorar su legibilidad.
* Se aclaró el etiquetado de los canales de audio.
* Se aclararon los requisitos de audio sidecar.
* Se aclararon los requisitos de los subtítulos sidecar.
* Se actualizó la lista de códigos de idioma compatibles.
* Se agregó la compatibilidad con la ingesta de cuePoints de créditos.
* Se agregaron las clasificaciones y el sistema de clasificación de contenido de México (RTC)

**v2.0 - 25-04-2022** 

* Se identificó al formato .srt como la entrada preferida de subtítulos descriptivos sidecar.
* Se aclararon los requisitos de número de episodios.
* Se reorganizó el documento para que finalice con los metadatos.
* Se modificó el formato de las definiciones de los nodos de metadatos para mostrar los nombres de las columnas Excel y xpath.
* Se reforzaron y aclararon los requisitos de video.
* Se agregó la cantidad aceptable de video en negro al principio y al final.
* Se actualizaron los requisitos de las películas para permitir release_date en lugar de theatrical_release_date.
* Se agregó la compatibilidad con información de disponibilidad diferente entre licenseTypes y territorios.
* Se agregó la compatibilidad con la entrega en varios idiomas, entre los que se incluyen: 
  * Language
  * Idioma oral original
  * País de origen
  * Metadatos localizados
  * Audio sidecar
  * Subtítulos sidecar
  * Ilustraciones localizadas

* Se agregó una lista de archivos de subtítulos compatibles.
* Se agregó una lista de archivos de audio sidecar compatibles.
* Se agregó una lista de códigos de idioma compatibles.
* Se agregó la compatibilidad con la entrega de audio descriptivo.
* Se aclararon los requisitos del código de idioma para los metadatos y activos localizados.
* Se actualizaron las muestras de XML para incluir la compatibilidad con varios idiomas.
* Se actualizó el XSD para validar el XML en varios idiomas.
* Se actualizaron las muestras de Excel para incluir la compatibilidad con varios idiomas.
* Se agregó un glosario de terminología.
* Se agregó un enlace externo a la página de la FTC que describe el cumplimiento de la ley COPPA.
* Se actualizó el nombre de los descriptores de diseño de audio a consejos de diseño de audio para evitar confusiones con el audio descriptivo.
* Se actualizó la política de adBreak según la última política de anuncios de Roku.