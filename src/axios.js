import axios from "axios";

const instance = axios.create({
  baseURL: "https://sycret.ru/service/api/api",
});

export default instance;