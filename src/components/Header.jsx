import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({username, handleLogOut}) => (
  <header className="flex items-center justify-between bg-blue-500 p-4">
    <Link to={'/'} >
      <h1 className="text-[50px] "> 🏠 </h1>
    </Link>

  {
    username ?
    <div className=' grid' >
      <h1 className='my-4 text-lg text-white' >Hola {username} </h1>
      <button className='p-4 bg-red-500 text-white my-2 '  onClick={handleLogOut} > Log out</button>
    </div>
    : 
      <Link to='/login' >
      <button className="Button">Login</button>
      </Link>
  }

  </header>
);

export default Header;