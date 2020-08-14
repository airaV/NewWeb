import React, { Component } from "react";
import Footer from './Footer.js'
import conpic from './contact.png'
import add from './Contactpic/add.png'
import phone from './Contactpic/phone.png'
import mail from './Contactpic/mail.png'

 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="contacttitle">CONTACT US</h1>
<div>
  <img src={conpic}  className="contactpic" alt="contactpic"/>
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
<p className="contactmailtext">lixil@email.com.ph</p>
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