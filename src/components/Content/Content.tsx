import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './content.css';
import Flags from '../Flags/Flag'


function Content(){ 
    return(
        <div>
        <section className="contentt">
            <div className="text">
                <h2>Looking for flags</h2>
                <h3>We have them all.</h3>
                <button className="hiddenbut" onClick={()=>window.location.href='./Flags'}>View Flags</button>
            </div>
            </section>
        </div>   
    )}
        
export default Content;