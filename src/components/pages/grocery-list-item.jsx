import React from 'react';
import Button from '../controls/button';

const GroceryListItem = props =>{

    const {groceryItem, onDelete, onMarkPuchased} = props;
    
    const getStyle = () =>{
        if (groceryItem.purchased){
            return {textDecoration: "line-through"}
        }else{
            return {textDecoration: "none"}
        }
    }
    return(

        <li style={getStyle()}>
            <span>{groceryItem.name} ({groceryItem.quantity}) </span>
            <Button type="danger" onClick={() =>{onDelete(groceryItem)}}>Remove</Button>
            <Button type="secondary" onClick={()=>onMarkPuchased(groceryItem)}>Puchased</Button>
        </li>
    )
}

export default GroceryListItem;