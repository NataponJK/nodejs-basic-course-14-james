import express from "express";
import { createTodo, findTodo, listTodos } from "./models/todo.js";
import cors from 'cors'

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/todos", (req, res) => {
  const todos = listTodos();
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: todo });
});

app.post('/todos',(req, res) =>{
  const title = req.body.title;

  if (title.lenght > 30) {
    res.status(400).json({error: {message: 'title must not exceed 30 characters'}});
    return;
  }
  const todo = createTodo({title});
  res.json({ data: todo});
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
