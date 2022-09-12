type Response = T | undefined;

export type HttpClientInterface = {
  post: <T>(url: string, payload: unknown) => Promise<Response>;
  get: <T>(url: string) => Promise<Response>;
  patch?: <T>() => Promise<Response>;
  delete?: (url: string) => Promise<Response>;
};
