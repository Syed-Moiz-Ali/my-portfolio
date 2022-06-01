import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
import { useState } from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaAddressBook,
} from "react-icons/fa";
export default function Layout  ()  {
  const [toggle, setToggle] = useState()

  const toggleTab =(index)=> {
    setToggle(index)
  }
  return (
    <>
      <div className="header">
        <nav className="nav-link">
          <div className="nav-inner">
            <ul>
              <li>
                <Link to="/"  className={toggle === 1?  "active btn":"btn"}  onClick={() => toggleTab(1)}>
                  <h1>"SMA"</h1>
                </Link>
              </li>
              <li>
                <Link to="/"  className={toggle === 1?  "active btn":"btn"}  onClick={() => toggleTab(1)}>
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/Projects"  className={toggle === 2?  "active btn":"btn"}  onClick={() => toggleTab(2)}>
                  <FaProjectDiagram />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/About"  className={toggle === 3?  "active btn":"btn"}  onClick={() => toggleTab(3)}>
                  <FaUser />
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact"  className={toggle === 4?  "active btn":"btn"}  onClick={() => toggleTab(4)}>
                  <FaAddressBook />
                  Contact
                </Link>
              </li>
            </ul>
            <div className="copyright">
          <h5>&copy;2022 
            <br />
            Created By <span>"Syed Moiz ALi"</span> 
          </h5>
        </div>
          </div>
          
          
        </nav>

        <Outlet className="output" />
        
      </div>
      
    </>
  );
};


