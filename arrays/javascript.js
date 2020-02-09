//CARDIO DAY 1

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johanne",
    last: "Keppler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolous",
    last: "Corpenicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

//Array.prototype.filter()
//1. filter the list of inventors for those who were born in the year 1500's
const fifteen = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1600) {
    return true;
  }
});

console.table(fifteen);

//Array.prototype.map()
//2. Give us an array of the inventory first and last names

const fullNames = inventors.map(
  inventor => inventor.first + " " + inventor.last
);
console.log(fullNames);

//Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(ordered);

//Array.prototype.reduce();
//4. How many years did all the inventors live?
let totalYears = 0;

for (var i = 0; i < inventors.length; i++) {
  totalYears += inventors[i].year;
}

console.log(totalYears);

//5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if (lastGuy > nextGuy) {
    return -1;
  } else {
    return 1;
  }
});

console.table(oldest);

//6. sort exercise
// sort the people alphabetically by last name
const alpha = people.sort;

//CARDIO DAY 2

const peopleNew = [
  {
    name: "Wes",
    year: 1988
  },
  {
    name: "Kait",
    year: 1986
  },
  {
    name: "Irv",
    year: 1970
  },
  {
    name: "Lux",
    year: 2015
  }
];

const comments = [
  {
    text: "Love this!",
    id: 523423
  },
  {
    text: "Super good",
    id: 823423
  },
  {
    text: "You are the best",
    id: 2039842
  },
  {
    text: "Ramen is my fav food ever",
    id: 123523
  },
  {
    text: "Nice Nice Nice!",
    id: 542328
  }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = peopleNew.some(function(person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log({ isAdult });
// Array.prototype.every() // is everyone 19 or older?
const allAdult = peopleNew.every(function(person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log({ allAdult });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(function(comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
