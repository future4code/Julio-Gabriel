export const sumNegativeNumbers = (orderedArray: number[][]): number => {
  let resultNegativeNumber: number = 0

  orderedArray.forEach((numberArray: number[]) => {
    numberArray.forEach((value: number) => {
      if(value < 0) resultNegativeNumber += 1
    })
  })

  return resultNegativeNumber
}