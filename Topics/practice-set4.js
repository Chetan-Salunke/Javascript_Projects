// what is the output the following console
let name1 = "chet\"";
console.log(name1.length) // 5 length

//convert to lower case
let name2 = "CHETAN"
console.log(name2.toLowerCase())

//change the char
let name3 = "chetan salunke"
console.log(name3.replace("a","$"))

//include 
let name4 = "chetan"
console.log(name4.includes("chetan")) //its shows that the given char or string is present or not

//start with and end with
let name5 = "chetan salunke"
console.log(name5.startsWith("chetan")) //check the string start with 
console.log(name5.endsWith("salunke")) //check the string end with 

//extract the amount out of string
let name6 = "please give me 1000"
let amount = name6.slice("please give me".length)
console.log(amount)