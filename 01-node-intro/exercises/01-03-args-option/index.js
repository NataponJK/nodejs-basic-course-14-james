import fs from "fs";

const filePath = "data.txt";

const args = process.argv
const option = args[2];
const input = args[3];

if (option === 'w') {
    fs.appendFileSync(filePath, input + "\n");
    console.log(input, "was written in", filePath);
} else if (option !== 'w') {
    console.log('invalid option')
}
