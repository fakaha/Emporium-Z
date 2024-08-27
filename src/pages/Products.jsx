import { useContext, useEffect, useState } from "react";
import { CardProduct } from "../components/fragments/CardProduct";
import { Header } from "../components/elements/CardProduct/Header";
import { Body } from "../components/elements/CardProduct/Body";
import { Footer } from "../components/elements/CardProduct/Footer";
import { getProduct } from "../services/products/ProductServices";
import { TableCart } from "../components/fragments/TableCart";
import { Navbar } from "../components/layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

export const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const { isDarkMode } = useContext(DarkMode)

  useEffect(() => {
    getProduct((item) => {
      setProducts(item)
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className={`flex lg:flex-row flex-col-reverse justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="lg:w-4/6 w-100 flex flex-wrap lg:justify-normal justify-center">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <Header image={product.images} id={product.id} />
                <Body name={product.title}>{product.description}</Body>
                <Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="lg:w-2/6 w-100 m-auto lg:m-0">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};
