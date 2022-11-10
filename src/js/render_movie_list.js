import renderFilmCart from '../templates/film_cart.hbs';
import FilmApiService from './movie_database_api';
import { refs } from './refs';
import transformObj from './transformObject';

export function renderTrendingList() {
  const lang = localStorage.getItem('language');
  const apiRequest = new FilmApiService();
  apiRequest.language = lang;
  // apiRequest.pageNumber = page;

  console.log('page', apiRequest.pageNumber);

  const movieArr = apiRequest.fetchTrendingMovies();

  movieArr.then(res => {
    renderList(transformObj(res, lang));
    console.log(apiRequest.language);
  });
}
export function renderList(movieArr) {
  refs.filmList.innerHTML = '';
  const markup = renderFilmCart(movieArr);
  refs.filmList.insertAdjacentHTML('afterbegin', markup);
  refs.searchBtn.setAttribute('disabled', 'disabled');
}
