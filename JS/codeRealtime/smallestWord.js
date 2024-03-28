
// smallestWord

export function smallestWord(sentence) {
    const words = sentence.split(" ");
    //! Initialize smallest with the first word from the sentence
    let smallest = words[0] || ""; //! Handle empty sentence case

    for (let word of words) {
        if (word.length < smallest.length) {
            smallest = word;
        }
    }

    return smallest;
}


