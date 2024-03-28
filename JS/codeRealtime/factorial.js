function factorialNum(number){
    if(number === 0){
        return 1
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++){
        console.log("checkingL ", i)
        factorial *= i
    }

    return console.log(`${number} Factorial is: ${factorial}`)
}

factorialNum(5)

// with recursion method

const factorial = function fac(num){
    if(num === 0){
      return 1
    }
    
    return num * fac(num - 1)
  }
  
console.log(factorial(5))