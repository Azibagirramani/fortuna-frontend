import axios from "axios";

const Axois = axios.create({
  baseURL: "http://localhost:9000/api/v1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { Axois };
