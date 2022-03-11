import React, { Component } from 'react';
import Home from './Home';
import Farmerp from './Farmerp';
import Meatshop from './Meatshop';
import { Route,Link } from "react-router-dom";

import Navbar from './Navbar';

function App(){
// n

    return (
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Farmerp" component={Farmerp}/>
      <Route exact path="/Meatshop" component={Meatshop}/>

      </div>

    );

}

export default App;
