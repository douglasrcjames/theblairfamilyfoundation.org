import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
        const menuArray = ['Press', 'Our Focus', 'Partners', 'About Us', 'Contact Us']

        const menuItems = menuArray.map((val,index)=>{
            if(val === 'Press'){
                return (
                    <Link to="/press" key={index}>
                        <MenuItem 
                            delay={`${index * 0.1}s`}
                            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>
                    </Link>
                 )
            } else {
                return (
                    <Link to={`/#${val}`} key={index}>
                        <MenuItem 
                            delay={`${index * 0.1}s`}
                            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>
                    </Link>
                 )
            }
            
          });

        return (
            <header>
                <nav className="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    className="responsive logo"
                                    alt="family"
                                    src={require("../../assets/images/logo/v2.png")} />
                            </Link>
                        </div>
                    
                        <ul>
                            {  menuArray.map((val, index)=>{
                                    if(val === 'Press'){
                                        return (
                                            <li key={index}>
                                                <Link to="/press">
                                                    {val}
                                                </Link>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={index}>
                                                <Link to={`/#${val}`}>
                                                    {val}
                                                </Link>
                                            </li>
                                        )
                                    }
                                    
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
