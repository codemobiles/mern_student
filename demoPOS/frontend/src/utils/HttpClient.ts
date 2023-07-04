import axios from "axios";
import join from "url-join";
import { server, apiUrl } from "./constants";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config: any) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(apiUrl, config.url);
  }

  const userToken = localStorage.getItem(server.TOKEN_KEY);
  if (userToken) {
    config.headers = { Authorization: `Bearer ${userToken}` };
  }
  config.timeout = 10000; // 10 Second
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(JSON.stringify(error, undefined, 2));
  }
);

export const httpClient = axios;
