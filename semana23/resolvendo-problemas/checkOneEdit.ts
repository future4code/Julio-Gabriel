const checkOneEdit = (stringA: string, stringB: string): boolean  => {
    if (Math.abs(stringB.length - stringA.length) > 1) {
        return false
    }

    if (stringA.length > stringB.length) {
        return stringA.includes(stringB)
    }

    if (stringB.length > stringA.length) {
        return stringB.includes(stringA)
    }

    let charsDiffCount: number = 0

    for (let char: number = 0; char < stringA.length; char++) {
        if (stringA[char] !== stringB[char]) {
            charsDiffCount++
        }
    }

    return charsDiffCount === 1
}

console.log(checkOneEdit("banan", "banana"))
console.log(checkOneEdit("bananak", "banana"))
console.log(checkOneEdit("panana", "banana"))
console.log(checkOneEdit("bananaaa", "banana"))