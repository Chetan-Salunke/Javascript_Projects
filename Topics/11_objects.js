let student = {
    name : "chetan",
    roll : 1095,
    age : 21,
    cgpa : 7.2,
    isPass : true
};

console.log(student); // normal print

console.log(student.cgpa) // specific key

//add new things in objects
student.age = student.age+1;
student.name = student.name+"salunke";
console.log(student.age)
console.log(student.name)