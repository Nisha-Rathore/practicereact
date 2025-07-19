import React from "react";
import { Layout } from "../layouts/Layout";
import Content from "./Content";
import { Card } from "./Card";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Item 1",
      price: "$10",
      mrp: "$15",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Item 2",
      price: "$20",
      mrp: "$25",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
    },
    {
      id: 3,
      title: "Item 3",
      price: "$30",
      mrp: "$35",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
    },
    {
      id: 4,
      title: "Item 4",
      price: "$40",
      mrp: "$45",
      image: "https://via.placeholder.com/150",
      rating: 3.5,
    },
    {
      id: 5,
      title: "Item 5",
      price: "$50",
      mrp: "$55",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
    },
    {
      id: 6,
      title: "Item 6",
      price: "$60",
      mrp: "$65",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
    },
  ];

  return (
    <Layout>
      <Content />
      <h1 className="w-full text-center font-bold text-4xl tracking-wider py-20">
        RISING STARS
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
