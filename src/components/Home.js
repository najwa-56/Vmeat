import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Home extends Component {

  render() {
    return (

      <div className="container-fluid mt-5">
         <h1>welcome </h1>
         <ul>
           <li>
           <Link to="/">Home</Link>
           </li>
           <li>
           <Link to="/Farmerp">Farmer</Link>
           </li>
           <li>
           <Link to="/Meatshop">Meatshop</Link>
           </li>
           <li>
           <Link to="/slaughterhouse">slaughterhouse</Link>
           </li>
         </ul>
    </div>
    );
  }
}

export default Home;
