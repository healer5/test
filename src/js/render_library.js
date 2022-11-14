import Notiflix, { Notify } from 'notiflix';
import renderFilmCart from '../templates/film_cart.hbs';
import { refs } from './refs';
import nothing from '../images/nothing.webp ';

export function onClickWatchedBtn(evt) {
  evt.preventDefault();
  renderLibrary('watched');
  Notiflix.Loading.remove();
}

export function onClickQueueBtn(evt) {
  evt.preventDefault();
  renderLibrary('queue');
  Notiflix.Loading.remove();
}

function renderLibrary(key) {
  Notiflix.Loading.standard();
  const lang = localStorage.getItem('language');
  const arrObj = JSON.parse(localStorage.getItem(key));
  if (!arrObj.length) {
    refs.filmList.innerHTML = `<img src="${nothing}" alt="Your Library is empty" style='	margin-left: auto;
	margin-right: auto;'></img>`;
    Notiflix.Loading.remove();
    return;
  }
  const obj = transformLibrary(arrObj, lang);
  const markup = renderFilmCart(obj);
  refs.filmList.innerHTML = markup;
  Notiflix.Loading.remove();
}

function transformLibrary(object, lang) {
  // console.log('transform', arrObj);
  if (lang === 'en-US') {
    object.map(el => {
      let i = 0;
      el.genre_ids = el.genres
        .map(el => {
          i += 1;
          return i >= 3 ? 'Other' : el.name;
        })
        .slice(0, 3);
      el.release_date = el.release_date.slice(0, 4);
      el.poster_path = ` https://image.tmdb.org/t/p/w500${el.poster_path}`;
      console.log(el.genres_name, typeof el.vote_average);
      // el.vote_average = !el.vote_average ? '' : +el.vote_average.toFixed(1);
    });
    return object;
  }

  if (lang === 'uk-UA') {
    object.map(el => {
      let i = 0;
      el.genre_ids = el.genres
        .map(el => {
          i += 1;
          return i >= 3 ? 'Інші' : el.name;
        })
        .slice(0, 3);
      el.release_date = el.release_date.slice(0, 4);
      el.poster_path = ` https://image.tmdb.org/t/p/w500${el.poster_path}`;
      // el.vote_average = !el.vote_average ? '' : +el.vote_average.toFixed(1);
    });
    // console.log('TRANSFORM', arrObj);
    return object;
  }
}
