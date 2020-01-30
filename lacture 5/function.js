function printvalue(i,ondone){
    for(j=0;j<i;j++)
    {
        console.log(j);
    }
    return ondone();
}
function complete()
{
    console.log("done")
}
var o=printvalue(5,complete);
console.log(o);
/*function are first class citizen
vecause we can take or pass function*/