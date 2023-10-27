// using logical operator find whether the the of peron lies between 10 to 20
let a = 21;
if (a>10 && a<20){
    console.log("your age is between 10 to 20")
}else if(a>20){
    console.log("your age is above 20")
}else{
    console.log("your age is below 10")
}

// switch case question 
let c = 20;
let b = 10;
let op = "-";
switch(op){
    case '+' : console.log(c+b);
    break
    case '-' : console.log(c-b);
    break
    case '/' : console.log(c/b);
    break
    case '*' : console.log(c*b);
    break
}

let d = 6;
if (d%2 == 0 && d%3 == 0){
    console.log("number is divided by both")
}else if (d%3 == 0){
    console.log("number is divided by 3")
}else if (d%2 == 0){
    console.log("number is divided by 2")
}

// ternary operator
let e = 2;
console.log(e>18 ? 'you can drive' : 'you can not drive')