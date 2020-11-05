export function checkParentheses(str: string): boolean {
  const stack: string[] = []

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char)
    } else {
      const lastOpeningChar: string | undefined = stack.pop()

      if(!lastOpeningChar) {
        return false
      } else if (
        (lastOpeningChar === "(" && char !== ")") ||
        (lastOpeningChar === "[" && char !== "]") ||
        (lastOpeningChar === "{" && char !== "}")
      ) {
        return false
      }
    }
  }

  if (stack.length > 0) {
    return false
  } else {
    return true
  }
 
}