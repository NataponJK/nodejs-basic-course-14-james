import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// app.get("/users", (reqeust, response) => {
//   // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
//   console.log(reqeust.query)
//   const id = reqeust.query.id
//   response.send(`User ID: ${id}`)
// });

// app.post("/users", (reqeust, response) => {
//   // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
//   console.log(reqeust.body)
//   const name = reqeust.body.name
//   const id = reqeust.query.id
//   response.send(`User ID: ${id}, name has been updated to ${name}`)
// });

app.get("/users/:userId", (reqeust, response) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  console.log(reqeust.params)
  const id = reqeust.params.userId
  response.send(`User ID:${id}`)
});

app.post("/users/:userId", (reqeust, response) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  console.log(reqeust.body)
  const name = reqeust.body.name
  const id = reqeust.params.userId
  response.send(`User ID: ${id}, name has been updated to ${name}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port "http://localhost:${port}`);
});
