
// reverseWords

export function reverseWords(str){
    const words = str.split(" ")

    let reverseWords = words.reverse()

    let reversedSenetence = reverseWords.join(' ')

    return console.log("reverseWords: ", reversedSenetence)
}

