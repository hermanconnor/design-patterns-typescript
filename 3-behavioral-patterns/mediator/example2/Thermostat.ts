import Device from './Device';

class Thermostat extends Device {
  getName() {
    return 'Thermostat';
  }

  reactToEvent(event: string, device: Device) {
    if (event === 'temperature change') {
      console.log(
        `${this.getName()} adjusting temperature based on change from ${device.getName()}`,
      );
    }
  }
}

export default Thermostat;
