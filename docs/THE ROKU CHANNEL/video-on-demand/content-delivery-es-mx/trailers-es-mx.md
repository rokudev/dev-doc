---
title: Tráilers
excerpt: >-
  Requisitos de entrega de tráilers exclusivamente a través de MovieLabs,
  incluida la vinculación con el título principal.
deprecated: false
hidden: true
metadata:
  robots: index
---
<Callout icon="far fa-bell-exclamation" theme="warn">
  ### Por el momento, la compatibilidad con tráilers se limita a un único tráiler a nivel de película o serie. Actualmente no se admiten tráilers a nivel de temporada o episodio.
</Callout>

## Descripción general

Roku acepta tráilers **exclusivamente a través de la entrega por MovieLabs.** Los tráilers se tratan como **entidades independientes** de su contenido principal y se muestran en la plataforma a nivel de película o de serie.

Gran parte de las pautas de video, audio y entrega general de este documento reflejan la [Especificación de video](https://developer.roku.com/dev/update/docs/video-requirements) y la [Especificación de audio](https://developer.roku.com/dev/update/docs/audio-requirements) generales — este documento señala únicamente los requisitos y diferencias específicos de los tráilers. Cuando una regla se copia textualmente aquí abajo (por ejemplo, las reglas de "solo programa completo"), esto se hace intencionalmente para mantenerla sincronizada con esas especificaciones, en lugar de crear una bifurcación; si ambas llegaran a divergir, las especificaciones generales son la autoridad para las reglas que no son específicas de tráilers.

## Método de entrega

* Los tráilers **deben** entregarse exclusivamente a través de **MovieLabs** (MEC/MMC/Avails) — no se admite ninguna vía de entrega heredada.
* Cada tráiler **debe** entregarse con su **propio** MEC, MMC y Avails — un tráiler no hereda estos elementos de su título principal.

***

## Requisitos de Avails

**Se requiere un Avail para publicar un tráiler.** Un tráiler no saldrá al aire en Roku Channel sin un avail asociado — este es un requisito que bloquea la publicación, no simplemente algo preferible. Consulta [Avails y listas de títulos comprometidos para Roku Channel](https://developer.roku.com/dev/update/docs/title-avail-specifications) para conocer el proceso de envío completo.

**Los tráilers destinados a poder verse antes del muro de pago** (es decir, accesibles sin una suscripción activa, aunque estén vinculados a contenido SVOD) **requieren una ventana de disponibilidad FVOD.** La ventana FVOD **debe** estar completamente contenida dentro de una ventana SVOD activa del título principal del tráiler — Roku no admite disponibilidad exclusivamente FVOD. Consulta [Envíos de FVOD](https://developer.roku.com/dev/update/docs/unlocking-svod-content-as-free-fvod) para conocer las reglas completas de la ventana FVOD, ejemplos válidos/inválidos e instrucciones de entrega.

***

## MEC (Media Entertainment Core)

Se **requiere** un MEC válido conforme al esquema de MovieLabs para cada tráiler.

* `WorkType` **debe** entregarse como `promotion`.
* El elemento `Parent` **debe** estar presente para vincular el tráiler con su programa principal (película o serie).
* Se espera que el atributo `@relationshipType` sea `ispromotionfor`.
* `ParentContentID` **debe** ser el `ContentID` **exacto** de la película o serie. Los ID **distinguen entre mayúsculas y minúsculas** y deben coincidir exactamente, o el tráiler no podrá vincularse con su programa principal.

```xml
    <md:WorkType>promotion</md:WorkType>
...
    <md:Parent relationshipType="ispromotionfor">
      <md:ParentContentID>md:cid:org:roku:1234567_89_00</md:ParentContentID>
    </md:Parent>
```

***

## MMC (Media Manifest Core)

Se **requiere** un MMC válido conforme al esquema de MovieLabs para cada tráiler.

Roku **prefiere** que se incluya el elemento `CardsetList`, con el `Type` de `Cardset` establecido en `Trailer`, para identificar aún más el video promocional como un tráiler.

* Esto **no es estrictamente obligatorio** — los tráilers igual se mostrarán en la plataforma si se omite `CardsetList`.

```xml
<md:CardsetList>
  <md:Cardset>
    <md:Type>Trailer</md:Type>
  </md:Cardset>
</md:CardsetList>
```

***

## Video

### Estándares de contenido

* Los tráilers **deben** representar fielmente el programa principal.
* El contenido del tráiler **debe** ser apto para todo público. **No se aceptan tráilers "Red Band" (para audiencias restringidas):**
  * Los tráilers **no deben** contener desnudez ni contenido sexual explícito.
  * Los tráilers **no deben** contener lenguaje obsceno u ofensivo.
  * Los tráilers **no deben** contener violencia gráfica.

### Contenido del programa y edición

Los videos de tráiler **deben** ser **solo el programa completo**:

* Sin barras/tono ni claquetas al inicio
* Sin video sin texto después del final
* Sin advertencias del FBI ni tarjetas de la MPAA
* Sin material promocional que haga referencia a fechas de estreno en cines, video doméstico o streaming
* Las llamadas a la acción (CTA) o los enlaces a plataformas/sitios externos (incluidos códigos QR) **no están permitidos** y deben eliminarse antes de la entrega

### Relación de aspecto y cuadro

* El contenido de video en HD **debe** entregarse en un contenedor 16:9.
* Se **prefiere la presentación a cuadro completo (relación de aspecto 1.78)** siempre que esté disponible.
* Se permite el formato letterbox 16:9, pero **debería minimizarse**.
* El contenido SD 16:9 **no debe** entregarse en un contenedor 4:3 con letterbox.

### Calidad de archivo

* Se **prefieren archivos de alta calidad a nivel de mezzanine** — debe utilizarse la tasa de bits y resolución más altas disponibles.

***

## Audio

* El audio del tráiler **debe** entregarse en un idioma que también esté presente en el programa principal (es decir, al menos un idioma de audio del tráiler debe coincidir con uno de los idiomas de audio entregados en el programa principal). Un tráiler **no está obligado** a incluir una pista de audio independiente para cada idioma entregado en el programa principal.

***

## Ilustraciones

* Cada tráiler **debe** incluir una imagen en miniatura: una imagen clara, **16:9 sin texto**, extraída directamente del video del tráiler.

**Nota sobre el alcance:** a diferencia del contenido principal de película/serie — que requiere hasta seis tipos de imagen (Key Art, Box Cover, Poster, Background, etc.; consulta la [Especificación de ilustraciones](https://developer.roku.com/dev/update/docs/artwork-requirements)) — los tráilers solo requieren **este único tipo de imagen en miniatura**. No se necesita ninguna otra ilustración específica para tráilers.

***

## Experiencia del tráiler en la plataforma

### Experiencia de tráiler para películas

Botón de tráiler interactivo en la página de detalles de una película.

![Botón de tráiler de película](https://image.roku.com/ZHZscHItMTc2/movie-trailer-button.png)

### Experiencia de tráiler para TV

Botón de tráiler interactivo en la página de detalles de una serie.

![Botón de tráiler de TV](https://image.roku.com/ZHZscHItMTc2/tv-trailer-button.png)

### Experiencia de tráiler en la página de Premium Subscriptions

Experiencia de reproducción automática de tráilers dentro de la página de editor de marca de Premium Subscriptions. **La reproducción automática de tráilers aplica únicamente** al contenido de Premium Subscriptions dentro de la página de editor de marca.

![Reproducción automática de tráiler de Premium Subscriptions](https://image.roku.com/ZHZscHItMTc2/trailer-glow-up-small.gif)

***

## Glosario

| Término                                 | Definición                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MEC**                                 | Media Entertainment Core: el esquema de metadatos de MovieLabs que describe el contenido en sí (título, tipo de obra, relaciones principal/secundaria, etc.).                                                                                                                                                               |
| **MMC**                                 | Media Manifest Core: el esquema de MovieLabs que describe el manifiesto de activos entregables (video, audio, imágenes) asociados a un título.                                                                                                                                                                              |
| **Avails**                              | EMA Avails: el formato de metadatos que expresa los términos de licenciamiento/disponibilidad (territorio, ventana, derechos) de una pieza de contenido.                                                                                                                                                                    |
| **ParentContentID / relationshipType**  | El mecanismo mediante el cual el MEC de un tráiler se vincula de vuelta con su película o serie principal: `relationshipType="ispromotionfor"` declara la relación, y `ParentContentID` proporciona el ID exacto (con distinción de mayúsculas y minúsculas) del título principal.                                          |
| **Cardset**                             | Un elemento de MMC utilizado para categorizar un activo promocional (por ejemplo, etiquetar un video como `Trailer`) más allá de su `WorkType` base.                                                                                                                                                                        |
| **Tráiler Red Band**                    | Término de la industria para un tráiler que contiene contenido para adultos (violencia gráfica, desnudez, lenguaje fuerte) no apto para todo público. Roku no lo acepta.                                                                                                                                                    |
| **Avails** _(requisito de publicación)_ | Un envío de disponibilidad requerido antes de que un tráiler pueda salir al aire — distinto del formato de metadatos EMA Avails mencionado anteriormente; consulta [Avails y listas de títulos comprometidos](https://developer.roku.com/dev/update/docs/title-avail-specifications).                                       |
| **FVOD**                                | Free Video on Demand (video bajo demanda gratuito): un tipo de licencia que permite acceso gratuito temporal a contenido que de otro modo sería SVOD; se requiere para tráilers visibles antes del muro de pago. Consulta [Envíos de FVOD](https://developer.roku.com/dev/update/docs/unlocking-svod-content-as-free-fvod). |
