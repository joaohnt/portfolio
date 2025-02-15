import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URL = NODE_ENV == "development" ? "http://localhost:3000" : "/api";

const responseProjects = await axios.get(`${URL}/projects`);

export const projectsArray = responseProjects.data;
