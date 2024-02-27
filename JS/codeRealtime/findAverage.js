export function findAverage(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]   
    }

    const average = sum / arr.length

    return console.log("findAverage: ", average)
}