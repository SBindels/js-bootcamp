//if statments en logical operators && || (!)
const password = 'p@ssword1234';

if (password.length >= 12 && password.includes('@')) {
  console.log("that password is mighty strong");
} else if (password.length >= 8 || password.includes('@')) {
  console.log("that password is strong enough");
} else {
  console.log("that password is not strong enough");
}


//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (var i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue;
  }

  console.log('your score: ', scores[i]);

  if (scores[i] === 100) {
    console.log('congrats, you got the top score!');
    break;

  }

}


//switch statements

const grade = 'D';

switch (grade) {
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got an B!');
    break;
  case 'C':
    console.log('you got an C!');
    break;
  case 'D':
    console.log('you got an D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');

}

//function declaration
function greet() {
  console.log('hello there');

}

greet();

//function expression
//function inside an variable
const speak = function(name, time) { //arguments & parameters
  console.log(`good ${time} ${name}`);

};

// regular function
const calcArea = function(radius) {
  let area = 3.14 * radius ** 2;
  return area;

}

//arrow function
// const calcArea = (radius) => {
//   let area = 3.14 * radius**2;
//   return area;
// };


const area = calcArea(5);
console.log('area is:', area);

// _______________________________________________________________________________

const name = 'shaun'

// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);
