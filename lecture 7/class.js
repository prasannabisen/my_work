//object link to other object
//this is empty oblect

const Band=function(name,song)
{
    this.name=name;
    this.song=song;
    
   /* this.getNumberOfSong=function()
    {
        return this.song.length;
    }
    return this;*/
}

Band.prototype.kk=function()
{
    console.log(this.song.lenght);
}

const b = band("coldplay",["paradis"]);
const n = band("queens",["we are the chammpion"]);

console.log(b.name)
console.log(b.song)

console.log(n.name)
console.log(n.song)