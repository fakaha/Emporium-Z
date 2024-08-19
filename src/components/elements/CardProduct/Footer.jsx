import React from "react";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

export const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })}
      </span>
      <Button
        variant="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add To Cart
      </Button>
    </div>
  );
};
