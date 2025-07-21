import React from "react";
import { Card } from "./Card";
import Product1 from "../../images/wshirt.webp";
import Product2 from "../../images/wcargo.webp";
import Product3 from "../../images/wshoes.jpg";
import Product4 from "../../images/wtshirt.webp";
import Product5 from "../../images/wwatch.webp";
export const Women = ({ item }) => {
  const items = [
    {
      title: "Women's Shirt",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product1
    },
    {
      title: "Women's Cargo Pants",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product2
    },
    {
      title: "Women's Shoes",
      price: "$89",
      mrp: "$120",
      rating: 4.8,
      image: Product3
    },
    {
      title: "Women's T-shirt",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product4
    },
    {
      title: "Women's Watch",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product5
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
export default Women;