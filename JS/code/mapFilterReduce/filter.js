//! Array.filter 
// * if condition is true push item to array else doesn't push to array
const arr = [1,2,3,4,5,6]

const moreThanTwo = arr.filter((num) => {
    return num > 2
})

console.log(moreThanTwo) // * [ 3, 4, 5, 6 ]