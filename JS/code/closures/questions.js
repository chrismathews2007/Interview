// ! Closures

// * Lexical Scope

function lexicalScope() {
    let outerScope = "Outer Scope";
    function innerScope() {
        let innerScope = "Inner Scope";
        console.log("MAdhu")
    }
    innerScope()
}

lexicalScope()

// * Closure
//* Without anonymous function

const globalScope = "Global Scope"
function closureLexi(init) {
    let outerScope = "Outer Scope";
    function innerScope(num) {
        let innerScopeVar = "Inner Scope"
        function innerScope2() {
            console.log(`${outerScope} ${innerScopeVar} ${num} ${init} ${globalScope}`)
        }
        innerScope2()
    }
    return innerScope
}

// const closure = closureLexi() //! Method 1
// closure()

closureLexi(2)(5) //! Mathod 2

// ?1 Closure Scope Chain

//* Local Scope (Own Scope)
//* Outer Function Scope
//* Global Scope

let e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                console.log(a + b + c + d + e)
            }
        }
    }
}

sum(2)(3)(4)(5)

// ? 1 What will be output with IIFE

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1; //! Shadowing
        console.log("printCount if", count); // 1
    }
    console.log(count);
})()

// ? 2 Write a function

function createBase(num) {
    return function (innerInput) {
        console.log(num + innerInput)
    }
}

var addSix = createBase(6);
addSix(10)
addSix(50)

// ? 3 Time Optimization

function find(index) {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i * i
    }

    console.log(a[index])
}

console.time(6);
find(6)
console.timeEnd("6") //! 3.678ms
console.time(35);
find(35)
console.timeEnd("35") //! 2.124ms

//! Time Optimization
function optimizeFind(index) {
    let a = [];
    return function () {
        for (let i = 0; i < 100000; i++) {
            a[i] = i * i
        }

        console.log(a[index])
    }
}

console.time(6);
optimizeFind(6)
console.timeEnd("6") //! 0.019ms
console.time(35);
optimizeFind(35)
console.timeEnd("35") //! 0.001ms

// ? 4  Block Scope and setTimeout

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // * 3,3,3
    }, 1000)
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // * 0,1,2
    }, 1000)
}

//! Var with closure can get 0,1,2 
for (var i = 0; i < 3; i++) {
   function fun(index){
    setTimeout(() => {
        console.log("closure", index) // * 3,3,3
    }, 1000)
   }
   fun(i)
}

// ? 5 How would you use a closure to create a private counter?

function counter(){
    let _counter = 0;

    function add(increment){
        _counter += increment
    }

    function retrive(){
        console.log("private_Counter: ", _counter)
    }

    return {
        add, retrive
    }
}

const c = counter()

c.add(5)
c.retrive()


// ? 6 Like the video only once

let view;
function likeTheVideo(){
    let called = 0;
    return function(){
        if(called > 0){
            console.log("Already Sunscribed")
        } else{
            view = "Madhu Clannel";
            console.log("Thank you for Subscribing: ", view);
            called++
        }
    }
}

const isSubscribed = likeTheVideo()
isSubscribed()
isSubscribed()
isSubscribed()