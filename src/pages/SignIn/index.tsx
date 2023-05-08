import styles from './signIn.module.scss'

const SignInPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.imgWrap} />
      <div className={styles.contentWrap}>
        <form>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.inpWrap}>
            <p>ID</p>
            <input type="text" />
          </div>
          <div className={styles.inpWrap}>
            <p>PW</p>
            <input type="text" />
          </div>
          <button className={styles.submitBtn}>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
