import React from "react";
import { Card } from "./Card";
import Product1 from "../../images/girl dress.webp";
import Product2 from "../../images/girl.webp";
import Product3 from "../../images/frock.avif";
import Product4 from "../../images/kshoes.jpg";
import Product5 from "../../images/ktshirt.webp";
import Product6 from "../../images/boy.webp";
import Product7 from "../../images/boy1.jpg";
import Product8 from "../../images/boys.jpg";
import Product9 from "../../images/bshirt.jpg";
import Product10 from "../../images/bwatch.jpg";  
export const Kids = ({ item }) => {
  const items = [
    {
      title: "Kids Dress",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product1
    },
    {
      title: "Kids Casual Wear",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product2
    },
    {
      title: "Kids Frock",
      price: "$89",
      mrp: "$120",
      rating: 4.8,
      image: Product3
    },
    {
      title: "Kids Shoes",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product4
    },
    {
      title: "Kids T-shirt",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product5
    },
     {
      title: "Boy's Casual Wear",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product6   
    },
    {
      title: "Boy's Clothing",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product7
    },
    {
      title: "Boy's Shoes",
      price: "$89",
      mrp: "$120",
      rating: 4.8,
      image: Product8
    },
    {
      title: "Boy's Shirt",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product9
    },
    {
      title: "Boy's Watch",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product10
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
      {/* Render cards using items array */}
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};
export default Kids;