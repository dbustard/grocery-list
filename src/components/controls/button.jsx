import React from 'react';

const Button = (props) =>{
    const type =  props.type ? "btn-" + props.type : "btn-primary";
     
    return(
        <button className={`btn ${type}`}  {...props}>{props.children}</button>
    )
}

export default Button;