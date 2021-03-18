import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../../assets/css/Header.css';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import { NavLink } from 'react-router-dom';

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
        const menuArray = ['Our Focus', 'About Us', 'Our Partners', 'Contact Us']

        const menuItems = menuArray.map((val,index)=>{
            if(val === "Contact Us"){
                return (
                    <Link to={`/about-us#Contact Us`} key={index}>
                        <MenuItem 
                            delay={`${index * 0.1}s`}
                            onClick={()=>{this.handleLinkClick();}}>
                            {val}
                        </MenuItem>
                    </Link>
                 )
            } else {
                return (
                    <Link to={`/${val.split(" ").join("-").toLowerCase()}`} key={index}>
                        <MenuItem 
                            delay={`${index * 0.1}s`}
                            onClick={()=>{this.handleLinkClick();}}>
                            {val}
                        </MenuItem>
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
                                    src={require("../../assets/images/logo/v3-long.png")} />
                            </Link>
                        </div>
                    
                        <ul>
                            {  menuArray.map((val, index)=>{
                                 if(val === "Contact Us"){
                                    return (
                                        <li key={index}>
                                            <span>
                                                <Link to={`/about-us#Contact Us`}>
                                                    {val}
                                                </Link>
                                            </span>
                                        </li>
                                    )
                                 } else {
                                    return (
                                        <li key={index}>
                                            <span>
                                                <NavLink exact activeClassName="nav-selected" to={`/${val.split(" ").join("-").toLowerCase()}`}>
                                                    {val}
                                                </NavLink>
                                            </span>
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
