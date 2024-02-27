// function reverseString(str){
//     reverse = ''

//     for(i = str.length -1; i >= 0; i--){
//         reverse += str[i]
//     }

//     return reverse
// }

export function reverseString(str){
    return str.split("").reverse().join("")
}
