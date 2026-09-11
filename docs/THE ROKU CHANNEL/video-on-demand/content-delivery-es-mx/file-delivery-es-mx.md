---
title: Entrega de archivos
excerpt: >-
  Estructura de carpetas, plazos de conservación y reglas de denominación de
  archivos.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Secuencia de entrega

Los archivos de video, subtítulos descriptivos e ilustraciones **deben** entregarse **por completo antes** de la entrega de los metadatos. Los metadatos hacen referencia a estos archivos por nombre, por lo que entregar los metadatos primero (o antes de que finalice la transferencia de los archivos referenciados) puede provocar errores de procesamiento.

***

## Estructura de carpetas

* Los archivos de producción **DEBEN** entregarse en la carpeta `/prod`. La automatización depende de la entrega de archivos en la ubicación correcta. Si no se entregan los archivos en la carpeta correcta, se producirán retrasos en el procesamiento o el contenido no se procesará en absoluto.
* Los archivos de prueba **pueden** entregarse en la carpeta `/testing`.

### Subcarpetas

El contenido **no debería** entregarse en subcarpetas. Entrega directamente en `/prod` (o `/testing`) siempre que sea posible. **Si es necesario usar subcarpetas**, sigue estas pautas:

* Los nombres de las subcarpetas **no deben** comenzar con un guion bajo. El sistema de Roku **ignorará** cualquier subcarpeta que comience con un guion bajo. _(Nota: esta es una regla distinta de la regla de guion bajo para nombres de archivo indicada más adelante. Aplica al nombre de la carpeta en sí, no a los archivos dentro de ella.)_
* **No** separes los archivos en subcarpetas por tipo de archivo (por ejemplo, no coloques todo el video en una subcarpeta y todas las ilustraciones en otra).
* Todos los archivos multimedia de un mismo título (episodio, película o formato corto) **deben** entregarse en el **mismo** directorio.
* Los metadatos **deben** entregarse en el **mismo** directorio que los archivos multimedia a los que hacen referencia — la plataforma de ingesta asume que los archivos multimedia referenciados se encuentran junto al archivo de metadatos.
* Al reemplazar un archivo entregado mediante una subcarpeta, el archivo de reemplazo **y** sus metadatos asociados **deben** entregarse en una carpeta con el **mismo nombre** que la carpeta de entrega original.

## Notificaciones de entrega

Las notificaciones de entrega pueden enviarse a: [deliverynotifications@roku.com](mailto:deliverynotifications@roku.com)

***

## Conservación de archivos

La ubicación de entrega es un área de preparación **temporal** para que las empresas socias carguen archivos destinados a la ingesta en la biblioteca de contenido de Roku Channel.

* Tras completar la ingesta con éxito, la automatización mueve los archivos de la ubicación de entrega a una ubicación de archivo, donde se almacenan de forma **indefinida**.
* Se espera que los archivos cargados en la ubicación de entrega se ingieran en un **plazo razonable, que no supere los 30 días**.
* Los metadatos válidos y completos **deben** entregarse poco después de la entrega de los archivos, para garantizar una ingesta oportuna.
* Los archivos que permanezcan en la ubicación de entrega **después de 30 días sin haberse ingerido están sujetos a eliminación.**

> **Excepción:** los archivos en la carpeta `/testing` pueden estar exentos de la política de conservación de archivos.

***

## Denominación de archivos

Los archivos de video fuente, subtítulos descriptivos e ilustraciones entregados para la ingesta **deben** cumplir con lo siguiente:

* Los nombres de archivo **no deben** exceder los **125 caracteres** de longitud.
* Los nombres de archivo **deben** coincidir con el nombre de archivo referenciado en los metadatos suministrados para el título.
* Los nombres de archivo **distinguen entre mayúsculas y minúsculas**.
* Los nombres de archivo **deben** terminar con una extensión de archivo adecuada, y las extensiones **deben** estar en **minúsculas**.
* Los nombres de archivo **no deben** comenzar con un guion bajo. El sistema de Roku **ignorará** cualquier archivo que comience con un guion bajo. _(Esta es una regla distinta de la regla de denominación de subcarpetas indicada anteriormente. Aplica a los nombres de archivo individuales, no a los nombres de carpeta.)_
* **No deben** incluirse espacios en blanco ni caracteres especiales en ningún nombre de archivo — esta restricción aplica por igual a los archivos de video, subtítulos, subtítulos descriptivos, audio sidecar y metadatos. Consulta la tabla de caracteres prohibidos a continuación para ver la lista completa con los nombres de los caracteres.
* Reutilizar la misma imagen en todos los episodios de una serie **no es recomendable.** Se prefiere una imagen única por episodio. **Si** se reutiliza la misma imagen, de todos modos **debe** entregarse como un archivo independiente con un nombre único para cada episodio (por ejemplo, `episode.jpg` entregado como `episode_01.jpg`, `episode_02.jpg`, etc.). Que el contenido de la imagen sea idéntico no exime a un archivo de la denominación única.

### Caracteres permitidos en los nombres de archivo

| Conjunto de caracteres |
| ---------------------- |
| `0-9`                  |
| `a-z`                  |
| `A-Z`                  |

| Nombre del carácter | Carácter |
| ------------------- | -------- |
| Guion               | `-`      |
| Punto               | `.`      |
| Guion bajo          | `_`      |

### Caracteres prohibidos en los nombres de archivo

| Nombre del carácter  | Carácter | Nombre del carácter        | Carácter |
| -------------------- | -------- | -------------------------- | -------- |
| Símbolo arroba       | `@`      | Corchete izquierdo         | `[`      |
| Ampersand            | `&`      | Menos que                  | `<`      |
| Asterisco            | `*`      | Porcentaje                 | `%`      |
| Barra inversa        | `\`      | Más                        | `+`      |
| Caret                | `^`      | Numeral o etiqueta         | `#`      |
| Dos puntos           | `:`      | Signo de interrogación     | `?`      |
| Coma                 | `,`      | Comillas o comillas dobles | `"`      |
| Dólar                | `$`      | Llave derecha              | `}`      |
| Igual a              | `=`      | Corchete derecho           | `]`      |
| Signo de exclamación | `!`      | Punto y coma               | `;`      |
| Barra                | `/`      | Comilla simple/apóstrofo   | `'`      |
| Acento grave         | `` ` ``  | Espacio                    | ` `      |
| Mayor que            | `>`      | Tilde                      | `~`      |
| Llave izquierda      | `{`      | Barra vertical             | `\|`     |
| Paréntesis izquierdo | `(`      | Paréntesis derecho         | `)`      |

***

## Responsabilidad de la empresa socia

> La ubicación correcta de entrega de archivos, la cadencia adecuada de entrega y la denominación correcta de los archivos son responsabilidad de las empresas socias de Roku, ya que la empresa socia es la experta en su propio contenido — Roku no siempre tiene visibilidad de los cronogramas de entrega de cada empresa socia.

***

## Glosario

| Término                  | Definición                                                                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ingesta**              | El proceso automatizado mediante el cual Roku incorpora los archivos y metadatos entregados a la biblioteca de contenido de Roku Channel.                                                                         |
| **Ubicación de entrega** | La(s) carpeta(s) temporal(es) de preparación (`/prod`, `/testing`) a las que cargan las empresas socias; distinta de la ubicación de archivo permanente a la que se mueven los archivos tras una ingesta exitosa. |
| **Archivo sidecar**      | Un archivo de subtítulos, subtítulos descriptivos o audio entregado junto al (no incrustado en el) archivo de video, referenciado por los metadatos.                                                              |
