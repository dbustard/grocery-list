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
            {groceryItem.name} ({groceryItem.quantity}) 
            <Button type="danger" onClick={() =>{onDelete(groceryItem)}}>Remove</Button>
            <Button type="secondary" onClick={()=>onMarkPuchased(groceryItem)}>Mark Puchased</Button>
        </li>
    )
}

export default GroceryListItem;