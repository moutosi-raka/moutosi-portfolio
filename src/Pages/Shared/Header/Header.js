import React from 'react';
import { Link } from 'react-router-dom';
import profile1 from  '../../../assests/profile1.webp'
import './Header.css'

const Header = () => {
    const menuItem = <>
    <li><Link>Home</Link></li>
    <li><Link>Resume</Link></li>
    <li><Link>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-transparent w-5/6 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-style menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={profile1}  alt=''/>
  </div>
</div>
    <Link className="btn btn-ghost normal-case text-xl text-deep-green">Moutosi Showrin Raka</Link>
  </div>
  <div className="navbar-center hidden lg:flex navbar-end">
    <ul className="menu-style menu-horizontal px-1">
      {menuItem}
    </ul>
  </div>
</div>
    );
};

export default Header;