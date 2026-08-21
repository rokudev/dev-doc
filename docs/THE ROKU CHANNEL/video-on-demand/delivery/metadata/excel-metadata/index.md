---
title: Excel metadata
deprecated: false
hidden: true
metadata:
  robots: index
---
Excel metadata can only be accepted if delivered in the ROKU approved formats below:

| Excel Metadata               | Download Link                                            |
| ---------------------------- | -------------------------------------------------------- |
| Film Metadata Excel Template | [Download here](https://go.roku.com/film-excel-template) |
| TV Metadata Excel Template   | [Download here](https://go.roku.com/tv-excel-template)   |
| Clip Metadata Excel Template | [Download here](https://go.roku.com/clip-excel-template) |

The Roku Excel metadata template must be submitted with all required fields populated. Roku has provided hints on row 2 of each metadata template to highlight the required cells and any special formatting needed for each cell. Please refer to these hints when filling out the Excel metadata template. Other considerations when filling out a template include:

- Dates must be provided in YYYY-MM-DD format (change the cell formatting to “Text” if necessary)
- File names must not contain [special characters or spaces](#special-characters)
- Any formulas used must be converted to text prior to submission. Inclusion of a formula will result in rejected deliveries and will cause content processing delays/failures
- Do not link to external data or Excel workbooks. All data must be self contained within the Excel workbook delivered to Roku
- Do not add additional sheets to the workbook
- Do not add additional columns to the workbook
- Do not delete the legend/hint row (row 2)
- Do not supply a value of “N/A” or “n/a”. Required cells should contain valid data and optional cells may be left blank
- Multiple movies, clips, and multiple episodes may be supplied in a single Excel workbook
  - Each row is considered a unique language experience of an episode/movie/clip
  - Do not leave a blank row between entries in a worksheet. The system will terminate processing at the first empty row.
  - Do not include more than 900 rows in a single sheet
- Excel metadata must be saved with .xlsx extension and be exported from Microsoft Excel. If using a different program, please export as CSV
