import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// user database variable here:
const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users/:userId", (reqeust, response) => {
  const userId = reqeust.params.userId;
  const user = userDatabase[userId]

  if (!userId) {
    response.send(`Error User ID ${userId} not found`);
    return;
  }

  // 1. Implement: returns JSON response
  response.send({ data: {id: userId, name: user}});
});

app.post("/users/:userId", (reqeust, response) => {
  const userId = reqeust.params.userId;
//  const user = userDatabase[userId]
  const name = reqeust.body.name;

  if (!userDatabase[userId]) {
    response.send(`Error User ID ${userId} not found`);
    return;
  }
  userDatabase[userId] = name;

  // 2. Implement: returns JSON response
  response.send({data: {id: userId, name: name}});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
