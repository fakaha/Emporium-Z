import React, { useState } from 'react'
import { InputForm } from '../elements/Input'
import { Button } from '../elements/Button'
import { register } from '../../services/auth/AuthServices'
import { useNavigate } from 'react-router-dom'

export const FormRegister = () => {
  const [loginFailed, setLoginFailed] = useState(null)
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault()
    if (event.target.name.value !== "" && event.target.email.value !== "" && event.target.password.value !== "" && event.target.avatar.value !== "") {
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      avatar: event.target.avatar.value
    }
    register(data, (status, res) => {
      if(status){
        localStorage.setItem('token', res)
        navigate("/login")
      }else{
        console.log(res);
        setLoginFailed(res)
      }
    })
  }else{
    setLoginFailed('Name, Email, Password, Avatar is required')
  }
  }
  return (
    <form action="email" onSubmit={handleRegister}>
      <InputForm
        label="Fullname"
        type="text"
        placeholder="John Doe"
        name="name"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <InputForm
        label="Avatar URL"
        type="url"
        placeholder="Avatar URL"
        name="avatar"
      />
      <Button variant="bg-blue-600 w-full" type="submit">
        Register
      </Button>
      <div className='mt-2'>
        {Array.isArray(loginFailed)
          ? loginFailed.map((err) => (
              <p className="text-red-500 text-center" key={err}>
                {err}
              </p>
            ))
          : loginFailed && (
              <p className="text-red-500 text-center">{loginFailed}</p>
            )}
      </div>
    </form>
  );
}