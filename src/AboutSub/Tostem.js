import React, { Component } from "react";
import Footer from '../Footer.js'
 
class Tostem extends Component {
  render() {
    return (
      <div>
        <h1>OUR BRAND TOSTEM</h1>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        <div>
          <Footer/>
          </div>
      </div>
    );
  }
}
 
export default Tostem;