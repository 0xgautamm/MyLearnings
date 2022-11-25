// // function fruitMaker(){
// //    console.log(`We are beginners for code`)
// // }
// // // doiing below thing is called invoking/calling/running the function

// // fruitMaker();
// // fruitMaker();
// // fruitMaker();
// // fruitMaker();

// // function fruitProcessor(apple, banana){
// //   console.log(apple,banana);
// //   const juice = `We are beginners so we have ${apple} apples and bunch of ${banana} bananas.`;
// // return juice 
// // }

// // const appleJuice = fruitProcessor(3,7);
// // console.log(appleJuice);

// // const bananaJuice = fruitProcessor(6,8);
// // console.log(bananaJuice);

// // const num = Number(90);
// // console.log(num);

// // // NOTE...................................
// // //1-; (counttry, population, capitalcity),(apple, banana), all these are called "PARAMETERS"  and the values of these parameters are called "ARGUEMENTS" i.e (3,7),(6,8),(india ,4, delhi, etc etc)....

// // //2-; consoling the ARGUEMENTS is called declaration of functions...

// // // 3-;  RETURN DATA helps to have differnt value for 1 function many times by giving a variable and its value in arguements..... 


// // // .............assignments function........................

// // function describeCountry (country, population, capitalCity){
// //   console.log(country,population, capitalCity);
// //   const data = `${country} has ${population} million of people and its capital city is ${capitalCity}.`;
// //   return data
// // }

// // const dataIndia = describeCountry('India', 4, 'Delhi');
// // console.log(dataIndia);

// // const dataAmerica = describeCountry('America', 7, 'Washington DC')
// // console.log(dataAmerica);

// // const dataFinland = describeCountry('Finland', 5, 'Helsinki')
// // console.log( dataFinland);
// // ....................................................................................................................................

// // FUNCTIONS declarations vs EXPRESSIONS/////////

//  function declaration
//   function calAge1(birthYear){
//   // const birth= 2043- birthYear;       OR  we can directly come to ""return""
//   return 2043- birthYear
// }
// const age1 = calAge1(1998);


// // function expression -: expression is an value and a value has a variable so we can fix a function in "const" as a variable which gonna give value.........and like others functions is also value i.e string,number,boolean any value among them...........

// const calAge2= function (birthYear){

//   return 2043- birthYear
//   }

// const age2 = calAge2(1997);
// console.log(age1 ,age2) ; 

// //.................assignments.............

// function percentOfWorld01 (population){ 
//   return population/7900*100 
// }

// const chinaPopulation =  percentOfWorld01(1441) 
// const indiaPopulation= percentOfWorld01(2123);
// const usaPopulation= percentOfWorld01(1256);
// console.log(chinaPopulation, indiaPopulation, usaPopulation);


// const percentOfWorld02 = function totalPopulation(population02){
//                            return population02/7900*100
// }

// const finland = percentOfWorld02(3466);
// const ireland = percentOfWorld02(3135);
// const lesbon = percentOfWorld02(7653);

// console.log(finland, ireland, lesbon);

//................ ARROW FUNCTIONS.............
// const calAge3= birthYear=> 2034- birthYear;

// const age= calAge3(1984);
// console.log(age);

// const yearsUntilRetirement = (birthYear, namePerson)=>{
//       const age = 2034- birthYear;
//       const retirementAge= 70- age;
//     //  return retirementAge
//     return `${namePerson} will be retire at the age of ${retirementAge}`
// }

// console.log(yearsUntilRetirement(1998, 'Vinay'));
// console.log(yearsUntilRetirement(1992, 'Bijoy'));

// ......assignments.............

// const percentOfWorld03 = population=> population/7900*100

// const india = percentOfWorld03(3442);
// const europe= percentOfWorld03(4577);
// const berlin = percentOfWorld03(4567);

// console.log(india, europe, berlin);

// ........function calling the other function...........

//  function cutPeiceFruit(fruit){
//   return fruit*9
//  }


// function fruitProcessor(apple, banana){

//   const applePeice= cutPeiceFruit(apple);
//    const bananaPeice= cutPeiceFruit(banana);

//  const juice = `We are beginners so we have ${applePeice} apples juice and bunch of ${bananaPeice} bananas shake will boost up our community.`;
//   return juice }

//   console.log(fruitProcessor(3,6));

// ,,,,,,,,,ASSIGNMENTS..............

// function totalPopulation (population){
//   return population/100
// }


// function describeCountry(country,people){
  
//   const partPercent= totalPopulation(7900)
//   const counting = `${country} has over ${people} million of people which is about the ${partPercent} percent of the world.` 
//   return counting
// }
  
// console.log(describeCountry('Berlin', 1441));
// console.log(describeCountry('Tokyo', 1241));
// console.log(describeCountry('China', 5341));

// ...........REVIEWING FUNCTION...........

// const calAge= function (birthYear){
//   return 2034-birthYear;
// }

// const yearsUntilRetirement = function (birthYear, namePerson){
//         const age = calAge(birthYear);
//         const retirementAge= 70- age;

// if (retirementAge > 0){
//   console.log(`${namePerson} will be retire at the age of ${retirementAge}`);
//   return retirementAge
//   // console.log 1st and return 2nd..> bcuzz return immidiately exits the functions thats why when we put return first it didn't show anything bcuz it dont have any conssole to show ....and at same moment when we put *return* at 2nd it has a console to show.... 
// } else {
//   console.log(`${namePerson} is already retire earlier`);
//   return -1;
// }
//   }

//   console.log(yearsUntilRetirement(1996, 'Tascon'));
//   console.log(yearsUntilRetirement(1916, 'Jacky'));


