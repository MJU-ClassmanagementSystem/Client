import classNames from 'classnames/bind'
import splashImage from 'src/assets/images/splashImage.jpg'
import FullScreen from 'src/components/layout/FullScreen'

import styles from './signUp.module.scss'

const cx = classNames.bind(styles)

const SignUpPage = () => {
  return (
    <FullScreen className={cx('signUp')}>
      <img className={cx('photo')} alt="사진" src={splashImage} />
      <div className={cx('formContainer')}>
        <form className={cx('form')}>
          <h1 className={cx('title')}>Sign Up</h1>
          <label htmlFor="id">id</label>
          <input id="id" type="text" />
          <label htmlFor="password">password</label>
          <input id="password" type="password" />
          <label htmlFor="name">name</label>
          <input id="name" type="text" />
          <label htmlFor="school">school</label>
          <input id="school" type="text" />
          <button>회원가입</button>
        </form>
      </div>
    </FullScreen>
  )
}

export default SignUpPage
