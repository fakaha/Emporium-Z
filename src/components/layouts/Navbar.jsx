import React, { useContext, useEffect, useState } from "react";
import { Button } from "../elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import cartLogo from "../../assets/image/cart.svg";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const userName = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  const navigate = useNavigate()

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-between h-20 bg-blue-600 text-white items-center px-10">
      <h1 onClick={() => navigate('/')} className="font-chakra-petch text-3xl font-bold hover:cursor-pointer">Emporium-Z</h1>
      <div className="flex items-center">
        {userName}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
        <div className="flex gap-2 items-center bg-black p-2 rounded-md mx-5">
          <img className="h-6" src={cartLogo} alt="cart logo" />
          Item : {totalCart} | Price :{" "}
          {total.toLocaleString("id-ID", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </div>
        <Button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem("isDarkMode", !isDarkMode);
          }}
          className="bg-black text-white"
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
      </div>
    </div>
  );
};
