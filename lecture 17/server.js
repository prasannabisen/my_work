const express=require('express')
const session=require('express-session')

const app=express()

app.use(session({
    secret:"a very long unguessed string",
    resave:false,
    saveUninitialized: true
}))


app.get('/',(req,res)=>{
    if(!req.session.visit){
        req.session.visit=1;
    }
    else{
        req.session.visit++
        res.send("welcome back")
    }
    req.session.save()


    console.log(req.session)
    res.send("hello")
})

app.listen(3000)