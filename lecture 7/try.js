const KK=function(year,lengt)
{
    this.year=year;
    this.lengt=lengt;
}



KK.prototype.m=function()
{
    console.log=(this.lengt.length);
}



const b1= new KK(1999,["2.32"]);
console.log(b1.year);
console.log(b1.m());