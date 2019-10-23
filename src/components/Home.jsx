// import mods
import React from "react";

//import components
import CoffeeCards from "./CoffeeCards";
import Cart from "./cart";

//import Styles
import "../styles/Home.css";
import "../styles/coffeecards.css";

// import assets
import coffeeTypes from "../coffees.json";

export default function Index(props) {
  return (
    <div id="home">
      <div className="cards">
      {coffeeTypes.map((coffee, index) => {
        return (
          <CoffeeCards
            key={index}
            data={coffee}
            clickSizePriceHandler={props.clickSizePriceHandler}
            clickDecafHandler={props.clickDecafHandler}
            clickMilkHandler={props.clickMilkHandler}
            addToCart={props.addToCart}
          />
        );
      })}
      </div>
      <Cart orders={props.orders} submitOrder={props.submitOrder} />
    </div>
  );
}
