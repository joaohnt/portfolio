import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://joaohnt:AS9FvXMO7rqHaBIY@portfolio.uplgu.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";

const client = new MongoClient(URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

await connectDB();

export const db = client.db("portfolio");
export default client;
