import React from "react";

const CoffeeTypes = props => {
  return (
    <div className="coffeecard">
      <div className="headerAndImage">
        <h1>{props.data.type}</h1>
        <div className="imageContainer">
          <img src={"/images/" + props.data.image} alt="coffeeImage" />
        </div>
      </div>

      <p className="coffeeDescription">{props.data.description}</p>

      <div className="optionsContainer">

        <div className="size">
          <h3>Size</h3>
          <div className="options">
            <div className="option">
              <i className="fas fa-coffee "></i>
              <div className="input">
                <label>Small</label>
                <label>(£{props.data.size[0]})</label>
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
            <div className="option">
              <i className="fas fa-coffee fa-2x"></i>
              <div className="input">
                <label>Medium</label>
                <label>£{props.data.size[1]})</label>
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
            <div className="option">
              <i className="fas fa-coffee fa-3x"></i>
              <div className="input">
                <label>Large</label>
                <label>(£{props.data.size[2]})</label>
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

        <div className="decaf">
          <h3>Decaf</h3>
          <div className="options">
            <div className="option">
              <i className="fas fa-bed fa-2x"></i>
              <div className="input">
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

        <div className="milk">
          <h3>Milk Options</h3>
          <div className="options">
            <div className="option">
              <i className="fas fa-battery-full fa-2x"></i>
              <label>Full</label>
              <div className="input">
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Full")}
                />
              </div>
            </div>
            <div className="option">
              <i className="fas fa-battery-half fa-2x"></i>
              <label>Semi</label>
              <div className="input">
                <input
                  name="milkButton"
                  type="radio"
                  onChange={() => props.clickMilkHandler("Semi")}
                />
              </div>
            </div>
            <div className="option">
              <i className="fas fa-bread-slice fa-2x"></i>
              <label>Oat</label>
              <div className="input">
                <input
                  name="milkButton"
                  type="radio" 
                  onChange={() => props.clickMilkHandler("Oat")}
                />
              </div>
            </div>
            <div className="option">
              <i className="fas fa-seedling fa-2x"></i>
              <label>Soya</label>
              <div className="input">
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
