/*object is refrence litral*/
const obj={
    name:"prasanna",
    getAge: function()
    {
        const fn = function(){
            console.log(this);
        } //this is always refer to its object
        fn()
        //browser mai global==window
        //node mai global ==global
    }
}
obj.getAge();