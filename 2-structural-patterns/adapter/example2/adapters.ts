import { Mp3Player, WavPlayer } from './adaptees';
import { IAudioPlayer } from './interfaces';

// STEP 3: Implement the Adapters
// Each adapter will translate the calls from the `AudioPlayer` interface to the specific methods of the respective third-party libraries.

export class Mp3Adapter implements IAudioPlayer {
  private mp3Player: Mp3Player;

  constructor(mp3Player: Mp3Player) {
    this.mp3Player = mp3Player;
  }

  play(file: string): void {
    this.mp3Player.playMp3(file);
  }
}

export class WavAdapter implements IAudioPlayer {
  private wavPlayer: WavPlayer;

  constructor(wavPlayer: WavPlayer) {
    this.wavPlayer = wavPlayer;
  }

  play(file: string): void {
    this.wavPlayer.playWav(file);
  }
}
