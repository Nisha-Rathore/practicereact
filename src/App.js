import React from "react";
import "./App.css";
import Content from "./components/pages/Content";
import Navbar from "./components/pages/Navbar";
import { Card } from "./components/pages/Card";
import { FaStar } from "react-icons/fa";
import Product1 from "../src/images/shoes.webp";
import Product2 from "../src/images/wacth.jpg";
import Product3 from "../src/images/tshirt.webp";
import Product4 from "../src/images/cargo.jpg";
import Product5 from "../src/images/shirt.avif";
import Women from "./components/pages/Women";
import Kids from "./components/pages/Kids";

function App({ title }) {
  const items = [
    {
      title: "Sneaker",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product1
    },
    {
      title: "Watch",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product2
    },
    {
      title: "T-shirt",
      price: "$89",
      mrp: "$120",
      rating: 4.8,
      image: Product3
    }
    ,
     {
      title: "Cargo Pants",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image:Product4
    },
    {
      title: " Shirt",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product5
    },
  ];
  return (
    <>
      <Navbar />
      <Content />
      <div style={{ fontWeight: "bold", fontSize: "30px", margin: "16px 0", padding: "50px 30px" }}>RISING STARS</div>
      <div className="text-center mt-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 font-bold text-2xl">Welcome to our store!</p>
      </div>
      <div className="p-5 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Men's Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {/* Render cards using items array */}
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Women's Products
          </h2>
          <Women />
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Girls's Products
          </h2>
          <Kids />
        </div>
      </div>
    </>
  );
}

export default App;
