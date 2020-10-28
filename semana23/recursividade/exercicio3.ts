const calculateSumToIterative = (numb: number): number => {
    let sum = 0

    for (let i = 0; i <= numb; i++) {
        sum += i
    }

    return sum
}
      
console.log(calculateSumToIterative(5))
console.log(calculateSumToIterative(20))
console.log(calculateSumToIterative(25))