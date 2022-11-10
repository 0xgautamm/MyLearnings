function fruitMaker(){
   console.log(`We are beginners for code`)
}
// doiing below thing is called invoking/calling/running the function

fruitMaker();
fruitMaker();
fruitMaker();
fruitMaker();

function fruitProcessor(apple, banana){
  console.log(apple,banana);
  const juice=`We are beginners so we have ${apple} apples and bunch of ${banana} bananas`
return juice 
}

const appleJuice=fruitProcessor(3,7);
console.log(appleJuice);

const bananaJuice=fruitProcessor(6,8);
console.log(bananaJuice);

const num = Number(90);
console.log(num);

// .............assignments function........................

function describeCountry (country, population, capitalCity){
  console.log(country,population, capitalCity);
  const data= `${country} has ${population} million of people and its capital city is ${capitalCity}`
  return data
}

const dataIndia=describeCountry('India', 4, 'Delhi');
console.log(dataIndia);

const dataAmerica= describeCountry('America', 7, 'Washington DC')
console.log(dataAmerica);

const dataFinland=describeCountry('Finland', 5, 'Helsinki')
console.log( dataFinland);


