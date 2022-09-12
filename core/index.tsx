import AuthService from "./services/auth.s";
import Axios from "axios";
import Routes from "./routes";

// loading env variables
const backendUrl = "http://localhost:9000/api/v1/";
const Auth = new AuthService(Routes, Axios, backendUrl);

export { Auth };
