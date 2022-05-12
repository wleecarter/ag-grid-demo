import { format } from 'date-fns';
import { randMusicGenre, randNumber, randPastDate, randSinger, randSong } from '@ngneat/falso';

export const DATE_FORMAT = 'MM/dd/yyyy';

interface Song {
  artist: string;
  song: string;
  genre: string;
  releaseDate: string;
  unitsSold: number;
  chartPosition: number;
}

export const songData: Song[] = [];

for (let i = 0; i < 250; i++) {
  const album: Song = {
    artist: randSinger(),
    song: randSong(),
    genre: randMusicGenre(),
    releaseDate: format(randPastDate({ years: 10 }), DATE_FORMAT),
    unitsSold: randNumber({ min: 100000, max: 1000000, precision: 10 }),
    chartPosition: randNumber({ min: 1, max: 200, precision: 1 }),
  }
  songData.push(album);
}