import axios from "axios";
const instance = axios.create({
  baseURL: "https://openmarket.onrender.com",
  timeout: 5000,
});
export default instance;
