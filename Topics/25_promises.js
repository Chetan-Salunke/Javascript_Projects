//promise resolve and reject
// let chetan = new Promise((resolve,reject)=>{
//     let a = 5;
//     if (a == 5){
//         resolve('promise is complet');
//     }
//     else{
//         console.log("promise is Incomplet");
//         reject();
//     }
// })
// console.log(chetan) 


//when promise will fulfiled then promise.then function will run if promise will reject then promise.catch function will run
//.then .catch
// let newid = ()=>{
//     return new Promise((resolve,reject)=>{
//         let a = 10;
//         if (a == 10){
//             console.log("done");
//             resolve("resolve");
//         }else{
//             console.log("error 404");
//             reject("reject");
//         }
//     })
// }
// let ans = newid();
// ans.then(()=>{
//     console.log("then function called");
// })
// ans.catch(()=>{
//     console.log("catch function called");
// })


//promise chain
function userid(id1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User ID : ",id1)
            resolve("problem resolve")
        },3000);
    })
}
// userid(20).then((ans)=>{
//     console.log(ans);
//     userid(30).then((ans)=>{
//         console.log(ans)
//     })
// })
//promise chaining
userid(20)
.then((ans)=>{
    return userid(30);
})
.then((ans)=>{
    return userid(40);
})
.then((ans)=>{
    console.log(ans);
})