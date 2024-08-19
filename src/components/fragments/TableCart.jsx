import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
import { Button } from "../elements/Button";
import { addToCart, subtractToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  const dispatchCart = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product?.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      dispatch({
        type: "UPDATE",
        payload: {
          total: 0,
        },
      });
    }
  }, [cart, products, dispatch]);
  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-2 ${
        isDarkMode && "text-white"
      }`}
    >
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
          cart
            .filter((item) => item.qty > 0)
            .map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
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
                  <td>
                    {item.qty}
                    <button
                      onClick={() =>
                        dispatchCart(addToCart({ id: item.id, qty: 1 }))
                      }
                      className="px-1 rounded-sm mx-2 bg-blue-600 text-white"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatchCart(subtractToCart({ id: item.id, qty: 1 }))
                      }
                      className="px-1 rounded-sm bg-red-600 text-white"
                    >
                      -
                    </button>
                  </td>
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
              {total.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </b>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>
            {cart.length <= 0 ? (
              "Cart is empty"
            ) : (
              <Button onClick={() => {localStorage.removeItem('cart'); navigate('/payment')}} variant="bg-green-600 mt-5">Checkout</Button>
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
