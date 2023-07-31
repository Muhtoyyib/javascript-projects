// Exercise: Level 1

// 1
const myArray = [];

// 2 
const courses = ['CSC112', 'ICS106', 'MAT114', 'MAT112', 'PHY152', 'TCS112', 'GNS112', 'STA124'];

// 3
console.log(courses.length);

// 4
console.log(courses[0], courses[(courses.length/2 - 1)], courses[(courses.length - 1)]);

// 5
const mixedDataTypes = ['Akande', 5, {name: 'Toyyib'}, true, null, undefined];

// 6
const itCompanies  = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[1], itCompanies[[(itCompanies.length - 4)]], itCompanies[(itCompanies.length - 1)]);

// 10
console.log(itCompanies.toString());

// 11
console.log(itCompanies.toString().toUpperCase());

// 12
console.log(`${itCompanies.join(',')} are big companies`);

// 13
itCompanies.includes('Apple') ? console.log(itCompanies[3]) : console.log('Company not found');

// 14
{console.log(itCompanies.splice(0,2));}

// 15
itCompanies.sort()

// 16
itCompanies.reverse();
console.log(itCompanies);

// 17
{console.log(itCompanies.slice(0,3));}

// 18
{console.log(itCompanies.slice(4,7));}

// 19
{console.log(itCompanies.slice(3));}

// 20
itCompanies.shift();
console.log(itCompanies);

// 21
console.log(itCompanies.slice(3));

// 22
itCompanies.pop()
console.log(itCompanies);

// Exercie: Level 2

// 1

// 2
let text = 'I love teaching and empowering people I teach HTML CSS JS React Python.'
let words = text.split(' ');
console.log(words.length);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4,1);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
// let myString = ages.toString();
// console.log(myString);
let min = ages[0];
let max = ages[ages.length - 1];
console.log(`min: ${min}, max: ${max}`);

let median = (ages[4] + ages[5])/ 2 ;
console.log(median);
let mean = (age[0] + age[1] + age[2] + age[3] + age[4] + age[5] + age[6] + age[7] + age[8] + age[9]) / age.length;
let range = max - min;
(Math.abs(min - average) === Math.abs(max - average));
