import React from 'react'
import { InputForm } from '../elements/Input'
import { Button } from '../elements/Button'

export const FormLogin = () => {
  return (
    <form action="email">
        <InputForm label='Email' type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label='Password' type='password' placeholder='password' name='email'/>
        <Button variant='bg-blue-600 w-full'>Login</Button>
    </form>
  )
}
