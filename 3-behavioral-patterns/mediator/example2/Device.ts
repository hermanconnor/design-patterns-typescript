import HomeAutomationMediator from './HomeAutomationMediator';

// Colleague
abstract class Device {
  protected mediator: HomeAutomationMediator | null = null;

  setMediator(mediator: HomeAutomationMediator) {
    this.mediator = mediator;
  }

  abstract getName(): string;
  abstract reactToEvent(event: string, device: Device): void;
}

export default Device;
