// problem statement print 3 user id after every 3 second
function getid(id,newid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Id ; ",id)
            resolve('resolve');
            // if(newid){
            //     newid();
            // }
        },3000);
    })
}

// async-await
(async function(){
    console.log("fetching data 1.....");
    await getid(11);
    console.log("fetching data 2.....");
    await getid(22);
    console.log("fetching data 3.....");
    await getid(33);
})();


// promises
console.log("fetching data 1....")
getid(11)
.then((ans)=>{
    console.log("fetching data 2.....")
    return getid(22)
})
.then((ans)=>{
    console.log("fetching data 3.....")
 return getid(33)
})
.then((ans)=>{
    console.log("Done")
})


//callback-hell = we have to use 2 parameter to get more than one output
getid(1,()=>{
    getid(2,()=>{
        getid(3)
    });
});

