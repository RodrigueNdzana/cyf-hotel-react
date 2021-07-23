import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order(props) {
  var [NumberOfOrder, setNumberOfOrders] = useState(0);
  var orderOne = () => setNumberOfOrders((NumberOfOrder += 1));
  return (
    <div>
      <ul>
        <li>
          {props.OrderType}: {NumberOfOrder}{" "}
          <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
}
