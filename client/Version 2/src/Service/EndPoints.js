import axios from "axios";
import { instance } from "./HttpClient";

const port = "http://localhost:1005/scaard";

export const callAppLink = (apiLink) => {
  try {
    return axios.get(port + "/apps/" + apiLink);
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Api error Occur");
  }
};

export const getResults = (apiLink) => {
  try {
    return axios.get(port + "/apps/results" + apiLink);
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Unable to get results");
  }
};