// ......................................... CODE CHALLENGE_01 from FUNDA-02.......................................

// const calcAverage= (a,b,c) =>(a+b+c)/3;
// console.log(calcAverage(3,5,7));

// // test-01
// let scoreDolphins = calcAverage(44,23,71);
// let  scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins, scoreKoalas);                                     


// const checkWinner= function (avgDolphin, avgKoala){

//  if(avgDolphin >= 2 * avgKoala){
//    console.log(`Dolphins wins yeahhu with (${avgDolphin} vs. ${avgKoala}).`)
// } else if (avgKoala >= 2 * avgDolphin){
//   console.log(`Yeah Koalas won the match with (${avgDolphin} vs. ${avgKoala}).`)
// }  else {
//   console.log(`No team wins......`);
// }
//   }


//   checkWinner(scoreDolphins, scoreKoalas);
//   checkWinner(231, 602);

// // test-02
// scoreDolphins = calcAverage(85, 54,41);
//   scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphins, scoreKoalas);  
// checkWinner(scoreDolphins, scoreKoalas);

//''''''''''''''''''''''''''''''''''''' ARRAYS ;- THE PART OF DATA STRUCTURE ...............................................
// ARRAYS =  THIS  helps to contains various values together in a large container called data structure and 
//          2 data structure are:- ARRAY  and  OBJECT


// const friend01 = 'Peter';
// const friend02 = 'Bruce';
// const friend03 = 'Stark';
// const friend04 = 'Natasa';

// const friends = ['Peter', 'Bruce', 'Stark', 'Natasa'];
// console.log(friends);

// const yea = new Array (1293, 8493, 4520, 1220,2002);
// // ARRAY are zero based count...like peter is @0, bruce is @01, stark is @03, natasa is @04.....like this ,, so on console.log

// console.log(friends[0]);
// console.log(friends[02]);

// console.log(friends.length);
// // friends.length is formal counting i.e 1,2,3,4,5,,,etc,,...so here .length take the number '4'as final result in friends..

// console.log(friends[friends.length - 2]);
// // after having (friends) means it become ARRAY  and [.length-2] means 4-2 =2 and this 2 will count as per ARRAY..i.e 02 is the stark

// friends[03]= 'Steve Rogers';
// console.log(friends);

// const nameFirst = 'Armour Rhody';
// const rhody = [nameFirst, 'captain of deffence' , 2038-1995, 'suit owner', friends];
// console.log(rhody);
// console.log(rhody.length);


// const calAge= function (birthYear){
//     return 2034-birthYear;}


//     const years =  [1793, 1493, 1920,1990, 1220,2002];
  
// const age1 = calAge(years[0]);
// const age2= calAge(years[04]);
// const age3= calAge(years[years.length-5]);
// const age4= calAge(years[5]);
// console.log(age1, age2, age3, age4); 

// const ages = [age3 , age2 , calAge(years[years.length-3])
// ]
// console.log(ages);

// ..........,,,,,,,,,,,,.,.,.,..Methods of ARRAYS.......,,,,,,,,,,,,,,,,,,

// push method-:) it is use to add a new element to END of ARRAY...and here friends.push (.)dots stands for attachments with friends variable..

// const friends = ['Peter', 'Bruce', 'Stark', 'Natasa'];

// // add elements>>>>>>>>>>

// const newFriend= friends.push('Stephan Strange');
// console.log(friends);
// console.log(newFriend);

// // unshift method-:) it is use to add a new element to BEGINNING of ARRAY...and here friends.UNSHIFT (.)dots stands for attachments with friends variable..

// const newFriends=friends.unshift('Panther');
//  friends.unshift('Vision')
// console.log(friends);
// console.log(newFriends);

// // remove elements>>>>>>>>>>>

// // pop-method= is use to remove the LAST element and no need to give any arguement..
// // shift-method= use to remove FIRST element and no need to give any arguement..

// friends.pop();
// const poppedFriend=friends.pop();
// console.log(friends);
// console.log(poppedFriend);


// friends.shift();
// friends.shift();
// console.log(friends
//   )


//   // index.of = is use in identifying the place number of the elements..
//   // inclueds= is use in verifying that element is present in code or not

//   console.log(friends.indexOf('Bruce'));
//   console.log(friends.indexOf('Peter'));

  
//   console.log(friends.includes('Bruce'));
//   console.log(friends.includes('Peter'));
// console.log(friends.includes('Thanos'));

// ................Assignments for intro of Array>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const population= [1222, 4352, 6453, 3235];
// console.log(population);

// if(population >=4){
//   console.log('We have only population of 4 countries together')
// } else {
//   console.log('we dont have data')
// }

// const percentageOfWorld01= 1222/7900*100 
// const percentageOfWorld02= 4352/7900*100 
// const percentageOfWorld03= 6453/7900*100 
// const percentageOfWorld04= 3235/7900*100 
// console.log(percentageOfWorld01,percentageOfWorld02,percentageOfWorld03,percentageOfWorld04);

// ................ASSIGNMENTS for methods of array....................

const neighbours = ['China', 'SriLanka', 'Bangladesh'];
neighbours.push('Utopia');
neighbours.pop('Utopia');

console.log(neighbours);

if (!neighbours.includes('Germany')){
  console.log('Probably is not a central European country :D')  
} 

console.log(neighbours.indexOf('SriLanka'));
console.log(neighbours.indexOf('Bangladesh'));

neighbours[neighbours.indexOf('China')] = 'Republic of Sweden';
console.log(neighbours);

















































































































































































