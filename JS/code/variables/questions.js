function a(){
    console.log("a(): ", a)
    var a = 10
}

a()   // * undefined

function abc(){
    console.log("abc(): ", a,b,c)
    const c = 20;
    let b = 25;
    var a = 10
}
//! Temporal Dead Zone
abc()  // * Cannot access 'b' before initialization
        // * Cannot access 'c' before initialization