---
title: Enumerations
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This section is the **single source of truth** for enumerated (fixed-list) values referenced throughout the Film, TV, and Clip metadata specifications — both XML and Excel. Rather than repeating these lists on every page that uses them, each metadata field links back here.

| Page                                                                                                                                    | Covers                                                                                       | Referenced From                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [**Crew Roles**](https://developer.roku.com/dev/update/docs/crew-roles)                                                                 | The fixed set of supported crew member role values                                           | `role` field in the Film/TV/Clip XML and Excel references                                           |
| [**Genres**](https://developer.roku.com/dev/update/docs/genres)                                                                         | The fixed set of supported genre values                                                      | `genre`/`genres` field in the Film/TV/Clip XML and Excel references                                 |
| [**Rating Values by Rating System and Country**](https://developer.roku.com/dev/update/docs/rating-values-by-rating-system-and-country) | Supported rating authorities, their territory/country, and valid rating values per authority | `rating`/`ratings`/`rating_system` field in the Film/TV/Clip XML and Excel references               |
| [**Language Codes**](https://developer.roku.com/dev/update/docs/language-codes)                                                         | The supported set of language codes (with optional region variants)                          | `language`, `original_spoken_language`, `locale`, and related fields across all metadata references |

Each sub-page is a flat reference list — there are no requirement levels or delivery rules on these pages themselves; those live on the field-level pages that link here.
