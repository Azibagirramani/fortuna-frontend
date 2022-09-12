import type { AxiosResponse } from "axios";
import type { Routes } from "../types";
import type { ILogin } from "../types";

class AuthService {
  /**
   * @param {?} http
   * @param {?} routes
   * @param {?=} config
   */

  http: any;
  routes: Routes;
  endpoint: string;
  constructor(
    _routes: Routes,
    _http: any,
    _endpoint: string,
    _config?: object
  ) {
    this.routes = _routes;
    this.http = _http;
    this.endpoint = _endpoint;
  }

  login(payload: ILogin): Promise<AxiosResponse> {
    const url = `${this.endpoint}${this.routes.login}`;
    return this.http.post(url, payload);
  }
}

export default AuthService;
