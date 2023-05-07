import axios from 'axios'

const instance = axios.create({
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use()
instance.interceptors.response.use()

export default instance
