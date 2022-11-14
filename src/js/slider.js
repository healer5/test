import Glide from '@glidejs/glide';

const refs = {
  lisrTopFilms: document.querySelector('.glide__slides'),
  item: document.querySelectorAll('.glide__slide'),
};

if (!refs.lisrTopFilms) {
  return;
}

const API_KEY = '0a4aab5daca4d3b8b09b771948ad9265';
const URL = 'https://api.themoviedb.org/3';
const API_URL = `${URL}/movie/upcoming?api_key=${API_KEY}`;
const IMG = 'https://image.tmdb.org/t/p/w500';

async function getMovies() {
  await fetch(API_URL)
    .then(res => {
      return res.json();
    })
    .then(res => {
      render(res.results);
    });
}
getMovies();

async function render(data) {
  data.forEach((item, i) => {
    if (!item.poster_path) {
      refs.item[
        i
      ].innerHTML = `<img class='slider-js__img' src="./image/card.jpg" alt="${item.title}" id='${item.id}'/>`;
      return;
    }
    refs.item[
      i
    ].innerHTML = `<img class='slider-js__img' src="${IMG}${item.poster_path}" alt="${item.title}" id='${item.id}'/>`;
  });
}

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 10,
  autoplay: 3000,
  hoverpause: true,
  bound: true,
  breakpoints: {
    1280: {
      perView: 7,
    },
    768: {
      perView: 6,
    },
    480: {
      perView: 3,
    },
    320: {
      perView: 2,
    },
  },
});
glide.mount();
