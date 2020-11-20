import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import GetInvolved from '../misc/GetInvolved';

export default class Focus extends Component {
    render() {
        return (
            <div>
                <img
                    className="focus-hero"
                    alt="family"
                    src={require("../../assets/images/misc/landscape-cut.jpg")} />
                <div className="overlap-2 l-container"> 
                    <div className="overlap-inner">
                        <div className="center-text">
                            <img
                                className="responsive overlap-logo"
                                alt="creek"
                                src={require("../../assets/images/logo/b-w-border-black.png")} />
                        </div>
                        <br/>
                        <h1 className="overlap-h1">Committed to Montgomery County</h1>
                        <div className="overlap-p center">
                            <p>
                                Montgomery County is at the center of everything we do. As an operating foundation, we focus on Education, Equality, and the Environment. 
                                These three cores are our compass and guide all initiatives, whether practice-, policy-, or research-oriented. 
                            </p>
                        </div>
                    </div>
                </div>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Education.</h1>
                            <p>More details coming soon!</p>
                            {/* <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/education"><button className="button-grey" type="button">Learn more</button></Link> */}
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/class.jpg")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/kid.jpg")} className="responsive xxlarge" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Equality.</h1>
                            <p>More details coming soon!</p>
                            {/* <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/equality"><button className="button-grey" type="button">Learn more</button></Link>*/}
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Environment.</h1>
                            <p>More details coming soon!</p>
                            {/* <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/environment"><button className="button-grey" type="button">Learn more</button></Link> */}
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/sunflowers.jpg")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <GetInvolved />
            </div>
        )
    }
}
