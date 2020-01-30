var kk=10;
function call()
{
    kk=45;
    console.log(kk)
    if (true)
    {
        kk=88;
        console.log(kk);
    }
    console.log(kk);
}
call();
console.log(kk);