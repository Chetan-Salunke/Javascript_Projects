// question 1
let arr = [1,2,3,4,5,6]
let a = prompt("enter the value");
a = Number.parseInt(a);
arr.push(a)
console.log(arr)

// question 2
let arr2 = [1,2,3,4,5]
let a2;
while(a2 != 0){
    a2 = prompt("enter the value");
    a2 = Number.parseInt(a2);
    arr2.push(a2)    
}  
console.log(arr)

// question 3
let arr3 = [10,20,30,40,7,9]

let ans3 = arr3.filter((x) =>{
    return x%10==0
})
console.log(ans3)

// question 4
let arr4 = [2,3,4,5,6,7,8]

let ans4 = arr4.map((x)=>{
    return x*x;
})
console.log(ans4)