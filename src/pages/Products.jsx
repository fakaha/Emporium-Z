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
  return (
    <div className="flex justify-center py-5">
        <CardProduct>
            <Header image='https://i.imgur.com/ZANVnHE.jpeg'/>
            <Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur.</Body>
            <Footer price="Rp. 1.000.000"/>
        </CardProduct>
    </div>
  );
};
