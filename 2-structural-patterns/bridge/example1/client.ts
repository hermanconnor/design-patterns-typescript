import { Headphone, Speaker } from './concrete-implementors';
import { Audio, Video } from './refined-abstractions';

/**
 * In this example, we have a media player application. This application needs to support multiple media types (like audio and video) and different playback devices (like speakers and headphones).
 
  In this example:
    - The `IPlaybackDevice` interface defines methods for playing audio and video.
    - `Speaker` and `Headphone` are concrete implementations that provide specific behaviors.
    - The `Media` class is the abstraction that uses the `PlaybackDevice`.
    - The `Audio` and `Video` classes extend the `Media` abstraction to implement the specific `play` method.
 */

function clientCode() {
  const speaker = new Speaker();
  const headphone = new Headphone();

  const audio1 = new Audio(speaker);
  const video1 = new Video(headphone);

  audio1.play('song.mp3');
  video1.play('podcast.mp3');
}

clientCode();
