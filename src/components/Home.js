import React, { Component } from 'react'

import Partners from './Partners.js';
import ContactUs from './ContactUs.js';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="bg-image-container">
                <div class="bg-image"></div>
                <div class="bg-text">
                    {/* <img
                        className="responsive middle-logo"
                        alt="family"
                        src={require("../assets/images/logo-square.png")} />
                        <br/> */}
                    {/* <h1 style={{ fontSize: "50px" }} className="m-margin-b">
                        <span className="cormorant-garamond-regular">The</span>
                        <span className="pinyon-script"> David and Mikel Blair </span>
                        <span className="cormorant-garamond-regular">Family Foundation</span> 
                    </h1> */}

                    {/* <h1 className="bg-image-h1">Welcome to the Blair Family Foundation</h1> */}
                </div>
            </div>
            
            <div className="wrapper">  
                <h2><a id="About Us" className="anchor" href="/#">About Us</a>About Us</h2>
                <p>
                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. From literacy and equity in 
                education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the 
                world, when they are given access to opportunity. 
                </p>

                <p>
                The David and Mikel Blair Family Foundation was founded in 2008 and is funded by the generosity of David and Mikel Blair. 
                The family foundation is based in Montgomery County, MD and their philanthropic efforts touch communities on a national scale.
                </p>

                <p>
                David and Mikel Blair continue their commitment to a number of civic and charitable organizations by investing both time 
                and resources to economic development, educational opportunities, arts programs and health-based initiatives. 
                </p>

                <h2><a id="Partners" className="anchor" href="/#">Partners</a>Partners</h2>
                <Partners />

                <h2><a id="Contact Us" className="anchor" href="/#">Contact Us</a>Contact Us</h2>
                <ContactUs />
               
            </div>
            </>
        )
    }
}
