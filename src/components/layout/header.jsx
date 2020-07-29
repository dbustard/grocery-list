import React from 'react';

class Header extends React.Component{

    state={
        isMenuOpen: true
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
                {
                    this.state.isMenuOpen ? 
                    (
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Reminder</li>
                                <li>About us</li>
                            </ul>
                        </nav>
                    ):
                    null
                }
               
            </header>
        )
    }
}

export default Header;