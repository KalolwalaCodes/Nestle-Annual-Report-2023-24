import React from "react";
import Card from "./Card";
import "./ShowCard.css";

const cards = [
  {
    heading: " Milk Products and Nutrition",
    title: "40.7%",
    copy: "Contribution to total sales",
    button: "Read More",
    thumbnail: "/ProductPortfolio/Artboard 2@3x.png",
    url: "/nutrition-and-milk-products",
  },
  {
    heading: "Prepared Dishes and Cooking Aids",
    title: "30.4%",
    copy: "Contribution to total sales",
    button: "Read More",
    thumbnail: "/ProductPortfolio/Artboard 3@3x.png",
    url: "/prepared-dishes-and-cooking-aids",
  },
  {
    heading: "Confectionery",
    title: "16.5%",
    copy: "Contribution to total sales",
    button: "Read More",
    thumbnail: "/ProductPortfolio/Artboard 4@3x.png",
    url: "/confectionery",
  },
  {
    heading: " Powdered and Liquid Beverages",
    title: "12.4%",
    copy: "Contribution to total sales",
    button: "Read More",
    thumbnail: "/ProductPortfolio/Artboard 5@3x.png",
    url: "/Powdered-and-liquid-beverages",
  },
  {
    heading: " Out-of-Home",
    title: "One of the fastest-growing business of your Company in India",
    button: "Read More",
    thumbnail: "/ProductPortfolio/Artboard 6@3x.png",
    url: "/Out-of-Home",
  },
];

const ShowCard = () => (
  <main className="page-content">
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        copy={card.copy}
        button={card.button}
        heading={card.heading}
        bgImage={card.thumbnail}
        url={card.url}
      />
    ))}
  </main>
);

export default ShowCard;
