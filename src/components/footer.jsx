import React from 'react'
import '../styles/footer.css'

class Footer extends React.Component {

    render() {
        return (
          
            <div className="footer">
                 <div className="footercontainer">               
                        
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>
    
                    <div className="icons">
                        <ul>
                        <i className="fab fa-pinterest-square"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-square"></i>
                        </ul>
                    </div>
                     {/* <i class="fa fa-star-o" aria-hidden="true"></i> */}
           
                    <div className="lists">
                        <ul id="leftList">
                        <h3>About us</h3>
                        <h3>Our Story</h3>
                        <h3>Our Ethics</h3>
                        </ul>

                        <ul id="middleList">
                        <h3>Terms & Conditions</h3>
                        <h3>Privacy Policy</h3>
                        </ul>

                        <ul id="rightList">
                        <h3>Contact Us</h3>
                        <h3>FAQ's</h3>
                        </ul>
                    </div>
            
                        <div className="copyright">
                        <i className="far fa-copyright">2019 Cafe Coder Corporation. All rights reserved.</i>
                            <h1> </h1>
                        </div>

                                
                        </div>
            </div>
        )
    }
}
    
export default Footer;
    