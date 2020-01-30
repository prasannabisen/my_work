function genratePromise(val,n){
    const f=(resolve)=>{
        setTimeout(()=>{
            resolve(val)
        },n)
    }

    return new Promise(f)
}



gentatePromise("hello",1000).then(v=>console.log(v));
//curring