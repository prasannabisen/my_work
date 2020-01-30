/*templeting engine HBS*/
var express=require('express')

var app=express()
let count=0
let view=0
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    count++
    view++
    res.render('inde',{
        count,
        view
    })
})

app.use("/",express.static(__dirname+'/public'))

app.listen(3000)