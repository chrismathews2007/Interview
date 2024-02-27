export function areAnagrams(str1, str2){
    const string1 = str1.split("").sort().join("")
    const string2 = str2.split("").sort().join("")

    return console.log("areAnagrams", string1 == string2)
}
