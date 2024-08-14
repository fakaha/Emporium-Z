import { useEffect, useState } from "react";
import { CardProduct } from "../components/fragments/CardProduct";
import { Header } from "../components/elements/CardProduct/Header";
import { Body } from "../components/elements/CardProduct/Body";
import { Footer } from "../components/elements/CardProduct/Footer";

export const ProductsPage = () => {
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
      price: "Rp. 1.000.000",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      id: 2,
      title: "Sepatu Lama",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatum.",
      price: "Rp. 1.00.000",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      id: 3,
      title: "Baju Baru",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatum.",
      price: "Rp. 2.00.000",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
    },
  ];
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <Header image={product.image} />
          <Body name={product.title}>
            {product.description}
          </Body>
          <Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};
