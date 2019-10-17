import React from "react";

import "../styles/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="loginReg container">
                    
        <div className="login">
          <button className="fb-login social-login">
             <i class="fab fa-facebook"></i>
            Login with Facebook
                               
          </button>
                          
          <button className="google-login social-login">
             Login with Google                    
          </button>
                      
        </div>
             
      </div>
    );
  }
}

export default Login;
