import axios from "axios";

const Axois = axios.create({
  baseURL: process.env.BASE_URL ?? "http://localhost:9000/api/v1",
  timeout: 1000,
});

export { Axois };
