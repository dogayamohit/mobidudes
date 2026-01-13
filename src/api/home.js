import api from "./axios";

/* Fetch all reviews */
export const getReviews = async () => {
  try {
    const response = await api.get("/website/review/get"); // <-- your API endpoint
    return response.data.data; // array of reviews
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const getFaqs = async () => {
    try {
        const res = await api.get("/website/faq/get");
        return res.data.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
};