import api from "./axios";

export const getPortfolio = async () => {
  const res = await api.get("/website/portfolio/get");
  return res.data.data;
};


export const getPortfolioById = async (id) => {
  const res = await api.get(`/website/portfolio/get/${id}`);
  return res.data.data;
};


export const getPortfolioCategories = async () => {
  const res = await api.get("/website/portfolio-category/get");
  return res.data.data;
};