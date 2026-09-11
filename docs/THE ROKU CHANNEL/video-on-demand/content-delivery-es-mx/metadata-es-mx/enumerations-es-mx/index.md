---
title: Valores admitidos
excerpt: >-
  Página de referencia para las listas de valores admitidos: funciones del
  equipo de filmación, géneros, clasificaciones e idiomas.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Descripción general

Esta sección es la **única fuente de verdad** para los valores enumerados (de lista fija) a los que se hace referencia en todas las especificaciones de metadatos de película, serie de TV y clip, tanto en XML como en Excel. En lugar de repetir estas listas en cada página que las utiliza, cada campo de metadatos remite de vuelta a esta sección.

| Página                                                                                                                                                    | Cubre                                                                                                               | Se referencia desde                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [**Funciones del equipo de filmación**](https://developer.roku.com/dev/update/docs/crew-roles)                                                            | El conjunto fijo de valores admitidos para las funciones de los miembros del equipo de filmación                    | Campo `role` en las referencias de XML y Excel para película, serie de TV y clip                                        |
| [**Géneros**](https://developer.roku.com/dev/update/docs/genres)                                                                                          | El conjunto fijo de valores admitidos para el género                                                                | Campo `genre`/`genres` en las referencias de XML y Excel para película, serie de TV y clip                              |
| [**Valores de clasificación por sistema de clasificación y país**](https://developer.roku.com/dev/update/docs/rating-values-by-rating-system-and-country) | Las autoridades de clasificación admitidas, su territorio/país y los valores de clasificación válidos por autoridad | Campo `rating`/`ratings`/`rating_system` en las referencias de XML y Excel para película, serie de TV y clip            |
| [**Códigos de idioma**](https://developer.roku.com/dev/update/docs/language-codes)                                                                        | El conjunto admitido de códigos de idioma (con variantes regionales opcionales)                                     | Los campos `language`, `original_spoken_language`, `locale` y campos relacionados en todas las referencias de metadatos |

Cada subpágina es una lista de referencia plana: no hay niveles de obligatoriedad ni reglas de entrega en estas páginas por sí mismas; esa información se encuentra en las páginas a nivel de campo que remiten aquí.
