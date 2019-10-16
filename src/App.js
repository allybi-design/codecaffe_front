import React, { Component } from "react";

// compoonents
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Cart from "./components/cart.jsx";

import CoffeeCards from "./components/CoffeeTypes.jsx";
//styles
import "./styles/App.css";

// import assets
import coffeeTypes from "./coffees.json";

export default class App extends Component {
  state = {
    orders: [],
    coffee: {
      name: "",
      size: "",
      price: 0,
      decaf: false,
      milk: ""
    }
  };

  clickSubmitHandler = () => {
    console.log("I was clicked");
  };

  clickSizePriceHandler = (name, size, price) => {
    this.setState({
      coffee: {
        ...this.state.coffee,
        name,
        size,
        price
      }
    });
    console.log("I set Price/Name/Price State");
  };

  clickDecafHandler = decaf => {
    this.setState({
      coffee: {
        ...this.state.coffee,
        decaf
      }
    });
    console.log("I set Decaf State");
  };

  clickMilkHandler = milk => {
    this.setState({
      coffee: {
        ...this.state.coffee,
        milk
      }
    });
    console.log("I set Decaf State");
  };

  onAddToCart = () => {
    this.setState({
      orders: [...this.state.orders, this.state.coffee]
    });
    this.setState({
      coffee: {
        name: "",
        size: "",
        price: 0,
        decaf: false,
        milk: ""
      }
    });
    console.log("Added to cart");
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="coffeeCards">
            <CoffeeCards
              data={coffeeTypes[0]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
            <CoffeeCards
              data={coffeeTypes[1]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
            <CoffeeCards
              data={coffeeTypes[2]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
            <CoffeeCards
              data={coffeeTypes[3]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
            <CoffeeCards
              data={coffeeTypes[4]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
            <CoffeeCards
              data={coffeeTypes[5]}
              clickSizePriceHandler={this.clickSizePriceHandler}
              clickDecafHandler={this.clickDecafHandler}
              clickMilkHandler={this.clickMilkHandler}
              coffeeOrder={this.state.coffee}
              onAddToCart={this.onAddToCart}
            />
          </div>
          <Cart orders={this.state.orders} />
        </div>

        <Footer />
      </div>
    );
  }
}

//// remove before production
//  {
// name: "Americanno",
// size: "Medium",
// price: "2.99",
// decaf: "true",
// milk: "Full"
// }
