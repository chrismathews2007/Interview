// Array.reduce((acc, curr, i, arr) => {}, initialvalue)

Array.prototype.myReduce = function(cb, initialvalue){
    let accumlator = initialvalue
    for (let i = 0; i < this.length; i++){
        accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i]
    
    }
    return accumlator
}

const arr = [1,2,3,4,5,6]


const sumall = arr.myReduce((acc, cur, i, arr) => {
    return acc += cur
}, 0) //? accumulation is previous value 0

console.log(sumall)