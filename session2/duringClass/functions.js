
//Dette er noter og kode fra undervisningen.. 

// function which returns a greeting

//hoisting
const returnValue = myFirstFunction();
console.log(returnValue);

//function declartion
function myFirstFunction () {
    return "hello there";
}

//variabel - skal have ; til sidst
//anonymous function (function har ikke et navn men variable har) 
//can ikke bruge hoisting her. linje 19 skal være under for at det virker, modsat før
const myVariableFunction = function () {
    console.log("test");
};

myVariableFunction();


const myArrowFunction = () => {
    console.log("arrow function");
}

// -------------- Callback functions -------------------------

function sayHiLater(anyFunctionRef) {
    //simulate som code running
    anyFunctionRef();
}

//call sayHiLater and pass a callback that says "Hi"


const sayHi = () => {
    console.log("Hi");
}

const sayHello = () => {
    console.log("Hello");
}

sayHiLater(sayHello);

// --------------- genericInteraction -----------------------

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "poke " + name;
}

interact(poke, "søren");

// call interact and in a single line make sure that the folliwing is achieved
// example "lick " + name

interact((name) => "lick " + name, "søren"); // behøver ikke { }

// interact((name) => {return "lick " + name}, "søren");