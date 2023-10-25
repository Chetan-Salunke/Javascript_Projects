// In let we can update (a) but cant redeclare it 
let a = 15;
console.log(a);
a = "harry";
console.log(a);
//it is also a block scope
let d = 10;
{
    let d = 20;
    console.log(d);
}
console.log(d);


//In var both we can redeclare and update it
var b = 10;
console.log(b);
var b = 20;
console.log(b);


//In const once we Declare after that we cant not update or redclare it
const c = 10;
console.log(c);