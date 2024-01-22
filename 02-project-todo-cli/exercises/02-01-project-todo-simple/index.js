import fs from "fs";
import clc from "cli-color";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];
const header = clc.white.bold.bgCyanBright('== Todo App ==')

if (option === "add") {
  fs.appendFileSync(filePath, input + "\n");
  console.log(`${header}\n \n Todo "Buy ${input}" was added.`);
} else if (option === "lists") {
  const read = fs.readFileSync(filePath, "utf-8");
  const todoList = read.trim().split("\n");
  const totalTodos = todoList.length

  if (totalTodos === 0) {
    console.log("No todos available.");
  } else {
    const reversedList = todoList.reverse();
    const numberedList = reversedList.map(
      (item, index) => `${index + 1}. ${item}`
    );
    console.log(
      `${header}\nTotal todos: ${totalTodos} items\n\n${numberedList.join(
        "\n"
      )} `
    );
  }

} else if (option === "clear") {
  fs.truncateSync(filePath);
  console.log("All to do are cleared.");
} else {
  console.log("Invalid option");
}