import React from 'react';

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
            <button onClick={() =>{onDelete(groceryItem)}}>Remove</button>
            <button onClick={()=>onMarkPuchased(groceryItem)}>Mark Puchased</button>
        </li>
    )
}

export default GroceryListItem;