import axios from 'axios'

const apiDevBurguer = axios.create({
  baseURL: 'http://localhost:3000'
})

apiDevBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('devburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiDevBurguer
