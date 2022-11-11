// import renderModal from '../templates/modal.hbs';
// import FilmApiService from './movie_database_api';
// import { refs } from './refs';

// const apiRequest = new FilmApiService();
// const movie = apiRequest.fetchMoviesDetails('829280');

// movie.then(res => render(res));

// export default function render(movie) {
//   console.log(movie);
//   const markup = renderModal(movie);
//   // console.log(markup);
//   refs.modal.insertAdjacentHTML('afterbegin', markup);
// }

// apiRequest.incrementPage();

//////////////////\\\\\\\\\\\\\\\\\\\\\\
import renderModal from '../templates/modal.hbs';
import FilmApiService from './movie_database_api';
import { refs } from './refs';
import renderFilmCart from '../templates/film_cart.hbs';

const apiRequest = new FilmApiService();

// refs.modal.innerHTML = '';

refs.filmList.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  console.log(evt.path[2].id);
  const details = apiRequest.fetchMoviesDetails(evt.path[2].id);
  details.then(res => render(res));
  //   const movie = apiRequest.fetchMoviesDetails(‘829280’);
  //   movie.then(res => render(res));
  //   function render(details) {
  // console.log(details);
  // localStorage.setItem(‘details’, JSON.stringify(details));
  //   }
}

function render(movie) {
  refs.modal.innerHTML = '';
  console.log(movie);
  const markup = renderModal(movie);
  // console.log(markup);

  refs.modal.insertAdjacentHTML('afterbegin', markup);
}
apiRequest.incrementPage();
//   /////////////////\\\\\\\\\\\\\\\\\\\\

const addWatchedBtn = document.querySelector('.watch_btn');
const adddQueueBtn = document.querySelector('.queue_btn');
console.log(adddQueueBtn);
adddQueueBtn.addEventListener('click', onClickQueueBtn);
addWatchedBtn.addEventListener('click', onClickWotchedBtn);
function onClickWotchedBtn(evt) {
  //   render(details);
  modal.removeAttribute('hidden');
  const movie = apiRequest.fetchMoviesDetails('829280');
  movie.then(res => render(res));
  function render(movie) {
    console.log(movie);
    localStorage.setItem('movie', JSON.stringify(movie));
  }
}
function onClickQueueBtn(evt) {
  let arrCard = [];
  const savedSettings = localStorage.getItem('movie');
  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings.id);
  arrCard = [parsedSettings];
  // if (!parsedSettings.id) {
  const markup = renderFilmCart(arrCard);
  refs.filmList.insertAdjacentHTML('beforeend', markup);
  // }
  console.log(parsedSettings);
}
