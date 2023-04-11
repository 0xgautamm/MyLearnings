// 'use strict';

// // console.log( document.querySelector('.message').textContent); 
// DOM(document object  model)= it helps to represent structured hmtl documents....... DOM allows javascript access to html elements and style css to manipulate..... 

// querySelector is the way for entry point in DOM js

//  document.querySelector('.message').textContent = 'Yeah!!You Got The Answer🤾‍♂️🤾‍♀️' 
//  document.querySelector('.message').textContent

// document.querySelector('.number').textContent= '9?'
// document.querySelector('.score').textContent='50'

// document.querySelector('.guess').value=11
// console.log(document.querySelector('.guess').value)

// EventListerner =: any action done on the page is called an Event like moving mouse, clicking button, key press
//                       and EventListerner is reacting to certain events happened on screen 

const number= Math.trunc(Math.random()*20)+1

Math.trunc coded because of removing decimals given by *20.................
*20 give its boundry number only to 19.9999999999 and just by adding 1 to code give its to 20th number too  

document.querySelector('.check').addEventListener( 'click', function(){
 const guess=Number (document.querySelector('.guess').value)

console.log(guess, typeof guess)


if(!guess){
  document.querySelector('.message').textContent='🚑No Number'
}
});
