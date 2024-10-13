import { IMediator, IPlane } from './interfaces';

class PlaneC implements IPlane {
  private mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  receiveMessage(message: string): void {
    console.log(`Plane C received message: ${message}`);
  }

  sendMessage(message: string): void {
    console.log(`Plane C sending message: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}

export default PlaneC;
