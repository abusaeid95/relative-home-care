import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import navlogo from '../images/Nav-logo/navlogo.png';
import useAuth from '../Hooks/useAuth';
import { Container, Nav } from 'react-bootstrap';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to="#" className='menu-bars-text'><h1>Relative <br /> Home Care</h1></Link>
            <Link to="#" className="imgnav"><img src={navlogo} alt="" /></Link>
            <div className="for-lg">
              <Link to="/home">Home</Link>
              <Link to="/services">Service</Link>
              <Link to="/team">Team</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/contactus">Message</Link>
            </div>
            <div>
              {!user.email && <Link to="/signin" className="login-logout">Sign In</Link>
              }
              {user.email &&
                <div className="d-flex align-items-center signout">
                  <button onClick={logOut} className="bg-info rounded me-3" >Sign Out</button> 
                  <p className='pb-0'>{user.displayName || user.email}</p></div>}

            </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );

};



export default Navbar;