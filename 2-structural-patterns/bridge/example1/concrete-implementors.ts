import { IPlaybackDevice } from './implementor.interface';

// Concrete Implementor 1: Speaker
export class Speaker implements IPlaybackDevice {
  playAudio(file: string): void {
    console.log(`Playing audio through speakers: ${file}`);
  }

  playVideo(file: string): void {
    console.log(`Playing video through speakers: ${file}`);
  }
}

// Concrete Implementor 2: Headphone
export class Headphone implements IPlaybackDevice {
  playAudio(file: string): void {
    console.log(`Playing audio through headphones: ${file}`);
  }

  playVideo(file: string): void {
    console.log(`Playing video through headphones: ${file}`);
  }
}
