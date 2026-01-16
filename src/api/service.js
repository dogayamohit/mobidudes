// src/api/service.js
import api from "./axios";

export const getServices = async () => {
  const res = await api.get("/website/service/get");
  return res.data.data;
};
