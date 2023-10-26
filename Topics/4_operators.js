    // arithmetic operators --> +,-,*,/,%,**,++,--
    // assignment operators --> =,+=,-=,*=,/=,%=,**=
    // comparision operators --> ==,!=,===,!==,<,>,<=,>=,? 
    // logical operators --> &&,||!
    // (operand)7 +(operator) 3 = 10(result)

    // arithmetic operators
    let a = 10;
    let b = 3;
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a**b); //exponential
    console.log(a%b); //module operator its give reminder
    console.log(a++);
    console.log(a--);

    // assignment operators
    let c = 10;
    let d = 2;
    console.log(a+=3) //13
    console.log(a-=3) // 13
    console.log(a*=3) //30

    // comparision operators
    let comp1= 20;
    let comp2 = "20";
    console.log(typeof comp1);
    console.log(typeof comp2);
    console.log(comp1!==comp2);
    console.log(comp1!=comp2)
    console.log(comp1==comp2);
    console.log(comp1===comp2);

    // logical operators 
    let x = 5;
    let y = 6;
    // for and operator both the condition has to be true
    console.log(x<y && x==5)
    // for or operator only one condition has to be true
    console.log(x<y || x==6)