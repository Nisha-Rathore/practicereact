import React from 'react'
import { Card } from './Card';
import Product1 from "../../images/b1.webp";
import Product2 from "../../images/b10.jpg";
import Product3 from "../../images/b9.jpg";
import Product4 from "../../images/b3.webp";
import Product5 from "../../images/b2.webp";
import Product6 from "../../images/b4.webp";
import Product7 from "../../images/b5.webp";
import Product8 from "../../images/b6.jpg";
import Product9 from "../../images/b7.jpg";
import Product10 from "../../images/b8.jpg";



const Westernwear = () => {
     const items =[
        {
      category:"Men's Wear",
      products:[{
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
        
      }]
    },
    {
    category:"Women's Wear",
    products:[{
      title: "Women's Shirt",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product6
    },
    {
      title: "Women's Cargo Pants",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product7
    },
    {
      title: "Women's Shoes",
      price: "$89",
      mrp: "$120",
      rating: 4.8,
      image: Product8
    },
    {
      title: "Women's T-shirt",
      price: "$99",
      mrp: "$150",
      rating: 4.5,
      image: Product9
    },
    {
      title: "Women's Watch",
      price: "$129",
      mrp: "$180",
      rating: 4.2,
      image: Product10
    },]
    }]
    
  return (
    <div>
       <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                    {items.map((category, i) =>
                      category.products.map((product, j) => (
                        <Card key={`${i}-${j}`} item={product} />
                      ))
                    )}
                  </div>
                </div>
    </div>
  )
}

export default Westernwear
