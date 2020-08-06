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

            <form onSubmit={this.handleSubmit}>
                <div className="row">                   
                    <div className="col-12 col-md-8">
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity: </label>
                            <input className="form-control" type="number" name="quantity" id="quantity" onChange={this.handleChange} value={this.state.quantity}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 offset-md-8">
                        <div>
                            <Button type="submit">Add</Button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default GroceryForm;