//searching the DOM

// 1) get element by id
let cardidcolor = document.getElementById("card1");
cardidcolor.style.backgroundColor="red"

// 2) get element by classname
// const cardclasscolor = document.getElementsByClassName("card2");
// cardclasscolor[0].style.backgroundColor = "pink"

// 3) get query selector all
let cardlen = document.querySelectorAll('.card2');
document.getElementById("ans").innerHTML = cardlen.length

// 4) get element by tagname
// 5) get element by name