import './js/render_site';

// import './js/render_movie_list';
import './js/theme';
import './js/footer_modal';
import './js/render_search';
// import './js/render_genres';

import './js/render_film_modal';
import './js/pagination.js';
// import './js/languageSwitcher';
import './js/switch_home_library';
import './js/scrollToTop';
import './js/slider';

// renderMovieList();
// const apiRequest = new FilmApiService();

// const refs = {
//   filmList: document.querySelector('.film-list'),
//   genreSelect: document.querySelector('.js-filter-genres'),
//   modal: document.querySelector('.modal'),
// };

// function renderM(ar) {
//   const markupm = renderModal(ar);
//   console.log(markupm);
//   refs.modal.insertAdjacentHTML('afterbegin', markupm);
// }

// apiRequest.pageNumber = 1;

// const genres = apiRequest.fetchGenres();
// const trendingList = apiRequest.fetchTrendingMovies();

// genres.then(res => console.log('Genres', res));

// trendingList.then(res => render(res));

// trendingList.then(res => renderM(res[0]));
// trendingList.then(res =>
//   console.log('Trending', res[0], 'Page', apiRequest.pageNumber)
// );
// console.log('fgtryhju');

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// trendingList.then(res => {
//   const id = res[1].id;
//   const details = apiRequest.fetchMoviesDetails(id);
//   details.then(res => console.log('Movie Details', res.data));
// });

//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// apiRequest.searchQuery = 'titanic';
// const search = apiRequest.fetchSearchMovie();
// search.then(res => render(res));

// function render(obj) {
//   const img = document.querySelector('.movie');
//   const markup = `<img src="https://image.tmdb.org/t/p/w500${obj[0].poster_path}" alt="poster path of ${obj[0].title}">
// 	<img src="https://image.tmdb.org/t/p/w300${obj[0].backdrop_path}" alt="poster path of ${obj[0].title}">
// 		<img src="https://image.tmdb.org/t/p/w500${obj[0].backdrop_path}" alt="poster path of ${obj[0].title}">
// 		<img src="https://image.tmdb.org/t/p/w1280${obj[0].backdrop_path}" alt="poster path of ${obj[0].title}">`;
//   img.insertAdjacentHTML('beforeend', markup);
// }
