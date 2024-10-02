// STEP 2: Create the Adaptee Classes
// These are the third-party libraries that have different interfaces for playing audio files.

// Third-party library for playing MP3 files
export class Mp3Player {
  playMp3(file: string): void {
    console.log(`Playing MP3 file: ${file}`);
  }
}

// Third-party library for playing WAV files
export class WavPlayer {
  playWav(file: string): void {
    console.log(`Playing WAV file: ${file}`);
  }
}
