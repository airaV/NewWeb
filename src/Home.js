import React, { Component } from "react";
import Slider from './Slider';
import i1 from './brands/americanS.jpg';
import i2 from './brands/grohe.jpg';
import i3 from './brands/inax.png';
import i4 from './brands/jaxson.jpg';
import i5 from './brands/tostem.jpg';
import sm1 from './Social/fb.png';
import sm2 from './Social/ig.png';
import sm3 from './Social/li.png';
import sm4 from './Social/twitter.png';
import sm5 from './Social/yt.png';

 
class Home extends Component {
  render() {
    return (
      <div>
       
        <Slider/>
      
        <div className="lixcontent">
        <h1>Who is Tostem</h1>

        <p className="lixtext">
        Recognized as the industry leading brand in Japan for global housing and building materials, TOSTEM provides a comprehensive range of solutions to ensure our winning advantage in a highly on over a half-century of experience and expertise in developing innovative technology that anticipates not only the needs of society tomorrow, but the needs of clients and consumers here and now.
TOSTEM engages in the product development, manufacturing and marketing of such diverse products as window sash, entrance doors, and exterior products, to realize one single, simple concept that we call ”Aesthetic Housing Envelope”.
        </p>
        </div>
      <div >


<table className="footer">
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
      
      
    );
  }
}
 
export default Home;