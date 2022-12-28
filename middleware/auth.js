
export default function ({app, redirect, route}) {
  const cookieRes = app.$cookies.get('accessToken')
  const isAutPage = route.path === "/auth/login" || route.path === "/auth/register" || route.path === "/auth/verification"

  if (cookieRes) {
    if (isAutPage) {
      return redirect('/')
    }
  } else {
    switch(route.path) {
      case "/auth/verification": {
        return redirect(router.path)
      }
      case "/auth/register": {
        return redirect(router.path)
      }
      default:
        return redirect("/auth/login")
    }
  }
}