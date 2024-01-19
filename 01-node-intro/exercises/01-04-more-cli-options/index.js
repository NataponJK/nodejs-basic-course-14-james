import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];


if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === 'r') {
  const read = fs.readFileSync(filePath, 'utf-8')
  console.log(read)
} else if (option === 'c') {
  fs.truncateSync(filePath)  
  //or 
//  fs.writeFileSync(filePath, '')
console.log('clear content in +', filePath)
}
else {
  console.log("invalid option");
}
