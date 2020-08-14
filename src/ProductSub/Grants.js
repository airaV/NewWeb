import React, { Component } from "react";
import Footer from '../Footer.js'
import g from '../g.png'
import '../Grants.css';

class Grants extends Component {
  render() {
    return (
      <div>
       <div className="journeyback">

<img src={g} className="aboutpic" alt="aboutpic" />
<p className="grant"><h1>GRANTS</h1>
<br/>TOSTEM engages in the product development, manufacturing and marketing of such diverse products as window sash, entrance doors, .</p>

</div>
<div className="overview">

   <h1 className="ov">O V E R V I E W</h1>  
   <p className="ovtext">LIXIL makes pioneering water and housing products that make better homes a reality for everyone, everywhere. A better home is made up of surprisingly simple things – baths to escape in after a long day; kitchens that unleash creativity; toilets that provide cleanliness and comfort; doors and windows that connect you with the world outside; showers and faucets to experience water in new ways; interiors and exteriors that bring spaces to life.

</p>
   
        </div>
        <div className="description">

   <h1 className="ov">D E S C R I P T I O N</h1>  
   <p className="ovtext">LIXIL makes pioneering water and housing products that make better homes a reality for everyone, everywhere. A better home is made up of surprisingly simple things – baths to escape in after a long day; kitchens that unleash creativity; toilets that provide cleanliness and comfort; doors and windows that connect you with the world outside; showers and faucets to experience water in new ways; interiors and exteriors that bring spaces to life.

</p>
   
        </div>
        <div className="overview">

<h1 className="ov">S P E C I F I C A T I O N</h1>  
<p className="ovtext">LIXIL makes pioneering water and housing products that make better homes a reality for everyone, everywhere. A better home is made up of surprisingly simple things – baths to escape in after a long day; kitchens that unleash creativity; toilets that provide cleanliness and comfort; doors and windows that connect you with the world outside; showers and faucets to experience water in new ways; interiors and exteriors that bring spaces to life.

</p>

     </div>
     <div>
       <h1>G A L L E R Y</h1>
       </div>
<div>
          <Footer/>
          </div>
      </div>
    );
  }
}
 
export default Grants;