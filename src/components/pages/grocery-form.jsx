import React, {Component} from 'react';

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

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div>
                    <label for="quantity">Quantity: </label>
                    <input type="number" name="quantity" id="quantity" onChange={this.handleChange} value={this.state.quantity}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        )
    }
}

export default GroceryForm;