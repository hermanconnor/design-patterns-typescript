import MediaPlayer from './MediaPlayer';

// State interface

export interface IMediaPlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
}
