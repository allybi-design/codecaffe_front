import React from "react";
import "../styles/loyalty.css";

class Loyalty extends React.Component {
  render() {
    return (
      <div className="ccClub">
         <header id="loyaltyHeader">CC Club</header>
         <label id="loyaltyLabel">Free Drinks</label>
                                   
        <p>Register now and your first coffee is on us!</p>
                                   
        <p>
          When you order 9 drinks online your 10th drink will be free. A little
          thank you from us! It's easy to set up an account, just click on
          register above.
        </p>
                                           
        <div>
          <p>Download the app to see even more benefits.</p>
                                             
        </div>
                       
      </div>
    );
  }
}

export default Loyalty;
