import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/projects", async (request, response) => {
  response.send(await db.collection("projects").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
    return client.db("portfolio");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
}

app.listen(PORT, () => {
  console.log(`porta: ${PORT}`);
});
