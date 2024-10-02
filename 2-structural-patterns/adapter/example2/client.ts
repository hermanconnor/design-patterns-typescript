import { Mp3Player, WavPlayer } from './adaptees';
import { Mp3Adapter, WavAdapter } from './adapters';
import { IAudioPlayer } from './interfaces';

/**
 * In this example, a media player application needs to play different types of audio files, such as MP3 and WAV, using third-party libraries with different interfaces.
 */

// Step 4: THE CLIENT CODE
// Now, the client code can use the `AudioPlayer` interface to play different audio files without worrying about the underlying implementations.

function playAudio(player: IAudioPlayer, file: string) {
  player.play(file);
}

// Usage
const mp3Player = new Mp3Player();
const wavPlayer = new WavPlayer();

const mp3Adapter = new Mp3Adapter(mp3Player);
const wavAdapter = new WavAdapter(wavPlayer);

playAudio(mp3Adapter, 'song.mp3'); // Output: Playing MP3 file: song.mp3
playAudio(wavAdapter, 'sound.wav'); // Output: Playing WAV file: sound.wav
