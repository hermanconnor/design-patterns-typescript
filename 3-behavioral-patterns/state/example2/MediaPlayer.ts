import { IMediaPlayerState } from './interfaces';

// Context class

class MediaPlayer {
  private state: IMediaPlayerState;

  constructor(state: IMediaPlayerState) {
    this.state = state;
  }

  public setState(state: IMediaPlayerState): void {
    this.state = state;
  }

  public play(): void {
    this.state.play(this);
  }

  public pause(): void {
    this.state.pause(this);
  }

  public stop(): void {
    this.state.stop(this);
  }
}

export default MediaPlayer;
