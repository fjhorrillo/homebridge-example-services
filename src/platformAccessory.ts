import { Service, PlatformAccessory, CharacteristicValue, WithUUID } from 'homebridge';

import { ExampleHomebridgePlatform } from './platform';

export enum ServiceType {
}

export interface DeviceType {
  id: string;
  type: ServiceType;
  displayName: string;
  manufacturer?: string;
  model?: string;
  serialNumber?: string;
  firmwareRevision?: string;
}

/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export class ExamplePlatformAccessory {
  private service: Service;

  /**
   * These are just used to create a working example
   * You should implement your own code to track the state of your accessory
   */
  private exampleStates = {
  };

  constructor(
    private readonly platform: ExampleHomebridgePlatform,
    private readonly accessory: PlatformAccessory,
  ) {

    // set accessory information
    this.accessory.getService(this.platform.Service.AccessoryInformation)!
      .setCharacteristic(this.platform.Characteristic.Manufacturer, accessory.context.device.manufacturer || 'Default-Manufacturer')
      .setCharacteristic(this.platform.Characteristic.Model, accessory.context.device.model || 'Default-Model')
      .setCharacteristic(this.platform.Characteristic.SerialNumber, accessory.context.device.serialNumber || 'Default-Serial')
      .updateCharacteristic(this.platform.Characteristic.FirmwareRevision, accessory.context.device.firmwareRevision || 'DefaultFirmware');

    // get the <type> service if it exists, otherwise create a new <type> service
    // you can create multiple services for each accessory
    this.service = this.accessory.getService(this.getService(accessory.context.device.type))
      || this.accessory.addService(this.getService(accessory.context.device.type));

    // set the service name, this is what is displayed as the default name on the Home app
    // in this example we are using the name we stored in the `accessory.context` in the `discoverDevices` method.
    this.service.setCharacteristic(this.platform.Characteristic.Name, accessory.context.device.displayName);

    // each service must implement at-minimum the "required characteristics" for the given service type
    // see https://developers.homebridge.io/#/service

    this.platform.log.info(`Device: type=${ServiceType[accessory.context.device.type]}${accessory.context.device}`);
    switch(accessory.context.device.type) {
      default: new Error(`Unsupported type '${ServiceType[accessory.context.device.type]}'`);
    }

  }

  getService(type: ServiceType): WithUUID<typeof Service> {
    switch(type) {
      default:
        throw new Error(`Unsupported type '${ServiceType[type]}'`);
    }
  }

}
