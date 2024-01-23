import express from "express";
import { findTodo, listTodo, createTodo } from "../05-99-model/todo.mjs";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", (request, response) => {
  const todos = listTodo();
  response.json({ data: todos });
});

app.get("/todos/:todoId", (request, response) => {
  const todoId = parseInt(request.params.todoId, 10);
  const todo = findTodo(todoId);

  if (!todo) {
    response.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  response.json({ data: todo });
});

app.post("/todos", (request, response) => {
  const { title, description } = request.body;

  // Create a new todo using the `createTodo` function (imported from the model, line: 2)
  const todo = createTodo({title, description});

  // Return the newly created todo with a 201 status code
  response.status(201).json({
    data: todo,
  });

  // throw new Error("Not implemented");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
