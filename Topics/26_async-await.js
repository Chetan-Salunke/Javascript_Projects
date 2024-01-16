//async function
async function print(){
    console.log("hello world")
};

//await is only used inside the async function imp*

function getdata(id){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("User Id :", id)
        resolve('success');
    },3000);
})
}
// async function data(){
//     await getdata(522);
//     await getdata(533);
//     await getdata(544);
//     await getdata(555);
// }
// console.log(data());


//in above code we have to make a new function to return a answer or data so in that case we used iife
//in iife we dont need to call a new function 

//IIFE=immediately invoked function 
( async function(){
        await getdata(522);
        await getdata(533);
        await getdata(544);
        await getdata(555);
})();
