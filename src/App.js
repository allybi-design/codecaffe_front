// import mods
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import compoonents
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";

//import click Handlers
// import {
//   clickSizePriceHandler,
//   clickDecafHandler,
//   clickMilkHandler
// } from "./components/ClickHandlers";

// import views
import Home from "./components/Home.jsx";
import Location from "./components/location.jsx";
import Login from "./components/login.jsx";
import BaristaView from "./components/BaristaView.jsx";
import Spill from "./components/spill.jsx";
import Loyalty from "./components/loyalty.jsx";

// import styles
import "./styles/App.css";

export default class App extends Component {
  state = {
    orders: [],
    coffee: {
      name: "",
      size: "",
      price: 0,
      decaf: false,
      milk: "No"
    }
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

  addToCart = () => {
    this.setState({
      orders: [...this.state.orders, this.state.coffee]
    });

    this.setState({
      coffee: {
        name: "",
        size: "",
        price: 0,
        decaf: false,
        milk: "No"
      }
    });
  };

  submitOrder = async order => {
    await axios
      .post("http://localhost:3000/postOrder", {
        coffeeName: order.name,
        coffeeSize: order.size,
        coffeePrice: order.price,
        caffeine: order.decaf,
        milktype: order.milk
      })
      .then(res => {
        this.setState({
          coffee: {
            name: "",
            size: "",
            price: 0,
            decaf: false,
            milk: "No"
          },
          orders: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                orders={this.state.orders}
                clickSizePriceHandler={this.clickSizePriceHandler}
                clickDecafHandler={this.clickDecafHandler}
                clickMilkHandler={this.clickMilkHandler}
                addToCart={this.addToCart}
                submitOrder={this.submitOrder}
              />
            )}
          />

          <Route path="/loyalty" component={Loyalty} />

          <Route path="/location" component={Location} />

          <Route path="/spill" component={Spill} />

          <Route path="/barrista" component={BaristaView} />

          <Route path="/login" component={Login} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}
