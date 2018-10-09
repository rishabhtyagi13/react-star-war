import {NavLink} from 'react-router-dom';
import React from 'react';
const Header = () => (
  <header>
  <div>
    <nav id="myNavbar" className="navbar navbar-inverse" role="navigation">   
      <div className="container" style={{display: "contents"}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>        
        </div>      
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink id="home" className="nav-link"  to="/">Home</NavLink></li>
            <li><NavLink id="search" className="nav-link"  to="/search">Search</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">          
            <li><NavLink className="dropdown-item" to="/logout">Logout</NavLink></li>
          </ul>
		    </div>
      </div>
    </nav>
</div>

  </header>
);


export default Header;


  