import Cookies from 'js-cookie'

const TokenKey = 'admin-Token'
export  {TokenKey}
export function getAccessToken() {
  return Cookies.get(TokenKey)
}

export function setAccessToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeAccessToken() {
  return Cookies.remove(TokenKey)
}