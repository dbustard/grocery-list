import React from 'react';
import Navigation from './navigation';

class Header extends React.Component{

    state={
        isMenuOpen: false
    }

    styles={
        header:{
            backgroundColor: "darkslategray",
            padding: "1rem",
        }
    }

    toggleMenu = () =>{
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    };
    
    render(){
        
        return(
            <header style={this.styles.header}>
                <div>
                    <h1>{this.props.title}</h1>
                    <button onClick={this.toggleMenu}>V</button>
                </div>
                <Navigation isOpen={this.state.isMenuOpen} />
            </header>
        )
    }
}

export default Header;