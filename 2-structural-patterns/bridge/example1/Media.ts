import { IPlaybackDevice } from './implementor.interface';

// Abstraction
abstract class Media {
  protected device: IPlaybackDevice;

  constructor(device: IPlaybackDevice) {
    this.device = device;
  }

  abstract play(file: string): void;
}

export default Media;
