import React, { Component } from "react";
import product from './productpic.jpg'

import Footer from './Footer.js';
import {
  NavLink,
  HashRouter
} from "react-router-dom";


class Product extends Component {
  render() {
    return (
      <HashRouter>
      <div>
<div class="navbar">

<div class="dropdown">
  <button class="dropbtn"><p color="black">WINDOWS AND DOORS</p>
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
  <NavLink to="/grants">GRANTS</NavLink>
  <NavLink to="/weplus">WE PLUS</NavLink>

  <NavLink to="/grants">P 70</NavLink>
  <NavLink to="/grants">WE 70</NavLink>
  <NavLink to="/grants">WE 40</NavLink>
  <NavLink to="/grants">INTERIOR SERIES</NavLink>
  </div>
</div> 
<div class="dropdown">
  <button class="dropbtn"><p color="black">TOSTEM DOORS</p>
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <NavLink to="/prodgiesta">GIESTA IN/OUT SWING</NavLink>
  </div>
</div> 
<a href="#news"><p color="black">EXTERIOR</p></a>
</div>


      <div className="productpic">
      <img src={product} className="productpic" alt="productpic" />
      </div>
      
      <div className="productpictext">
          <h1>PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            <br/> elit. Sed sed odio a odio ultricies facilisis. 
            <br/>Vivamus vel egestas mi, ac auctor metus. 
            <br/>Suspendisse egestas sodales posuere. </p>
          </div>

<div>
  <Footer/>
  </div>
      </div>
      </HashRouter>

    );
  }
}
 
export default Product;