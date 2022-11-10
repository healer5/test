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
  refs.headerLibrary.textContent = 'Бібліотека';
  refs.headerHome.textContent = 'головна';
  refs.themeDark.textContent = 'темна';
  refs.themeLight.textContent = 'світла';
  refs.headerLibrBtnWatched.textContent = 'переглянуто';
  refs.headerLibrBtnQueue.textContent = 'у чергу';
  apiRequest.language = localStorage.getItem('language');
  console.log(localStorage.getItem('language'));
  renderTrendingList();
}

export function onClickEn() {
  localStorage.setItem('language', 'en-US');
  genresSelect.renderGenresEn();
  refs.searchInput.setAttribute('placeholder', 'Movie search');
  refs.headerLibrary.textContent = 'library';
  refs.headerHome.textContent = 'home';
  refs.themeDark.textContent = 'dark';
  refs.themeLight.textContent = 'light';
  refs.headerLibrBtnWatched.textContent = 'watched';
  refs.headerLibrBtnQueue.textContent = 'queue';
  apiRequest.language = localStorage.getItem('language');
  renderTrendingList();
}
