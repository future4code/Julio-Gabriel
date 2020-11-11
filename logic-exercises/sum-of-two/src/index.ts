export const sumOfTwo = (array: number[], target: number): number[] => {
  let i: number = 0
  const indexs: number[] = []

  while(i < array.length) {
    let j: number = 0

    while(j < array.length) {
      let result: number = 0

      if(i !== j) {
        result = array[i] + array[j]

        if(result === target) {
          indexs.push(i, j)

          i = array.length
          j = array.length
        }
      }
            
      j++
    }

    i++
  }

  return indexs
}