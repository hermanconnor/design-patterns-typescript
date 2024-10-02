// STEP 1: Define the Target Interface
// This interface represents the audio player functionality that our application expects.
export interface IAudioPlayer {
  play(file: string): void;
}
