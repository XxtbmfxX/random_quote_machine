import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({username}) => (
  <header className="flex items-center justify-between bg-blue-500 p-4">
    <Link to={'/'} >
      <h1 className="text-white text-2xl font-bold"> {"(*^_^*)"} 🥸 {"(*^_^*)"} </h1>
    </Link>

  {
    username ?
    <h1>Hola {username} </h1>
    : 
      <Link to='/login' >
      <button className="Button">Login</button>
      </Link>
  }

  </header>
);

export default Header;