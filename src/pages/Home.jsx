import React, { useContext, useEffect, useState } from "react";
import { Button } from "../components/elements/Button";
import banner from '../assets/image/Store-Banner.jpg'
import { getCategory } from "../services/products/ProductServices";
import { DarkMode } from "../context/DarkMode";

export const Home = () => {
  const [category, setCategory] = useState([])
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  useEffect(() => {
    getCategory((data) => {
      console.log(data)
      setCategory(data)
    })
  }, [])
  return (
    <div className={`${isDarkMode && "bg-slate-900 border border-gray-700 text-white"}`}>
      <div className="flex justify-between h-20 bg-blue-600 text-white items-center px-10">
        <h1
          onClick={() => (window.location.href = "/")}
          className="font-chakra-petch text-3xl font-bold hover:cursor-pointer"
        >
          Emporium-Z
        </h1>
        <div className="flex items-center">
          <Button
            onClick={() => (window.location.href = "/login")}
            variant="bg-black mr-5"
          >
            Login
          </Button>
          <Button onClick={() => {setIsDarkMode(!isDarkMode); localStorage.setItem("isDarkMode", !isDarkMode);}} className="text-white">{isDarkMode ? "Light" : "Dark"}</Button>
        </div>
      </div>
      <div className="flex mt-4">
        <img className="w-3/5" src={banner} alt="Banner" />
        <div className={`w-2/5 flex flex-col justify-center items-center gap-3 ${isDarkMode && "bg-gray-800 text-white"}`}>
          <h2 className="text-2xl text-start px-8">Belanja Online Tanpa Ribet Emporium-Z Solusi Belanja Anda</h2>
          <Button onClick={() => (window.location.href = "/products")} className="text-black">Lihat Produk</Button>
        </div>
      </div>
      <h3 className="ml-40 text-2xl mt-8">Kategori Produk</h3>
      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {category.map((item) => (
          <div className={`w-full max-w-xs rounded-lg shadow mx-2 my-2 flex flex-col justify-between border border-gray-800 ${isDarkMode && "bg-gray-800 border border-gray-700 text-white"}`} key={item.id}>
            <p className="text-center pt-5">{item.name}</p>
            <img className="p-8 object-cover h-60" src={item.image} alt="category" />
          </div>
        ))}
      </div>
    </div>
  );
};
