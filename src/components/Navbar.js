import React, { Component } from 'react';
import {Link } from "react-router-dom";
class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vmeat
        </a>
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
