import { idToGenre, idToGenreUa } from './idToGenre';
import comingSoon from '../images/coming_soon.jpg';

export default function transformObj(arrObj, lang) {
  if (lang === 'en-US') {
    arrObj.map(el => {
      el.genre_ids = idToGenre(el.genre_ids);
      el.release_date = el.release_date.slice(0, 4);
      el.poster_path = !el.poster_path
        ? comingSoon
        : ` https://image.tmdb.org/t/p/w500${el.poster_path}`;
    });
    return arrObj;
  }
  if (lang === 'uk-UA') {
    arrObj.map(el => {
      el.genre_ids = idToGenreUa(el.genre_ids);
      el.release_date = el.release_date.slice(0, 4);
      el.poster_path = !el.poster_path
        ? comingSoon
        : ` https://image.tmdb.org/t/p/w500${el.poster_path}`;
    });
    console.log('TRANSFORM', arrObj);
    return arrObj;
  }
}
