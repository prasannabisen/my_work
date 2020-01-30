const express=require("express")

const app=express()

const task=[]

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('todo',{
        task
    })
})

app.post('/',(req,res)=>{
    task.push(req.body.task)
    res.redirect('/')
})


app.listen(3000,()=>{
    console.log("3000 is strated")
})