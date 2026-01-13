import axios from "axios";

const WEBSITE_TOKEN = import.meta.env.VITE_WEBSITE_STATIC_TOKEN;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    if (WEBSITE_TOKEN) {
      config.headers.Authorization = `Bearer ${WEBSITE_TOKEN}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Website API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
