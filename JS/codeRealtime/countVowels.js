

//countVowels

function countVowels(str){
    const vowels = ['a','e','i','o','u']
    let count = 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return console.log(`${count} Vowels in ${str}` )
}

countVowels("Madhu Sudhana RAo")


