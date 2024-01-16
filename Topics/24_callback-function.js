//callback
function getdata(id,newid){

    setTimeout(()=>{
        console.log("ID is : ", id);
        if (newid){
            newid();
        }
    },3000);
}
getdata(3,()=>{
    getdata(4,()=>{
        getdata(5)
    });
});

//callback hell
getdata(3,()=>{
    getdata(4,()=>{
        getdata(5,()=>{
            getdata(6)
        });
    });
});

//to solve the problem of callback hell we have promises