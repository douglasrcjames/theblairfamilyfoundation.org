import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import GetInvolved from '../misc/GetInvolved';
var topBgImageStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${require("../../assets/images/focus/equal.jpg")})`,
    backgroundPosition: "50% 40%", // change me around to move up and down!
    backgroundSize: "cover"
  };

export default class Equality extends Component {
    render() {
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <Grid fluid className="wrapper-w-img">
                <Row middle="xs">
                    <Col md={12} lg={8}>
                        <h1>Committed to Equality</h1>
                        <p>
                            Veniam cupidatat culpa commodo aliquip. Aliquip amet ex proident incididunt adipisicing excepteur reprehenderit culpa tempor elit sint labore nostrud. 
                            Qui exercitation irure laboris ipsum ullamco quis Lorem excepteur deserunt enim. Tempor magna quis consequat ipsum eiusmod sit velit. Enim tempor voluptate 
                            ipsum adipisicing incididunt aliqua magna velit. Exercitation et velit deserunt nisi mollit mollit minim elit tempor.
                        </p>
                        <br/>
                        <img
                            className="responsive xxlarge"
                            alt="creek"
                            src={require("../../assets/images/misc/ceremony.jpg")} />
                    </Col>
                    <Col md={12} lg={4} className="side-menu">
                        <Row className="side-menu-row-title">
                            <Col xs={12}>
                                What We Do
                            </Col>
                        </Row>
                        <Link to="/">
                            <Row className="side-menu-row">
                                <Col xs={12} sm={6}>
                                    Easy Learning
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Row end="xs">
                                        <Col>
                                            <i className="fa fa-chevron-right"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Link>
                        <Link to="/">
                            <Row className="side-menu-row">
                                <Col xs={12} sm={6}>
                                    Wrap-Around Support
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Row end="xs">
                                        <Col>
                                            <i className="fa fa-chevron-right"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Link>
                        <Link to="/">
                            <Row className="side-menu-row">
                                <Col xs={12} sm={6}>
                                    Knowledge Building
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Row end="xs">
                                        <Col>
                                            <i className="fa fa-chevron-right"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Link>
                        <Link to="/">
                            <Row className="side-menu-row">
                                <Col xs={12} sm={6}>
                                    How We Measure Success
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Row end="xs">
                                        <Col>
                                            <i className="fa fa-chevron-right"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Link>
                        <Link to="/">
                            <Row className="side-menu-row">
                                <Col xs={12} sm={6}>
                                    Where We Work
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Row end="xs">
                                        <Col>
                                            <i className="fa fa-chevron-right"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                </Row>
                <Row className="s-margin-t-b">
                    <Col sm={12} md={2} lg={2} className="s-margin-t-b box-text-v-align">
                        <img src={require("../../assets/images/misc/filler.png")} className="responsive large" alt="landscape"/>
                    </Col>
                    <Col sm={12} md={10} lg={8} className="s-margin-t-b">
                        <h2>Article 1 Title</h2>
                        <p>
                            Nulla voluptate adipisicing ea in id veniam Lorem qui. Anim voluptate aute deserunt fugiat. 
                            Id qui culpa exercitation ipsum nisi pariatur pariatur fugiat irure. Non laboris minim sint 
                            dolor deserunt nisi ullamco excepteur culpa adipisicing quis sunt pariatur cillum.
                        </p>
                        <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                    </Col>
                </Row>
                <Row className="s-margin-t-b">
                    <Col sm={12} md={2} lg={2} className="s-margin-t-b box-text-v-align">
                        <img src={require("../../assets/images/misc/filler.png")} className="responsive large" alt="landscape"/>
                    </Col>
                    <Col sm={12} md={10} lg={8} className="s-margin-t-b">
                        <h2>Article 2 Title</h2>
                        <p>
                            Nulla voluptate adipisicing ea in id veniam Lorem qui. Anim voluptate aute deserunt fugiat. 
                            Id qui culpa exercitation ipsum nisi pariatur pariatur fugiat irure. Non laboris minim sint 
                            dolor deserunt nisi ullamco excepteur culpa adipisicing quis sunt pariatur cillum.
                        </p>
                        <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                    </Col>
                </Row>
                <Row className="s-margin-t-b">
                    <Col sm={12} md={2} lg={2} className="s-margin-t-b box-text-v-align">
                        <img src={require("../../assets/images/misc/filler.png")} className="responsive large" alt="landscape"/>
                    </Col>
                    <Col sm={12} md={10} lg={8} className="s-margin-t-b">
                        <h2>Article 3 Title</h2>
                        <p>
                            Nulla voluptate adipisicing ea in id veniam Lorem qui. Anim voluptate aute deserunt fugiat. 
                            Id qui culpa exercitation ipsum nisi pariatur pariatur fugiat irure. Non laboris minim sint 
                            dolor deserunt nisi ullamco excepteur culpa adipisicing quis sunt pariatur cillum.
                        </p>
                        <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid className="full-width bg-light-grey">
                <Row center="xs">
                    <Col><h2>In The Press</h2></Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <img src={require("../../assets/images/misc/grass.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 1 Title</h2>
                            Short description about the article that you will be reading if you click the button below.
                            <br/>
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../../assets/images/misc/jacks.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 2 Title</h2>
                            Short description about the article that you will be reading if you click the button below. Maybe this one can be a bit longer.
                            <br/>
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../../assets/images/misc/old-class.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 3 Title</h2>
                            Short description about the article that you will be reading if you click the button below. And this one will be longer than the previous one so we have a good idea on the lengths of paragraphs.
                            <br/>
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                        </div>
                        
                    </Col>
                </Row>
            </Grid>
            <GetInvolved />
            </>
        )
    }
}
