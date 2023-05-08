import { AxiosPromise } from 'axios'
import { LoginResponse } from 'src/types/axios'
import Axios from 'src/utils/axios'

export default {
  /**
   * 로그인
   * @param id 아이디
   * @param password 비밀번호
   * @returns
   */
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

  /**
   * 선생님 회원가입
   * @param id 아이디
   * @param password 비밀번호
   * @param name 교사이름
   * @param school 학교
   * @returns
   */
  signupTeacher(
    id: string,
    password: string,
    name: string,
    school: string,
  ): AxiosPromise {
    return Axios({
      method: 'post',
      url: '/signup/teacher',
      data: {
        id,
        password,
        name,
        school,
      },
    })
  },

  /**
   * 부모님 회원가입
   * @param id 아아디
   * @param password 비밀번호
   * @param studentId 자식 학번
   * @returns
   */
  signupParent(id: string, password: string, studentId: string): AxiosPromise {
    return Axios({
      method: 'post',
      url: '/signup/parent',
      data: {
        id,
        password,
        studentId,
      },
    })
  },

  /**
   * 학생 회원가입
   * @param id 아이디
   * @param name 비밀번호
   * @returns
   */
  register(id: string, name: string): AxiosPromise {
    return Axios({
      method: 'post',
      url: '/signup/register',
      data: {
        id,
        name,
      },
    })
  },
}
