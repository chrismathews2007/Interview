//! Currying
//* fun(a,b) to fun(a)(b)

//? 1 sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(sum(2)(6)(1))

//? 2   evaluate("sum")(2)(4), 
//?     evaluate("multiply")(2)(4), 
//?     evaluate("subtract")(2)(4), 
//?     evaluate("devide")(2)(4)

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === 'sum') return a + b;
            else if(operation === 'multiply') return a *b;
            else if(operation === 'subtract') return a - b;
            else if(operation === 'devide') return a / b;
            else return 'Invalid operation'
        }
    }
}

const summ = evaluate("sum")
const multiply = evaluate("multiply")
const subtract = evaluate("subtract")
const devide = evaluate("devide")
console.log(multiply(2)(64))

// ? Infinity currying infinity(2)(3)(4) ...(5)...

function infinity(a){
    return function(b){
        if(b !== undefined) return infinity(a * b);
        return a // * if not b available
    }
}
console.log(infinity(2)(3)(4)(2)(3)(4)());

// ? Currying vs Partial application

function partial(a){
    return function(b,c){
        return a+b+c
    }
}

console.log(partial(10)(5,6))