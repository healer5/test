import { refs } from './refs';

refs.themeToggle.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt);
  setDarkTheme();
}

function setLightTheme() {
  refs.body.classList.add('light');
  // document.documentElement.style.setProperty('--bg-text', '#202025');
  // document.documentElement.style.setProperty('--modal-text-color', '#5f6775');
  // saveThemeFavorites('Light');
}
function setDarkTheme() {
  refs.body.classList.toggle('dark');
  // document.documentElement.style.setProperty('--bg-text', '#FCFCFC');
  // document.documentElement.style.setProperty('--modal-text-color', '#FCFCFC');
  // saveThemeFavorites('Dark');
}

export function setTheme() {
  switch (theme) {
    case 'Light':
      el.toggleSwitch.checked = false;
      setLightTheme();
      break;
    case 'Dark':
      el.toggleSwitch.checked = true;
      setDarkTheme();
      break;
  }
}
