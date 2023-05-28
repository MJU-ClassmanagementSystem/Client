import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://54.180.40.227:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5174',
  },
  // withCredentials: true,

  timeout: 4000,
})

instance.interceptors.request.use(function (config) {
  const storedValue = localStorage.getItem('recoil-persist')
  const { auth } = JSON.parse(storedValue || '')
  console.log(auth)
  config.headers.Authorization = `Bearer ${auth}`

  return config
})
instance.interceptors.response.use()

export default instance
