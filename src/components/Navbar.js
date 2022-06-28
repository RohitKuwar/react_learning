import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to='/' style={{ marginLeft: "5px" }}>
          Home
        </Link>
        <Link to='/about' style={{ marginLeft: "5px" }}>
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;