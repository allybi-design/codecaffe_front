import React from "react";
import "../styles/location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="locationPage">
           
        <div className="phoneNumber">      
          <div>
            <i className="fas fa-phone fa-4x"></i>
          </div>
          <span> 0333 050 4570 </span>
        </div>
           
        <div className="address">        
          <div>
            <i className="fas fa-map fa-4x"></i>
          </div>
          <span> 19 Spring Gardens, Manchester M2 1FB</span>
        </div>
           
        <div className="email">
          <div>
            <i className="fas fa-envelope-open fa-4x"></i>
          </div>
          <span> hello@wearecodenation.com </span>
        </div>

        <div className="mapImage">
          <img src="/images/LocationStatic.png" alt="Our location" />                       
        </div>
      </div>
    );
  }
}

export default Location;
