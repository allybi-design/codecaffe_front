import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// compoonents
import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";

// views
import Home from "./components/Index";
import Location from "./components/location";
import Login from "./components/login";
import BarristerView from "./components/BarristerView.jsx";
import Spill from "./components/spill";
import Loyalty from "./components/loyalty";

// styles
import "./styles/App.css";

function NavLinks() {
  return (
    <nav className="navbar">
      <Link id="navbar_btn" to="/">
        Order a Coffee
      </Link>
      <Link className="navbar_btn" to="/loyalty">
        Loyalty
      </Link>
      <Link className="navbar_btn" to="/location">
        Location
      </Link>
      <Link className="navbar_btn" to="/spill">
        Spill the Beans
      </Link>
      <Link className="navbar_btn" to="/barrista">
        Barrista View
      </Link>
      <Link className="navbar_btn" to="/login">
        Sign In / Register
      </Link>
    </nav>
  );
}

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
        <NavLinks />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                orders={this.state.orders}
                clickSubmitHandler={this.clickSubmitHandler}
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

          <Route path="/barrista" component={BarristerView} />

          <Route path="/login" component={Login} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}
