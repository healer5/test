// import FilmApiService from './movie_database_api';
// import { renderList } from './render_movie_list';
// import transformObj from './transformObject';

// const apiRequest = new FilmApiService();
// const fetchFunctions = apiRequest.fetchMoviesWithGenre.bind(apiRequest);
// // const lang = localStorage.getItem('language');

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

const gallery = document.querySelector('.collection');

let currentPage = 1,
  maxPage = 100,
  neighbourPagesCount = 2 // количество оторажаемых соседних номеров. для значение 1 номера будут выглядеть "1 ... 6 7 8 ... 96", для значения 2 "1 ... 5 6 7 8 9 ... 96";

btn1Ref.addEventListener('click', onBtnClick);
btn2Ref.addEventListener('click', onBtnClick);
btn3Ref.addEventListener('click', onBtnClick);
btn4Ref.addEventListener('click', onBtnClick);
btn5Ref.addEventListener('click', onBtnClick);

firstPageRef.addEventListener('click', function () {
  currentPage = 1;
  render(currentPage);
});

lastPageRef.addEventListener('click', function () {
  currentPage = maxPage;
  render(currentPage);
});

rightArrowRef.addEventListener('click', function () {
  currentPage += 1;
  render(currentPage);
});

leftArrowRef.addEventListener('click', function () {
  currentPage -= 1;
  render(currentPage);
});

function onBtnClick(event) {
  currentPage = Number(event.target.textContent);
  render(currentPage);
}

function firstPage() {
  currentPage = 1;
  render(currentPage);
}

let btns = document.querySelectorAll('.pagination-button');

function render(pageNumber) {
  let
    // Определяем номер наименьшей страницы в списке страниц. Он должен быть меньше номера текущей страницы
    // на neighbourPagesCount, но не меньше 1
    startPage = Math.max(1, pageNumber - neighbourPagesCount),

    pagesList = []
  ;

  //Проверяем, чтобы startPage был не больше допустимого предела. для neighbourPagesCount = 2 и maxPage это значение должно быть 92
  if (startPage + neighbourPagesCount * 2 > maxPage) {
    startPage = maxPage - neighbourPagesCount * 2;
  }

  //Заполняем список отображаемых страниц
  for (let i = startPage; i < startPage + 5; ++i) {
    pagesList.push(i);
  }
  console.log(pagesList);

  btn1Ref.textContent = pagesList[0];
  btn2Ref.textContent = pagesList[1];
  btn3Ref.textContent = pagesList[2];
  btn4Ref.textContent = pagesList[3];
  btn5Ref.textContent = pagesList[4];

  leftArrowRef.hidden = pageNumber <= 1; //Скрывать левую стрелку, если номер текущей страницы 1 или меньше
  rightArrowRef.hidden = pageNumber >= maxPage; //Скрывать правую стрелку, если номер текущей страницы больше или равен максимальной страницы

  prevDotsRef.hidden = pageNumber <= neighbourPagesCount + 1; //Скрывать левое троеточие, пока номер страницы не превысит neighbourPagesCount
  firstPageRef.hidden = prevDotsRef.hidden //Условие для ссылки на первую страницу такое же, как и для prevDotsRef.hidden. Нет троеточия - нет смысла отображать ссылку на первую страницу

  afterDotsRef.hidden = pageNumber >= maxPage - neighbourPagesCount //Скрываем правое троеточие, когда мы находимся на странице 94, 95 или 96;
  lastPageRef.hidden = afterDotsRef.hidden //Условие для ссылки на последнюю страницу такое же, как и для afterDotsRef.hidden. Нет троеточия - нет смысла отображать ссылку на последнюю страницу;

  btns.forEach(el => el.classList.remove('pagination--current'));
  btns.forEach(el => {
    if (el.textContent == pageNumber) {
      el.classList.add('pagination--current');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.render = render;

// export function paginationRender(fetchFunction) {
//   // gallery.innerHTML = '';
//   // const funct = apiRequest.fetchTrendingMovies();
//   const lang = localStorage.getItem('language');
//   console.log('Pagination', fetchFunctions, apiRequest.genre);
//   apiRequest.pageNumber = currentPage;
//   fetchFunction().then(res => {
//     renderList(transformObj(res, lang));
//   });
//   window.scrollTo({ top: 0, behavior: 'smooth' });

//   // movieArr(currentPage).then(res => render(res));
// }

let pageSize = 9;

function defineResultsPerPage() {
  if (window.innerWidth >= 1024) {
    pageSize = 9;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    pageSize = 8;
  } else if (window.innerWidth < 768) {
    pageSize = 4;
  }
  return pageSize;
}

export { currentPage, defineResultsPerPage, firstPage };