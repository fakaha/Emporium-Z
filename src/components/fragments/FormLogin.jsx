import React, { useEffect, useRef, useState } from "react";
import { InputForm } from "../elements/Input";
import { Button } from "../elements/Button";
import { login } from "../../services/auth/AuthServices";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault();
    if (event.target.email.value !== "" && event.target.password.value !== "") {
      const data = {
        email: event.target.email.value,
        password: event.target.password.value,
      }
      login(data, (status, res) => {
        if(status){
          localStorage.setItem('token', res)
          navigate("/products")
        }else{
          console.log(res);
          setLoginFailed(res)
        }
      })
    }else{
      alert("Email and Password is required")
    }
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, [])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="text"
        placeholder="Jhon Doe"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};
