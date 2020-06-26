import React, { Component } from 'react'
var topBgImageStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${require("../../assets/images/environment.jpg")})`,
    backgroundPosition: "50% 75%", // change me around to move up and down!
    backgroundSize: "cover"
  };

export default class Environment extends Component {
    render() {
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                <h1>Environment</h1>
                <p>More information coming soon!</p>
            </div>
            </>
        )
    }
}
