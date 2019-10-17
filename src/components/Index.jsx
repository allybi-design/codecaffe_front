import React from "react";

import CoffeeCards from "./CoffeeTypes";
import Cart from "./cart";

// import assets
import coffeeTypes from "../coffees.json";

export default function Index(props) {
  return (
    <div className="main">
      <div className="coffeeCards">
        {coffeeTypes.map((coffee, index) => {
          return (
            <CoffeeCards key={index}
              data={coffee}
              clickSizePriceHandler={props.clickSizePriceHandler}
              clickDecafHandler={props.clickDecafHandler}
              clickMilkHandler={props.clickMilkHandler}
              coffeeOrder={props.coffeeOrder}
              onAddToCart={props.onAddToCart}
            />
          );
        })}
      </div>
      <Cart orders={props.orders} />
    </div>
  );
}
