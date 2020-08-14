import React, { Component } from "react";
import Footer from './Footer.js'
import lixil from './lix.PNG'


class Lixil extends Component {
  render() {
   
    return (
      <div>
    
        <div className="lixpicback">

<img src={lixil} className="aboutpic" alt="aboutpic" />
<p className="aboutLix"><h1>ABOUT LIXIL</h1>
<br/>TOSTEM engages in the product development, manufacturing and marketing of such diverse products as window sash, entrance doors, and exterior products, to realize one single, simple concept that we call ”Aesthetic Housing Envelope”.</p>
</div>
<div className="lixcontent">
        <h1>Who is Lixil</h1>

        <p className="lixtext">
        LIXIL makes pioneering water and housing products that make better homes a reality for everyone, everywhere. A better home is made up of surprisingly simple things – baths to escape in after a long day; kitchens that unleash creativity; toilets that provide cleanliness and comfort; doors and windows that connect you with the world outside; showers and faucets to experience water in new ways; interiors and exteriors that bring spaces to life.

        
        </p>
        </div>

        <div>
          <Footer/>
          </div>
      </div>
    );
  }
}
 
export default Lixil;