import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
