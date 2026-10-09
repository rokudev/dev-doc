---
title: Valores de clasificación por sistema de clasificación y país
excerpt: Autoridades y valores de clasificación admitidos por territorio.
deprecated: false
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
Se **debe** proporcionar, para cada película, episodio o video de formato corto, una clasificación válida de cine o TV emitida por la autoridad de clasificación (`ratingSystem`) del territorio en el que estará disponible el título.

## Si el título no ha sido clasificado oficialmente

Si un título no ha sido clasificado por la autoridad de clasificación oficial de ese territorio, se puede proporcionar una clasificación **NR (sin clasificar)** — sin embargo:

> **⚠️ Roku prefiere firmemente una clasificación real para todo el contenido.** Los títulos con clasificación **NR** están sujetos a **verificación manual**, lo que puede retrasar **o impedir** su selección y publicación en Roku Channel. La visibilidad también puede verse afectada, y **se prohibirá la inclusión en la experiencia Kids & Family** para títulos NR.

**En lugar de NR**, autoclasifica el título utilizando el sistema de clasificación `USA_PR`. Las pautas para las clasificaciones `USA_PR` están disponibles en [tvguidelines.org](http://tvguidelines.org/).

## Sistemas de clasificación admitidos

> **Nota:** Canadá y Estados Unidos aparecen **dos veces** cada uno a continuación, bajo dos sistemas de clasificación distintos. Esto es intencional: cada país cuenta con más de una autoridad de clasificación reconocida según el contexto (por ejemplo, video doméstico/cine vs. autoclasificación de TV/V-Chip), y no se trata de una entrada duplicada.

| Autoridades de clasificación y territorio                                     | País | `ratingSystem` | Valores de clasificación                                                                               |
| ----------------------------------------------------------------------------- | ---- | -------------- | ------------------------------------------------------------------------------------------------------ |
| British Board of Film Classification<br />(Reino Unido)                       | GB   | `BBFC`         | `U`, `PG`, `12A`, `12-A`, `12`, `15`, `18`, `NR`, `R18`                                                |
| Canadian Home Video Rating System<br />(Canadá)                               | CA   | `CHVRS`        | `G`, `PG`, `14A`, `14-A`, `18A`, `18-A`, `NR`, `R`, `E`                                                |
| Motion Picture Association of America<br />(Estados Unidos)                   | US   | `MPAA`         | `G`, `PG`, `PG13`, `PG-13`, `R`, `NC-17`, `NC17`, `NR`                                                 |
| Canadian Parental Rating<br />(Canadá)                                        | CA   | `CPR`          | `14+`, `18+`, `C`, `C8`, `C-8`, `G`, `NR`, `PG`, `E`                                                   |
| Dirección General de Radio, Televisión y Cinematografía<br />(México)         | MX   | `RTC`          | `AA`, `A`, `B`, `B-15`, `B15`, `C`, `DD`, `D`, `NR`                                                    |
| USA Parental Rating<br />_también conocido como V-Chip_<br />(Estados Unidos) | US   | `USA_PR`       | `TV-Y`, `TVY`, `TV-Y7`, `TVY7`, `TV-G`, `TVG`, `TV-PG`, `TVPG`, `TV-14`, `TV14`, `TV-MA`, `TVMA`, `NR` |
