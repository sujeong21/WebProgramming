import { useState } from "react";
import Dropdown from './Dropdown';
import Signup from '../blog/sign up';
import { Link } from "react-router-dom";
import "../css/Header.css";

 function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [view, setView] = useState(false); 


  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MovieIntroduction
      </a>
      <div className="searchbar">
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/Introduction">Introduction</a>
          </li>
          <li id = "dropdown" onClick={() => {setView(!view)}}>
            Genres
	          {view && <Dropdown />}
          </li>

          <li>
           <a href = "/login">Log in</a>
          </li> 
          <li>
          <a href = "/signup">Sign up</a>
          </li> 
        </ul>  
      </div>
    </nav>
  );
}

export default Header;