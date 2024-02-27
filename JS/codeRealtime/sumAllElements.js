export function sumAllElements(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return console.log('sumAllElements: ', sum);
}

export function sumAllElementsReduce(arr){
    const result  = arr.reduce((prev, cur) => {
        return prev += cur
    })
    return console.log("sumAllElementsReduce: ", result)
}