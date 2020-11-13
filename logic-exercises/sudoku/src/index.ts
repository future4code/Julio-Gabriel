const array: string[][] =
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

const arrayTwo: string[][] =
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

const arrayThree: string[][] =
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  ]

const checkValidBoard = (array: string[][]): boolean => {
  let validBoard: boolean = true
  let arrayComparasion: number = 0
  let elementOfArrayPercorred: number = 0
  let arrayPercorred: number = 1
  const boxOne: string[] = []
  const boxTwo: string[] = []
  const boxThree: string[] = []
  const boxFour: string[] = []
  const boxFive: string[] = []
  const boxSix: string[] = []
  const boxSeven: string[] = []
  const boxEight: string[] = []
  const boxNine: string[] = []

  if (array.length === 9) {
    //Cada linha deve conter números de 1-9 sem repetição
    array.forEach((sudokuBoard: string[]) => {
      sudokuBoard.forEach((value: string, index: number) => {
        sudokuBoard.forEach((val: string, ind: number) => {
          if (value === val && index !== ind && value !== "." && val !== ".") {
            validBoard = false
          }
        })
      })
    })

    //Cada coluna deve conter números de 1-9 sem repetição
    while (arrayComparasion < 9) {
      if (elementOfArrayPercorred >= 9 && arrayComparasion < 9) {
        elementOfArrayPercorred = 0
      }

      while (elementOfArrayPercorred < 9) {
        if (arrayPercorred >= 9 && elementOfArrayPercorred < 9) {
          arrayPercorred = arrayComparasion + 1
        }
        while (arrayPercorred < 9) {
          if (
            (array[arrayComparasion][elementOfArrayPercorred] === array[arrayPercorred][elementOfArrayPercorred])
            && array[arrayComparasion][elementOfArrayPercorred] !== "."
            && array[arrayPercorred][elementOfArrayPercorred] !== "."
          ) {
            validBoard = false
          }
          arrayPercorred++
        }

        elementOfArrayPercorred++
      }

      arrayComparasion++
    }

    //Cada uma das 9 sub-caixas 3x3 do tabuleiro deve conter números de 1-9 sem repetição
    array.forEach((sudokuBoard: string[], ind: number) => {
      sudokuBoard.forEach((value: string, index: number) => {
        if (ind < 3 && index < 3) {
          boxOne.push(value)
        } else if ((ind < 3 && index < 6) && index >= 3) {
          boxTwo.push(value)
        } else if (ind < 3 && index < 9 && index >= 6) {
          boxThree.push(value)
        } else if ((ind < 6 && ind >= 3) && index < 3) {
          boxFour.push(value)
        } else if (((ind < 6 && ind >= 3) && index < 6) && index >= 3) {
          boxFive.push(value)
        } else if ((ind < 6 && ind >= 3) && index < 9 && index >= 6) {
          boxSix.push(value)
        } else if ((ind < 9 && ind >= 6) && index < 3) {
          boxSeven.push(value)
        } else if (((ind < 9 && ind >= 6) && index < 6) && index >= 3) {
          boxEight.push(value)
        } else if ((ind < 9 && ind >= 6) && index < 9 && index >= 6) {
          boxNine.push(value)
        }
      })
    })

    boxOne.forEach((value: string, index: number) => {
      boxOne.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxTwo.forEach((value: string, index: number) => {
      boxTwo.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxThree.forEach((value: string, index: number) => {
      boxThree.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxFour.forEach((value: string, index: number) => {
      boxFour.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxFive.forEach((value: string, index: number) => {
      boxFive.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxSix.forEach((value: string, index: number) => {
      boxSix.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxSeven.forEach((value: string, index: number) => {
      boxSeven.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxEight.forEach((value: string, index: number) => {
      boxEight.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })

    boxNine.forEach((value: string, index: number) => {
      boxNine.forEach((val: string, ind: number) => {
        if (value === val && index !== ind && value !== "." && val !== ".") {
          validBoard = false
        }
      })
    })
  } else {
    validBoard = false
  }

  return validBoard
}

console.log(checkValidBoard(array))
console.log(checkValidBoard(arrayTwo))
console.log(checkValidBoard(arrayThree))