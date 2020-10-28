// 1) a)

const printNumbersAscending = (numb: number): void => {
    if (numb >= 0) {
        printNumbersAscending(numb - 1)
        console.log(numb)
    }
}

printNumbersAscending(3)

// 1) b)

const printNumbersDescending = (numb: number): void => {
    if (numb >= 0) {
        console.log(numb)
        printNumbersDescending(numb - 1)
    }
}

printNumbersDescending(3)