import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
//import authBg from '../../pages/images/backg.svg'
import authBg from '../../assets/auth_images/auth_aside_bg.svg'
import { withRouter } from 'react-router-dom'
import AuthInputBox from '../../components/AuthInputBox'
import FormWrapper from '../../components/AuthFormWrapper'
import styles from '../../styles/AuthFormElements.module.css'
import axios from 'axios'

//import GoogleLogin from 'react-google-login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await axios
      .post('https://api.zuri.chat/auth/login', {
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data

        //Store token in localstorage
        sessionStorage.setItem('session_id', data.session_id)

        //Store user copy in localstorage
        sessionStorage.setItem('user', JSON.stringify(data.user))

        //Display message
        alert(message) //Change this when there is a design

        setTimeout(() => {
          //Redirect to some other page
        }, 2000)
      })
      .catch(error => {
        const { data } = error.response

        //Render error message to the user
        alert(data.message) //Change this when there is a design
      })
  }

  return (
    <main id={styles.authPageWrapper}>
      <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={authBg} alt="backgroundImage" />
          <div id={styles.aside_txt}></div>
        </div>
      </aside>
      <section id={styles.authFormContainer}>
        <FormWrapper
          header="Login"
          subHeader="Login with the data you entered during your registration"
          googleHeader="Login with Google"
          topLineText="OR"
          submitButtonName="Log in"
          email={email}
          password={password}
          check={rememberMe}
          handleSubmit={handleSubmit}
          bottomLine="New to us? Create an Account"
          bottomLink="Log in"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name="Email address"
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error=""
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="Enter a password"
            value={password}
            setValue={setPassword}
            error=""
          />

          <div className={`${styles.rememberMe}`}>
            <span className={`${styles.left}`}>
              <input
                className={`${styles.checkBox}`}
                name="RememberMe"
                type="checkbox"
                value={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe)
                }}
              />
              Remember me
            </span>
            <span className={`${styles.right}`}>
              Forgot password?<a href="/"> {''}Get help signing in</a>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  )
}

export default withRouter(Login)
