import React, { Component } from "react";
import sm1 from './Social/fb.png';
import sm2 from './Social/ig.png';
import sm3 from './Social/li.png';
import sm4 from './Social/twitter.png';
import sm5 from './Social/yt.png';

class Footer extends Component {
    render() {
      return (

        <div>
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
  export default Footer;