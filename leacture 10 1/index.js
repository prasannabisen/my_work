const express = require('express')
const app = express()
const user=[]

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(user)
})
app.post('/',(req,res)=>{
    const user=req.body
    console.log(user)
    user.push(req.body)
    res.sendStatus(200)
})
app.listen(3000)





/*
http method, status code 
node api
express api:- applicetion,resource,router
error handling tp be add in code
*/