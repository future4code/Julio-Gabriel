const calculateSumTo = (numb: number, sum: number = 0): number => {
    if (numb === 0) {
        return sum
    } else {
        return calculateSumTo(numb - 1, sum + numb)
    }
}

console.log(calculateSumTo(5))
console.log(calculateSumTo(20))
console.log(calculateSumTo(25))