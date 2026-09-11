---
title: Ilustraciones
excerpt: >-
  Tipos de imagen requeridos, resoluciones y relaciones de aspecto por tipo de
  contenido.
deprecated: false
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
## Descripción general

Roku admite **seis tipos de imagen**, cada uno utilizado en una ubicación distinta dentro de Roku Channel. Roku **prefiere** recibir todos los tipos de imagen aplicables siempre que sea posible.

**Todos los tipos de imagen comparten los siguientes requisitos de entrega**, sin importar el tipo:

* **Formato:** JPEG o PNG
* **Espacio de color:** RGB
* **Resolución (densidad):** 72 ppi
* **Extensión de archivo:** `.jpg`, `.jpeg` o `.png`

Además de estas reglas compartidas:

* Las imágenes **deben** cumplir o superar la resolución **mínima** definida para su tipo de imagen.
* Las imágenes **deben** entregarse en la relación de aspecto **exacta** definida para su tipo de imagen — sin tolerancia de recorte.
* Entrega en la resolución **preferida** de Roku siempre que sea posible, para evitar retrasos en la publicación.

***

## Tipos de imagen

| Tipo de imagen      | Relación de aspecto | Resolución preferida  | Resolución mínima | Resolución máxima | Campo de metadatos |
| ------------------- | ------------------- | --------------------- | ----------------- | ----------------- | ------------------ |
| Arte clave          | 16:9                | 1920×1080 o 3840×2160 | 1920×1080         | 3840×2160         | `keyart`           |
| Carátula (serie)    | 4:3                 | 2560×1920             | 1600×1200         | 2560×1920         | `boxcover`         |
| Carátula (película) | 3:4                 | 1920×2560             | 1200×1600         | 1920×2560         | `boxcover`         |
| Portada             | 2:3                 | 2000×3000             | 1000×1500         | 2000×3000         | `poster`           |
| Fondo               | 16:9                | 1920×1080 o 3840×2160 | 1920×1080         | 3840×2160         | `background`       |
| Arte de episodio    | 16:9                | 1920×1080 o 3840×2160 | 1920×1080         | 3840×2160         | `thumbnail`        |

_La columna Campo de metadatos refleja el nombre del campo utilizado para etiquetar cada tipo de imagen en los metadatos de entrega — no es una descripción independiente._

### Arte clave

Ilustración en 16:9 que aparece al navegar por Roku Channel. **Debe** incluir el tratamiento del título (un gráfico que muestra el título completo del activo), y el texto del tratamiento del título **debe** ser visible en la imagen.

### Carátula (serie)

Ilustración en 4:3 para futura navegación en Roku Channel y/o plataformas de terceros. **Actualmente no es obligatoria** para la distribución en Roku Channel. Debe incluir el tratamiento del título. Se utiliza **únicamente para series**.

### Carátula (película)

Ilustración en 3:4 para futura navegación en Roku Channel y/o plataformas de terceros. **Actualmente no es obligatoria** para la distribución en Roku Channel. Debe incluir el tratamiento del título. Se utiliza **únicamente para películas**.

### Portada

Ilustración en 2:3 que puede aparecer al realizar búsquedas en Roku o Roku Channel. Debe incluir el tratamiento del título.

### Fondo

Ilustración en 16:9 utilizada como fondo de la página de detalles de una serie o película. **NO debe** contener texto.

### Arte de episodio

Ilustración en 16:9 que representa un episodio sin spoilers — normalmente una imagen fija tomada del episodio. **NO debe** contener texto.

***

## Requisitos de ilustración mínimos por tipo de contenido

| Tipo de imagen                       | Clip            | Película        | Serie           | Episodio        |
| ------------------------------------ | --------------- | --------------- | --------------- | --------------- |
| Arte clave en 16:9                   | **Obligatorio** | **Obligatorio** | **Obligatorio** | —               |
| Portada en 2:3                       | —               | **Obligatorio** | **Obligatorio** | —               |
| Carátula en 3:4                      | —               | **Opcional**    | —               | —               |
| Carátula en 4:3                      | —               | —               | **Opcional**    | —               |
| Fondo en 16:9                        | —               | **Obligatorio** | **Obligatorio** | **Obligatorio** |
| Arte de episodio en 16:9 (miniatura) | —               | —               | —               | **Obligatorio** |

### Notas específicas para episodios

