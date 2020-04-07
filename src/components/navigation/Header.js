import React, { Component } from 'react';
import '../../assets/css/Header.css';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            menuOpen: false
        }
    }
    
    handleMenuClick() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }
    
    handleLinkClick() {
        this.setState({ menuOpen: false });
    }

    render() {
        const menuArray = ['About Us','Mission','Vision','Contact Us']

        const menuItems = menuArray.map((val,index)=>{
            return (
                <a href={`#${val}`}>
                    <MenuItem 
                        key={index} 
                        delay={`${index * 0.1}s`}
                        onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>
                </a>
             )
          });

        return (
            <header>
                <nav className="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <img
                                className="responsive logo"
                                alt="family"
                                src={require("../../assets/images/logo.png")} />
                        </div>
                    
                        <ul>
                            {  menuArray.map((val, index)=>{
                                    return (
                                        <li key={index}><a href={`#${val}`}>{val}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>

                <div className="hamburger">
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
                </div>
                
                <Menu open={this.state.menuOpen}>
                    {menuItems}
                </Menu>
                
            </header>
        )
    }
}
