import React from "react";
import { AuthLayouts } from "../components/layouts/AuthLayouts";
import { FormLogin } from "../components/fragments/FormLogin";

export const LoginPage = () => {
  return (    
      <AuthLayouts title="Login" type="login">
        <FormLogin />
      </AuthLayouts>
  );
};
