const p=(document.getElementById("para"));
/*for(i=0;i<10;i++)
{ 
    p.innerHTML +=i+"<br>";
}*/
//DOM api
const a=document.createElement("a");
a.setAttribute("href","http://google.com");
a.innerHTML ="kk";
p.appendChild(a);