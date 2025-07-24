import React from "react";
import { Card } from "./Card";
import Product1 from "../../images/fw10.jpg";
import Product2 from "../../images/f1.webp";
import Product3 from "../../images/fw2.webp";
import Product4 from "../../images/fw9.jpg";
import Product5 from "../../images/fw3.webp";
import Product6 from "../../images/fw4.webp";
import Product7 from "../../images/fw5.jpg";
import Product8 from "../../images/fw6.jpg";
import Product9 from "../../images/fw7.jpg";
import Product10 from "../../images/fw8.webp";
import { Responsive } from "../../utils/data";
import Carousel from "react-multi-carousel";

function Footwear() {
  const items = [
    {
      category: "Men's Wear",
      products: [
        {
          title: "Sneaker",
          price: "$99",
          mrp: "$150",
          rating: 4.5,
          image: Product1,
        },
        {
          title: "Watch",
          price: "$129",
          mrp: "$180",
          rating: 4.2,
          image: Product2,
        },
        {
          title: "T-shirt",
          price: "$89",
          mrp: "$120",
          rating: 4.8,
          image: Product3,
        },
        {
          title: "Cargo Pants",
          price: "$99",
          mrp: "$150",
          rating: 4.5,
          image: Product4,
        },
        {
          title: "Shirt",
          price: "$129",
          mrp: "$180",
          rating: 4.2,
          image: Product5,
        },
      ],
    },
    {
      category: "Women's Wear",
      products: [
        {
          title: "Women's Shirt",
          price: "$99",
          mrp: "$150",
          rating: 4.5,
          image: Product6,
        },
        {
          title: "Women's Cargo Pants",
          price: "$129",
          mrp: "$180",
          rating: 4.2,
          image: Product7,
        },
        {
          title: "Women's Shoes",
          price: "$89",
          mrp: "$120",
          rating: 4.8,
          image: Product8,
        },
        {
          title: "Women's T-shirt",
          price: "$99",
          mrp: "$150",
          rating: 4.5,
          image: Product9,
        },
        {
          title: "Women's Watch",
          price: "$129",
          mrp: "$180",
          rating: 4.2,
          image: Product10,
        },
      ],
    },
  ];

  return (
    <div className="p-4 space-y-10">
      {items.map((category, i) => (
        <div key={i}>
          <h2 className="text-xl font-bold mb-4">{category.category}</h2>
          <div className="parent h-100">
            <Carousel
              responsive={Responsive}
              autoPlay={true}
              autoPlaySpeed={3000} // 5s interval
              swipeable={false}
              draggable={true}
              showDots={false}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {category.products.map((product, j) => (
                <div key={`${i}-${j}`} className="min-w-[250px] slider px-1">
                  <Card item={product} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footwear;
