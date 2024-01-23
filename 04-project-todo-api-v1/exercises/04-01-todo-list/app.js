import express from "express";
import { findTodo, listTodos } from "./models/todo.js";

const app = express();
const port = 8000;

app.get("/todos", (req, res) => {
  const todos = listTodos();

  // 1. Implement: returns a list of todos
  res.json(listTodos());
});

app.get("/todos/:todoId", (req, res) => {
  const id = parseInt(req.params.todoId, 10);
  const todo = findTodo(id);

  // 2. Implement: returns a single todo
  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: todo });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
