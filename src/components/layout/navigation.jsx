import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) =>{
    if (!props.isOpen) return null;
    
    return(
        <nav onClick={()=>props.close()}>
            <ul>
                <li><NavLink to="/home" activeClass="active">Home</NavLink></li>
                <li><NavLink to="/reminder" activeClass="active">Reminder</NavLink></li>
                <li><NavLink to="/about-us" activeClass="active">About us</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;