// api/blog.js
import api from "./axios";

export const getBlogCategories = async () => {
  const res = await api.get("/website/blog-category/get");
  return res.data.data;
};


export const getBlogs = async () => {
  const res = await api.get("/website/blog/get");
  return res.data.data;
};


export const getBlogById = async (id) => {
  const res = await api.get(`/website/blog/get/${id}`);
  return res.data.data;
};