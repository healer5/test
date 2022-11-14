import { genres, genresUa } from './genres';

export function idToGenre(id) {
  let ar = [];
  genres.map(el => {
    if (ar.length >= 3) {
      ar = [ar[0], ar[1], 'other'];
      return;
    }
    if (id.includes(el.id)) ar.push(el.name);
  });
  return ar;
}

export function idToGenreUa(id) {
  let ar = [];
  genresUa.map(el => {
    if (ar.length >= 3) {
      ar = [ar[0], ar[1], 'Інші'];
      return;
    }
    if (id.includes(el.id)) ar.push(el.name);
  });
  return ar;
}
