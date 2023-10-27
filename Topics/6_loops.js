// for loop      -->like a c++ for (init, condition, itration)
// for in loop   --> for (key in object) if we want to access object keys also use with arry
// for of loop   --> for () we want itrable object
// while loop    --> condition thena itration
// do-while loop --> its always run once if the condition is true or false

// for loop
for(let a = 0; a<10; a++){
    console.log(a);
}

// sum of first 10 natural numbers  
let b = 10;
let sum = 0;
for (let a = 1; a<=b; a++){
    sum += a;
}
// console.log(sum)

// for in loop
let obj = {
    harry : 53,
    chetan : 88,
    harish : 50,
    pratham : 55,
}
for (let a in obj){
    console.log("marks of "+ a + " are " +obj[a])
}

// while loop
let i = 0;
let n = 6;
while(i<n){
    console.log("hello world")
    i++;
}

// do-while loop
let a = 10;
let c = 15;
do{
    console.log("hello world//");
}
while(a>c)