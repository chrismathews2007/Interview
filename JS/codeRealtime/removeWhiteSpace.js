export function removeWhiteSpace(str){
    const result = str.replace(/\s/g, "")
    // const splitResult = result.split(",").join(", ")
    return console.log("removeWhiteSpace: ", result)
}