import React, { Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Products";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Dealer from "./Dealer";
import Quotation from "./Quotation";
import Giesta from "./Giesta";
import Professionals from "./Professionals";
import logo from './tostemlogo.png'
import './App.css';
import './Dropdown.css';
import Lixil from './Lixil';
import Journey from './AboutSub/Journey.js';
import Team from './AboutSub/Team.js';
import Tostem from './AboutSub/Tostem.js';
import Grants from './ProductSub/Grants.js';
import Weplus from './ProductSub/Weplus.js';
import Prodgiesta from './ProductSub/Prodgiesta.js';





class Main extends Component {
  
  render() {
   
    return (
        <HashRouter>
        
            <div className="App">
      <div className="container-fluid">
<div className="row">

</div>
      </div>
              <header className="App-header">
              
                <p>
                  <code></code>
                </p>
             
              </header>
         


          <ul className="header">
          <li><NavLink exact to="/">HOME</NavLink></li>
         <li><NavLink to="/about">ABOUT US </NavLink></li>
            <li><NavLink to="/product">PRODUCTS</NavLink></li>
            <li><NavLink to="/gallery">GALLERY</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            <li><NavLink to="/dealer">DEALER</NavLink></li>
            <li> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <img src={logo} className="App-logo" alt="logo" />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </li>
            <li><NavLink to="/quotation">ONLINE QUOTATION</NavLink></li>
            <li ><NavLink to="/giesta">GIESTA DESIGN SIMULATION</NavLink></li>
            <li ><NavLink to="/professionals">FOR PROFESSIONALS</NavLink></li>
           

            
          </ul>

          <div className="content">
          <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/product" component={Product}/>
  <Route path="/gallery" component={Gallery}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/dealer" component={Dealer}/>
  <Route path="/quotation" component={Quotation}/>
  <Route path="/giesta" component={Giesta}/>
  <Route path="/professionals" component={Professionals}/>
  <Route path="/lixil" component={Lixil}/>
  <Route path="/journey" component={Journey}/>
  <Route path="/team" component={Team}/>
  <Route path="/tostem" component={Tostem}/>
  <Route path="/grants" component={Grants}/>
  <Route path="/weplus" component={Weplus}/>
  <Route path="/prodgiesta" component={Prodgiesta}/>

          </div>
        
        </div>
      
        </HashRouter>
    );
  }
}
 
export default Main;