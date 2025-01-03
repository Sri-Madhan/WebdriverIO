# WebDriverIO Mobile Automation Framework

## Overview

This project is a robust mobile automation framework built using WebDriverIO. It's primarily designed for testing mobile applications on both Android and iOS platforms, with plans to expand to web and desktop testing in the future.

## Features

- Cross-platform mobile testing (Android and iOS)
- Page Object Model design pattern
- Integration with CI/CD pipeline (Jenkins)
- Configurable test suites (Smoke, Regression, E2E)
- Allure reporting for detailed test results
- BrowserStack integration for cloud-based testing
- ESLint for maintaining code quality
- Appium integration for mobile device automation


You can specify different test suites by modifying the `specs` array in `wdio.conf.js`.

## CI/CD Integration

This project includes a Jenkinsfile for easy integration with Jenkins CI/CD pipelines. The pipeline includes stages for:

- Cleaning the workspace
- Checking out code
- Running tests (configurable suite: Smoke, Regression, or E2E)

## Framework Structure

### Common

- `ObjectRepository.json`: Contains selectors for UI elements
- `UiConstants.js`: Defines constants used across the framework
- `base.class.js`: Base class with common methods
- `selector.js`: Utility functions for element selection and constants

### Screen

- `bottom.nav.js`: Page object for the bottom navigation bar
- `home.page.js`: Page object for the home screen
- `login.page.js`: Page object for the login screen

### Future Expansions

As the project evolves, plans are in place to extend support to:

- Web testing: Utilize WebDriverIO's capabilities for web browser automation
- Desktop testing: Integrate with tools like WinAppDriver for desktop application testing

## Reporting

This framework uses Allure for generating detailed test reports. After running tests, you can generate and view the report using: