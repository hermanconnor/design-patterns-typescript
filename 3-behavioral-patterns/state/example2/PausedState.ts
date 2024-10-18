import { IMediaPlayerState } from './interfaces';
import MediaPlayer from './MediaPlayer';
import PlayingState from './PlayingState';
import StoppedState from './StoppedState';

// Concrete states

class PausedState implements IMediaPlayerState {
  play(player: MediaPlayer): void {
    console.log('Resuming playback...');
    player.setState(new PlayingState());
  }

  pause(player: MediaPlayer): void {
    console.log('Already paused.');
  }

  stop(player: MediaPlayer): void {
    console.log('Stopping the media...');
    player.setState(new StoppedState());
  }
}

export default PausedState;
