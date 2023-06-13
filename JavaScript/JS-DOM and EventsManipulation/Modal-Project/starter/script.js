'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

when the html has same 'class' for more than 1 element, we have to   use 'document.querySelectorAll'by which all elements having same class been selected by the selector
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log('btnsShowModal');