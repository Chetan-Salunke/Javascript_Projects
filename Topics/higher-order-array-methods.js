// Map() - creating a new array bu performaing some operation on each element of array its take (value,array,index)
let arr = [1,2,3,4,5,6]
let a = arr.map((value) => {
    return value +1;
})
console.log(a)
console.log(arr)
console.log(a)


// Filter - filter an array with value that passes a test creat a new array its takes (value,array,index)
let arr2 = [1,2,3,4,5,6,7,8,9]
let b = arr2.filter((ans) => {
    return ans<4;
})
console.log(b);


// reduce - reduce an array to asingle value
let arr3 = [1,2,3,4,5]
let newarr = arr3.reduce((h1,h2) =>{
    return h1+h2;
})
console.log(newarr)