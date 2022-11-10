// import { renderTrendingList } from './render_movie_list';
import { onClickUa, onClickEn } from './languageSwitcher';

localStorage.getItem('language') === 'uk-UA' ? onClickUa() : onClickEn();
