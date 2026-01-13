import api from "./axios";

export const getVacancies = async () => {
    try {

        const res = await api.get("/website/vacancy/get");
        return res.data.data;

    } catch (error) {

        console.error("Error fetching vacancies:", error);
        throw error;

    }
};


export const submitCareerForm = async (formData) => {
  return api.post("/website/career/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};