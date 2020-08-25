import fs from 'fs'

const arquivo: string = process.argv[2]
const item: string = '\r\n' + process.argv[3]

fs.appendFileSync(`${arquivo}`, `${item}`)