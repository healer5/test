import { refs } from './refs';

refs.footerCloseModal.addEventListener('click', onCloseBtn);
refs.footerModalBackdrop.addEventListener('click', onCloseBackdrop);
refs.footerOpenModal.addEventListener('click', onCloseBtn);


function onCloseBtn(e) {
  e.preventDefault();
  refs.footerModalBackdrop.classList.remove('is-hidden');
  refs.body.classList.add('modal-open');
  

  if (e.target !== e.currentTarget) {
    window.addEventListener('keydown', onEscPress);
    refs.footerModalBackdrop.classList.add('is-hidden');
    refs.body.classList.remove('modal-open');
  }
}

function onCloseBackdrop(e) {
  if (e.target === e.currentTarget) {
    window.removeEventListener('keydown', onEscPress);
    refs.footerModalBackdrop.classList.add('is-hidden');
    refs.body.classList.remove('modal-open');
  }
}


function onEscPress(e) {
  if (e.code === 'Escape') {
    onCloseBtn();
  }
}