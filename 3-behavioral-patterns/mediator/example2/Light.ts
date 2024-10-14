import Device from './Device';

// Specific Devices
class Light extends Device {
  getName() {
    return 'Light';
  }

  reactToEvent(event: string, device: Device) {
    if (event === 'motion detected') {
      console.log(
        `${this.getName()} turned ON due to motion from ${device.getName()}`,
      );
    }
  }
}

export default Light;
