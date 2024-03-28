
// removeDuplicates

export function removeDuplicates(arr){
   return console.log("removeDuplicates: ", [...new Set(arr)])
}

export function removeDuplicatesLoop(arr){
    let uniqueArray = []

    for(let i = 0; i < arr.length; i++){
        if(uniqueArray.indexOf(arr[i]) === -1){
            uniqueArray.push(arr[i])
        }
    }

    return console.log("removeDuplicatesLoop: ", uniqueArray)
}




