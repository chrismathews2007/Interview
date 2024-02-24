// Array.filter((num, i, arr) => {})

Array.prototype.myFilter = function(cb){
    let temp = [];

    for (let i = 0; i < this.length; i++){
        if(cb([i], i, this)) {
            temp.push(this[i])
        }
    }

    return temp
}

const arr = [1,2,3,4,5,6]

const moreThanTwo = arr.myFilter((num) => {
    return num > 2
})

console.log(moreThanTwo) // * [ 3, 4, 5, 6 ]