import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://54.180.40.227:8080',
  headers: {
    'Content-Type': 'application/json',
  },

  timeout: 4000,
})

instance.interceptors.request.use(function (config) {
  const storedValue = localStorage.getItem('recoil-persist')
  if (!storedValue) return config
  const { auth } = JSON.parse(storedValue)
  config.headers.Authorization = `Bearer ${auth}`

  return config
})
instance.interceptors.response.use()

export default instance
