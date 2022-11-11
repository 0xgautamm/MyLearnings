// function fruitMaker(){
//    console.log(`We are beginners for code`)
// }
// // doiing below thing is called invoking/calling/running the function

// fruitMaker();
// fruitMaker();
// fruitMaker();
// fruitMaker();

// function fruitProcessor(apple, banana){
//   console.log(apple,banana);
//   const juice = `We are beginners so we have ${apple} apples and bunch of ${banana} bananas.`;
// return juice 
// }

// const appleJuice = fruitProcessor(3,7);
// console.log(appleJuice);

// const bananaJuice = fruitProcessor(6,8);
// console.log(bananaJuice);

// const num = Number(90);
// console.log(num);

// // NOTE...................................
// //1-; (counttry, population, capitalcity),(apple, banana), all these are called "PARAMETERS"  and the values of these parameters are called "ARGUEMENTS" i.e (3,7),(6,8),(india ,4, delhi, etc etc)....

// //2-; consoling the ARGUEMENTS is called declaration of functions...

// // 3-;  RETURN DATA helps to have differnt value for 1 function many times by giving a variable and its value in arguements..... 


// // .............assignments function........................

// function describeCountry (country, population, capitalCity){
//   console.log(country,population, capitalCity);
//   const data = `${country} has ${population} million of people and its capital city is ${capitalCity}.`;
//   return data
// }

// const dataIndia = describeCountry('India', 4, 'Delhi');
// console.log(dataIndia);

// const dataAmerica = describeCountry('America', 7, 'Washington DC')
// console.log(dataAmerica);

// const dataFinland = describeCountry('Finland', 5, 'Helsinki')
// console.log( dataFinland);
// ....................................................................................................................................

// FUNCTIONS declarations vs EXPRESSIONS/////////

//  function declaration
  function calAge1(birthYear){
  // const birth= 2043- birthYear;       OR  we can directly come to ""return""
  return 2043- birthYear
}
const age1 = calAge1(1998);


// function expression -: expression is an value and a value has a variable so we can fix a function in "const" as a variable which gonna give value.........and like others functions is also value i.e string,number,boolean any value among them...........

const calAge2= function (birthYear){

  return 2043- birthYear
  }

const age2 = calAge2(1997);
console.log(age1 ,age2) ; 
