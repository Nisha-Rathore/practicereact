import React from 'react'
import { Card } from './Card';
import Product1 from "../../images/cw1.jpg";
import Product2 from "../../images/cw3.webp";
import Product3 from "../../images/cw6.jpg";
import Product4 from "../../images/cw4.webp";
import Product5 from "../../images/cw5.jpg";
import Product6 from "../../images/cw8.jpg";
import Product7 from "../../images/cw10.jpg";
import Product8 from "../../images/cw9.jpg";
import Product9 from "../../images/cw2.jpg";
import Product10 from "../../images/cw7.jpg";



function Casual({item}) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {items.map((category, i) =>
          category.products.map((product, j) => (
            <Card key={`${i}-${j}`} item={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default Casual;
