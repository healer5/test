import axios from 'axios';
import Notiflix from 'notiflix';
// import './js/pagination.js';

const API_KEY = 'ec34284630374f864ce40bf102f3f73e';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
    this.language = localStorage.getItem('language');
  }

  async fetchTrendingMovies() {
    try {
      const url = `${BASE_URL}/trending/movie/day?`;
      const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: this.language,
        page: this.pageNumber,
      });

      // console.log('apiPage before', this.pageNumber);
      // console.log('url', url);
      const trendingData = await axios.get(`${url}${searchParams}`);
      // console.log('apiPage after', this.pageNumber);
      return trendingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchMoviesWithGenre(genre, lang) {
    try {
      console.log('Genre', genre, 'lang', lang);
      const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${lang}&winh_genres=${genre}`;
      const trendingData = await axios.get(url);
      return trendingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchSearchMovie() {
    try {
      const lang = localStorage.getItem('language');
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${lang}&page=${this.pageNumber}&query=${this.searchQuery}`;
      console.log('url', url);
      const searchingData = await axios.get(url);
      return searchingData.data.results;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
  }

  async fetchMoviesDetails(id) {
    try {
      const url = `${BASE_URL}/movie/${id}?`;
      const details = await axios.get(url, {
        params: { api_key: API_KEY, language: this.language },
      });
      return details.data;
    } catch (error) {
      console.log(error);
      Notiflix.failure('Oops, an error occurred');
    }
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
