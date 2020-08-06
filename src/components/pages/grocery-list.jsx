import React from 'react';
import GroceryForm from './grocery-form';
import GroceryListItem from './grocery-list-item';
import axios from 'axios';


class GroceryList extends React.Component{
    
    state={
        list:[]
    }

    componentDidMount(){

        axios.get('http://localhost:5000').then(result=>{
            this.setState({
                list: result.data
            })
        })
        

    }

    handleAdd = data =>{
  
        axios.post('http://localhost:5000', data).then(
            result=>{
                const list = [...this.state.list];
                
                const item = result.data;
                list.push(item);
                this.setState({
                    list: list
                })
            }
        )
     
        
    }

    handleDelete = data =>{
    
        axios.delete("http://localhost:5000/" + data.id).then(
            result =>{
                const list = [...this.state.list.filter(item=>item.id !== data.id)];

                this.setState({
                    list: list
                })
            }
        ) 
    }

    handlePuchased = data =>{
      
        data.purchased = true;

        axios.put("http://localhost:5000/" + data.id, data).then(
            result=>{

                axios.get('http://localhost:5000').then(result=>{
                    this.setState({
                        list: result.data
                    })
                })
            }
        )
        
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