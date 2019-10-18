import React from "react";

import "../styles/CoffeeTypes.css";

const CoffeeTypes = props => {

  return (
    <div className="chooseCoffee">
      <div className="headerAndImage">
        <header>{props.data.type}</header>
        <div className="imageContainer">
          <img src={"/images/" + props.data.image} alt="coffeeImage" />
        </div>
      </div>

      <p className="coffeeDescription"> {props.data.description}</p>

      <div className="coffeeOptionsBox">
        <div className="sizeOfCupBox">
          <label>Size</label>
          <div className="coffeeIcons">
            <div className="cupSize">
              <i className="fas fa-coffee "></i>
              <label>Small ({props.data.size[0]})</label>
              <div>
                <input
                  name="sizeButton"
                  type="radio"
                  onChange={() =>
                    props.clickSizePriceHandler(
                      props.data.type,
                      "Small",
                      props.data.size[0]
                    )
                  }
                />
              </div>
            </div>
            <div className="cupSize">
              <i className="fas fa-coffee fa-2x"></i>
              <label>Medium ({props.data.size[1]})</label>
              <div>
                <input
                  name="sizeButton"
                  type="radio"
                  onChange={() =>
                    props.clickSizePriceHandler(
                      props.data.type,
                      "Medium",
                      props.data.size[1]
                    )
                  }
                />
              </div>
            </div>
            <div className="cupSize">
              <i className="fas fa-coffee fa-3x"></i>
              <label>Large ({props.data.size[2]})</label>
              <div>
                <input
                  name="sizeButton"
                  type="radio"
                  onChange={() =>
                    props.clickSizePriceHandler(
                      props.data.type,
                      "Large",
                      props.data.size[2]
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="caffeineBox">
          <label>Decaf</label>
          <div className="coffeeIcons">
            <div className="">
              <i className="fas fa-bed fa-2x"></i>
              <div>
                <input
                  name="decafButton"
                  type="checkbox"
                  onChange={() => props.clickDecafHandler("Decaf - True")}
                />
              </div>
              <label>Yes</label>
            </div>
          </div>
        </div>

        <div className="milkTypeBox">
          <label>Milk Options</label>
          <div className="coffeeIcons">
            <div className="milkType">
              <i className="fas fa-battery-full fa-2x"></i>
              <label>Full</label>
              <div>
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Full")}
                />
              </div>
            </div>
            <div className="milkType">
              <i className="fas fa-battery-half fa-2x"></i>
              <label>Semi</label>
              <div>
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Semi")}
                />
              </div>
            </div>
            <div className="milkType">
              <i className="fas fa-bread-slice fa-2x"></i>
              <label>Oat</label>
              <div>
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Oat")}
                />
              </div>
            </div>
            <div className="milkType">
              <i className="fas fa-seedling fa-2x"></i>
              <label>Soya</label>
              <div>
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Soya")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="cartBox" onClick={props.addToCart}>
        <span>Add to Order</span>
        <i className="fas fa-cart-plus fa-2x"></i>
      </button>
    </div>
  );
};

export default CoffeeTypes;
