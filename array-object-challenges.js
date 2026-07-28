// Challenge 1: Find duplicates in an array
// Approach: Check if a number appears more than once and save it.

let numbers = [1, 2, 3, 2, 4, 3];

let duplicates = [];

numbers.forEach(number => {
  if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
    if (!duplicates.includes(number)) {
      duplicates.push(number);
    }
  }
});

console.log(duplicates);


// Challenge 2: Count fellows with scores above 50
// Approach: Loop through fellows and count those with points greater than 50.

let fellows = [
  { name: "John", points: 60 },
  { name: "Mary", points: 40 },
  { name: "Paul", points: 80 }
];

let count = 0;

fellows.forEach(fellow => {
  if (fellow.points > 50) {
    count++;
  }
});

console.log("Fellows above 50:", count);


// Challenge 3: Group names by category
// Approach: Put each item into a group based on its category.

let items = [
  { name: "Laptop", category: "Tech" },
  { name: "Phone", category: "Tech" },
  { name: "Chair", category: "Home" }
];

let groups = {};

items.forEach(item => {
  if (!groups[item.category]) {
    groups[item.category] = [];
  }

  groups[item.category].push(item.name);
});

console.log(groups);
