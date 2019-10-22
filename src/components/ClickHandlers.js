// import React from "react";

const clickSizePriceHandler = (name, size, price) => {
  this.setState({
    coffee: {
      ...this.state.coffee,
      name,
      size,
      price
    }
  });
};

const clickDecafHandler = decaf => {
  this.setState({
    coffee: {
      ...this.state.coffee,
      decaf
    }
  });
  console.log("I set Decaf State");
};

const clickMilkHandler = milk => {
  this.setState({
    coffee: {
      ...this.state.coffee,
      milk
    }
  });
  console.log("I set Decaf State");
};

export default {
  clickSizePriceHandler,
  clickDecafHandler,
  clickMilkHandler
};
