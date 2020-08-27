import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Footer from './Footer.js'
import conpic from './contact.png'
import add from './Contactpic/add.png'
import phone from './Contactpic/phone.png'
import mail from './Contactpic/mail.png'
import glass from './Contactpic/contactglass.jpg'

 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="contacttitle">CONTACT US</h1>
<div>
  <img src={glass}  className="contactpic" alt="contactpic"/>
  <img src={add} className="contactaddress" alt="contactaddress"/>
  <p className="contactaddresstext">Address: LIXIL (Philippines) Public Co.,Ltd.
<br/>1/6 Moo 1, Phaholyothin Road K.M.32,
<br/>Klongnueng,Klongluang, Pathumthan
</p>
<img src={phone} className="contactphone" alt="contactphone"/>
<p className="contactphonetext">
<br/>Tel : +63 0000 0000
<br/>Fax : +63 0000 0000
</p>

<img src={mail} className="contactmail" alt="contactemail"/>
<p className="contactmailtext">Email: lixil@email.com.ph</p>
<div  className="contactmessage">
<h2><font color ="gray">Send Us a Message</font></h2>
<p><font color ="gray">Full Name:</font></p>
<input
          type="text" class="input" name="name"
        />
        
<br/><p><font color ="gray"> Email:</font></p>
<input
          type="text" class="input" name = "email"
        />
<br/><p><font color ="gray"> Phone:</font></p>
<input
          type="text" class="input" name = "phone"
        />
<br/><p><font color ="gray">Message:</font></p>
<input
          type="text" class="input" name = "message"
        />
</div>
  </div>
  <br/>
        <div>
          <Footer/>
          </div>
      </div>

    );
  }
}
export default Contact;