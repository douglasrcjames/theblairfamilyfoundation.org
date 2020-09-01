import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactUs from './ContactUs.js';
import SubscribeForm from './SubscribeForm.js';

export default class GetInvolved extends Component {
    render() {
        return (
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
                <Row>
                    <Col>
                        <div className="center-text s-margin-b display-block">
                            <h3>Get our newsletter for updates</h3>
                        </div>
                        <div className="l-width center">
                            <SubscribeForm />
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
