export function factorialNum(number){
    if(number === 0){
        return 1
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++){
        factorial *= i
    }

    return console.log(`${number} Factorial is: ${factorial}`)
}