import { IIterator } from './interfaces';
import Song from './Song';

class PlaylistIterator implements IIterator<Song> {
  private index = 0;

  constructor(private songs: Song[]) {}

  hasNext(): boolean {
    return this.index < this.songs.length;
  }

  next(): Song {
    return this.songs[this.index++];
  }
}

export default PlaylistIterator;
