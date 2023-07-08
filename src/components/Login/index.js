import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {redirect, useNavigate, Link} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [username, changeUsername] = useState('')
  const [password, changePassword] = useState('')
  const [errorMsg, changeErrorMsg] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      navigate('/')
    }
  })

  const onChangeUsername = event => {
    changeUsername(event.target.value.toLowerCase())
  }

  const onChangePassword = event => {
    changePassword(event.target.value)
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    if (username === '' || password === '') {
      return changeErrorMsg('Enter valid input')
    }

    const userDetails = {username, password}
    const url = 'https://money-manager-api-v4pu.onrender.com/login'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      localStorage.setItem('user_details', JSON.stringify(data.user_details))
      navigate('/')
    } else {
      changeErrorMsg(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    redirect('/')
  }

  return (
    <div className="login-card">
      <img
        className="login-landing-image"
        src="https://res.cloudinary.com/dexzw88rk/image/upload/v1686643186/OBJECTS_kol7py.png"
        alt="website login"
      />
      <form className="login-form" onSubmit={onSubmitForm}>
        <img
          className="login-website-logo"
          src="https://res.cloudinary.com/dexzw88rk/image/upload/v1687688369/PicsArt_03-19-07.18.18_yru54j.png"
          alt="website logo"
        />
        <h1 className="login-heading">Money Manager</h1>
        <label className="login-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="login-input"
          id="username"
          type="text"
          value={username}
          onChange={onChangeUsername}
          required
        />
        <label className="login-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="login-input"
          id="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <p className="login-error-msg">{errorMsg}</p>
        <button className="login-button" type="submit">
          Login
        </button>
        <p className="signup-text">If you don't have account please <Link to='/signup' className='signup-link' >Signup</Link></p>
      </form>
    </div>
  )
}

export default Login