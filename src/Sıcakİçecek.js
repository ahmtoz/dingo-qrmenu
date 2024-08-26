import React from "react";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";

const AnaYemek = () => {
  const foodItems = [
    { name: "Kahve", ingredients: "Öğütülmüş Kahve, Yanında İkram Su ve Lokum ", price: "75₺" },
    { name: "Kahve", ingredients: "Öğütülmüş Kahve, Yanında İkram Su ve Lokum ", price: "75₺" },
    { name: "Kahve", ingredients: "Öğütülmüş Kahve, Yanında İkram Su ve Lokum ", price: "75₺" },
  ];

  return (
    <div>
      <Link to="/">
        <div className="flex justify-center mt-10">
          <img src="/images/header.png" alt="Header" className="" />
        </div>
      </Link>

      <div className="lg:mx-48 lg:my-24 mt-16">
        <div className="space-y-4">
          {foodItems.map((item, index) => (
            <FoodItem
              key={index}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnaYemek;
