import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import GetInvolved from '../misc/GetInvolved';

export default class Focus extends Component {
    render() {
        return (
            <div>
                <img
                    className="focus-hero"
                    alt="family"
                    src={require("../../assets/images/focus/focus-hero.png")} />
                <div className="overlap-2 l-container"> 
                    <div className="overlap-inner">
                        <div className="center-text">
                            <img
                                className="responsive overlap-logo"
                                alt="creek"
                                src={require("../../assets/images/logo/b-w-border-black.png")} />
                        </div>
                        <br/>
                        <h1 className="overlap-h1">Committed to Quality of Life for All</h1>
                        <div className="overlap-p center">
                            <p>
                                Improving lives in our region is at the center of everything we do. As an
                                operating foundation, we focus on equity, education, economic development,
                                the environment, and health care. These core areas are our compass and
                                guide all initiatives, whether practice, policy, or research oriented.
                            </p>
                        </div>
                    </div>
                </div>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/equality.png")} className="responsive xxlarge black-border" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Equity" className="anchor" href="/#">Equity</a>Equity.</h1>
                            <p className="s-margin">
                                We are focused on bringing equity for underserved minority groups in our region. We are proud
                                to live in such a diverse community and work to ensure all are provided the proper resources and
                                opportunities to reach their full potential. Everyone’s voice must be heard and represented.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Education" className="anchor" href="/#">Education</a>Education.</h1>
                            <p className="s-margin">
                                We are committed to providing equal educational opportunities for all people regardless of
                                their race, sexuality, or nationality. Equal access to higher education is critical and all students must be
                                provided with the tools needed to be successful in work and careers.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/education.png")} className="responsive xxlarge black-border" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/economic-development.png")} className="responsive xxlarge black-border" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Economic Development" className="anchor" href="/#">Economic Development</a>Economic Development.</h1>
                            <p className="s-margin">
                                Our focus is to provide available resources and equal opportunities to job
                                access, entrepreneurship, and business development, ensuring that businesses are provided the tools that
                                are needed to grow in our community. Job creation helps provide for families and the community.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Environment" className="anchor" href="/#">Environment</a>Environment.</h1>
                            <p className="s-margin">
                                We are working with the community and policy makers to leave a healthy earth for future
                                generations. Climate change, traffic congestion and air pollution, and access to the outdoors are issues
                                nationally as well as locally that we seek to change.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/environment.png")} className="responsive xxlarge black-border" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/food-security.png")} className="responsive xxlarge black-border" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Food Security" className="anchor" href="/#">Food Security</a>Food Security.</h1>
                            <p className="s-margin">
                                Food security means maintaining a readily available healthy and affordable food supply for
                                all, and we seek to address the increase in hunger in our community. By supporting food distribution
                                organizations and local farmers we seek to ensure no one in the community goes hungry.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Health Care" className="anchor" href="/#">Health Care</a>Health Care.</h1>
                            <p className="s-margin">
                                Improving healthcare for all is critically important to create a thriving community, and we focus
                                on how physical health and mental health are interrelated, Everyone needs to have equal access to health
                                care, and we recognize and seek to overcome barriers to equitable health care.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/healthcare.png")} className="responsive xxlarge black-border" alt="family" />
                        </Col>
                    </Row>
                </Grid>

                <GetInvolved />
            </div>
        )
    }
}
