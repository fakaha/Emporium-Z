import React from "react";
import { Button } from "../Button";

export const Footer = (props) => {
    const { price } = props
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button variant="bg-blue-600">Add To Cart</Button>
    </div>
  );
};
