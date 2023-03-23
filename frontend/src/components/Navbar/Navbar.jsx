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
    // <div className="navbar">
    //   <div className="Navbar_container">
    //     <div className="nav"></div>
    //     <nav>
    //       <ul className="list">
    //         <li className="items">
    //           <a href="/" className="items_a">
    //             Euroamerica
    //           </a>
    //         </li>

    //         <li className="items">
    //           <a href="/newclient" className="items_a">
    //             Alta Cliente
    //           </a>
    //         </li>
    //         <li className="items">
    //           <a href="/travel" className="items_a">
    //             Alta Viaje
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default Navbar;
