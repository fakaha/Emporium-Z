import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/products/ProductServices";

export const DetailProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      console.log(data, "di page ini");
      setProducts(data);
    });
  }, [id]);
  return (
    <div className="w-100 min-h-screen flex justify-center items-center relative">
      <button onClick={() => window.history.back()} className="absolute top-10 left-10 bg-black text-white px-3 rounded-lg">Back</button>
      {Object.keys(products).length > 0 && (
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-48 relative">
            <img
              src={products.images}
              alt={products.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {products.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                {products.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                {products.category.name}
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm"></div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-4 font-semibold rounded-md bg-blue-600 text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-4 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
