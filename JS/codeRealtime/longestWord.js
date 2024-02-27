export function longestWord(senetence){
    const words = senetence.split(" ");
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word
        }
    }
    return longest
}

