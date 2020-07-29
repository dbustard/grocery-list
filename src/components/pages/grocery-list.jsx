import React from 'react';
import GroceryForm from './grocery-form';
import GroceryListItem from './grocery-list-item';
import { v1 } from 'uuid';

class GroceryList extends React.Component{
    
    state={
        list:[]
    }

    componentDidMount(){

        //call service
        //parse return value
        //update state

        setTimeout(()=>{
            this.setState(
                {
                    list: [
                            {
                                id: v1(),
                                name: "Milk",
                                quantity: 2,
                                purchased: false
                            },
                            {
                                id: v1(),
                                name: "Coffee",
                                quantity: 1,
                                purchased: false
                            }
                        ]
                }
            )
        }, 500)
        

    }

    handleAdd = data =>{
        const list = [...this.state.list];

        data.id = v1();

        list.push(data);

        this.setState({
            list: list
        })
     
        
    }

    handleDelete = data =>{
        const list = [...this.state.list.filter(item=>item.id !== data.id)];

        this.setState({
            list: list
        })

        
    }

    handlePuchased = data =>{
        
        const list = [...this.state.list.map(item=> {
            if (item.id === data.id) item.purchased = true;
            return item;
        })];

        this.setState({
            list: list
        })
        
    }

        
    

    render(){
        return(

            <div>
                <h2>Grocery List</h2>
                <GroceryForm onAdd={this.handleAdd}/>
                <ul>
                {
                    
                    this.state.list.map(
                        item=>{

                            return <GroceryListItem groceryItem={item} onMarkPuchased={this.handlePuchased} onDelete={this.handleDelete}/>
                        }
                    )
                }
                </ul>
            </div>
        )
    }
}

export default GroceryList;