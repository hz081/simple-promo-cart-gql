import axios, { AxiosInstance } from "axios";

export const axiosClient: Function = (
  baseURL: string,
  headers: object = {}
): AxiosInstance => {
  let client = axios.create({
    baseURL: baseURL,
    timeout: parseInt(process.env.GQL_GLOBAL_TIMEOUT),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers
    }
  });
  client.defaults.timeout = parseInt(process.env.GQL_GLOBAL_TIMEOUT);
  return client;
};
