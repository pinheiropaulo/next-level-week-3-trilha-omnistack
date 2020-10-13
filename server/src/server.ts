import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json(["Ola Mundo"]);
});

app.listen(3333);
