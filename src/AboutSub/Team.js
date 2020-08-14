import React, { Component } from "react";
import Footer from '../Footer.js'
import founder from '../zuckerberg.jpg';
import pic2 from '../mark.jpg';
 
class Team extends Component {
  render() {
    return (
      <div>
        <h1>MEET THE TEAM</h1>
        <p><i>Individuals can and do make a difference, but it takes a team to really makes things up</i></p>
       <div>
        <img src={founder} className="teampic" alt=""/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <img src={pic2} className="teampic" alt=""/>
         <p className="teampiccontent"> MARK ZUCKERBERG
         <br/> <i>Founder</i>
         <br/>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
         <p className="teampic2content"> MARK ZUCKERBERG
         <br/> <i>Founder</i>
         <br/>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
        </div>

        <div>
          <Footer/>
          </div>
      </div>
    );
  }
}
 
export default Team;