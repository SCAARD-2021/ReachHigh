import axios from "axios";
import { instance } from "./HttpClient";

const port = "http://localhost:8080/scaard";

export const callAppLink = (apiLink) => {
  try {
    return instance.get(port + "/apps/" + apiLink);
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Api error Occur");
  }
};

export const callResultLink = (apiLink) => {
  try {
    return axios.get(port + "/results/" + apiLink).then((app) => {
      return app;
    });
  } catch (error) {
    console.log("Unable to get results");
  }
};
