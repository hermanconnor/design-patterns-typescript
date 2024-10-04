import Media from './Media';

// Refined Abstraction 1: Audio
export class Audio extends Media {
  play(file: string): void {
    this.device.playAudio(file);
  }
}

// Refined Abstraction 2: Video
export class Video extends Media {
  play(file: string): void {
    this.device.playVideo(file);
  }
}
