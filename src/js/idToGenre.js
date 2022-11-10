import { genres, genresUa } from './genres';

export function idToGenre(id) {
  const ar = [];
  genres.map(el => {
    if (ar.length >= 2) return;
    if (id.includes(el.id)) ar.push(el.name);
  });
  return ar;
}

export function idToGenreUa(id) {
  const ar = [];
  genresUa.map(el => {
    if (ar.length >= 2) return;
    if (id.includes(el.id)) ar.push(el.name);
  });
  return ar;
}
