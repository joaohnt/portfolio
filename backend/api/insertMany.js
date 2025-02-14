import { projectsArray } from "../../frontend/src/database/projects.js";
import { db } from "./connect.js";

async function insertProjects() {
  try {
    const responseProjects = await db
      .collection("projects")
      .insertMany(projectsArray);

    console.log(
      "Projetos inseridos com sucesso!",
      responseProjects.insertedIds
    );
  } catch (error) {
    console.error("Erro ao inserir os projetos:", error);
  }
}

insertProjects();
