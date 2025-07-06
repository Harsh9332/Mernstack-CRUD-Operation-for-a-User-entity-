import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <h1>MERN Web Application</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">User List</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
