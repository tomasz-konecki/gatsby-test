export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) =>
  // send a request for a token from here
  username === `tom` && password === `pass`
    ? setUser({
        username: `tom`,
        name: `Thomas`,
        email: `thomas@example.org`,
      })
    : null

export const isLoggedIn = () => !!getUser().username

export const logout = callback => {
  setUser({})
  callback()
}
