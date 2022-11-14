import { renderList } from './render_movie_list';
import { refs } from './refs';
import { firstPage, currentPage } from './pagination';
import FilmApiService from './movie_database_api';
import { onClickTrending } from './render_movie_list';

import transformObj from './transformObject';
import genreSelectMarkupEn from '../templates/filter_genres_uk.hbs';
import genreSelectMarkupUa from '../templates/filter_genres_ua.hbs';
import { onClickSearch } from './render_search';

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

function onChange(evt) {
  refs.paginationRef.removeEventListener('click', onClickSearch);
  refs.paginationRef.removeEventListener('click', onClickTrending);
  refs.paginationRef.addEventListener('click', onClickGenre);
  firstPage();
  apiRequest.genre = evt.target.value;
  apiRequest.language = localStorage.getItem('language');
  apiRequest.pageNumber = currentPage;
  const genred = apiRequest.fetchMoviesWithGenre();
  console.log('genreLang', apiRequest.language);
  genred.then(res => renderList(transformObj(res, apiRequest.language)));
  // paginationRender(apiRequest.fetchMoviesWithGenre.bind(FilmApiService));
  // refs.paginationRef.addEventListener('click', onPaginationClick);

  // onPaginationClick(evt);
}

export function onClickGenre(evt) {
  evt.preventDefault();
  apiRequest.pageNumber = currentPage;
  console.log('pagNumGenre', apiRequest.pageNumber);
  apiRequest.fetchMoviesWithGenre().then(res => {
    renderList(transformObj(res, apiRequest.language));
    console.log(apiRequest.language);
  });
}
