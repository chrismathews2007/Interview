
//isSorted

export function isSorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i -1] > arr[i]){
            return false
        }
    }
    return true
}