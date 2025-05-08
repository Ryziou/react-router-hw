const tokenName = 'bird-token'

export const setToken = (token) => {
    localStorage.setItem(tokenName, token)
}

export const getToken = () => {
    return localStorage.getItem(tokenName)
}