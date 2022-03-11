import React, { Component } from 'react';
import {Link } from "react-router-dom";
class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div>

         <h1>Vmeat</h1>
        </div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                 <ul>
                   <Link to="/">    Home     </Link>
                 </ul>

          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
