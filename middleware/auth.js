
export default function ({app, redirect, route}) {
  const cookieRes = app.$cookies.get('accessToken')
  if (cookieRes) {
    if (route.path === "/auth/login" || route.path === "/auth/register" || route.path === "/auth/verification") {
      return redirect('/')
    }
  } else {
    return redirect('/auth/login')
  }
}