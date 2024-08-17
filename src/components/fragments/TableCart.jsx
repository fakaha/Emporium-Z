import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product?.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  return (
    <table className="text-left table-auto border-separate border-spacing-x-2">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product?.title}</td>
                <td>
                  {product?.price?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(item.qty * product?.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
