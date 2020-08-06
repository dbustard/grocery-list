import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) =>{
    if (!props.isOpen) return null;
    
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reminder">Reminder</Link></li>
                <li><Link to="/about-us">About us</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;