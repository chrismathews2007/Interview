//! Array.map is creates new array
const arr = [1,2,3,4,5,6]

const multiplyThree = arr.map((num, i, arr) => {
    return num += 3 + i
})

console.log(multiplyThree)