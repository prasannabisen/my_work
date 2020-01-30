const express=require('express')

const app=express()

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

const blogs=[{
    id:1,
    title:"gangtok",
    body:"from 1st june to 8th of jun"
},
{
    id:2,
    title:"dharamshala",
    body:"before paper"
}
]

app.listen(3000,()=>{
    console.log("running")
})