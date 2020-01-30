const fs=require("fs");
var a=0;
fs.readFile("./file.txt",'utf8',(err,data)=>{
    if(err){
        console.error("err")
    }
    const sum=data.split('\n').reduce((acc,val)=>acc+ +val,0)
    fs.writeFile('./output.txt',sum,err=>{
        console.log("done")
    })
})