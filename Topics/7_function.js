//function with arrgument 
// average of two number
//math.round for round of the value
function avgofnumber (x,y){
    return Math.round((x+y)/2)
}
console.log("the average of two number is : " , avgofnumber(2,3))

// arrow function in javascript
const sum = (a,b)=>{
    return a+b;
}
console.log("the sum of a and b is : ",sum(5,5));

//function without arrgument
const hello = ()=>{
    console.log("hello world")
}
hello();

//difference between norma function and arrow function
//regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.

