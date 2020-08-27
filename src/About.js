import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import p1 from './Aboutpic/group1.png'
import p2 from './Aboutpic/journey1.png'
import p3 from './Aboutpic/team1.png'
import p4 from './Aboutpic/tostem1.png'
import lixil from './tos.jpg'
import sm1 from './Social/fb.png';
import sm2 from './Social/ig.png';
import sm3 from './Social/li.png';
import sm4 from './Social/twitter.png';
import sm5 from './Social/yt.png';
import vision from './vision.png';


 
class About extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <div className="aboutpicback">

<img src={lixil} className="aboutpic" alt="aboutpic" />
<p className="aboutLix"><h1>ABOUT US</h1>
<br/>TOSTEM engages in the product development, manufacturing and marketing of such diverse products as window sash, entrance doors, and exterior products, to realize one single, simple concept that we call ”Aesthetic Housing Envelope”.</p>


        <h1 className="abouttitle">Who is Tostem</h1>

        <p className="aboutcontent">
          Recognized as the industry leading brand in Japan for global housing and building materials, 
        <br/>TOSTEM provides a comprehensive range of solutions to ensure our winning advantage in a 
        <br/>highly on over a half-century of experience and expertise in developing innovative 
        <br/>technology that anticipates not only the needs of society tomorrow, but the needs of 
        <br/>clients and consumers here and now.TOSTEM engages in the product development, manufacturing
        <br/> and marketing of such diverse products as window sash, entrance doors, and exterior 
        <br/>products, to realize one single, simple concept that we call ”Aesthetic Housing Envelope”.

        
        </p>
       
        <div className="aboutnext">
      <NavLink to="/lixil"><img src={p1} className="aboutp1"  alt="aboutp1"/></NavLink> 
      <NavLink to="/journey"><img src={p2} className="aboutp2"  alt="aboutp2"/></NavLink> 
      <NavLink to="/team"> <img src={p3} className="aboutp3"  alt="aboutp3"/></NavLink>
      <NavLink to="/tostem"> <img src={p4} className="aboutp4" alt="aboutp4"/></NavLink>
        
         </div>

     
        


         <div className="vision">
           <p ><font color="black"> <b>VISION</b> </font><br/>
           <font color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus 
           vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. Vivamus a elementum neque, 
           ut condimentum turpis. Donec eu pretium diam. Nam euismod tortor interdum scelerisque porta. Nam 
           nec augue lorem. Etiam vitae nisi id libero commodo sagittis. </font></p>
           <p ><font color="black"> <b>MISSION</b> </font><br/>
           <font color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus 
           vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. Vivamus a elementum neque, 
           ut condimentum turpis. Donec eu pretium diam. Nam euismod tortor interdum scelerisque porta. Nam 
           nec augue lorem. Etiam vitae nisi id libero commodo sagittis. </font></p>
     
           </div>
           <div className="visionpic">
             <img src={vision}alt="visionpic"/>
             </div>
  

      </div>
      <div>
<table className="footerAbout">
  <tr>
    <th>
    <b>REGIONAL SITES</b>
    </th>
    <th><b>PRODUCTS</b></th>
    <th><b><font color="black">Sign up for our Newsletter:</font></b></th>
    </tr>
    <tr>
    <td>Thailand</td>
   <td>Windows & Doors </td>
   <td>For the latest on Lixil innovations, 
   </td>
    </tr>
    <tr>
    <td>Philippines</td>
    <td>Entrance Doors</td>
    <td>promotions, and more, sign up for </td>
      </tr>
      <tr>
      <td>Indonesia</td>
      <td>Exterior</td>
      <td>the Lixil newsletter!</td>
      </tr>
      <tr>
      <td>Vietnam</td>
      <td>Toilets</td>

      </tr>
      <tr>
      <td>Korea</td>
      <td>Wash Basins</td>
      <td><button className="signbtn">Sign Up</button> </td>
      </tr>
      <tr>
        <td>Singapore</td>
        </tr>
        <tr>
        <td>Taiwan</td>
        <td></td>
        <td><font color="black">Follow Us</font></td>
        </tr>
        <tr>
        <td>India</td>
        <td></td>
        <td>
        <img src={sm1} alt="sm1"/> &nbsp;&nbsp;
        <img src={sm2} alt="sm2"/>&nbsp;&nbsp;
        <img src={sm3} alt="sm3"/>&nbsp;&nbsp;
        <img src={sm4} alt="sm4"/>&nbsp;&nbsp;
        <img src={sm5} alt="sm5"/>
        </td>
        </tr>
  
  </table>


      </div>
      <p>©2020 TOSTEM</p>
      </div>
      </HashRouter>
    );
  }
}
 
export default About;