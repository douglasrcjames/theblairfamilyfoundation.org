import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router-dom'
import Partners from './Partners.js';
import GetInvolved from './misc/GetInvolved.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

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
                    <Col xs={12} lg={6} className="s-margin-t-b">
                        <h1>Our Story.</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/about-us"><button className="button-grey" type="button">Learn more</button></Link>
                    </Col>
                    <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                        <img src={require("../assets/images/misc/family.jpg")} className="responsive xxlarge green-border" alt="family" />
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row className="l-container">
                    <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                        <img src={require("../assets/images/misc/landscape.jpg")} className="responsive xxlarge" alt="landscape"/>
                    </Col>
                    <Col xs={12} lg={6} className="s-margin-t-b">
                        <h1>Our Focus.</h1>
                        <p>
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact on the core quality of life challenges facing Montgomery County. 
                            We use creative philanthropy to maximize our impact.
                        </p>
                        <Link to="/our-focus/"><button className="button-grey" type="button">Learn more</button></Link>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid className="no-padding">
                <Row>
                    <Col xs={this.state.width >= 1600 ? 4 : 12} className="focus-container no-padding">
                        <img src={require("../assets/images/focus/education.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Education</h4>
                        </div>
                        <div className="hover-text">
                            <h2>Education</h2>
                            <p>We are committed to providing equal education opportunities for all people regardless of their race, sexuality, or nationality.</p>
                            <Link to="/our-focus/education"><button className="button-plain-white btn-1" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                    <Col xs={this.state.width >= 1600 ? 4 : 12} className="focus-container no-padding">
                        <img src={require("../assets/images/focus/equal.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Equality</h4>
                        </div>
                        <div className="hover-text">
                            <h2>Equality</h2>
                            <p className="display-block">The foundation is focused on bringing balance for under served minority groups in the county.</p>
                            <Link to="/our-focus/equality"><button className="button-plain-white btn-1" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                    <Col xs={this.state.width >= 1600 ? 4 : 12} className="focus-container no-padding">
                        <img src={require("../assets/images/focus/environment-1.jpg")} className="responsive" alt="focus 1"/>
                        <div className="text">
                            <h4>Environment</h4>
                        </div>
                        <div className="hover-text">
                            <h2>Environment</h2>
                            <p>We are working with the community and policy makers to leave a healthy earth for future generations.</p>
                            <Link to="/our-focus/environment"><button className="button-plain-white btn-1" type="button">Learn more</button></Link>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <Grid fluid className="full-width bg-light-grey">
                <Row className="l-container">
                    <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                        <img src={require("../assets/images/misc/holding-kid.jpg")} className="responsive xxlarge" alt="family"/>
                    </Col>
                    <Col xs={12} lg={6} className="s-margin-t-b">
                        <h1>Racial Equality.</h1>
                        <p>
                            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                            From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                            when they are given access to opportunity.
                        </p>
                        <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
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
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../assets/images/misc/jacks.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 2 Title</h2>
                            Short description about the article that you will be reading if you click the button below. Maybe this one can be a bit longer.
                            <br/>
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={require("../assets/images/misc/old-class.jpg")} className="responsive xlarge display-block center" alt="family"/>
                        <div className="l-container">
                            <h2 className="s-margin-t-b">Article 3 Title</h2>
                            Short description about the article that you will be reading if you click the button below. And this one will be longer than the previous one so we have a good idea on the lengths of paragraphs.
                            <br/>
                            <Link to="/"><button className="button-grey" type="button">Read more</button></Link>
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
                <GetInvolved />
            </div>

            </>
        )
    }
}
