import { AxiosPromise } from 'axios'
import type {
  GetAttendanceResponse,
  GetClassFocusListResponse,
  GetStudentEmotionListResponse,
  GetStudentFocusListResponse,
  GetStudentListResponse,
  LoginResponse,
} from 'src/types/axios'
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

  /**
   * 출석상태를 가져오는 api
   * @param week 해당하는 주차
   * @returns
   */
  getAttendance(week: string): AxiosPromise<GetAttendanceResponse> {
    return Axios({
      method: 'get',
      url: `/student/${week}`,
    })
  },

  /**
   * 반의 집중도를 가져오는 api
   * @param week 해당하는 주차
   * @returns
   */
  getClassFocusList(week: string): AxiosPromise<GetClassFocusListResponse> {
    return Axios({
      method: 'get',
      url: `/class/${week}`,
    })
  },

  /**
   * 학생의 감정을 가져오는 api
   * @param week 해당하는 주차
   * @param studentId 학번
   * @returns
   */
  getStudentEmotionList(
    week: string,
    studentId: string,
  ): AxiosPromise<GetStudentEmotionListResponse> {
    return Axios({
      method: 'get',
      url: `/student/recess/${studentId}/${week}`,
    })
  },

  /**
   * 학생의 집중도를 가져오는 api
   * @param week 해당하는 주차
   * @param studentId 학번
   * @returns
   */
  getStudentFocusList(
    week: string,
    studentId: string,
  ): AxiosPromise<GetStudentFocusListResponse> {
    return Axios({
      method: 'get',
      url: `/student/class/${studentId}/${week}`,
    })
  },

  /**
   * 학생들의 목록을 받아오는 api
   * @returns
   */
  getStudentList(): AxiosPromise<GetStudentListResponse> {
    return Axios({
      method: 'get',
      url: '/student',
    })
  },
}
