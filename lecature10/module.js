const fs =require('fs');

//call back
fs.writeFile('./file.text',"hello World",(err,result)=>{
    if(err){
        console.error(err);
    }

    console.log("done");
})