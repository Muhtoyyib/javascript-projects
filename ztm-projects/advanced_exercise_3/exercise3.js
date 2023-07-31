// change everything below to the newer Javascript!

// let + const
{
    let a = 'test';
    let b = true;
    const c = 789;
    a = 'test2';
}



// Destructuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;

console.log(firstName, lastName, age, eyeColor);


// Object properties
let a = 'test';
let b = true;
let c = 789;

var okObj = {
  a, b, c
};

console.log(okObj);


// Template strings
let city = "Ibadan";
let message =`Hello ${firstName} have I met you before? I think we met in ${city} last summer no?};`
console.log(message);


// default arguments
// default age to 10;
function isValidAge(age = 30) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

let mySymbol = Symbol("This is my first symbol");

// Arrow functions

let whereAmI = (username, location) => {
    (username && location) ? console.log("I am not lost"): console.log("I am totally lost!");
}

whereAmI('Muh.Toyyib', "Ilorin");