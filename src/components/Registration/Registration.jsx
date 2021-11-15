import React from 'react'
// import axios from 'axios'
import { useState } from 'react'
import { authOperations } from '../../redux/auth'
import { useDispatch } from 'react-redux'
import { AccessContainer, Description, Google } from './Registration.styled.jsx'
import Input from '../Input/Input.jsx'
import {
  AccessForm,
  AccessFormBotton,
  FormBottons,
} from '../AccessForm/AccessForm.styled.jsx'
import { ReactComponent as GoogleIcon } from '../../images/google.svg'
// import * as authAPI from '../../services/auth-api';
// import { useHistory } from 'react-router-dom'

// axios.defaults.baseURL = 'http://localhost:3001/'

export default function Registration() {
  const dispatch = useDispatch()
  // const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        return
    }
  }

  const handleSubmitRegistration = (e) => {
    e.preventDefault()
    dispatch(authOperations.register({ email, password }))
    reset()
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(authOperations.logIn({ email, password }))
    reset()
  }

  // const handleGoogleAuth = async (e) => {
  //   // dispatch(authAPI.getGoogleAuth)
  //   // reset()
    
  //   const { data } = await axios.get(`/api/auth/google`)
  //  console.log( "<data>", data)
  //  history.push(data)
  // }

  const reset = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <AccessContainer>
      <Description>
        Вы можете авторизоваться с помощью Google Account:
      </Description>
      {/* <Google type="submit" onClick={handleGoogleAuth}>
        <GoogleIcon />
      </Google> */}
      <Google href='https://kapusta-pro.herokuapp.com/api/auth/google'>
        <GoogleIcon />
      </Google>
      <Description>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Description>
      <AccessForm>
        <Input
          label="Электронная почта:"
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          required
          onChange={handleChange}
        />

        <Input
          label="Пароль:"
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          pattern="[0-9a-fA-F]{4,8}"
          title="Длина пароля 4-8 символов"
          required
          onChange={handleChange}
        />
        <FormBottons>
          <AccessFormBotton type="submit" onClick={handleSubmitLogin}>
            Войти
          </AccessFormBotton>
          <AccessFormBotton type="submit" onClick={handleSubmitRegistration}>
            Регистрация
          </AccessFormBotton>
        </FormBottons>
      </AccessForm>
    </AccessContainer>
  )
}
