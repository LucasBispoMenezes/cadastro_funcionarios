import { getToken } from "./sessionStorage";

export const isAuthenticated = () => {
    const token = getToken()
    if (token && token.length > 10) return token
    return false
}