


const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const itemsPerPage = 10;
const pageNumber = 2;
const startIndex = (pageNumber - 1 ) * itemsPerPage;

const paginatedData = array.slice(startIndex, startIndex + itemsPerPage)

console.log(paginatedData)





