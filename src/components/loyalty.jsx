import React from "react";
import "../styles/loyalty.css";

class Loyalty extends React.Component {
  render() {
    return (
      <div className="ccClub">
        <h2>Why not join the:</h2>
        <h1 className="title">Code-Coffee-Club</h1>
        <h3>And claim your -</h3>
        <h1>Free Drinks</h1>                           
        <p>Register now and your first coffee is on us!</p>       
        <p>
          When you order 9 drinks online your 10th drink will be free. A little
          thank you from us! It's easy to set up an account, just click on
          register above.
        </p>
        <p>Download the app to see even more benefits.</p>                                               
      </div>
    );
  }
}

export default Loyalty;
