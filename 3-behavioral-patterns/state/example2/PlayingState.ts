import { IMediaPlayerState } from './interfaces';
import MediaPlayer from './MediaPlayer';
import PausedState from './PausedState';
import StoppedState from './StoppedState';

// Concrete states
class PlayingState implements IMediaPlayerState {
  play(player: MediaPlayer): void {
    console.log('Already playing.');
  }

  pause(player: MediaPlayer): void {
    console.log('Pausing the media...');
    player.setState(new PausedState());
  }

  stop(player: MediaPlayer): void {
    console.log('Stopping the media...');
    player.setState(new StoppedState());
  }
}

export default PlayingState;
