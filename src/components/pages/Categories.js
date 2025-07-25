import React from "react";
import { Card } from "./Card";
import Product1 from "../../images/ew1.webp";
import Product2 from "../../images/ew2.webp";
import Product3 from "../../images/ew3.webp";
import Product4 from "../../images/ew4.webp";
import Product5 from "../../images/ew5.webp";
import Product6 from "../../images/ew6.jpg";
import Product7 from "../../images/ew7.webp";
import Product8 from "../../images/ew8.webp";
import Product9 from "../../images/ew9.webp";
import Product10 from "../../images/ew10.webp";
import Carousel from "react-multi-carousel";
import { Responsive } from "../../utils/data";
import Slider from "./Slide";

function Categories({ item }) {
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
          title: " Shirt",
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

export default Categories;
