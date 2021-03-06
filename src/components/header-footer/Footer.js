import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <footer className="f-container">
                <Grid>
                    <Row center="xs">
                        <Col xs={6} lg={3} className="f-logo-section">
                            <div>
                                <img
                                    className="responsive f-logo"
                                    alt="blair foundation logo"
                                    src={require("../../assets/images/logo/b-w-border.png")} />
                            </div>
                            <div className="f-copyright">
                                &copy;
                                {' '}
                                {this.state.year}
                                {' '}
                                The Blair Family Foundation
                            </div>
                            <div>
                                {/* <a href="https://www.facebook.com/BlairFamilyFoundation/" target="_blank" rel="noopener noreferrer" className="f-icon">
                                    <i className="fab fa-facebook"/>
                                </a>
                                &nbsp;&nbsp; */}
                                <a href="https://www.instagram.com/blairfamilyfdn/" target="_blank" rel="noopener noreferrer" className="f-icon">
                                    <i className="fab fa-instagram"/>
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://www.linkedin.com/company/blairfamilyfoundation/" target="_blank" rel="noopener noreferrer" className="f-icon">
                                    <i className="fab fa-linkedin"/>
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://twitter.com/blairfamilyfdn?lang=en" target="_blank" rel="noopener noreferrer" className="f-icon">
                                    <i className="fab fa-twitter"/>
                                </a>
                            </div>
                        </Col>
                        {/* <Col xs={6} lg={3} className="f-link-section">
                            <h4 className="f-heading">About Us</h4>
                            <Link to="/" className="f-link">Vision &amp; Mission</Link>
                            <Link to="/" className="f-link">Core Values</Link>
                            <Link to="/" className="f-link">What Defines Us</Link>
                            <Link to="/" className="f-link">How We Work</Link>
                        </Col>
                        <Col xs={6} lg={3} className="f-link-section">
                            <h4 className="f-heading">What We Do</h4>
                            <Link to="/" className="f-link">Early Learning</Link>
                            <Link to="/" className="f-link">Wrap-Around Support</Link>
                            <Link to="/" className="f-link">Knowledge Building</Link>
                            <Link to="/" className="f-link">How We Measure Success</Link>
                        </Col>
                        <Col xs={6} lg={3} className="f-link-section">
                            <h4 className="f-heading">News &amp; Updates</h4>
                            <Link to="/" className="f-link">Resources</Link>
                            <Link to="/" className="f-link">Foundation in the News</Link>
                        </Col> */}
                    </Row>
                </Grid>
            </footer>
        )
    }
}
