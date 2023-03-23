import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">
          <h3>EuroAmerica</h3>
        </Link>
      </div>
      <div className="header-links">
        <Link to="/newclient" className="navButton">
          Alta Cliente
        </Link>
        <Link to="/travel" className="navButton">
          Alta Viaje
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
