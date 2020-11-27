import React from 'react';
import './header.css';
import { BrowserRouter as  Route } from 'react-router-dom';
import Flags from '../Flags/Flag';

function Header(){
    return(
        <div>
        <nav>
        <div className="logo">myflags.com</div> 
        <ul className="nav-links">
            <li><a href="../Home">Home</a></li>
            <li><a href="../Flags">Flags</a></li>
            <li><button className="hiddenbut">Log In</button></li>
        </ul>
      
        </nav>
        </div>
    )
}
export default Header;