// prompt is used in browser for asking a question 
//prompt gives always string value
// let a = prompt("enter you age");
// console.log(a == 5);
// and alert is used for give some alert related to our answer

// how to convert string to Number
let b = "15";
console.log(typeof b);
b = Number.parseInt(b)
console.log(typeof b);
if(b==15){
    alert("this is true")
}

// if statement 
let d = 10;
if (d>20){
    console.log("true")
}else{
    console.log("false");
// }

// if else if
let a = prompt("enter your age");
if (a<18){
    // console.log("you are not eligible for driving")
    alert("you are not eligible for driving")
}else if(a>18 && a<25){
    // console.log("you are recently learned to dive")
    alert("you are recently learned to dive")
}else if (a>25){
    // console.log("you are now pro driver")
    alert("you are now pro driver")
}

// ternary operator
let a = 30;
a<20? "yes" : "no";
console.log(a>20 ? "chetan" : "notchetan")

// switch case in javascript
let num1 = prompt("enter first number");
num1 = Number.parseInt(num1)
let num2 = prompt("enter second number");
num2 = Number.parseInt(num2)
let opr = prompt("enter the operator") 

switch(opr){
    case '+' : alert(num1+num2);
    break;
    case '-' : alert(num1-num2);
    break;
    case '*' : alert(num1*num2);
    break;
    case '/' : alert(num1/num2);
    break;
}
