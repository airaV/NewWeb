import React, { Component } from "react";
import Footer from '../Footer.js'
import j1 from '../journey.jpg'
 
class Journey extends Component {
  render() {
    return (
      <div>
       <div className="journeyback">

<img src={j1} className="aboutpic" alt="aboutpic" />
<p className="aboutjour"><h1>OUR JOURNEY</h1>
<br/>TOSTEM engages in the product development, manufacturing and marketing of such diverse products as window sash, entrance doors, and exterior products, to realize one single, simple concept that we call ”Aesthetic Housing Envelope”.</p>
</div>
        <div>
          <Footer/>
          </div>
      </div>
    );
  }
}
 
export default Journey;