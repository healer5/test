import { renderList } from './render_movie_list';
import { refs } from './refs';
import FilmApiService from './movie_database_api';
import transformObj from './transformObject';
import genreSelectMarkupEn from '../templates/filter_genres_uk.hbs';
import genreSelectMarkupUa from '../templates/filter_genres_ua.hbs';

refs.genreSelect.addEventListener('change', onChange);
const apiRequest = new FilmApiService();
console.log('genre');

export default class GenresLanguage {
  constructor() {}

  renderGenresEn() {
    const markup = genreSelectMarkupEn();
    refs.genreSelect.innerHTML = '';
    refs.genreSelect.insertAdjacentHTML('afterbegin', markup);
  }
  renderGenresUa() {
    const markup = genreSelectMarkupUa();
    refs.genreSelect.innerHTML = '';
    refs.genreSelect.insertAdjacentHTML('afterbegin', markup);
  }
}
// const genres = new GenresLanguage();
// genres.renderGenresUk();

function onChange(evt) {
  refs.filmList.innerHTML = '';
  const genreId = evt.target.value;
  const lang = localStorage.getItem('language');
  const genred = apiRequest.fetchMoviesWithGenre(genreId, lang);
  console.log('genreLang', apiRequest.language);
  genred.then(res => renderList(transformObj(res, lang)));
}
