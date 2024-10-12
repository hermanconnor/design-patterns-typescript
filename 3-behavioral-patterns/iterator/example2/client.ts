import Playlist from './Playlist';
import Song from './Song';

const playlist = new Playlist();

playlist.addSong(new Song('Lost', 'Linkin Park'));
playlist.addSong(new Song('Barbarian', 'AWOLNATION'));
playlist.addSong(new Song('Amber', '311'));

const iterator = playlist.createIterator();

console.log('Songs in Playlist:');
while (iterator.hasNext()) {
  const song = iterator.next();
  console.log(`${song.title} by ${song.artist}`);
}
