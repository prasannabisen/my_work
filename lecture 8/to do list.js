const addbutton=document.getElementById('button');
addbutton.addEventListener('click',function(){
    const addli=document.getElementById('list');
    const input = document.getElementById('inputbox')
    addli.innerHTML+="<li>"+ input.value +"</li>"
})
/*state is min object */


/*const state={{
    title:'havana',
    strike:false
},
{
    title:'pradise',
    strike:false
}}*/