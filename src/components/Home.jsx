import React from "react";

import CoffeeCards from "./CoffeeCards";
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
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
      <Cart 
        orders={props.orders} 
        submitOrder={props.submitOrder}
      />
    </div>
  );
}
