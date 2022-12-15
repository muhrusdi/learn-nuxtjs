import axios from "axios"
import { getToken } from "../../utils"

const API_HOST = process.env.baseUrl
const BASE_URL = `http://${API_HOST}`

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use(function (config) {
  if (
    config.url.includes("/api/v1/register") ||
    config.url.includes("/api/v1/oauth")
  ) {

    return config
  } 

  
  config.headers = {
    ...config.headers,
    Authorization: "Bearer " + getToken()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error?.response?.status === 401) {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/auth/login"
      ) {
        window.location.href = "/auth/login"
      }
    }
  }
  return Promise.reject(error)
})

const getBasePath = () => {
  const PREFIX = "api"
  const VERSION = "v1"
  
  return `${BASE_URL}/${PREFIX}/${VERSION}/`
}

const baseURL = (path) => {
  return getBasePath() + path
}

// Profile
export const getProfile = () => {
  return axios.get(baseURL("profile/me"))
}

// Auth
/**
 * 
 *  phone: string;
    password: string;
    latlong: string;
    device_token: string;
    device_type: number 
 * 
 */
export const postLogin = (formData) => {
  return axios.post(baseURL(`oauth/sign_in`), formData)
}

export const postRegister = (formData) => {
  return axios.post(baseURL(`register`), formData)
}

export const postVerfication = (formData) => {
  return axios.post(baseURL(`register/otp/request`), formData)
}

export const getCountryCode = () => {
    return fetch(window.location.origin + "/phone.json").then(d => d.json())
}

export const getCountryName = () => {
    return fetch(window.location.origin + "/names.json").then(d => d.json())
}