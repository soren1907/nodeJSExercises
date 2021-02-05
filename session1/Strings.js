// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const addedNumbers3 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(addedNumbers3);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const addedNumbers4 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

console.log(addedNumbers4.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three;
const avg = sum/3;
console.log(avg.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);
console.log(letter);



// --------------------------------------
// Exercise 7 - Replace.

const fact = "You are learning javascript!";

const replace = fact.replace("javascript!", "Javascript!");
console.log(replace);


// capitalize the J in Javascript


// --------------------------------------



