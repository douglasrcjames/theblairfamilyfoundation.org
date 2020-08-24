import React, { Component } from 'react'
var topBgImageStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${require("../../assets/images/focus/education.jpg")})`,
    backgroundPosition: "50% 50%", // change me around to move up and down!
    backgroundSize: "cover"
  };

export default class Education extends Component {
    render() {
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                <h1>Education</h1>
                <p>More information coming soon!</p>
            </div>
            </>
        )
    }
}
