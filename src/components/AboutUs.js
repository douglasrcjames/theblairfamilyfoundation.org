import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GetInvolved from './misc/GetInvolved';
import PartnersSlider from './misc/PartnersSlider';
  
export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div>
                <img
                    className="family-hero"
                    alt="family"
                    src={require("../assets/images/misc/family-crop-2.jpg")} />
                <div className="overlap-1 l-container"> 
                    <div className="overlap-inner">
                        <div className="center-text">
                            <img
                                className="responsive overlap-logo"
                                alt="creek"
                                src={require("../assets/images/logo/b-w-border-black.png")} />
                        </div>
                        <br/>
                        <h1 className="overlap-h1">About the David and Mikel Blair Family Foundation</h1>
                        <div className="overlap-p center">
                            <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and rooted in improving the quality of life for individuals in the region. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in every individual, and 
                                their impact on the world when they are given access to opportunity.
                            </p>

                            <p>
                                The David and Mikel Blair Family Foundation was founded in 2008 and is funded by the generosity of David and Mikel Blair. 
                                The family foundation is based in Montgomery County, Maryland and their philanthropic efforts touch communities on a national scale.
                            </p>

                            <p>
                                David and Mikel Blair invest both their time and resources to a number of civic and charitable organizations focusing on equity, education, 
                                economic development, environment, food security and healthcare. 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Grid fluid className="full-width bg-light-grey">
                    <Row center="xs">
                        <Col>
                            <h2>The Foundation Team</h2>
                        </Col>
                    </Row>
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <Row>
                                <Col xs={12} lg={6} className="center-text s-margin-t-b">
                                    <img src={require("../assets/images/misc/filler.png")} className="responsive large" alt="portrait"/>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <h3>Mindy Pierce</h3>
                                    <p>
                                        Do duis esse amet nisi excepteur esse nostrud velit in exercitation sunt dolor ipsum. Commodo sit adipisicing incididunt 
                                        non ex aute sint ullamco magna aliqua est. Est dolor et occaecat veniam ullamco sit magna ullamco eiusmod.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <Row>
                                <Col xs={12} lg={6} className="center-text s-margin-t-b">
                                    <img src={require("../assets/images/misc/filler.png")} className="responsive large" alt="portrait"/>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <h3>Mindy Pierce</h3>
                                    <p>
                                        Do duis esse amet nisi excepteur esse nostrud velit in exercitation sunt dolor ipsum. Commodo sit adipisicing incididunt 
                                        non ex aute sint ullamco magna aliqua est. Est dolor et occaecat veniam ullamco sit magna ullamco eiusmod. Qui aute cillum 
                                        anim consectetur.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid> */}
                <br/>
                <br/>
                <div className="center-text">
                    <h1 className="no-margin"><a id="Partners" className="anchor" href="/#">Partners</a>Our Partners.</h1>
                    <p className="s-margin-t">We are proud to partner with so many dedicated organizations!</p>
                    <Link to="/our-partners" className="grey">View full partner list</Link>
                </div>
                <PartnersSlider />
                <GetInvolved />
            </div>
                
            </>
        )
    }
}
