import axios from "axios";

const URL = "http://localhost:3000";

const responseProjects = await axios.get(`${URL}/projects`);

export const projectsArray = responseProjects.data;
