import React from "react";
import { AuthLayouts } from "../components/layouts/AuthLayouts";
import { FormRegister } from "../components/fragments/FormRegister";

export const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};
