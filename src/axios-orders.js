import axios from "axios";

const instance = axios.create({
  baseURL: "https://super-app-c4b18.firebaseio.com/"
});

export default instance;
