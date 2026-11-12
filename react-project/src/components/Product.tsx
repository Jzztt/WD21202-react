import React from "react";
import ProductDetail from "./ProductDetail";

const Product = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
    {
      title: "Card 4",
      description: "This is the description for Card 4.",
    },
  ];
  return (
    <>
      {cards.map((card, index) => (
        <ProductDetail
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
      {/*
      <ProductDetail title= "Card 1" description= "This is the description for Card 1." />
      <ProductDetail title= "Card 2" description= "This is the description for Card 2." />
      <ProductDetail title= "Card 3" description= "This is the description for Card 3." />
      <ProductDetail title= "Card 4" description= "This is the description for Card 4." /> */}
    </>
  );
};

export default Product;
