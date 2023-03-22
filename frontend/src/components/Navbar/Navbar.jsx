import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h3>EuroAmerica</h3>
      </Link>
      <Link to="/newclient" className="navButton">
        Nuevo Cliente
      </Link>
      <Link to="/travel" className="navButton">
        Nuevo Viaje
      </Link>
    </div>
  );
};

export default Navbar;
