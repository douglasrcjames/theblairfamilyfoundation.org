import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router-dom'
import Partners from './Partners.js';
import ContactUs from './ContactUs.js';
import SubscribeForm from './misc/SubscribeForm.js';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="bg-image-container">
                <div className="bg-image"></div>
                <div className="bg-content">
                    <img
                        className="responsive middle-logo"
                        style={{margin: "-50px 0px 0px 0px"}}
                        alt="creek"
                        src={require("../assets/images/logo/b-w-border.png")} />
                    <br/>
                    <div className="bg-text-box">
                        <h1 className="bg-h1">Committed to Montgomery County</h1>
                        <div className="m-width center">
                            <p className="bg-p">Working with partners and communities across the county to address long-term quality of life challenges and opportunities.</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <Grid className="full-width bg-light-grey">
                <Row className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Our Story</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <img src={require("../assets/images/family.jpg")} className="responsive xxlarge" alt="family" style={{ border: "2px solid #71a75d" }} />
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <img src={require("../assets/images/nature.png")} className="responsive xxlarge m-padding" alt="family"/>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Our Focus</h1>
                        <p>
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact.
                        </p>
                        <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid className="no-padding">
                <Row>
                    <Col sm={12} lg={4} className="s-margin-t-b focus-container no-padding">
                        <img src={require("../assets/images/focus/education.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Education</h4>
                        </div>
                        <div className="hover-text">
                            <h2 className="no-margin">Education</h2>
                            <p>We are committed to providing equal education opportunities for all people regardless of their race, sexuality, or nationality.</p>
                            <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} lg={4} className="s-margin-t-b focus-container no-padding">
                        <img src={require("../assets/images/focus/equality.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Equality</h4>
                        </div>
                        <div className="hover-text">
                            <h2 className="no-margin">Equality</h2>
                            <p>The foundation is focused on bringing balance for under served minority groups in the county.</p>
                            <Link to="/focus/equality"><button className="button-white" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} lg={4} className="s-margin-t-b focus-container no-padding">
                        <img src={require("../assets/images/focus/environment.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Environment</h4>
                        </div>
                        <div className="hover-text">
                            <h2 className="no-margin">Environment</h2>
                            <p>We are working with the community and policy makers to leave a healthy earth for future generations.</p>
                            <Link to="/focus/environment"><button className="button-white" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <Grid fluid>
                <Row fluid className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <img src={require("../assets/images/misc/holding-kid.jpg")} className="responsive xxlarge m-padding" alt="family"/>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Racial Equality</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                    </Col>
                </Row>
            </Grid>

            <h1><a id="Partners" className="anchor" href="/#">Partners</a></h1>
            <Partners />

            <div className="wrapper">  
                <div className="full-width">
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
                <div className="wrapper">  
                    <div className="full-width">
                        <div className="wrapper m-padding-b">
                            <h2 className="center-text">Get our newsletter and updates</h2>
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
