const express=require("express")

const app=express()

app.use((req,res,next)=>{
    console.log(req.query)
    next()
})

app.use('/user',(req,res,next)=>{
    console.log("user is called")
})
/*app.get('/user/:id',(req,res)=>{
    res.send("you call" + req.params.id)
})*/


app.listen(3000,function(){
    console.log("3000 is running")
})