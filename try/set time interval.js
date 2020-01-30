var runcount=0;
var interval;
interval=setInterval(hello,1000);
function hello()
{
    runcount++;
    console.log("hello world")
    if(runcount>5)
    {
        clearInterval(interval);
    }
}
setTimeout(hello,1000);
setInterval(function()
    {
        console.log("montu")
    },1000)