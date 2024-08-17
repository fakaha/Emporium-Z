import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  console.log(isDarkMode);
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
      <div className="w-full max-w-xs">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded">
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details.
        </p>
        {children}
        <p className={`text-sm mt-5 text-center ${isDarkMode && 'text-white'}`}>
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
