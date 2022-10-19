// "strict code";

// let hasDriveLicense = true;
// const passTest = true;

// if (passTest) hasDriveLicense = true;
// if (hasDriveLicense) console.log("Anyone can drive vehicale after license :O ");

// .......Functions........

function logger() {
  console.log("We all are the son of God");
}
// calling/running/invoking the function and here 'loggers' are name of function.....
logger();
logger();
logger();

function fruits(apple, bananas) {
  const healthTip = `Fruit juice are very healthy when it contains ${apple} apples and ${bananas} bunch of bananas.`;
  return healthTip;
}
// number at 'fruits' i.e 5,3 ....these numbers are known as arguements
const juice = fruits(5, 3);
console.log(juice);

const juiceStart = fruits(4, 8);
console.log(juiceStart);
