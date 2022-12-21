import cookie from "js-cookie"

export const getToken = () => cookie.get("accessToken")
export const getCookie = (key) => cookie.get(key)
export const setToken = (value) => cookie.set("accessToken", value)
export const setCookie = (key, value) => cookie.set(key, value)
export const removeCookie = (key) => cookie.remove(key)
export const removeToken = () => cookie.remove("accessToken")

export const menus = [
  {
    path: "/",
    label: "Information",
    id: "information"
  },
  {
    path: "/career",
    label: "Career",
    id: "career"
  },
  {
    path: "/education",
    label: "Education",
    id: "education"
  },
  {
    path: "/gallery",
    label: "Gallery",
    id: "gallery"
  },
]

export const authMenus = [
  {
    path: "/auth/login",
    label: "Login",
    id: "login"
  },
  {
    path: "/auth/register",
    label: "Registration",
    id: "register"
  },
]

export const getCurrentDate = () => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('id', options).format(new Date())
}