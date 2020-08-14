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
      
        <div>
        <h2 className="hometitle">EXPLORE OUR BRANDS</h2>
        <a href="https://americanstandard.com.ph/"><img src={i1} className="homebrands1" alt="i1" /></a>
        <a href="https://www.grohe.ph/en_ph/"><img src={i2} className="homebrands2" alt="i2" /></a>
        <a href="https://www.inax.com/"><img src={i3} className="homebrands3" alt="i3" /></a>
        <a href="https://jaxson.jp/"><img src={i4} className="homebrands4" alt="i4" /></a>
        <a href="https://www.tostemthailand.com/"><img src={i5} className="homebrands5" alt="i5" /></a>

        <p className="brand1Content">AMERICAN STANDARD</p>
        <p className="brand2Content">GROHE</p>
        <p className="brand3Content">INAX</p>
        <p className="brand4Content">JAXSON</p>
        <p className="brand5Content">TOSTEM</p>
<p className="brand1text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. 
</p>
<p className="brand2text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. 
</p>
<p className="brand3text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. 
</p>
<p className="brand4text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. 
</p>
<p className="brand5text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio a odio ultricies facilisis. Vivamus vel egestas mi, ac auctor metus. Suspendisse egestas sodales posuere. 
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