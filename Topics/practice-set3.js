// print the marks using for loop, in loop
let obj = {
    harry : 50,
    chetan : 85,
    harish : 60,
    pratham : 40,
    aniket : 66,
}
//problem no 1
// for loop
//object.key give you all keys in form of arrays and .length is a length of array
for (let b = 0; b<Object.keys(obj).length; b++){
    console.log(Object.keys(obj)[2]+obj[Object.keys(obj)[2]])
}

//problem no 2
// for in loop
for (let a in obj){
    console.log(a,obj[a]);
}

//problem no 3
//untile user enter correct number
let cn = 45;
let i;
while(i != cn){
    i = prompt("enter the number");
}
alert("entered successfully")

//find the mean of five numbers
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}

console.log(mean(5,10,8,9,20))
