
<p align="center">

<img src="https://github.com/homebridge/branding/raw/master/logos/homebridge-wordmark-logo-vertical.png" width="150">

</p>






<p align="center">
  <img src="https://github.com/homebridge/branding/raw/master/logos/homebridge-wordmark-logo-vertical.png" width="150">
</p>
<span align="center">

# Homebridge Example Services
[![GitHub last commit](https://img.shields.io/github/last-commit/fjhorrillo/homebridge-example-services)](https://github.com/fjhorrillo/homebridge-airzone-cloud)
[![GitHub issues](https://img.shields.io/github/issues/fjhorrillo/homebridge-example-services)](https://github.com/fjhorrillo/homebridge-airzone-cloud/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/fjhorrillo/homebridge-example-services)](https://github.com/fjhorrillo/homebridge-airzone-cloud/pulls)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen)](https://standardjs.com)

Supported Languages: :gb:

</span>

## Homebridge plugin for Example Services
Copyright © 2021 Francisco Javier Horrillo Sancho. All rights reserved.

### Introduction

This [Homebridge](https://github.com/homebridge/homebridge) plugin exposes to Apple's [HomeKit](http://www.apple.com/ios/home/) a example of each [service type](https://developers.homebridge.io/#/service).

### Prerequisites
You need a server to run Homebridge. It is recommended using wired Ethernet to connect the server running Homebridge.
This can be anything running [Node.js](https://nodejs.org): from a Raspberry Pi, a NAS system, or an always-on PC running Linux, macOS, or Windows. See the [Homebridge Wiki](https://github.com/homebridge/homebridge/wiki) for details.

To interact with HomeKit, you need Siri or a HomeKit app on an iPhone, Apple Watch, iPad, iPod Touch, or Apple TV (4th generation or later). It is recommendes to use the latest released versions of iOS, watchOS, and tvOS.
Please note that Siri and even Apple's [Home](https://support.apple.com/en-us/HT204893) app still provide only limited HomeKit support.
As HomeKit uses Bonjour to discover Homebridge, the server running Homebridge must be on the same subnet as your iDevices running HomeKit.

### Installation
To install Homebridge Example Services:
- Follow the instructions on the [Homebridge Wiki](https://github.com/homebridge/homebridge/wiki) to install Node.js and Homebridge;
- Install the Homebridge Airzone Cloud plugin through Homebridge Config UI X or manually by:
  ```
  $ sudo npm -g i homebridge-example-services
  ```

To update Homebridge Airzone Cloud, simply issue another `sudo npm -g i homebridge-example-service@latest`.  Please check the [release notes](https://github.com/ebaauw/homebridge-hue/releases) before updating Homebridge Airzone Cloud. To revert to a previous version, specify the version when installing Homebridge Airzone Cloud, as in: `sudo npm -g i homebridge-example-service@0.0.1`.
