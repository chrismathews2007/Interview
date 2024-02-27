export function findLargetNumber(arr){

    let largest = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }

    return console.log(`${largest} is the largest number`)

}