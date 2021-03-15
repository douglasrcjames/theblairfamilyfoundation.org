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
                        <h1 className="overlap-h1">Committed to Quality of Life</h1>
                        <div className="overlap-p center">
                            <p>
                                Improving lives is at the center of everything we do. As an operating foundation, we focus on Education, Equality, and the Environment. 
                                These three core areas are our compass and guide all initiatives, whether practice, policy, or research-oriented.
                            </p>
                        </div>
                    </div>
                </div>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/economic-development.png")} className="responsive xxlarge" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Economic Development" className="anchor" href="/#">Economic Development</a>Economic Development.</h1>
                            <p className="s-margin">
                                Economic development is a key focus to enable people to access jobs and contribute to their family and community. 
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Education" className="anchor" href="/#">Education</a>Education.</h1>
                            <p className="s-margin">
                                We are committed to providing equal education opportunities for all people regardless of their race, sexuality, or nationality.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/education.png")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/equality.png")} className="responsive xxlarge" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Equality" className="anchor" href="/#">Equality</a>Equality.</h1>
                            <p className="s-margin">
                                The foundation is focused on bringing balance for under served minority groups in the county.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Environment" className="anchor" href="/#">Environment</a>Environment.</h1>
                            <p className="s-margin">
                                We are working with the community and policy makers to leave a healthy earth for future generations.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/environment.png")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/food-security.png")} className="responsive xxlarge" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Food Security" className="anchor" href="/#">Food Security</a>Food Security.</h1>
                            <p className="s-margin">
                                Food Security is maintaining a readily available, healthy and affordable food supply for all.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1><a id="Health Care" className="anchor" href="/#">Health Care</a>Health Care.</h1>
                            <p className="s-margin">
                                Improving healthcare for all is critically important to create a thriving community. 
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/focus/healthcare.png")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>

                <GetInvolved />
            </div>
        )
    }
}
