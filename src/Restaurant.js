import React from "react";
import OrderFunction from "./Components/RestaurantComponent/Order";
//import RestaurantButton from "./Components/RestaurantComponent/RestaurantButton";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <OrderFunction OrderType="Pizzas" />
          <OrderFunction OrderType="Salads" />
          <OrderFunction OrderType="Chocolate cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
