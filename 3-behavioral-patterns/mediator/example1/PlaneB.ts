import { IMediator, IPlane } from './interfaces';

class PlaneB implements IPlane {
  private mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  receiveMessage(message: string): void {
    console.log(`Plane B received message: ${message}`);
  }

  sendMessage(message: string): void {
    console.log(`Plane B sending message: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}

export default PlaneB;
