import request from "./apiService";

export const submit = async (body: any) => { //connects the submit API
  const response = await request.post(`/studentApps/submit`, body);
  return response.data;
};