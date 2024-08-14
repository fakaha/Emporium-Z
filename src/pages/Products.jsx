import { useEffect, useState } from "react";
import { CardProduct } from "../components/fragments/CardProduct";
import { Header } from "../components/elements/CardProduct/Header";
import { Body } from "../components/elements/CardProduct/Body";
import { Footer } from "../components/elements/CardProduct/Footer";
import { Button } from "../components/elements/Button";

export const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    }
  ])

  const handleAddToCart = (id) => {
    if(cart.find(item => item.id === id)) {
      setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
      )
    }else{
      setCart([...cart, { id, qty: 1}])
    }
  }
  //   const [Products, setProducts] = useState([]);
  //   useEffect(() => {
  //     FetchProduct((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  //   }, []);
  const products = [
    {
      id: 1,
      title: "Sepatu Baru",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 1000000,
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      id: 2,
      title: "Sepatu Lama",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatum.",
      price: 100000,
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      id: 3,
      title: "Baju Baru",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatum.",
      price: 200000,
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
  ];

  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <Header image={product.image} />
              <Body name={product.title}>{product.description}</Body>
              <Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

        <table className="text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find((product) => product.id === item.id);
              return(
                <tr key={item.id}>
                  <td>{product.title}</td>
                  <td>{product.price.toLocaleString("id-ID", {style: 'currency', currency: 'IDR', maximumFractionDigits: 0})}</td>
                  <td>{item.qty}</td>
                  <td>{(item.qty*product.price).toLocaleString("id-ID", {style: 'currency', currency: 'IDR', maximumFractionDigits: 0})}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};
