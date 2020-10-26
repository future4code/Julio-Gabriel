const stringCompression = (input: string): string => {
    const substrings: string[] = []
    let lastChar: string = input[0]
    let charCount: number = 0
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount)
        lastChar = char
        charCount = 0
      }
      charCount++
    }
  
    substrings.push(lastChar + charCount)

    let result: string = ""

    for (const key of substrings) {
      result += key
    }

    if(result.length > input.length) {
        return input
    } else {
        return result
    }
}

console.log(stringCompression("aabbb"))
console.log(stringCompression("aabcccccaaa"))
console.log(stringCompression("accurate"))
console.log(stringCompression("escola"))
console.log(stringCompression("accuraaaaaaaaaate"))