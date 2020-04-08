import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Partners extends Component {
    render() {
        return (
            <div>
                <Grid fluid>
                    {/* Odd rows 4 columns, Even rows 3 columns. (backwards from what you would think lol) */}
                    {/* Row 1 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.adl.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/ADL.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://brothersacademy.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Brothers.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.ripkenfoundation.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Cal-Ripken.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://wearecasa.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Casa-de-MD.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                    {/* Row 2 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="http://www.committeeformontgomery.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/CFM.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="https://md.emergeamerica.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Emerge.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="https://hispanicheritage.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Hispanic-Heritage-Foundation.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                    {/* Row 3 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://identity-youth.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Identity.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://imaginationstage.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/imagination-stage.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://leadershipmontgomerymd.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/LM.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.louriecenter.org/LC/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive large"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/lourie-center.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                    {/* Row 4 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="https://wish.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive large"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Make-a-Wish.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="https://www.mcccmd.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/MCCC-Public-Safety-Awards.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">
                            <a 
                                href="https://www.montgomeryschoolsmd.org/departments/partnerships/summer-rise/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/mcps-summer-rise.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                    {/* Row 5 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.mdlo.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/MDLO.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.mcpf-md.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive large"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Moco-Police-Foundation.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://prochoicemd.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/NARAL.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://nourishnow.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Nourish-Now.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                    {/* Row 6 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://www.sierraclub.org/maryland"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Sierra-club.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://ww5.komen.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/Susan-Komen.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://bbardc.org/project/thearc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive small"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/THEARC.png')}
                                    />
                            </a>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
                            <a 
                                href="https://shadygrove.umd.edu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className="responsive medium"
                                    alt="partner logo"
                                    src={require('../assets/images/partner-logos/USG.png')}
                                    />
                            </a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
