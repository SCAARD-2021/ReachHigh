import axios from "axios";
import { instance } from "./HttpClient";

export const callAppLink = (apiLink) => {
  try {
    return axios.get("http://localhost:3000/scaard/apps/");
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Api error Occur");
  }
};

export const getResults = (apiLink) => {
  try {
    return axios.get("http://localhost:3000/scaard/apps/results" + apiLink);
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Unable to get results");
  }
};
