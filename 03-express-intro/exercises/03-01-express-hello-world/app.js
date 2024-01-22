import express from "express";

const app = express();
const port = 8000;

app.get("/", (request, response) => {
  response.send("Hello my friends.");
});

app.get("/about-us", (request, response) => {
  response.send("About Us");
});

app.get("/admin", (request, response) => {
  response.status(401).send("401 Error: You are not Allow");
});

app.get("/home", (request, response) => {
  response.redirect("/about-us");
});

app.listen(port, () => {
  console.log(`This app listening to http://localhost:${port}`);
});
