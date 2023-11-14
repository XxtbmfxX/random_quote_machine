import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex items-center justify-between bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold">My Website</h1>
      <Link to='/login' >
      <button className="Button">Login</button>
      </Link>
  </header>
);

export default Header;