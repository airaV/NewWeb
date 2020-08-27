import React, { Component } from "react";
import Slider from './Slider';
import sm1 from './Social/fb.png';
import sm2 from './Social/ig.png';
import sm3 from './Social/li.png';
import sm4 from './Social/twitter.png';
import sm5 from './Social/yt.png';
import h1 from './Highlight/Feature_1.jpg';
import news from './news.jpg';

 
class Home extends Component {
  render() {
    return (
      <div>
       
        <Slider/>
      
        <div className="lixcontent">
        <h1>Products Highlight</h1>

<img src={h1} className="hilight" alt="h1"/>
<p className="hilighttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies dolor leo, et aliquet neque semper sit amet. Maecenas a posuere justo, vitae pretium orci. Phasellus cursus ex in dui fringilla, et finibus erat egestas. Vestibulum mattis lectus tincidunt dapibus scelerisque. Curabitur a sapien tempor, congue leo vel, vestibulum enim. Morbi ut lobortis purus. Morbi non lobortis urna. Nulla facilisi. Aenean maximus odio ac egestas gravida. Pellentesque sed purus scelerisque, pellentesque felis et, dapibus metus.</p>
<img src={h1} className="hilight2" alt="h1"/>   
<p className="hilighttext2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies dolor leo, et aliquet neque semper sit amet. Maecenas a posuere justo, vitae pretium orci. Phasellus cursus ex in dui fringilla, et finibus erat egestas. Vestibulum mattis lectus tincidunt dapibus scelerisque. Curabitur a sapien tempor, congue leo vel, vestibulum enim. Morbi ut lobortis purus. Morbi non lobortis urna. Nulla facilisi. Aenean maximus odio ac egestas gravida. Pellentesque sed purus scelerisque, pellentesque felis et, dapibus metus.</p>
<img src={h1} className="hilight3" alt="h1"/>   
<p className="hilighttext3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies dolor leo, et aliquet neque semper sit amet. Maecenas a posuere justo, vitae pretium orci. Phasellus cursus ex in dui fringilla, et finibus erat egestas. Vestibulum mattis lectus tincidunt dapibus scelerisque. Curabitur a sapien tempor, congue leo vel, vestibulum enim. Morbi ut lobortis purus. Morbi non lobortis urna. Nulla facilisi. Aenean maximus odio ac egestas gravida. Pellentesque sed purus scelerisque, pellentesque felis et, dapibus metus.</p>
       
       
        </div>
<div className="newsevent">
  <p className="newseventtitle">News &amp; Event</p>
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