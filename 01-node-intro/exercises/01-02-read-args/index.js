import fs from "fs"

const args = process.argv

console.log(args);
// console.log(args[0])
// console.log(args[1])
console.log(args[2])

fs.writeFileSync("data.txt", args[2])