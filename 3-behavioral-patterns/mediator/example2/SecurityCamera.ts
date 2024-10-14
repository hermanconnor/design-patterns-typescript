import Device from './Device';

class SecurityCamera extends Device {
  getName() {
    return 'Security Camera';
  }

  reactToEvent(event: string, device: Device) {
    if (event === 'motion detected') {
      console.log(
        `${this.getName()} recording due to motion from ${device.getName()}`,
      );
    }
  }
}

export default SecurityCamera;
