import axios from "axios"

const apiUrl = "https://7103.api.greenapi.com"

export const getSettings = async (idInstance, apiTokenInstance) => {
  return axios
    .get(`${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`)
    .then((response) => response?.data)
    .catch((err) => err?.message)
}

export const getStateInstance = async (idInstance, apiTokenInstance) => {
  return axios
    .get(
      `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    )
    .then((response) => response?.data)
    .catch((err) => err?.message)
}

export const sendMessage = async (idInstance, apiTokenInstance, body) => {
  return axios
    .post(
      `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      body
    )
    .then((response) => response?.data)
    .catch((err) => err?.message)
}

export const sendFileByUrl = async (idInstance, apiTokenInstance, body) => {
  return axios
    .post(
      `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`,
      body
    )
    .then((response) => response?.data)
    .catch((err) => err?.message)
}
