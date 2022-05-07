import axios from "axios";

export const requester = (config, contentType) => {
  const service = axios.create({
    baseURL: config.baseURL || "https://api.spotify.com/v1",
    ...config.options,
  });

  service.interceptors.request.use(
    (req) => {
      req.headers = {
        "Content-Type": contentType || "application/json",
        "Access-Control-Allow-Origin": "*",
        ...config,
      };

      return req;
    },
    (error) => Promise.reject(error)
  );

  return {
    async get(uri) {
      const response = (await service.get)(uri);
      return response;
    },
    async post(uri, data) {
      const response = (await service.post)(uri, data);
      return response;
    },
    async put(uri, data) {
      const response = (await service.put)(uri, data);
      return response;
    },
    async patch(uri, data) {
      const response = (await service.patch)(uri, data);
      return response;
    },
    async delete(uri, data) {
      const response = (await service.delete)(uri, data);
      return response;
    },
  };
};
