import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router-dom'
import Partners from './Partners.js';
import ContactUs from './ContactUs.js';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="bg-image-container">
                <div className="bg-image tint t-2"></div>
                <div className="bg-text">
                    <img
                        className="responsive middle-logo"
                        alt="family"
                        src={require("../assets/images/square-logo-white.png")} />
                    <br/>

                    <h1 className="bg-image-h1">Committed to Montgomery County</h1>
                    <p className="bg-image-p">Working with partners and communities across the county to address long-term quality of life challenges and opportunities.</p>
                </div>
            </div>

            <div>
                <div className="center-text">
                    <h1 ><a id="Our Focus" className="anchor" href="/#">Our Focus</a>Our Focus</h1>
                    <p className="l-text">We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County.</p>
                </div>
                <Grid fluid className="no-padding">
                {/* Row 1 */}
                    <Row>
                        <Col sm={12} lg={4} className="s-margin-t-b focus-container">
                            <img src={require("../assets/images/education.jpg")} className="responsive" alt="focus 1"/>
                            <div className="text">
                                Education
                            </div>
                            <div className="hover-text">
                                We are committed to providing equal education opportunities for all people regardless of their race, sexuality, or nationality.
                                <br/>
                                <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className="s-margin-t-b focus-container">
                            <img src={require("../assets/images/equality.jpg")} className="responsive" alt="focus 1"/>
                            <div className="text">
                                Equality
                            </div>
                            <div className="hover-text">
                                The foundation is focused on bringing balance for under served minority groups in the county.
                                <br/>
                                <Link to="/focus/equality"><button className="button-white" type="button">Learn more</button></Link>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className="s-margin-t-b focus-container">
                            <img src={require("../assets/images/environment.jpg")} className="responsive" alt="focus 1"/>
                            <div className="text">
                                Environment
                            </div>
                            <div className="hover-text">
                                We are working with the community and policy makers to leave a healthy earth for future generations.
                                <br/>
                                <Link to="/focus/environment"><button className="button-white" type="button">Learn more</button></Link>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <h1><a id="Partners" className="anchor" href="/#">Partners</a></h1>
            <Partners />

            <div className="wrapper">  
                <div className="full-width ">
                    <div className="wrapper white semi-thick-font">
                        <h1 className="center-text"><a id="About Us" className="anchor" href="/#">About Us</a>About Us</h1>
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
                    </div>
                    
                    <div className="center-text m-padding-b">
                        <img
                            className="responsive xxlarge"
                            alt="family"
                            src={require("../assets/images/family.jpg")} />
                    </div>
                </div>

                <h1 className="s-padding-t"><a id="Contact Us" className="anchor" href="/#">Contact Us</a>Contact Us</h1>
                <ContactUs />
               
            </div>
            </>
        )
    }
}
