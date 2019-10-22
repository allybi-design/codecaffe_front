import React from "react";
import "../styles/spill.css";

class Spill extends React.Component {
  render() {
    return (
      <div className="beansAndImage">
                           
        <div className="Image2">
                                 
          <img src="/images/fairtradecoffee.jpg" alt="ourcoffeebeans" />
                             
        </div>
                           
        <div className="beansDescription">
            <header> Our coffee…></header>
          <br />
                                     
          <p>
            Amazing coffee doesn't just simply
            happen. It takes a modern approach. It's the endless pursuit of
            becoming something better in order to make a lasting impact to
            elevate those around us.
            <br />
                                           We focus on relationships. Our house
            espresso is a single origin coffee from Código Nacional in
            Guatemala. We regularly feature guest espresso from some of the best
            roasters in Europe and further afield. On the brew bar, we serve a
            range of single origin coffees that change on a weekly basis. We are
            dedicated to sourcing some of the best coffees available in Europe
            and obsessive in our desire to serve you the best possible drink.
                                       
          </p>
                             
        </div>
                       
      </div>
    );
  }
}

export default Spill;
