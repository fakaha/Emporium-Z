import React from 'react'
import { InputForm } from '../elements/Input'
import { Button } from '../elements/Button'

export const FormRegister = () => {
  return (
    <form action="email">
        <InputForm label='Fullname' type='text' placeholder='John Doe' name='name'/>
        <InputForm label='Email' type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label='Password' type='password' placeholder='password' name='password'/>
        <InputForm label='Confirm Password' type='password' placeholder='confirm password' name='confirmPassword'/>
        <Button variant='bg-blue-600 w-full'>Register</Button>
    </form>
  )
}