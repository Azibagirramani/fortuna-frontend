export type HttpClientInterface = {
  post: <T>(url: string, payload: unknown) => Promise<T | unknown>;
  get: <T>(url: string) => Promise<T | unknown>;
  patch?: <T>() => Promise<T>;
  delete?: (url: string) => Promise<void>;
};
