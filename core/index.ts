import { Axois } from "../proxies/Axios";

import AuthService from "@/core/services/auth.s";
import Routes from "@/core/routes";

// loading env variables
const Auth = new AuthService(Routes, Axois);

export { Auth };
