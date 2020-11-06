export function longestCommon(strs: string | string[]): string {
  if(strs.length === 0) {
    return ""
  }
  
  let commonPrefix: string = ""

  for(let i: number = 0; i < strs[0].length; i++) {
    let currentChar: string = strs[0][i]
      
    for(let j: number = 0; j < strs.length; j++) {
      if(strs[j][i] !== currentChar) {
        return commonPrefix
      }
    }
      
    if(currentChar) {
      commonPrefix += currentChar
    }
  }
  
  return commonPrefix
}