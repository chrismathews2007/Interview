export function findSecondLargetNumber(arr) {
	const sortArray = arr.sort((a, b) => b - a);
	const secondLargetNumber = sortArray[1];
	return console.log('findSecondLargetNumber: ', secondLargetNumber);
}
