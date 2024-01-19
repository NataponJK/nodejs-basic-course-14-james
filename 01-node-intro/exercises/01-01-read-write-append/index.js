import fs from 'fs'

const fileName = 'data.txt'

fs.writeFileSync(fileName, 'Hello World\n')
fs.appendFileSync(fileName, 'Second Line')

const content = fs.readFileSync(fileName, 'utf-8')
console.log(content)