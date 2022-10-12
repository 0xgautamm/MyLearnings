// code challenge..1
const markMass = "78kg";
const markHeight = "1.69 meter";

console.log(markMass, markHeight);
let markBMI = 78 / 1.69 ** 2;
console.log(markBMI);

const bmi = "mark's BMI=27";
console.log(bmi);

const johnMass = "92kg";
const johnHeight = "1.95 meter";
console.log(johnMass, johnHeight);

let johnBmi = 92 / 1.95 ** 2;
console.log(johnBmi);

const jBmi = "john's BMI=24";
console.log(jBmi);

const markHeigherBMI = "is Mark have Higher BMI?";
console.log(markHeigherBMI);
console.log(markBMI > johnBmi);

// code challenge ....2
const comparison = "Who has the higher BMIA?";
console.log(comparison);

const averageBMI = 27;

if (averageBMI >= 29) {
  console.log(`Mark has the higher BMI then John`);
} else {
  console.log(`John's BMI is greater then Mark`);
}

// ...code challenge 2

const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
const teamOne = "DOLPHINS";
const teamTwo = "KOALAS";
console.log(scoreDolphin, scoreKoalas);

// console.log(
//   `Team ${teamOne} is the winner with the score of ${scoreDolphin} against the Team ${teamTwo} `
// );

if (scoreDolphin > scoreKoalas) {
  console.log(
    "Team Dolphins won the match by the 1.899 points more than the Team Koalas"
  );
} else if (scoreDolphin < scoreKoalas) {
  console.log(
    "Team Dolphins lose the match with minor points against Koalas in tournament"
  );
}

const scoreBonusDolphin = (97 + 120 + 101) / 3;
const scoreBonusKoalas = (109 + 95 + 120) / 3;
const teamOneD = "DOLPHINS";
const teamTwoK = "KOALAS";
console.log(scoreBonusDolphin, scoreBonusKoalas);

if (scoreBonusDolphin < scoreBonusKoalas) {
  console.log(
    `${teamTwoK} won the match by the  points more than the ${teamOneD}`
  );
} else if (scoreBonusDolphin > scoreBonusKoalas) {
  console.log(
    `${teamOneD} lose the match with minor points against ${teamTwoK} in tournament`
  );
}

const dolphin = (4 + 6 + 20) / 3;
const koalas = (20 + 20 + 10) / 5;

if (dolphin === koalas) {
  console.log(
    "Match has been draw and both team won the match with equall points"
  );
}

// code challenge 4................

// 20/100 = 0.2//tip will be 15%...

const tipValue = 10;

tipValue >= 20
  ? console.log(
      "Stevan set his restrau tip value 20% if value will less than or equal to 0.2"
    )
  : console.log(
      "steven set his restru tip value to 15% if the value crosses to 0.2 "
    );
