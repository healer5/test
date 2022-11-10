import { refs } from './refs';




function setLightTheme() {
    refs.body.setProperty(`background-color` `white`)
    // document.documentElement.style.setProperty('--bg-text', '#202025');
    // document.documentElement.style.setProperty('--modal-text-color', '#5f6775');
    saveThemeFavorites('Light');
  }
  function setDarkTheme() {
    refs.body.setProperty(`background-color` `#1b080a`)
    // document.documentElement.style.setProperty('--bg-text', '#FCFCFC');
    // document.documentElement.style.setProperty('--modal-text-color', '#FCFCFC');
    saveThemeFavorites('Dark');
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
  