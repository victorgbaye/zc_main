import React from 'react'
import zurilogo from './images/zurichatlogo.svg'
import styles from './styles/SignOut.module.css'

const SignOut = () => {
  return (
    <>
      <div className={styles.signout_container}>
        <div className={styles.signout_logo}>
          <div className={styles.zurilogo}>
            <img src={zurilogo} alt="logo" />
          </div>
          <h1 className={styles.logotext}>Z U R I</h1>
        </div>
        <div className={styles.signout_content_container}>
          <h3 className={styles.h1}>Signed out of Team Einstein Workspace</h3>
          <p className={styles.subh1}>
            You have been signed out of Team Einstein Workspace
          </p>
          <button className={styles.signout_btn}>Sign in</button>

          <p className={styles.p2}>
            Or <span>sign into</span> another workspace
          </p>
        </div>
      </div>
    </>
  )
}

export default SignOut
