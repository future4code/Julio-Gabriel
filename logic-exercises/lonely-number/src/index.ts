export const lonelyNumber = (array: number[]): number => {
  const newArray: number[] = []
  let numberLonely: number = 0
    
  array.forEach((value: number, index: number) => {
    array.forEach((val: number, ind: number) => {
      if(val === value && ind !== index) newArray.push(value)
    })
  })

  for(const value of array) {
    const found: number = newArray.indexOf(value)

    if(found === -1) numberLonely = value        
  }

  return numberLonely
}