import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <>
            <div class="bg-image"></div>
            <div class="bg-text">
                <img
                    className="responsive middle-logo"
                    alt="family"
                    src={require("../assets/images/logo-square.png")} />
                    <br/>
                <h1 style={{ fontSize: "50px" }} className="m-margin-b ">All lives have equal value</h1>
            </div>

            <div className="wrapper">  
                <h2><a id="About Us" className="anchor" href="/#">About Us</a></h2>
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

                <h2><a id="Mission" className="anchor" href="/#">Mission</a></h2>
                <p>
                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life 
                for individuals around Maryland. From literacy and equity in education, to at-risk youth programs and mental health access, the 
                foundation believes and sees value in individuals, and their impact on the world, when they are given access to opportunity. 
                </p>

                <h2><a id="Vision" className="anchor" href="/#">Vision</a></h2>
                <p>
                To create a Maryland where all individuals-- regardless of circumstance or zip code-- are given equal access to opportunity 
                to realize their purpose and potential. 
                </p>

                {/* <h2>Media</h2>
                <p>Coming soon!</p>

                <h2>Partners</h2>
                <p>Coming soon!</p> */}
                <h2><a id="Contact Us" className="anchor" href="/#">Contact Us</a></h2>
                <p>
                Please email <a href="mailto:info@theblairfamilyfoundation.org">info@theblairfamilyfoundation.org</a>.
                </p>

            </div>
            </>
        )
    }
}
