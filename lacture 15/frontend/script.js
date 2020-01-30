console.log("running")

let socket=io()

socket.on('connected',()=>{
    console.log(socket.id)
})

$(function(){
    let input=$("#inputChat")
    let sendchat=$("#button1")
    let msglist=$("#msgList")

    sendchat.click(()=>{
        socket.emit('send_chat',{
            message:input.val()
        })
    })

    socket.on('recived_chat',function(data){
        msglist.append(`<li>${data.message}</li>`)
    })
    socket.emit("connection is established")
})