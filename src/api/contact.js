import api from "./axios"; // your axios instance


export const getServiceCategories = async () => {
  const res = await api.get("/website/service-category/get");
  return res.data.data;
};

export const submitContactForm = async (formData) => {
  return api.post("/website/contact/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
