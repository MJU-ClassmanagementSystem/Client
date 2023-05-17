import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import FullScreen from 'src/components/layout/FullScreen'
import { authState } from 'src/recoil/atom'
import classManagement from 'src/service/classManagement'
import { SignInFormData } from 'src/types/reactHookForm'

import styles from './signIn.module.scss'

const cx = classNames.bind(styles)

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInFormData>()
  const [, setAuth] = useRecoilState(authState)
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async ({ id, password }) => {
    const { data } = await classManagement.login(id, password)
    setAuth(data.accessToken)
    navigate('/manageClass')
  })

  return (
    <FullScreen className={cx('wrap')}>
      <div className={cx('imgWrap')}>
        <p>Class Management System</p>
      </div>
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
              Password
            </label>
            <input
              id="password"
              type="text"
              {...register('password')}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <button type="submit" className={cx('submitBtn')}>
            Sign In
          </button>
        </form>
      </div>
    </FullScreen>
  )
}

export default SignInPage
