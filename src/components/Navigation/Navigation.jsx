import { useState } from "react";
import {  Link } from "react-router-dom";

import "./Navigation.scss";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaAddressBook,
} from "react-icons/fa";
export default function Navbar() {
 
  const [toggle, setToggle] = useState()

  const toggleTab =(index)=> {
    setToggle(index)
  }
  const storeSelection = (selection) => localStorage.setItem('tabSelection', selection);
  return (
    <>
      
      <div className="menu-wrapper">
        <nav className="bottom-nav" id="bottom-nav" exact  >
          <li>
          <Link  to="/"  className={toggle === 1?  "active btn":"btn".exact}    onClick={() => toggleTab(1)}>
                  <FaHome /> 
                </Link>
          </li>
          <li>
                <Link to="/Projects" className={toggle === 2? "active":"btn"}  onClick={() => toggleTab(2)}>
                  <FaProjectDiagram />
                  
                </Link>
              </li>
              <li>
                <Link to="/About" className={toggle === 3? "active":"btn"}  onClick={() => toggleTab(3)}>
                  <FaUser />
                  
                </Link>
              </li>
              <li>
                <Link to= "/Contact" className={toggle === 4? "active":"btn"}  onClick={() => toggleTab(4)}>
                  <FaAddressBook />
                  
                </Link>
              </li>
        </nav>
      </div>
    </>
  );
}
