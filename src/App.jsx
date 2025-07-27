import { useState } from "react";
import Child from "./components/Child.jsx";

export default function App() {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      name: "sumsung",
      price: 15000,
      category: "mobile",
      count: 10,
      onSale: true,
    },
    {
      id: 2,
      name: "oppo",
      price: 2000,
      category: "mobile",
      count: 7,
      onSale: false,
    },
    {
      id: 3,
      name: "iphone",
      price: 1500000,
      category: "mobile",
      count: 70,
      onSale: false,
    },
    {
      id: 4,
      name: "toshiba",
      price: 1500,
      category: "tv",
      count: 12,
      onSale: true,
    },
  ]);
  function del(id) {
    const x = allProducts.filter((product) => product.id != id);
    setAllProducts(x);
  }
  return (
    <div className="container mt-5">
      <div className="row g-3">
        {allProducts.map((elem) => (
          <Child pro={elem} del={del} />
        ))}
      </div>
    </div>
  );
}
