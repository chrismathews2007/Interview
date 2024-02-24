
// Array.map((num, i, arr) => {})

Array.prototype.customMap = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this)) // * this resembles array[]
    }

    return temp
}

const arr = [1,2,3,4,5,6]

const multiplyThree = arr.customMap((item) => {
    return item += 3
})

console.log(multiplyThree)