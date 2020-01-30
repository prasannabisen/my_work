const express=require('express')
const socket=require('socket.io')
const http=require('http')

const app=express()
const server=http.createServer(app)

const io=socket(server)

io.on('connection',(socket)=>{
    console.log('connected',socket.id)

    socket.on("send_chat",(data)=>{
        console.log("data recived",data.message)

        socket.emit("recived_chat",{
            message:data.message
        })
    })
})

app.use('/',express.static(__dirname + '/frontend'))

server.listen(3000,()=>{
    console.log("3000 is running")
})