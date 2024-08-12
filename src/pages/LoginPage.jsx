import React from "react";
import { AuthLayouts } from "../components/layouts/AuthLayouts";
import { FormLogin } from "../components/fragments/FormLogin";

export const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};
