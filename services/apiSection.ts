import request from "./apiService"

export const sectionDetails = async () => {
  const response = await request.get(`/sections/`)
  return response.data
}

export const managerPool = async () => {
  const response = await request.get(`/manager-pool/`)
  return response.data
}

export const allApps = async () => {
  const response = await request.get(`/studentApps/allApplications`)
  return response.data
}
