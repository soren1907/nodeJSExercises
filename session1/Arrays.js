// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push("one");
friends.push("two");
friends.push("three");
//lavet forkert tilføjer strings og ikke objekter

const jamie = {name: "Jamie"};
friends.push(jamie);
//^gør det eks. på denne måde og tilføj så 2 mere

friends.push({name: "Thea"});
//^eller sådan. adskil objekter med {} og komma

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const position = significantMathNumbers.indexOf(1729);
//console.log fortæller nummeret er på index 3

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger","soda","pizza");
console.log(diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop(); //fjerner sidste element i et array


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = [...diet];
//^det jeg afleverede. Spread operator
//fjerner elementerne og sætter dem i et nyt array.. Så ikke en reference

const dinnerTrayTwo = diet.splice();
// ^ en anden måde fra undervisning.. 


// dinnerTray = diet - Laver endnu en reference til samme array og er derfor ikke en kopi

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h",];

// log every second char in the array starting from b

console.log('Exercise 7:')

for (let i = 1; i < lettersExpanded.length; i += 2){
    console.log(lettersExpanded[i]);
}

//mellemrum efter for gør det mere "readable" - fra undervisning


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

numbers.forEach(function(number){

    if (number > 6 || number < 0){
        console.log(number);
    } else{
        discardedNumbers.push(number);
    }

});

// --------------------------------------
