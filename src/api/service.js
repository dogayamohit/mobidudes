import api from "./axios";

export const getServices = async () => {
  const res = await api.get("/website/service/get");
  return res.data.data;
};


export const getServiceById = async (id) => {
  const res = await api.get(`/website/service/get/${id}`);
  return res.data.data;
};


export const getServiceCategories = async () => {
  const res = await api.get("/website/service-category/get");
  return res.data.data;
};