Para el contenido de Episodio, el Fondo entregado:

* **Puede** estar en formato letterbox o pillarbox, según la relación de aspecto del video fuente.
* **NO debe** estar en formato windowbox — las imágenes en formato windowbox serán rechazadas.
* **Debería** ser única para cada episodio y representativa del contenido real de ese episodio.

***

## Pautas de las ilustraciones de contenido

* **Sin** ilustraciones sexualmente explícitas ni con violencia gráfica.
* Las ilustraciones **deberían** ser posteriores al estreno en cines — no incluyas frases como _"En cines ahora"_ o _"Próximamente"_.
* Se **prefieren** las ilustraciones diseñadas específicamente para la entrega digital.
* Las ilustraciones para territorios internacionales **deberían** localizarse para cada territorio.
* Roku **no** aceptará ilustraciones de marca sin aprobación previa — esto aplica tanto a activos de video individuales como a entidades a nivel de temporada/serie.
* Las llamadas a la acción (CTA) o los enlaces a plataformas/sitios externos **no están permitidos** y **deben** eliminarse del archivo de imagen antes de la entrega.

***

## Ejemplos de ubicación de las ilustraciones

**Ilustraciones de películas — experiencia de navegación**
Imagen en 16:9 con texto y tratamiento del título, tal como se muestra al navegar.

![Ejemplo de navegación de película](https://image.roku.com/ZHZscHItMTc2/movieBrowse.jpg)

**Ilustraciones de películas — experiencia de detalles**
Imagen en 16:9 sin texto, tal como se muestra en la página de detalles de la película.

![Ejemplo de detalles de película](https://image.roku.com/ZHZscHItMTc2/movieDetail.jpg)

**Ilustraciones de series — experiencia de navegación**
Imagen de serie en 16:9 con texto y tratamiento del título, tal como se muestra al navegar.

![Ejemplo de navegación de serie](https://image.roku.com/ZHZscHItMTc2/seriesBrowse.jpg)

**Ilustraciones de series — experiencia de detalles**
Imagen de serie en 16:9 sin texto, tal como se muestra en la página de detalles de la serie.

![Ejemplo de detalles de serie](https://image.roku.com/ZHZscHItMTc2/seriesDetails.jpg)

**Ilustraciones de episodios — experiencia del selector de episodios**
Imágenes de episodio en 16:9 sin texto, tal como se muestran en el selector de episodios.

![Ejemplo del selector de episodios](https://image.roku.com/ZHZscHItMTc2/episodePicker.jpg)

**Ilustraciones de episodios — experiencia de detalles del episodio**
Imagen de episodio en 16:9 sin texto, tal como se muestra en la página de detalles del episodio.

![Ejemplo de detalles de episodio](https://image.roku.com/ZHZscHItMTc2/episodeDetail.jpg)

**Ilustraciones de clips — experiencia de navegación**
Imagen en 16:9 con texto y tratamiento del título, tal como se muestra al navegar.

![Ejemplo de navegación de clip](https://image.roku.com/ZHZscHItMTc2/clipBrowse.jpg)

**Ilustraciones de portada — experiencia de búsqueda**
Imagen en 2:3 con texto y tratamiento del título, tal como se muestra en la experiencia de búsqueda. Las imágenes en 2:3 son **preferidas** para los tipos de contenido de serie y película.

![Ejemplo de búsqueda de portada](https://image.roku.com/ZHZscHItMTc2/posterSearch.jpg)

***

## Glosario

| Término                    | Definición                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tratamiento del título** | Una representación gráfica estilizada del nombre de un título, diseñada para aparecer directamente sobre las imágenes de arte clave, portada o carátula. |
| **Imagen con texto**       | Una imagen que incluye texto (normalmente el tratamiento del título).                                                                                    |
| **Imagen sin texto**       | Una imagen sin texto ni tratamiento del título superpuesto.                                                                                              |
| **Letterbox**              | Barras negras agregadas arriba y abajo de la imagen para ajustar una fuente más ancha a un cuadro más alto.                                              |
| **Pillarbox**              | Barras negras agregadas a la izquierda y a la derecha de la imagen para ajustar una fuente más angosta a un cuadro más ancho.                            |
| **Windowbox**              | Barras negras en los cuatro lados de una imagen — combinando letterbox y pillarbox. No se acepta para el Arte de episodio.                               |
