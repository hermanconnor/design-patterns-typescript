import { IMediaPlayerState } from './interfaces';
import MediaPlayer from './MediaPlayer';
import PlayingState from './PlayingState';

// Concrete states

class StoppedState implements IMediaPlayerState {
  play(player: MediaPlayer): void {
    console.log('Starting playback from the beginning...');
    player.setState(new PlayingState());
  }

  pause(player: MediaPlayer): void {
    console.log("Can't pause. Media is stopped.");
  }

  stop(player: MediaPlayer): void {
    console.log('Already stopped.');
  }
}

export default StoppedState;
