import { IMediator, IPlane } from './interfaces';

class AirTrafficControl implements IMediator {
  private planes: IPlane[] = [];

  // Register planes to the air traffic control system
  registerPlane(plane: IPlane): void {
    this.planes.push(plane);
  }

  // Facilitate communication between planes, ensuring they don't talk to each other directly
  sendMessage(message: string, plane: IPlane): void {
    for (let p of this.planes) {
      if (p !== plane) {
        p.receiveMessage(message);
      }
    }
  }
}

export default AirTrafficControl;
