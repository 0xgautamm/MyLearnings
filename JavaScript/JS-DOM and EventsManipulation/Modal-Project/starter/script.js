'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// when the html has same 'class' for more than 1 element, we have to   use 'document.querySelectorAll'by which all elements having same class been selected by the selector
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log('btnsShowModal');

for(let i=0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener('click', function(){
console.log('Button Clicked')

modal.classList.remove('hidden');
overlay.classList.remove('hidden');

});

const closeModal= function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click', function(){

modal.classList.add('hidden');
overlay.classList.add('hidden');
})



overlay.addEventListener('click', function(){

  modal.classList.add('hidden');
  overlay.classList.add('hidden');

})
