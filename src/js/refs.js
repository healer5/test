export const refs = {
  body: document.querySelector('body'),
  searchForm: document.querySelector('.header__search-form'),
  searchInput: document.querySelector('.js-search-input'),
  searchBtn: document.querySelector('.header__form-submit-btn'),
  searchList: document.querySelector('.search-form-list'),
  /////////////////////   MODAL   \\\\\\\\\\\\\\\\\\\\\\\
  modalVotes: document.querySelector('.js-votes'),
  modalPopularity: document.querySelector('.js-popularity'),
  modalOriginalTitle: document.querySelector('.js-original-title'),
  modalGenres: document.querySelector('.js-genres'),
  modalAbout: document.querySelector('.js-about'),
  modalImage: document.querySelector('.js-modal-img'),
  modalFilmTitle: document.querySelector('.film__title'),
  modalVoteAverage: document.querySelector('.js-vote-average'),
  modalVoteCount: document.querySelector('.js-vote-count'),
  modalPopularityValue: document.querySelector('.js-popularity-value'),
  modalOriginalTitleValue: document.querySelector('.js-original-title-value'),
  modalGenresValue: document.querySelector('.js-genres-value'),
  modalAboutValue: document.querySelector('.film__about__text'),
  modalContainer: document.querySelector('.modal-container'),
  ////////////////////////    TOGGLE  THEME    \\\\\\\\\\\\\\\\\\\\\\\\\\\
  headerSection: document.querySelector('.header__section'),
  headerLibrary: document.querySelector('#library'),
  headerHome: document.querySelector('#home'),

  headerLibrBtnWatched: document.querySelector('#watched'),
  headerLibrBtnQueue: document.querySelector('#queue'),
  librButtons: document.querySelector('.header-library__btn-list'),
  // themeToggle: document.querySelector('#switch'),
  paginationRef: document.querySelector('.pagination-container'),

  filmList: document.querySelector('.collection'),
  genreSelect: document.querySelector('.js-genre-filter'),
  modal: document.querySelector('.modal-info'),
  uaLanguageBtn: document.querySelector('#ua_btn'),
  enLanguageBtn: document.querySelector('#en_btn'),

  themeToggle: document.querySelector('#switch'),
  themeLight: document.querySelector('.header__light'),
  themeDark: document.querySelector('.header__dark'),

  footerModalBackdrop: document.querySelector('.modal-backdrop'),
  footerCloseModal: document.querySelector('.modal-team__btn'),
  footerOpenModal: document.querySelector('.js-footer_link'),

  backdrop: document.querySelector('.backdrop'),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  addWatchedBtn: document.querySelector('.js-watch-btn'),
  addQueueBtn: document.querySelector('.js-queue-btn'),

  sliderGlide: document.querySelector('.glide__slides'),
  // removeWatchdBtn: document.querySelector('.button-remove'),
};
