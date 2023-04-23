import request from "./apiService";

export const sectionDetails = async () => {
  const response = await request.get(`/sections/`);
  return response.data;
};