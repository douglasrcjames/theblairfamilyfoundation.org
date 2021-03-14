import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import {partners} from './misc/partners'
import {shuffle} from './misc/PartnersSlider'

export default class Partners extends Component {
    render() {
        return (
            <div className="wrapper">
                <br/><br/><br/><br/>
                <h1>All Foundation Partners</h1>
                <Grid fluid>
                    <Row center="xs" middle="xs">
                        {shuffle(partners).map((partner, i) => {
                            return (
                                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} style={{margin:"20px 0"}}>
                                    <a 
                                        href={partner.webUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >        
                                        <img
                                            className={`responsive ${partner.picSize}`}
                                            alt="partner logo"
                                            src={partner.picPath}
                                            />
                                    </a>
                                </Col>
                            )
                        })}
                    </Row>
                </Grid>
                <br/><br/><br/><br/>
            </div>
        )
    }
}
