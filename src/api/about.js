import api from "./axios";

const ABOUT_VIDEO_ID = 12;

export const getAboutVideoById = async () => {
  const res = await api.get(`/website/about/get-video/${ABOUT_VIDEO_ID}`);
  return res.data.data;
};
