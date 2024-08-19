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
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <Header image={product.images} id={product.id} />
                <Body name={product.title}>{product.description}</Body>
                <Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};
