import { db } from "./connect.js";

async function clearAll() {
  try {
    const result = await db.collection("projects").deleteMany({});
    console.log(`Projetos removidos: ${result.deletedCount}`);
  } catch (error) {
    console.error("Erro ao remover projetos:", error);
  }
}

clearAll();
