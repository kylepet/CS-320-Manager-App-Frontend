import request from "./apiService";

export const login = async (body: any) => {
  const response = await request.post(`/signin/`, body);
  return response.data;
};

export const getProfile = async () => {
    const response = await request.get(`/profile`);
    return response.data;
};