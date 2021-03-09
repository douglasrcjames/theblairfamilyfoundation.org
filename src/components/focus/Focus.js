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
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Education.</h1>
                            <p className="s-margin">
                                We are committed to providing equal education opportunities for all people regardless of their race, sexuality, or nationality.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/class.jpg")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/kid.jpg")} className="responsive xxlarge" alt="landscape"/>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Equality.</h1>
                            <p className="s-margin">
                                The foundation is focused on bringing balance for under served minority groups in the county.
                            </p>
                        </Col> 
                    </Row>
                </Grid>
                <Grid fluid className="full-width bg-light-grey">
                    <Row className="l-container" middle="xs">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Environment.</h1>
                            <p className="s-margin">
                                We are working with the community and policy makers to leave a healthy earth for future generations.
                            </p>
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
