import React from "react";


export default function Ordercard(props) {
  if (!props.card) return null;

    return (
      <div className="card">
        <div className="removecart">
          <button className="deletebtn fas fa-times-circle fa-3x"></button>
        </div>
       
        <div className="details">
          <h2 className="details-title">Coffee Type Here</h2>
          <p className="details-short-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h3 className="price">£2.50</h3>
          <div className="additions">
            <button className="minusbtn fas fa-minus-circle fa-2x"></button>
            <h1 className="qty">1</h1>
            <button className="plusbtn fas fa-plus-circle fa-2x"></button>
          </div>
        </div>
      </div>
    );

}
