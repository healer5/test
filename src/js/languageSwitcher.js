import { refs } from './refs';
import FilmApiService from './movie_database_api';
import { renderTrendingList } from './render_movie_list';
import GenresLanguage from './render_genres';

console.log('langugeSwitcher');

const apiRequest = new FilmApiService();
const genresSelect = new GenresLanguage();

refs.uaLanguageBtn.addEventListener('click', onClickUa);
refs.enLanguageBtn.addEventListener('click', onClickEn);

export function onClickUa() {
  localStorage.setItem('language', 'uk-UA');
  genresSelect.renderGenresUa();
  refs.searchInput.setAttribute('placeholder', 'Пошук фильмів');

  refs.modalVotes.textContent = 'Оцінки';
  refs.modalPopularity.textContent = 'Популярність';
  refs.modalOriginalTitle.textContent = 'Оригінальна назва';
  refs.modalGenres.textContent = 'Жанри';
  refs.modalAbout.textContent = 'Опис';

  refs.headerLibrary.textContent = 'Бібліотека';
  refs.headerHome.textContent = 'головна';
  refs.themeDark.textContent = 'темна';
  refs.themeLight.textContent = 'світла';
  refs.headerLibrBtnWatched.textContent = 'переглянуто';
  refs.headerLibrBtnQueue.textContent = 'подивитись';
  apiRequest.language = localStorage.getItem('language');
  console.log(localStorage.getItem('language'));
  renderTrendingList();
}

export function onClickEn() {
  localStorage.setItem('language', 'en-US');
  genresSelect.renderGenresEn();
  refs.searchInput.setAttribute('placeholder', 'Movie search');

  refs.modalVotes.textContent = 'Vote / Votes';
  refs.modalPopularity.textContent = 'Popularity';
  refs.modalOriginalTitle.textContent = 'Original title';
  refs.modalGenres.textContent = 'Genre';
  refs.modalAbout.textContent = 'About';

  refs.headerLibrary.textContent = 'my library';
  refs.headerHome.textContent = 'home';
  refs.themeDark.textContent = 'dark';
  refs.themeLight.textContent = 'light';
  refs.headerLibrBtnWatched.textContent = 'watched';
  refs.headerLibrBtnQueue.textContent = 'queue';
  apiRequest.language = localStorage.getItem('language');
  renderTrendingList();
}

// export function modalLanguage() {
//   console.log(localStorage.getItem('language') === 'en-US');
//   if (localStorage.getItem('language') === 'en-US') {
//     refs.modalVotes.textContent = 'Vote / Votes';
//     refs.modalPopularity.textContent = 'Popularity';
//     refs.modalOriginalTitle.textContent = 'Original title';
//     refs.modalGenres.textContent = 'Genre';
//     refs.modalAbout.textContent = 'About';
//   } else {
//     refs.modalVotes.textContent = 'Оцінки';
//     refs.modalPopularity.textContent = 'Популярність';
//     refs.modalOriginalTitle.textContent = 'Оригінальна назва';
//     refs.modalGenres.textContent = 'Жанри';
//     refs.modalAbout.textContent = 'Опис';
//   }
// }
