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

      <div className="coffeeOptionsBox">
        <div className="options">
          <h3>Size</h3>
          <div className="cupSize">
            <i className="fas fa-coffee "></i>
            <h4>Small ({props.data.size[0]})</h4>
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
            <span>Large ({props.data.size[2]})</span>
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

        <div className="options">
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

        <div className="options">
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
