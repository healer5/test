
(() => {
    const refss = {
    //   openModalBtn: document.querySelector(".card__link"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]")
    };
  
    // refss.openModalBtn.addEventListener("click", toggleModal);
    refss.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refss.modal.classList.toggle("is-hidden");
    }
  })();


  const btn0 = document.querySelector('.watch_btn > span');
btn0.addEventListener('click', function(){
  btn0.innerHTML =
    (btn0.innerHTML === 'add to Watched') ? btn0.innerHTML = 'Remove?' : btn0.innerHTML = 'add to Watched';
})



//изминение надписей в кнопках при клике
const btn1 = document.querySelectorAll('.queue_btn > span');
for (let i = 0; i < btn1.length; i++) {

  btn1[i].addEventListener('click', function() {
    this.innerHTML =
      (this.innerHTML === 'add to queue') ? this.innerHTML = 'Remove?' : this.innerHTML = 'add to queue';
  })

}

// Закрытие по клику вне поля модального окна
const backdropik = document.querySelector('.backdrop')
const box = document.querySelector('.modal-container');
document.addEventListener('click', (e)=>{
const click = e.composedPath().includes(box,backdropik);
if (!click) {
    box.style.display = 'none';
    backdropik.style.display = 'none';
}
})

