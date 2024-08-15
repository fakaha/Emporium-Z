import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const { image } = props;
  return (
    <Link>
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link>
  );
};
