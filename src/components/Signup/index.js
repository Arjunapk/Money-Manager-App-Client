import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Signup = () => {
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    const [name, changeName] = useState('')
    const [gender, changeGender] = useState('')
    const [dob, changeDob] = useState('')
    const [email, changeEmail] = useState('')
    const [mobile, changeMobileNo] = useState('')
    const [errorMsg, changeErrorMsg] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = event => {
      changeUsername(event.target.value.toLowerCase())
    }

    const onChangePassword = event => {
      changePassword(event.target.value)
    }

    const onChangeName = event => {
      changeName(event.target.value)
    }

    const onChangeGender = event => {
      changeGender(event.target.value)
    }

    const onChangeDob = event => {
      changeDob(event.target.value)
    }

    const onChangeEmail = event => {
      changeEmail(event.target.value)
    }

    const onChangeMobileNo = event => {
      changeMobileNo(event.target.value)
    }

    const onSubmitForm = async event => {
      event.preventDefault()
      const url = 'https://money-manager-api-v4pu.onrender.com/signup'
      const userDetails = {username, password, name, gender, dob, email, mobile}
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        navigate('/login')        
      } else {
        changeErrorMsg(data.error_msg)
      }
    }

    return (
      <div className="signup-card">
        <img
          className="signup-landing-image"
          src="https://res.cloudinary.com/dexzw88rk/image/upload/v1686643186/OBJECTS_kol7py.png"
          alt="website signup"
        />
        <form className="signup-form" onSubmit={onSubmitForm}>
          <img
            className="signup-website-logo"
            src="https://res.cloudinary.com/dexzw88rk/image/upload/v1687688369/PicsArt_03-19-07.18.18_yru54j.png"
            alt="website logo"
          />
          <h1 className="signup-heading">Money Manager</h1>
          <label className="signup-label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="signup-input"
            id="username"
            type="text"
            value={username}
            onChange={onChangeUsername}
            placeholder='Username'
            required
          />
          <label className="signup-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="signup-input"
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder='Password'
            required
          />
          <label className="signup-label" htmlFor="name">
            Name
          </label>
          <input
            className="signup-input"
            id="name"
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder='Name'
            required
          />
          <label className="signup-label" htmlFor="gender">
            GENDER
          </label>
          <input
            className="signup-input"
            id="gender"
            type="text"
            value={gender}
            onChange={onChangeGender}
            placeholder='Gender'
            required
          />
          <label className="signup-label" htmlFor="dob">
            DOB
          </label>
          <input
            className="signup-input"
            id="dob"
            type="date"
            value={dob}
            onChange={onChangeDob}
            placeholder='Date of Birth'
            required
          />
          <label className="signup-label" htmlFor="email">
            EMAIL
          </label>
          <input
            className="signup-input"
            id="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder='Email'
            required
          />
          <label className="signup-label" htmlFor="mobile-no">
            MOBILE NO
          </label>
          <input
            className="signup-input"
            id="mobile-no"
            type="number"
            value={mobile}
            onChange={onChangeMobileNo}
            placeholder='Mobile No'
            required
          />
          <p className="signup-error-msg">{errorMsg}</p>
          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    )
}

export default Signup