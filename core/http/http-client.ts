import type { HttpClientInterface } from "./types";

import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export class HttpClient implements HttpClientInterface {
  public url: string | undefined;

  constructor(private BaseUrl: string | undefined) {
    this.url = BaseUrl;
  }

  private async Init(
    url: string,
    options: AxiosRequestConfig
  ): Promise<Response | undefined> {
    try {
      const fullurl = `${this.url}/${url}`;
      const config: AxiosRequestConfig = { ...options, url: fullurl };
      const response: AxiosResponse = await axios(config);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      console.info("http client finished url:", `${url}`);
    }
  }

  public async post<T, P>(url: string, payload: P): Promise<any> {
    // const method: Method = "post";
    // const options = { method, body: payload };

    // return await this.Init(url, options);
    console.log("post", url, payload);
  }

  public async get<T>(url: string): Promise<T | unknown> {
    const method: Method = "get";
    const options = { method };
    return await this.Init(url, options);
  }

  public async delete(url: string): Promise<void> {
    const method: Method = "delete";
    const options = { method };
    await this.Init(url, options);
  }
}
