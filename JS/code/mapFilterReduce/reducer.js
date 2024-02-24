//! Array.reducer sum values
const arr = [1,2,3,4,5,6]

const sum = arr.reduce((callback) => {

}, 0 ) // second parameter is initial value 0

const sumall = arr.reduce((acc, cur, i, arr) => {
    return acc += cur
}, 0)
//? accumulation is previous value

console.log(sumall)