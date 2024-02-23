// ? Functional Scope

// ? Variable Shadowing

function test(){
    let a = 20
    if(true){
        let a = 30; // ! Shadow of a variable - redelcared
        console.log("Shadowing", a*a)
    }
    console.log(a)
}

test()

// ? Illegal Shadowing
// * Shadow let variable by var variable, it is known as illegal variable

// function illegalTest(){
//     let a = 20
//     if(true){
//         // ! Illegal Shadow of a variable - redelcared
//         var a = 30; // * Identifier 'a' has already been declared
//         console.log(a*a)
//     }
//     console.log(a)
// }

// illegalTest()

// ? Declared
// * We can redeclared with var but not with let or const

// ? Declartion without initialization

// ! var a; let a
// * No issues with var/let

// ! const a
// * missing initialization when declared cons

// ? Re-Initialization
// * only with var/let
let are = 20
are = 36

console.log(are)