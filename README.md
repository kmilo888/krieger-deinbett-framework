# krieger-deinbett-framework

An e2e framework for testing Deinbett.de page

## Installation

```
$ npm install
```

## Introduction

This automated framework tests basic functionality for the Deinbett.de page. It uses the Cypress as the Javascript End to End framework combined with the cypress-cucumber-preprocessor library to add Gherkin language implementation for its automated test cases

## Run Scripts

### Cypress UI

To run the Integrated Cypress UI:

```
$ npm run cy:ui
```

### Run tests in background from the cli

To run the default Cypress (Electron browser):

```
$ npm run cy:run
```

To run in Chrome:

```
$ npm run cy:run:chrome
```

To run in Firefox:

```
$ npm run cy:run:firefox
```

### Run tests and generate HTML reports in background from the cli

To run in Chrome:

```
$ npm run cy:reports:chrome
```

To run in Firefox:

```
$ npm run cy:run:firefox
```

## Docker Integration

This framework also supports running in Docker. Docker image has Linux installed, so tests will run in this operating system.

### Build Docker Images 

Build Docker image for Chrome

```
$ npm run docker:build:chrome
```

Build Docker image for Firefox

```
$ npm run docker:build:firefox
```
### Run tests in background from Docker

To run in Chrome:

```
$ npm run docker:run:chrome
```

To run in Firefox:

```
$ npm run docker:run:firefox
```

### Run tests and generate HTML reports in background from Docker

To run in Chrome:

```
$ npm run cy:reports:chrome:docker
```

To run in Firefox:

```
$ npm run cy:reports:chrome:firefox
```
