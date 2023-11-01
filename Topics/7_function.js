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