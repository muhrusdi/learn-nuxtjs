import { getToken } from "../utils"

export default function ({$axios, route}) {
  const BASE_URL = process.env.baseUrl
  const VERSION = "v1"
  const PREFIX = "custom"

  $axios.setBaseURL(`/${PREFIX}`)

  const IS_NOT_AUTH_PAGE = route.path !== "/auth/login" && route.path !== "/auth/register" && route.path !== "/auth/verification"
  
  $axios.onRequest((config) => {
    if (IS_NOT_AUTH_PAGE) {
      $axios.setHeader('Authorization', "Bearer " + getToken())
    }
  })



  $axios.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }
    if (IS_NOT_AUTH_PAGE) {
      if (error.response.status === 401) {
        // window.location.href = "/auth/login"
      }
    }
  })

}