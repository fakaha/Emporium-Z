import React, { useEffect, useRef } from "react";
import { InputForm } from "../elements/Input";
import { Button } from "../elements/Button";

export const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    if (event.target.email.value !== "" && event.target.password.value !== "") {
      localStorage.setItem("email", event.target.email.value);
      localStorage.setItem("password", event.target.password.value);
      console.log("login");
      window.location.href = "/products";
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
        type="email"
        placeholder="example@gmail.com"
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
    </form>
  );
};
