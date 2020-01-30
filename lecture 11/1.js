var express=require(express)

var app=express()

app.use((req,res,next)=>{
    console.log()
})

app.listen(3000,function(){
    console.log("next 3000 is called")
})