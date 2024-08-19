import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

export const CardProduct = (props) => {
    const { children } = props
    const { isDarkMode} = useContext(DarkMode)
  return (
    <div className={`w-full max-w-xs rounded-lg shadow mx-2 my-2 flex flex-col justify-between border border-gray-800 ${isDarkMode && "bg-gray-800 border border-gray-700 text-white"}`}>
        {children}
    </div>
  );
};
