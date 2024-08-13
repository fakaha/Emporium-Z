import React from "react";
import { Link } from "react-router-dom";

export const Body = (props) => {
    const { children, title } = props
  return (
    <div className="px-5 pb-5">
      <Link>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </Link>
    </div>
  );
};
