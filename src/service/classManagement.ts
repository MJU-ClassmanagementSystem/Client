import { AxiosPromise } from 'axios'
import { LoginResponse } from 'src/types/axios'
import Axios from 'src/utils/axios'

export default {
  login(id: string, password: string): AxiosPromise<LoginResponse> {
    return Axios({
      method: 'post',
      url: '/login',
      data: {
        id,
        password,
      },
    })
  },
}
