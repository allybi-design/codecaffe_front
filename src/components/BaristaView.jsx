import React, { Component } from "react";
import axios from "axios";

import "../styles/BaristaView.css";

export default class BarristerView extends Component {
  state = {
    orders: []
  };

  getData = () => {
    axios.get("http://localhost:3000/getOrders")
      .then(res => {
        this.setState({
          orders: res.data
        })
      })
  }

  componentDidMount() {
    this.getData()
  };

  delCoffee(id) {
    console.log(`del item - ${id}`);
    axios.delete(`http://localhost:3000/delOrder/${id}`)
      .then(res => {
       this.getData()
      })
  }

  render() {
    return (
      <div id="baristerview" className="container">
        <div className="tableHeading">
          <h1>Barrister View</h1>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Coffee Type</th>
              <th>Size</th>
              <th>Decaf</th>
              <th>Milk</th>
              <th>Delete</th>
            </tr>
            {this.state.orders.map((order) => {
              return (
                <tr key={order.orderID}>
                  <th>{order.orderID}</th>
                  <th>{order.coffeeName}</th>
                  <th>{order.coffeeSize}</th>
                  <th>{order.caffeine}</th>
                  <th>{order.milktype}</th>
                  <th><i className="fas fa-times-circle" onClick={()=> this.delCoffee(order.orderID)}></i></th>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}
