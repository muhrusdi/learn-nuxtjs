
export default function ({app, redirect, route}) {
  const cookieRes = app.$cookies.get('accessToken')
  const isAutPage = route.path === "/auth/login" || route.path === "/auth/register" || route.path === "/auth/verification"

  if (cookieRes) {
    if (isAutPage) {
      return redirect('/')
    }
  } else {
    if (!route.path.includes("/auth")) {
      return redirect("/auth/login")
    }
  }
}