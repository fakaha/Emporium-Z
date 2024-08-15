import React from "react";
import { Button } from "../Button";

export const Footer = (props) => {
    const { price, handleAddToCart, id } = props
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString("id-ID", {style: 'currency', currency: 'USD', maximumFractionDigits: 0})}</span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
    </div>
  );
};
