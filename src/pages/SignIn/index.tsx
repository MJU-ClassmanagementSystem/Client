import { DevTool } from '@hookform/devtools'
import classNames from 'classnames/bind'
import jwtDecode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useSetRecoilState } from 'recoil'
import FullScreen from 'src/components/layout/FullScreen'
import { authState, userTypeState } from 'src/recoil/atom'
import classManagement from 'src/service/classManagement'
import { Token } from 'src/types'
import { SignInFormData } from 'src/types/reactHookForm'

import styles from './signIn.module.scss'

const cx = classNames.bind(styles)

const SignInPage = () => {
  const { register, control, handleSubmit } = useForm<SignInFormData>()
  const setAuth = useSetRecoilState(authState)
  const setUserType = useSetRecoilState(userTypeState)
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async ({ id, password }) => {
    const { data } = await classManagement.login(id, password)
    const token = data.data.accessToken
    const { type } = jwtDecode<Token>(token)

    setAuth(token)
    setUserType(type)

    switch (type) {
      case 'parent':
        navigate('/manageStudent')
        return
      case 'teacher':
        navigate('/manageClass')
        return
    }
  })

  return (
    <FullScreen className={cx('wrap')}>
      <div className={cx('imgWrap')} />
      <div className={cx('contentWrap')}>
        <form onSubmit={onSubmit}>
          <h1 className={cx('title')}>Sign In</h1>
          <div className={cx('inpWrap')}>
            <label htmlFor="id" className={cx('label')}>
              ID
            </label>
            <input
              id="id"
              type="text"
              {...register('id')}
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className={cx('inpWrap')}>
            <label htmlFor="password" className={cx('label')}>
              Passwrod
            </label>
            <input
              id="password"
              type="text"
              {...register('password')}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <button className={cx('submitBtn')}>Sign In</button>
        </form>
      </div>
      <DevTool control={control} />
    </FullScreen>
  )
}

export default SignInPage
