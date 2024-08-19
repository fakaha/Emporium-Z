import React, { useContext } from "react";
import { Navbar } from "../components/layouts/Navbar";
import invoice from "../assets/image/invoice.png";
import { Button } from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

export const Payment = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useDispatch()
  return (
    <div className={`h-screen ${isDarkMode && "bg-slate-900"}`}>
      <Navbar />
      <div className={`flex max-w-5xl justify-center items-center mt-14 mx-auto rounded-lg gap-20 py-5 border border-gray-800 ${isDarkMode && "bg-gray-800"} `}>
        <div className={`flex flex-col ${isDarkMode && "text-white"}`}>
          <h1 className="text-3xl mb-4 font-medium">Congratulations !!!</h1>
          <p className="text-lg mb-2">Your payment has been successfully</p>
          <p className="text-lg">Thank you for your order</p>
          <Button
            onClick={() => {navigate("/products"); dispatch(clearCart())}}
            variant="bg-green-600 w-fit mt-6"
          >
            Buy Again
          </Button>
        </div>
        <img src={invoice} alt="invoice" className="w-80" />
      </div>
    </div>
  );
};
