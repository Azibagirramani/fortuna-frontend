import { HttpClient } from "./http";

// loading env variables
const backendUrl = process.env.BACKEND_ENDPOINT

const http = new HttpClient(backendUrl);

export {
    http
}