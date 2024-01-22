import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users/:userId(\\d+)", (request, response) => {
  // 1. Implement: returns "User ID: [NUMBER] (name: [NAME])"
  console.log(request.params);
  const id = request.params.userId;
  const name = userDatabase[id];
  response.send(`User Id: ${id} (name: ${name})`);
});

app.post("/users/:userId(\\d+)", (request, response) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  console.log(request.params);
  const id = request.params.userId;
  const name = userDatabase[id];
  
  if(!userDatabase[id]) {
    response.send(`Error User ID: ${id} not found.`)
  }

  newName = request.body.name;
  response.send(`User ID: ${id}, ${name} has been up date to ${newName}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
