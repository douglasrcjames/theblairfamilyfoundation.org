import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import GetInvolved from '../misc/GetInvolved';

var topBgImageStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${require("../../assets/images/misc/landscape.jpg")})`,
    backgroundPosition: "50% 50%", // change me around to move up and down!
    backgroundSize: "cover"
  };

export default class Focus extends Component {
    render() {
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div>
                <Grid className="full-width bg-light-grey">
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Education.</h1>
                            <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/education"><button className="button-grey" type="button">Learn more</button></Link>
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
                            <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/equality"><button className="button-grey" type="button">Learn more</button></Link>
                        </Col>
                    </Row>
                </Grid>
                <Grid className="full-width bg-light-grey">
                    <Row className="l-container">
                        <Col xs={12} lg={6} className="s-margin-t-b">
                            <h1>Environment.</h1>
                            <p>
                                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. 
                                From literacy and equity in education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the world, 
                                when they are given access to opportunity.
                            </p>
                            <Link to="/our-focus/environment"><button className="button-grey" type="button">Learn more</button></Link>
                        </Col>
                        <Col xs={12} lg={6} className="s-margin-t-b box-text-v-align">
                            <img src={require("../../assets/images/misc/sunflowers.jpg")} className="responsive xxlarge" alt="family" />
                        </Col>
                    </Row>
                </Grid>
                <GetInvolved />
            </div>
            </>
        )
    }
}
