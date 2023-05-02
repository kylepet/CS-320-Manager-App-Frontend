import request from "./apiService";

export const login = async (body: any) => {
  const response = await request.get(`/signin/`, body);
  return response.data;
};