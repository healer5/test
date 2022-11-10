import renderModal from '../templates/modal.hbs';
import FilmApiService from './movie_database_api';
import { refs } from './refs';

const apiRequest = new FilmApiService();
const movie = apiRequest.fetchMoviesDetails('829280');

movie.then(res => render(res));

export default function render(movie) {
  console.log(movie);
  const markup = renderModal(movie);
  // console.log(markup);
  refs.modal.insertAdjacentHTML('afterbegin', markup);
}

apiRequest.incrementPage();
