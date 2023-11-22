// create a game where you start with any random game number ask the user to keep guessing 
// the game number until the user enters the correct value

let number = 15;
let usernum = prompt("enter your number");
// console.log(typeof(usernum))
// usernum = parseInt(usernum); to convert string into number 
// console.log(typeof(usernum))

while(usernum != number){
    usernum = prompt("please enter correct number")
}
alert("you won the game")