

//countDupliates

const array = [1,2,2,3,4,2,5,4,6,7]

const occurances = array.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc
}, {})

console.log(occurances)

const result = Object.fromEntries(
Object.entries(occurances).filter(([key, val]) => val > 1)
)

console.log(result)