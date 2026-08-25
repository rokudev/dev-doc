---
title: Excel metadata
excerpt: 'Workbook rules for Excel metadata: formatting, structure, and file format.'
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Excel metadata **can only be accepted** if delivered using one of Roku's approved templates below. This page covers rules that apply across all three templates; field-level detail for each content type lives on its own sub-page:

- [**Roku Excel: Film**](https://developer.roku.com/dev/update/docs/excel-film-metadata-fields)
- [**Roku Excel: TV**](https://developer.roku.com/dev/update/docs/excel-episodic-tv-metadata-fields)
- [**Roku Excel: Clip**](https://developer.roku.com/dev/update/docs/excel-shortform-clip-metadata-fields)

***

## Templates

| Excel Metadata               | Download Link                                                           |
| ---------------------------- | ----------------------------------------------------------------------- |
| Film Metadata Excel Template | [Film Metadata Excel Template](https://go.roku.com/film-excel-template) |
| TV Metadata Excel Template   | [TV Metadata Excel Template](https://go.roku.com/tv-excel-template)     |
| Clip Metadata Excel Template | [Clip Metadata Excel Template](https://go.roku.com/clip-excel-template) |

***

## Template Completion Rules

The Roku Excel metadata template **must** be submitted with all required fields populated.

- **Row 2** of each template contains hints highlighting required cells and any special formatting needed — refer to these hints when filling out the template.
- **Do not delete** the legend/hint row (row 2).

***

## Formatting Requirements

- Dates **must** be provided in `YYYY-MM-DD` format. (Change the cell formatting to **"Text"** if Excel is auto-converting the value.)
- File names **must not** contain [special characters or spaces](#special-characters).

***

## Workbook Structure Rules

- **Do not** link to external data or other Excel workbooks — all data **must** be self-contained within the workbook delivered to Roku.
- **Do not** add additional sheets to the workbook.
- **Do not** add additional columns to the workbook.
- Any formulas used **must** be converted to plain text before submission. **⚠️ Including a live formula will result in rejected deliveries and processing delays/failures.**

***

## Data Population Rules

- **Do not** supply a value of `"N/A"` or `"n/a"` anywhere in the workbook.
  - Required cells **must** contain valid data.
  - Optional cells **may** be left blank.

***

## Multiple Entries and Volume Limits

Multiple entries of the **same content type** may be supplied in a single Excel workbook (e.g., several movies in one Film workbook, or several episodes in one TV workbook) — since each content type has its own dedicated template, a single workbook is not intended to mix Film, TV, and Clip rows together.

- **Each row** represents a unique **language experience** of a single episode/movie/clip.
- **⚠️ Do not leave a blank row between entries.** Roku's system will **terminate processing at the first empty row** — anything after a blank row will silently fail to process.
- **Do not include more than 900 rows** in a single sheet.

***

## File Format and Export

Roku accepts `.xlsx` and `.csv` — `.xls`**&#x20;is not supported.**

- If exporting from **Microsoft Excel**, save as `.xlsx`.
- If using a different spreadsheet program (one that doesn't produce a valid `.xlsx` file), export as `.csv` instead.