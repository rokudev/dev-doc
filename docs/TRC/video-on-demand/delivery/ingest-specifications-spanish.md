---
title: Especificaciones para la ingesta
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
<p>A continuación, encontrarás una lista completa de los requisitos de formato para los activos multimedia y metadatos de las empresas socias, incluidas las plantillas de archivo y las pautas de entrega. La plataforma de ingesta de Roku está totalmente automatizada y el pleno cumplimiento de esta especificación garantizará el procesamiento puntual y sin errores del contenido para su distribución en Roku Channel. Si fuera necesario realizar algún cambio en el flujo de trabajo establecido durante la incorporación, avisa a un representante de Roku lo antes posible para organizar cualquier prueba o configuración nueva. Roku espera que el contenido y los metadatos se entreguen de la manera acordada durante la fase de incorporación y prueba. Asegúrate de que el conocimiento sobre las entregas se transfiera al nuevo personal en caso de que se actualicen o cambien los equipos.</p>
<h3 id="movielabs">MovieLabs</h3>
<p>Como alternativa a esta especificación, Roku Channel admite la entrega de contenido a través de la especificación de MovieLabs.</p>
<ul>
<li><strong>MMC y MEC:</strong> el servicio MovieLabs de Roku Channel se desarrolló con la versión 2.9 de MEC y la versión 1.10 de MMC, tal y como se define en el sitio web de MovieLabs: <a href="https://www.movielabs.com/md/">https://www.movielabs.com/md/</a></li>
<li><strong>EMA Avails:</strong> Roku Channel admite la última versión de la <a href="https://movielabs.com/md/avails/">especificación de EMA</a> a través del archivo entregable en formato xlsx</li>
</ul>
<p>Roku prefiere los entregables de MovieLabs de todas las empresas socias de suscripción prémium (SVOD). Consulta los detalles adicionales de entrega de MovieLabs específicos para Roku Channel <a href="#entrega-de-contenido-de-movielabs">aquí</a></p>
<h2 id="políticas-de-contenido-de-roku">Políticas de contenido de Roku</h2>
<h3 id="política-de-anuncios">Política de anuncios</h3>
<p>Roku mostrará hasta 8 minutos de anuncios por hora de visualización. La política de anuncios de Roku está sujeta a cambios.</p>
<h4 id="contenido-financiado-con-anuncios-en-roku-channel">Contenido financiado con anuncios en Roku Channel</h4>
<p>Roku Channel busca contenido financiado con anuncios que sea adecuado para nuestras personas usuarias y anunciantes; por ejemplo, Roku Channel no quiere contenido financiado con anuncios con desnudez excesiva o violencia extrema o gráfica.  Utiliza el sentido común a la hora de compartir contenido. Si un activo te genera dudas, busca alguna opción alternativa para compartir. Nos reservamos el derecho a eliminar o rechazar cualquier contenido que consideremos inadecuado.</p>
<h4 id="cortes-publicitarios">Cortes publicitarios</h4>
<p>Los códigos de tiempo de los cortes publicitarios se deben entregar en conformidad con la Política de anuncios de Roku en los nodos adBreak de los metadatos de la película, el episodio o el clip para activar los cortes publicitarios durante la reproducción en la plataforma. Los adBreaks deben proporcionarse con una precisión de milisegundos. Convierte cualquier valor de velocidad de fotogramas a su equivalente en milisegundos. Recomendamos incluir los adBreaks en los metadatos de ingesta, ya que así se acelerará el proceso de control de calidad. Todos los datos de adBreak deben suministrarse como HH:MM:SS.sss (por ejemplo, 01:23:45.678).</p>
<h5 id="política-de-anuncios-en-películas">Política de anuncios en películas</h5>
<ul>
<li>No se deben incluir adBreaks durante los 10 primeros minutos de reproducción.</li>
<li>No se debe incluir ningún adBreak previo al video: 00:00:00.000.</li>
<li>Los puntos de referencia del adBreak deben proporcionarse en las pausas naturales de la escena o en las transiciones a negro.</li>
<li>No debe haber menos de 10 minutos entre cada adBreak.</li>
<li>No se admiten adBreaks a menos de 10 minutos de los créditos finales.</li>
</ul>
<h5 id="política-de-anuncios-en-episodios-de-series">Política de anuncios en episodios de series</h5>
<p>Contenido con una duración mayor a 15 minutos:</p>
<ul>
<li>No se deben incluir adBreaks durante los primeros 5 minutos de reproducción.</li>
<li>No se debe incluir ningún adBreak previo al video: 00:00:00.000.</li>
<li>Los puntos de referencia del adBreak deben proporcionarse en las pausas naturales de la escena o en las transiciones a negro.</li>
<li>No debe haber menos de 7 minutos entre cada adBreak.</li>
<li>No se admiten adBreaks a menos de 5 minutos de los créditos finales.</li>
</ul>
<h3 id="política-de-contenido-dirigido-a-niños">Política de contenido dirigido a niños</h3>
<p>El “contenido dirigido a niños” es contenido que: (i) está dirigido a niños según la definición de la legislación aplicable de la jurisdicción en la que se muestra el contenido (por ejemplo, <a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa">La Ley de Protección de la Privacidad Infantil en Internet</a>); o (ii) se creó para ser visto principalmente por niños dentro de la jurisdicción en la que se muestra el contenido.</p>
<ul>
<li>
<p>Debe informarse a Roku de la intención de enviar o distribuir contenido dirigido a niños.</p>
</li>
<li>
<p>SE PROHÍBE el envío o la distribución de contenido dirigido a niños sin la aprobación expresa por escrito de Roku.</p>
</li>
<li>
<p>Cuando Roku aprueba el envío o la distribución de contenido dirigido a niños, todos los metadatos del contenido deben incluir lo que se detalla a continuación: </p>
<ul>
<li>
<p>Para contenido de películas: </p>
<ul>
<li>La leyenda <code>&lt;tag&gt;</code> “kidsdirected” (todo en minúscula) debe incluirse como una de las etiquetas para cada película</li>
<li>Debe incluirse una <a href="#valores-de-clasificaci%C3%B3n-por-sistema-de-clasificaci%C3%B3n-y-pa%C3%ADs">clasificación</a> por edades válida de MPAA, USA_PR o TV. Las clasificaciones “UNRATED” y “Not Rated” no son aceptables para el contenido dirigido a niños.</li>
</ul>
</li>
<li>
<p>Para contenido de series por episodios: </p>
<ul>
<li>La leyenda <code>&lt;tag&gt;</code> “kidsdirected” (todo en minúscula) debe incluirse como una de las etiquetas de la serie y los episodios para cada serie y episodio</li>
<li>Debe incluirse una <a href="#valores-de-clasificaci%C3%B3n-por-sistema-de-clasificaci%C3%B3n-y-pa%C3%ADs">clasificación</a> por edades de TV válida. Las clasificaciones “UNRATED” y “Not Rated” no son aceptables para el contenido dirigido a niños.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Consulta <a href="https://docs.roku.com/published/madeforkids">aquí</a> para obtener más información y asesoramiento sobre contenido “creado para niños”</p>
<h3 id="marcas-y-llamadas-a-la-acción-cta-externas">Marcas y llamadas a la acción (CTA) externas</h3>
<p>Roku Channel no permite marcas o enlaces a URL o llamadas a la acción externas en el arte clave o dentro del video y los subtítulos descriptivos. Las llamadas a la acción son recursos creativos o segmentos de contenido que dirigen a las personas usuarias fuera del ecosistema de Roku Channel para consumir contenido en servicios externos. Deben editarse los videos y eliminar los enlaces o las indicaciones que dirigen a las personas usuarias a visitar sitios externos. Esto incluye:</p>
<ul>
<li>logotipos de marca</li>
<li>URL de sitios web</li>
<li>códigos QR</li>
<li>invitación verbal o textual a la audiencia a “hacer clic”, “suscribirse”, “comprar ahora”, “ir a”, etc.</li>
</ul>
<p>Comunícate con tu representante de Roku para obtener más información.</p>
<h3 id="hojas-de-referencia-musical">Hojas de referencia musical</h3>
<p>Las hojas de referencia musical pueden enviarse a Roku para contenido distribuido en Roku Channel a través del siguiente enlace:</p>
<p><a href="https://go.roku.com/music-cue-sheet-submission">https://go.roku.com/music-cue-sheet-submission</a></p>
<p>No envíes hojas de referencia musical con los entregables del paquete de video a través de Aspera. Las hojas de referencia que se entreguen con el paquete de video estarán sujetas a eliminación.</p>
<h2 id="experiencia-de-uso-en-roku-channel">Experiencia de uso en Roku Channel</h2>
<p>Roku aumenta los metadatos y las ilustraciones que aparecen en Roku Channel en los dispositivos Roku, navegadores web, apps móviles y otros reproductores fuera de la plataforma con datos suministrados por la base de datos de Gracenote, siempre que estén disponibles. Los datos de Gracenote contribuyen a una experiencia unificada de un mismo título en todas las plataformas y en todo el ecosistema de Roku. Roku intentará que todo el contenido entregado por nuestras empresas socias coincida con el registro correspondiente en la base de datos de Gracenote. <em>En este momento, todos los metadatos e ilustraciones que aparecen en Roku Channel provienen de Gracenote, si dicho contenido se encuentra en su base de datos.</em> </p>
<p>Gracenote utiliza la “personalización de las ilustraciones”, mediante la cual proporciona imágenes alternativas para diversificar las ilustraciones de los títulos para distintas personas usuarias en función de varios factores (demografía, popularidad, etc.). Este cambio ha aumentado la participación de los usuarios en nuestra plataforma. Gracenote acepta el arte clave oficial de las empresas socias, sin embargo, no todas las personas usuarias verán el arte oficial, a menos que el algoritmo lo muestre.  Gracenote suministra ~3 imágenes únicas y crea versiones alternativas de ilustraciones procedentes de diversos lugares (por ej., emisora original, estudio de producción, agencia creativa). Gracenote le informó a Roku que todas las imágenes están sujetas a una licencia de uso justo y que aplica los mismos estándares de calidad tanto a las imágenes personalizadas como al arte clave suministrado por las empresas socias, por ejemplo, sin grandes revelaciones de la trama, sin imágenes oscuras, borrosas o granuladas, sin imágenes violentas o sugestivas y sin referencias al tabaquismo.</p>
<p>Nuestros sistemas utilizan varios métodos para hacer coincidir un título con su registro de Gracenote correcto. Las empresas socias pueden facilitar la correspondencia con un registro de Gracenote al brindar metadatos precisos, entre los que se incluyen:</p>
<ul>
<li>El título exacto de una serie, película, especial de TV o video de formato corto.</li>
<li>Las fechas de lanzamiento que correspondan al año de lanzamiento original del título en cualquier plataforma.</li>
<li>La numeración exacta de las temporadas y los episodios según el orden de lanzamiento original.</li>
<li>
<p>Los ID de TMS (Gracenote) precisos según el tipo de contenido. </p>
<ul>
<li>El contenido clasificado como un episodio en Gracenote debe entregarse a Roku como un episodio.</li>
<li>El contenido clasificado como una película en Gracenote debe entregarse a Roku como una película.</li>
<li>El contenido clasificado como un especial de TV en Gracenote debe entregarse a Roku como un especial de TV.</li>
</ul>
</li>
</ul>
<p>Las empresas socias pueden ayudar en la selección de su contenido en Roku Channel al brindar etiquetas con cada película, episodio o clip. El equipo editorial y el motor de recomendaciones de Roku Channel utilizarán las etiquetas y los géneros proporcionados para ayudar a mostrar el contenido en la interfaz de uso de la plataforma de Roku Channel. Cuantas más etiquetas se incluyan, más formas habrá de seleccionar y presentar el contenido a la persona usuaria final. Consulta <a href="https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md">Prácticas recomendadas: etiquetas y metadatos del contenido</a> para obtener más información.</p>
<h2 id="pautas-de-activos-multimedia">Pautas de activos multimedia</h2>
<h3 id="requisitos-de-video">Requisitos de video</h3>
<ul>
<li>
<p>Todo el contenido de video debe ser <strong>solo el programa completo</strong> :</p>
<ul>
<li>sin barras ni tonos ni pizarras al inicio del programa</li>
<li>sin video sin texto tras la finalización del programa</li>
<li>no más de 2 segundos de negro al inicio del programa</li>
<li>no más de 2 segundos de negro tras la finalización del programa</li>
</ul>
</li>
</ul>
<ul>
<li>Los archivos de video deben tener muy poco texto (lo que también se conoce como “con texto sin subtítulos” o “sin texto con texto principal, final y gráfico”). El video puede incluir los crédito iniciales y finales, pero deben eliminarse todos los subtítulos de los diálogos en idioma extranjero.</li>
<li>No deben incluirse anuncios en el video. Todos los puntos de inserción de anuncios para el contenido financiado con anuncios se proporcionarán en el archivo de metadatos según las <a href="#pol%C3%ADtica-de-anuncios">pautas de la Política de anuncios de Roku.</a></li>
<li>Pueden incluirse fotogramas en negro para comerciales en el video siempre que no duren más de 2 segundos.</li>
<li>Pueden incluirse fotogramas en negro para comerciales en el contenido de TV por episodios, pero no en el contenido de películas.</li>
<li>Los archivos de video deben entregarse como un único archivo de video sin interrupciones.</li>
<li>No deben entregarse archivos de video fragmentados (divididos en segmentos en los puntos de corte publicitario).</li>
<li>No se permiten las llamadas a la acción (CTA) ni los enlaces a plataformas o sitios externos, y deben eliminarse del video antes de entregarlo a Roku.</li>
<li>El contenido de video HD debe entregarse en un contenedor 16:9.</li>
<li>Se prefiere la presentación de cuadro completo (relación de aspecto de 1.78), siempre que esté disponible.</li>
<li>Se permite el uso del formato letterboxed en 16:9, pero debe reducirse al mínimo.</li>
<li>No debe entregarse contenido SD en 16:9 en un contenedor 4:3 con letterboxing.</li>
<li>Se prefieren archivos de nivel intermedio de alta calidad con la mayor tasa de bits y la mayor resolución posible.</li>
</ul>
<h4 id="velocidad-de-fotogramas-del-video">Velocidad de fotogramas del video</h4>
<p>Roku admite una gran variedad de velocidades de fotogramas y tipos de escaneo. Todos los archivos de video deben entregarse con su velocidad de fotogramas y tipo de escaneo originales.</p>
<h4 id="resolución-de-video">Resolución de video</h4>
