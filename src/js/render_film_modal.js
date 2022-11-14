import FilmApiService from './movie_database_api';
import { refs } from './refs';
import comingSoon from '../images/coming_soon.jpg';

const apiRequest = new FilmApiService();
const arrCardWatched = [];

// const lang = localStorage.getItem('language');
// const apiRequest = new FilmApiService();
// const removeString = lang === 'en-US' ? 'remove' : 'видалити';
// const watchedString =
//   lang === 'en-US' ? 'add to watched' : 'додати до переглянутого';
// const queueString = lang === 'en-US' ? 'add to queue' : 'додати до черги';

// console.log(removeString, watchedString, queueString);

refs.filmList.addEventListener('click', openModal);
refs.sliderGlide.addEventListener('click', onSliderClick);
refs.searchList.addEventListener('click', onSearchClick);

function onSearchClick(evt) {
  console.log(evt);
  openModal(evt, evt.path[2].id);
}

function onSliderClick(evt) {
  // console.log(evt.path[0].id);
  openModal(evt, evt.path[0].id);
}

function openModal(evt, id) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const movieId = id ? id : evt.path[2].id;
  const lang = localStorage.getItem('language');
  const removeString = lang === 'en-US' ? 'remove' : 'видалити';
  const watchedString =
    lang === 'en-US' ? 'add to watched' : 'додати до переглянутого';
  const queueString = lang === 'en-US' ? 'add to queue' : 'додати до черги';
  // console.log(removeString, watchedString, queueString, evt.path[2].id);

  refs.addQueueBtn.addEventListener('click', onClickAddQueueBtn);
  refs.addWatchedBtn.addEventListener('click', onClickAddWatchedBtn);
  refs.closeModalBtn.addEventListener('click', closeModal);
  document.body.addEventListener('keydown', onEscButton);
  document.body.addEventListener('click', onBackdropClick);
  refs.backdrop.classList.remove('visually-hidden');
  refs.modalContainer.classList.remove('visually-hidden');
  const queue = JSON.parse(localStorage.getItem('queue'));
  const watched = JSON.parse(localStorage.getItem('watched'));
  console.log(queue, watched);
  refs.addWatchedBtn.textContent = watchedString;
  refs.addQueueBtn.textContent = queueString;
  if (watched) {
    const her = JSON.parse(localStorage.getItem('watched'));
    if (her.map(el => el.id).includes(+movieId)) {
      refs.addWatchedBtn.textContent = removeString;
      refs.addWatchedBtn.classList.add('button-remove');
    } else {
      refs.addWatchedBtn.textContent = watchedString;
      console.log('watched');
      refs.addWatchedBtn.classList.remove('button-remove');
    }
  }

  if (queue) {
    const her = JSON.parse(localStorage.getItem('queue'));
    console.log(her);
    if (her.map(el => el.id).includes(+movieId)) {
      refs.addQueueBtn.textContent = removeString;
      refs.addQueueBtn.classList.add('button-remove');
    } else {
      refs.addQueueBtn.textContent = queueString;
      refs.addQueueBtn.classList.remove('button-remove');
    }
  }
  apiRequest.language = localStorage.getItem('language');
  const details = apiRequest.fetchMoviesDetails(movieId);
  details.then(res => {
    refs.backdrop.setAttribute(
      'style',
      `background-image: url("https://image.tmdb.org/t/p/original/${res.backdrop_path}"); background-size: cover; background-position: 50% 50%;`
    );
    console.log(res);
    setTimeout(renderModal(res), 2500);

    // modalLanguage();
  });
}

// function render(movie) {
//   console.log(movie);
//   localStorage.setItem('movie', JSON.stringify(movie));
//   const markup = renderModal(movie);
//   refs.modal.innerHTML = markup;
// }

function closeModal(evt) {
  document.body.removeEventListener('keydown', onEscButton);
  document.body.removeEventListener('click', onBackdropClick);
  refs.backdrop.classList.add('visually-hidden');
  refs.addQueueBtn.removeEventListener('click', onClickAddQueueBtn);
  refs.addWatchedBtn.removeEventListener('click', onClickAddWatchedBtn);
  // refs.sliderGlide.removeEventListener('click', onSliderClick);
}

function onBackdropClick(evt) {
  if (evt.target.classList.contains('backdrop')) {
    closeModal();
  }
}

function onEscButton(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}

