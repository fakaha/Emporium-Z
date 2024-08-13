import React from "react";
import { AuthLayouts } from "../components/layouts/AuthLayouts";
import { FormRegister } from "../components/fragments/FormRegister";

export const RegisterPage = () => {
  return (
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
  );
};
