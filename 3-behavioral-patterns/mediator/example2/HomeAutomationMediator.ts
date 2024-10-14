import Device from './Device';

// Mediator
class HomeAutomationMediator {
  private devices: Device[] = [];

  addDevice(device: Device) {
    this.devices.push(device);
    device.setMediator(this);
  }

  triggerEvent(event: string, device: Device) {
    console.log(`Event triggered: ${event} from ${device.getName()}`);

    for (const d of this.devices) {
      if (d !== device) {
        d.reactToEvent(event, device);
      }
    }
  }
}

export default HomeAutomationMediator;