function onClickAddWatchedBtn(evt) {
  evt.preventDefault();
  const lang = localStorage.getItem('language');
  const removeString = lang === 'en-US' ? 'remove' : 'видалити';
  const watchedString =
    lang === 'en-US' ? 'add to watched' : 'додати до переглянутого';
  // const queueString = lang === 'en-US' ? 'add to queue' : 'додати до черги';
  // console.log(removeString, watchedString, queueString);
  const watched = JSON.parse(localStorage.getItem('watched'));
  const arrCardWatched = watched ? watched : [];
  const savedCardWatched = localStorage.getItem('movie');
  const parsedCardWatched = JSON.parse(savedCardWatched);

  if (refs.addWatchedBtn.textContent === removeString) {
    refs.addWatchedBtn.textContent = watchedString;
    const newArr = arrCardWatched.filter(el => el.id !== parsedCardWatched.id);
    localStorage.removeItem('watched');

    console.log('newArr', newArr);
    localStorage.setItem('watchedFilter', JSON.stringify(newArr));
    const parseFilter = JSON.parse(localStorage.getItem('watchedFilter'));
    localStorage.setItem('watched', JSON.stringify(parseFilter));
  } else {
    refs.addWatchedBtn.textContent = removeString;
    arrCardWatched.push(parsedCardWatched);
    // console.log('saved', parsedCardWatched.id);
    localStorage.setItem('watched', JSON.stringify(arrCardWatched));
  }
}

function onClickAddQueueBtn(evt) {
  evt.preventDefault();
  const lang = localStorage.getItem('language');
  const removeString = lang === 'en-US' ? 'remove' : 'видалити';
  const queueString = lang === 'en-US' ? 'add to queue' : 'додати до черги';
  const queue = JSON.parse(localStorage.getItem('queue'));
  const arrCardQueue = queue ? queue : [];
  const savedCardQueue = localStorage.getItem('movie');
  const parsedCardQueue = JSON.parse(savedCardQueue);

  if (refs.addQueueBtn.textContent === removeString) {
    refs.addQueueBtn.textContent = queueString;
    const newArr = arrCardQueue.filter(el => el.id !== parsedCardQueue.id);
    localStorage.removeItem('queue');

    console.log('newArr', newArr);
    localStorage.setItem('queueFilter', JSON.stringify(newArr));
    const parseFilter = JSON.parse(localStorage.getItem('queueFilter'));
    localStorage.setItem('queue', JSON.stringify(parseFilter));
  } else {
    refs.addQueueBtn.textContent = removeString;
    arrCardQueue.push(parsedCardQueue);
    // console.log('saved', parsedCardQueue);
    localStorage.setItem('queue', JSON.stringify(arrCardQueue));
  }
}

function renderModal(obj) {
  // console.log('modal', obj);
  const lang = localStorage.getItem('language');
  const transObj = transformModal(obj, lang);
  // console.log('modal', transObj);

  refs.modalImage.setAttribute('src', `${transObj.poster_path}`);
  refs.modalFilmTitle.textContent = transObj.title;
  refs.modalVoteAverage.textContent = transObj.vote_average;
  refs.modalVoteCount.textContent = transObj.vote_count;
  refs.modalPopularityValue.textContent = transObj.popularity;
  refs.modalOriginalTitleValue.textContent = transObj.original_title;
  refs.modalGenresValue.textContent = transObj.genres_name;
  refs.modalAboutValue.textContent = transObj.overview;
  localStorage.setItem('movie', JSON.stringify(obj));
}

export function transformModal(object, lang) {
  // console.log('transform', arrObj);
  if (lang === 'en-US') {
    let i = 0;
    object.genres_name = object.genres
      .map(el => {
        i += 1;
        return i >= 3 ? 'Other' : el.name;
      })
      .slice(0, 3);
    object.release_date = object.release_date.slice(0, 4);
    object.poster_path = !object.poster_path
      ? comingSoon
      : ` https://image.tmdb.org/t/p/w500${object.poster_path}`;
    object.vote_average = !object.vote_average
      ? ''
      : object.vote_average.toFixed(1);
    console.log(object.genres_name);

    return object;
  }

  if (lang === 'uk-UA') {
    let i = 0;
    object.genres_name = object.genres
      .map(el => {
        i += 1;
        return i >= 3 ? 'Інші' : el.name;
      })
      .slice(0, 3);
    object.release_date = object.release_date.slice(0, 4);
    object.poster_path = !object.poster_path
      ? comingSoon
      : ` https://image.tmdb.org/t/p/w500${object.poster_path}`;
    object.vote_average = !object.vote_average
      ? ''
      : object.vote_average.toFixed(1);

    // console.log('TRANSFORM', arrObj);
    return object;
  }
}
