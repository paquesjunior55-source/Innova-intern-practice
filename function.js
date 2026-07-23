//check if a number is even
function checkEven(numbre) {
if (number % 2 === 0) {
return "Even";
} else {
return "Odd";
}
}
console,log(checkEven(4));

//find the biggest of three numbers
function biggestNumber(a,b,c){
  if (a>b && a>c) {
    return a;
  } elseif  (b>a && B>c){
    return b;
  } else {
    return c;
  }
}
console.log(bigestNumber(5,10,3));

//reverse a string 
function reverseWord(Word){
  let results ="";
  for (let i=word.lenght - 1; i>= o;i--){
    results = results + word(i);
  }
  return result;
}
console.log(reverseWord("hello"))
