import React from 'react'
import { Card } from './Card';
import Product1 from "../../images/shoes.webp";
import Product2 from "../../images/wacth.jpg";
import Product3 from "../../images/tshirt.webp";
import Product4 from "../../images/cargo.jpg";
import Product5 from "../../images/shirt.avif";

function Men({ item }) {
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
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
             {/* Render cards using items array */}
             {items.map((item, index) => (
               <Card key={index} item={item} />
             ))}
           </div>
  )
}

export default Men;
