import { IMediator, IPlane } from './interfaces';

class PlaneA implements IPlane {
  private mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  receiveMessage(message: string): void {
    console.log(`Plane A received message: ${message}`);
  }

  sendMessage(message: string): void {
    console.log(`Plane A sending message: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}

export default PlaneA;
