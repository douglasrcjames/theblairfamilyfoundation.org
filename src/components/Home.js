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
                        alt="creek"
                        src={require("../assets/images/logo/b-w-border.png")} />
                    <br/>
                    <div className="bg-text-box">
                        <h1 className="bg-h1">Committed to Montgomery County</h1>
                        <div className="bg-p center">
                            Working with partners and communities across the county to address long-term quality of life challenges and opportunities.
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <Grid fluid className="full-width bg-light-grey">
                <Row className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Our Story.</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b box-text-v-align">
                        <img src={require("../assets/images/family.jpg")} className="responsive xxlarge green-border" alt="family" />
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b box-text-v-align">
                        <img src={require("../assets/images/nature.png")} className="responsive xxlarge" alt="family"/>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Our Focus.</h1>
                        <p>
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact.
                        </p>
                        <Link to="/focus/education"><button className="button-white" type="button">Learn more</button></Link>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid className="no-padding s-margin-b">
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

            <Grid fluid className="full-width bg-light-grey">
                <Row className="l-container">
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <img src={require("../assets/images/misc/holding-kid.jpg")} className="responsive xxlarge box-text-v-align" alt="family"/>
                    </Col>
                    <Col sm={12} lg={6} className="s-margin-t-b">
                        <h1>Racial Equality.</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/"><button className="button-white" type="button">Read more</button></Link>
                    </Col>
                </Row>
            </Grid>

            <Grid fluid className="m-margin-t-b">
                <Row center="xs">
                    <Col><h1>In the press</h1></Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <img src={require("../assets/images/misc/grass.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 1 Title</h2>
                            Short description about the article that you will be reading if you click the button below.
                            <br/>
                            <Link to="/"><button className="button-white" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../assets/images/misc/jacks.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 2 Title</h2>
                            Short description about the article that you will be reading if you click the button below. Maybe this one can be a bit longer.
                            <br/>
                            <Link to="/"><button className="button-white" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../assets/images/misc/old-class.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 3 Title</h2>
                            Short description about the article that you will be reading if you click the button below. And this one will be longer than the previous one so we have a good idea on the lengths of paragraphs.
                            <br/>
                            <Link to="/"><button className="button-white" type="button">Read more</button></Link>
                        </div>
                        
                    </Col>
                </Row>
            </Grid>
            
            <div className="full-width bg-light-grey">
                <div className="center-text">
                    <h1 className="no-margin"><a id="Partners" className="anchor" href="/#">Partners</a>Our Partners.</h1>
                    <p>We are proud to partner with so many dedicated organizations!</p>
                </div>
                <Partners />
                <Grid fluid className="l-container">
                    <Row>
                        <Col xs={12} md={6}>
                            <h2>Get Involved.</h2>
                            <p>The David and Mikel Blair Family Foundation is dedicated to working with our community. To get involved fill out the contact form or email us at <u>info@theblairfamilyfoundation.org</u></p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2 className="s-padding-t"><a id="Contact Us" className="anchor" href="/#">Contact Us</a>Contact Us.</h2>
                            <ContactUs />
                        </Col>
                    </Row>
                </Grid>
            </div>


            {/* Extras! */}

                {/* <div className="wrapper">  
                    <div className="full-width">
                        <div className="wrapper m-padding-b">
                            <h2 className="center-text">Get our newsletter and updates</h2>
                            <SubscribeForm />
                        </div>
                    </div>
                </div> */}

                {/*  <p>
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
                        </p> */}
            </>
        )
    }
}
