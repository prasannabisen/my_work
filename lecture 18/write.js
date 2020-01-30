const {db,Users }=require('./db')
const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const nam="montu"

Users.create({
    name:nam
}).then(()=>{
    console.log("done")
})


//to give start 
//"start":node server.js
//to start process env PORT