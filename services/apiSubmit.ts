import request from "./apiService";

export const submit = async (body: any) => { //connects the submit API
  const response = await request.post(`/studentApps/submit`, body);
  return response.data;
};

export const allApplications = async () => {
  const response = await request.get(`/studentApps/allApplications`);
  return response.data;
}

export const accept = async (body: {
  accept: boolean,
  studEmail: string,
  profEmail: string
}) => {
  const response = await request.post(`/accept`, body);
  return response.data;
}

export const capChange = async (body: {
  capChange: number,
  profEmail: string,
}) => {
  const response = await request.post(`/changeCap`, body);
  return response.data;
};