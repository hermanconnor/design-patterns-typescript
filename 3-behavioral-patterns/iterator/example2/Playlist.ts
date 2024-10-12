import { IIterator } from './interfaces';
import PlaylistIterator from './PlaylistIterator';
import Song from './Song';

interface Aggregate<T> {
  createIterator(): IIterator<T>;
}

class Playlist implements Aggregate<Song> {
  private songs: Song[] = [];

  addSong(song: Song): void {
    this.songs.push(song);
  }

  createIterator(): IIterator<Song> {
    return new PlaylistIterator(this.songs);
  }
}

export default Playlist;
