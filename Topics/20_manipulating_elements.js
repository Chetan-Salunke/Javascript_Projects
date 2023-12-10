// Inner HTML
// let a = prompt("enter your first number")
// a = parseInt(a);
// let b = prompt("enter your second number")
// b = parseInt(b);
// let sum = a+b;
// document.getElementById("container").innerHTML = sum;


//Create Element HTML
let newdiv = document.createElement("div")
newdiv.innerHTML = "<h1>Chetan Salunke</h1>";
document.body.prepend(newdiv)
//in prepend new element add before the first child
//in append new element add after the first child


// outerHTML  - In outer html we can change element and inner html

//textContent – get and set the text content of a node