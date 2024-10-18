import MediaPlayer from './MediaPlayer';
import StoppedState from './StoppedState';

const mediaPlayer = new MediaPlayer(new StoppedState());

mediaPlayer.play();
mediaPlayer.pause();
mediaPlayer.stop();

mediaPlayer.play();
mediaPlayer.pause();
mediaPlayer.stop();
mediaPlayer.stop();
