import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api/v1/';
axios.defaults.auth = { username: "user", password: "userPass" }
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


export default axios.create({
  // baseURL: "https://api.punkapi.com/v2/",
  // headers: {
  //   "Content-type": "application/json",
  //   "Access-Control-Allow-Origin": "*"
  // },
  // auth:{ username: "user", password: "userPass" }
});