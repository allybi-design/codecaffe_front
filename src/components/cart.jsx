import React, { Component } from "react";

import "../styles/cart.css";

class Cart extends Component {

  render() {
    return (
      <aside className="cart">
        <div className="orders"> 
          <div className="logo">
            <i className="fas fa-shopping-cart fa-3x"></i>
            <h2>Basket</h2>
          </div>
          <div className="orderCards">
            {this.props.orders.map((order, index) => {
              return <Cards className="card" order={order} key={index} />;
            })}
          </div>
        </div>
        <button
          className="confirmBtn"
          onClick={() => this.props.submitOrder(this.props.orders[0])}
          >
          Click Confirm for Order
        </button>
      </aside>
    );
  }
}

class Cards extends Component {
  render() {
    return (
      <react-fragment>
        <h2>
          {this.props.order.size} {this.props.order.name}
        </h2>
        <h3>
          Made with {this.props.order.milk} milk <br />
          <p>{this.props.order.decaf}</p>
        </h3>
        <h2>1 @ £{this.props.order.price}</h2>
      </react-fragment>
    );
  }
}

export default Cart;
