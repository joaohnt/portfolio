import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/projects", async (request, response) => {
  response.send(await db.collection("projects").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`porta: ${PORT}`);
});
