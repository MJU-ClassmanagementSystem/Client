import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import welcomeImg from 'src/assets/images/welcome.png'
import { LogoIcon } from 'src/assets/svgs'
import LoginButton from 'src/components/features/LoginButton'

import styles from './welcomePage.module.scss'

const cx = classNames.bind(styles)

const WelcomePage = () => {
  return (
    <>
      <div className={cx('header')}>
        <LogoIcon />
        <h1>
          <span className={cx('coloredTitle')}>MJU</span> Class Management
        </h1>
      </div>
      <div className={cx('pageWrap')}>
        <div className={cx('welcomePage')}>
          <div className={cx('leftWrap')}>
            <div className={cx('contentsWrap')}>
              <div className={cx('textWrap')}>
                <h2>
                  <span className={cx('boldText')}>수업 태도 분석</span>과
                  <br />
                  <span className={cx('boldText')}>학교 생활 지도</span>를
                  <br /> 한번에.
                </h2>
                <p>
                  AI와 카메라를 통해
                  <br /> 아이의 수업 태도와 학교생활 데이터를 수집하고 분석하여
                  <br /> 어디서든 아이의 수업 집중도와 흥미도를 관찰해 보세요.
                </p>
              </div>
              <div className={cx('buttonWrap')}>
                <LoginButton text="선생님으로 로그인" url="/manageStudent" />
                <LoginButton text="학부모로 로그인" url="/manageStudent" />
              </div>
              <Link className={cx('signUp')} to="/signUp">
                Sign up...
              </Link>
            </div>
          </div>
          <div className={cx('imgWrap')}>
            <img src={welcomeImg} alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomePage
