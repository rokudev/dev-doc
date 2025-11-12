# Command line utility

This utility performs BrightScript code static analysis. It provides information about common app issues, and checks for compliance with a variety of app certification requirements, deprecated component and API usage etc. The [Static Analysis Tool](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md#static-analysis-test-details) overview provides a full set of tests performed.

## Download

You can download the static analysis utility [here](https://devtools.web.roku.com/#static-channel-analysis-tool).

## System requirements

This utility supports Windows, Mac and Linux and requires Java to be installed in the system.

## Structure of the utility

The static analysis utility is distributed as a ZIP file.  The contents of the ZIP as as follows:

```
.
└── sca-cmd
    ├── bin
    │   ├── sca-cmd
    │   └── sca-cmd.bat
    └── lib
        └── sca-cmd.jar
```


## Tool usage from command line

Unzip the sca-cmd.zip file to your computer.  Note that the usage examples below assume usage on Linux or Mac.  There is a corresponding Windows .bat  file for Windows users.

Usage:

`sca-cmd PATH_TO_PROJECT_OR_ZIP`

Examples:

 - `sca-cmd myapp`
 - `sca-cmd myapp.zip`

### Severity level choice

You can specify analysis results output verbosity level using `--severity` command line parameter. This parameter is optional.
The shorthand version `-s` can be used instead of `--severity`.

Usage:

`sca-cmd PATH_TO_PROJECT_OR_ZIP --severity SEVERITY_LEVEL`

Example:

`sca-cmd myapp --severity info`

Available `SEVERITY_LEVEL` values are: `info`, `warning` and `error`:

 - `info` - print all of the logs
 - `warning` - print warnings and errors
 - `error` - print errors only

If severity level is not specified `warning` is used.

### Category filter

You can filter output logs by categories using `--filter-categories` command line parameter.
Short version is `-c`. This parameter is optional.

Usage:

`sca-cmd PATH_TO_PROJECT_OR_ZIP --filter-categories COMMA_SEPARATED_CATEGORIES`

Example:

`sca-cmd myapp --filter-categories deprecated_components,manifest,package`

List of categories:

 - `uncategorized`
 - `deprecated_components`
 - `deprecated_apis`
 - `manifest`
 - `raf`
 - `red`
 - `package`

If categories are not specified output logs are not filtered.

### Output format choice

You can generate a local report file by specifying file path in `--output` and file format in `--format` command line parameters.
Destination folder for report file should be a directory that already esists in your file system.
It is possible to use short versions `-o` and `-f` instead of `--output` and `--format` accordingly.

Usage:

`sca-cmd PATH_TO_PROJECT_OR_ZIP --output PATH_TO_REPORT_FILE --format COMMA_SEPARATED_FORMATS`

Example:

`sca-cmd myapp --output "../reports/report.xml" --format console,junit`

Supported format values are: `console` and `junit`:
 - `console` - print all outputs to console
 - `junit` - save all outputs to specified JUnit xml file

If format is not specified `console` is used.
If specified any file format but not specified output file path a default file path value is used.
For `junit`, this is `reports/SCA_Report.xml`. For `json`, this is `reports/SCA_Report.json`  
