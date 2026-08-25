---
title: Rating values by rating system and country
deprecated: false
hidden: true
metadata:
  robots: index
---
A valid film or TV rating from the rating authority (`ratingSystem`) of the territory where a title will be available **must** be provided for each movie, episode, or shortForm video.

## If the Title Has Not Been Officially Rated

If a title has not been rated by that territory's official rating authority, a rating of **NR (Not Rated)** may be provided — however:

> **⚠️ Roku strongly prefers an actual rating on all content.** Titles rated **NR** are subject to **manual verification**, which can delay **or prevent** selection and publishing to Roku Channel. Discoverability may also be impacted, and **placement within the Kids & Family experience will be prohibited** for NR titles.

**In lieu of NR**, self-rate the title using the `USA_PR` rating system instead. Guidelines for `USA_PR` ratings are available at [tvguidelines.org](http://tvguidelines.org/).

## Supported Rating Systems

> **Note:** Canada and the United States each appear **twice** below, under two different rating systems. This is intentional — each country has more than one recognized rating authority depending on context (e.g., home video/theatrical vs. TV/V-Chip self-rating), not a duplicate entry.

| Ratings Authority and Territory                                       | Country | `ratingSystem` | Rating Values                                                                                          |
| --------------------------------------------------------------------- | ------- | -------------- | ------------------------------------------------------------------------------------------------------ |
| British Board of Film Classification<br />(United Kingdom)            | GB      | `BBFC`         | `U`, `PG`, `12A`, `12-A`, `12`, `15`, `18`, `NR`, `R18`                                                |
| Canadian Home Video Rating System<br />(Canada)                       | CA      | `CHVRS`        | `G`, `PG`, `14A`, `14-A`, `18A`, `18-A`, `NR`, `R`, `E`                                                |
| Motion Picture Association of America<br />(United States)            | US      | `MPAA`         | `G`, `PG`, `PG13`, `PG-13`, `R`, `NC-17`, `NC17`, `NR`                                                 |
| Canadian Parental Rating<br />(Canada)                                | CA      | `CPR`          | `14+`, `18+`, `C`, `C8`, `C-8`, `G`, `NR`, `PG`, `E`                                                   |
| Dirección General de Radio, Televisión y Cinematografía<br />(Mexico) | MX      | `RTC`          | `AA`, `A`, `B`, `B-15`, `B15`, `C`, `DD`, `D`, `NR`                                                    |
| USA Parental Rating<br />_AKA V-Chip_<br />(United States)            | US      | `USA_PR`       | `TV-Y`, `TVY`, `TV-Y7`, `TVY7`, `TV-G`, `TVG`, `TV-PG`, `TVPG`, `TV-14`, `TV14`, `TV-MA`, `TVMA`, `NR` |
