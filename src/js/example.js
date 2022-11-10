import FilmApiService from './movie_database_api';

import renderModal from '../templates/modal.hbs';
import { refs } from './refs';

const apiRequest = new FilmApiService();

const trend = apiRequest.fetchTrendingMovies();

// trend.then(res => render(res));

function renderM(ar) {
  const markupm = renderModal(ar);
  console.log(markupm);
  refs.modal.insertAdjacentHTML('afterbegin', markupm);
}

function onClick(evt) {
  evt.preventDefault();
  console.log(evt.target.value);
}

console.log('hfjkssk');

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// refs.genreSelect.addEventListener('change', onChange);

// function onChange(evt) {
//   refs.filmList.innerHTML = '';
//   const genreId = evt.target.value;

//   const genred = apiRequest.fetchMoviesWithGenre(genreId);
//   genred.then(res => render(res));
// }
