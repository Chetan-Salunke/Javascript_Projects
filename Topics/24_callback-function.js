// function getdata(id,newid){
//     setTimeout(()=>{
//       console.log("done1",id);
//       if (newid){
//         newid();
//       }
//     },3000);
//   }
  
//   getdata(3,()=>{
//     getdata(4);
//   });

function getdata(id,newid){

    setTimeout(()=>{
        console.log("ID is : ", id);
        if (newid){
            newid();
        }
    },3000);
}

getdata(3,()=>{
    getdata(4);
});