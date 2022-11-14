import { refs } from './refs';

let themeStatus = localStorage.getItem('theme');
themeStatus = !themeStatus ? 'light' : themeStatus;
localStorage.setItem('theme', themeStatus);

refs.themeToggle.addEventListener('change', themeToggleHandler);

function themeToggleHandler(evt) {
  evt.preventDefault();
  const status = themeStatus;
  themeStatus = status === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', themeStatus);

  if (themeStatus === 'dark') {
    darkTheme();
  } else {
    lightTheme();
  }

  function lightTheme() {
    refs.body.classList.remove('dark');
    refs.filmList.classList.remove('dark');

    // refs.body.classList.add('light');
  }
  function darkTheme() {
    // refs.body.classList.remove('light');
    refs.body.classList.add('dark');
    refs.filmList.classList.add('dark');
  }
}
