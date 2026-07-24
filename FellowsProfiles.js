// A list of fellows (array)
const fellows = [
  {
    name: "EWANG",
    role: "Fellow of the code titans  ",
    points: 60
  },
  {
    name: "DON",
    role: "Mentorsip lead of the code titans ",
    points: 80
  },
  {
    name: "FAITH",
    role: "Fellow of the code titans",
    points: 70
  }
];

// Go through each fellow and print their information
for (let fellow of fellows) {
  console.log(
    fellow.name + " is a " + fellow.role + " and has " + fellow.points + " points."
  );
}
