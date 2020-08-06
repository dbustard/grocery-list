import React from 'react';
import Navigation from './navigation';

class Header extends React.Component{

    state={
        isMenuOpen: false
    }

    toggleMenu = () =>{
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    };
    
    render(){
        
        return(
            <header>
                <div>
                    <h1>{this.props.title}</h1>

                    <div>
                        <button onClick={this.toggleMenu}>
                            <svg viewBox="0 0 100 80" width="20" height="20">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
                <Navigation isOpen={this.state.isMenuOpen} close={()=>this.setState({isMenuOpen: false})} />
            </header>
        )
    }
}

export default Header;