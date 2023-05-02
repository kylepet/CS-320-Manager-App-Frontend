import request from "./apiService";

export const login = async (body: any) => {
  const response = await request.post(`/signin/`, body);
  return response.data;
};