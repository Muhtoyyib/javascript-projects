// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newForEcahArray = [];
const forEachArray = array.forEach(username => {
  newForEcahArray.push(`${username.username}!`);
});

console.log(newForEcahArray);


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(username => `${username.username}?`);

console.log(mapArray);




//Filter the array to only include users who are on team: red
const filteredArray = array.filter(users => users.team === 'red');

console.log(filteredArray);



//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, users) => acc + users.score, 0);

console.log(totalScore);



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  let returnedArr = `${i} ${num * 2}`;

  return returnedArr;
})

console.log(newArray); 

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newList = array.map(users => {
  return {users, items: users.items + '!'};
})

console.log(newList);