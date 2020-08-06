import React, {Component} from 'react';
import Button from '../controls/button';
class GroceryForm extends Component{

    state={
        name: "",
        quantity: 0,
        purchased: false
    }

    handleChange = event =>{
        const name = event.target.name;
        const value = event.target.value;


        this.setState(
            {
                [name]: value
            }
        )
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.onAdd(this.state);
    }


    render(){

        return(

            <form onSubmit={this.handleSubmit} noValidate>
                <div>
                    
                    <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} required autoComplete="off"/>
                    <label htmlFor="name"><span>Name</span></label>
                </div>
                <div>
                    
                    <input type="number" name="quantity" id="quantity" onChange={this.handleChange} value={this.state.quantity} required autoComplete="off"/>
                    <label htmlFor="quantity"><span>Quantity</span></label>
                </div>
                <div>
                    <Button type="submit">Add</Button>
                </div>
            </form>
        )
    }
}

export default GroceryForm;