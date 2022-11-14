import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';
// import './js/pagination.js';

const API_KEY = 'ec34284630374f864ce40bf102f3f73e';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
    this.language = localStorage.getItem('language');
    this.genre = '';
  }

  async fetchTrendingMovies() {
    try {
      const lang = localStorage.getItem('language');
      const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${this.pageNumber}`;
      Notiflix.Loading.standard();
      const trendingData = await axios.get(url);
      Notiflix.Loading.remove();
      return trendingData.data.results;
    } catch (error) {
      console.log(error);
      // Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchWeekTrendingMovies() {
    try {
      const lang = localStorage.getItem('language');
      const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=${lang}&page=${this.pageNumber}`;
      Notiflix.Loading.standard();
      const trendingData = await axios.get(url);
      // console.log('apiPage after', this.pageNumber);
      Notiflix.Loading.remove();
      return trendingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchMoviesWithGenre() {
    try {
      console.log('genreLang', this.language, this.genre);
      const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${this.language}&with_genres=${this.genre}&page=${this.pageNumber}`;
      console.log(url);
      Notiflix.Loading.standard();
      const trendingData = await axios.get(url);
      Notiflix.Loading.remove();
      return trendingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchSearchMovie() {
    if (this.query === '') return;
    try {
      const lang = localStorage.getItem('language');
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${lang}&page=${this.pageNumber}&query=${this.searchQuery}`;
      console.log('url', url);
      Notiflix.Loading.standard();
      const searchingData = await axios.get(url);
      Notiflix.Loading.remove();
      return searchingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchMoviesDetails(id) {
    try {
      const url = `${BASE_URL}/movie/${id}?`;
      Notiflix.Loading.standard();
      const details = await axios.get(url, {
        params: { api_key: API_KEY, language: this.language },
      });
      Notiflix.Loading.remove();
      return details.data;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchTrailerVideo(id) {
    const options = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };

    return axios.get(`${BASE_URL}/movie/${id}/videos`, options);
  }

  async fetchGenres() {
    const postBaseUrl = '/genre/movie/list?';
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: this.language,
    });
    try {
      const genres = await axios.get(
        `${BASE_URL}${postBaseUrl}${searchParams}`
      );
      return genres.data.genres;
    } catch {
      error => console.log(error);
    }
  }

  incrementPage() {
    this.pageNumber += 1;
  }

  decrementPage() {
    this.pageNumber -= 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  // get pageNumber() {
  //   return this.pageNumber;
  // }

  // set pageNumber(newPage) {
  //   this.pageNumber = newPage;
  // }

  // get language() {
  //   return this.language;
  // }
  // set language(newLang) {
  //   this.language = newLang;
  // }
}
