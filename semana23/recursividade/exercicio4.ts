const arrayNumbers = [0, 1, 2, 3, 4, 5, 15]

const printArray = (arrayNumbers: number[], i: number = arrayNumbers.length - 1): void => {
    if (i >= 0) {
        printArray(arrayNumbers, i - 1)
        console.log(`Element in position ${i} =`,arrayNumbers[i])
    }
}
  
printArray(arrayNumbers)