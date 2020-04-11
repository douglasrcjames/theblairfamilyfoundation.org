import React, { Component } from 'react'
import Background from '../assets/images/press.jpg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Press extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             articles: []
        }
    }

    componentDidMount(){
        const tempArticles = [
            {
                title: "Creative Learning and Activity Kits Provide Parents, Kids an Exhale",
                pdfUrl: `https://drive.google.com/file/d/1xso5DsQFsJ5xTuQd27XJBnVGDnGgsFSE`,
                date: "April 8, 2020"
            },
        ]

        const tempExtArticles = [
            {
                title: "Upcounty Consolidation Hub for Community Needs Opens at BlackRock Center for the Arts",
                pdfUrl: `https://drive.google.com/file/d/1sx1CDwwNio1mXpXvO9d41sIcmCRD_GYW`,
                date: "April 8, 2020"
            },
            // {
            //     title: "How Kirwan Benefits Montgomery County",
            //     pdfUrl: `https://drive.google.com/file/d/1H7YPFTLkAK5VS1VeUbSqI2yTAXyUxHya`,
            //     date: "April 1, 2020"
            // },
        ]

        const numArticles = tempArticles.length;
        const numExtArticles = tempArticles.length;
        const tempShowArticleFlags = Array(numArticles).fill(false)
        const tempShowExtArticleFlags = Array(numExtArticles).fill(false)
        this.setState({
            articles: tempArticles,
            extArticles: tempExtArticles,
            showArticleFlags: tempShowArticleFlags,
            showExtArticleFlags: tempShowExtArticleFlags
        })
    }

    toggleArticle = (index) =>{
        // Then set specific one to true
        const newFlags = [...this.state.showArticleFlags];
        newFlags[index] = !newFlags[index];
        this.setState({ showArticleFlags: newFlags });
    }

    toggleExtArticle = (index) =>{
        // Then set specific one to true
        const newFlags = [...this.state.showExtArticleFlags];
        newFlags[index] = !newFlags[index];
        this.setState({ showExtArticleFlags: newFlags });
    }
    
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 55%", // change me around to move up and down!
            backgroundSize: "cover"
          };
        if(!this.state.articles || !this.state.extArticles){
            return (
                <div className="wrapper">
                    <h2>Loading...</h2>
                </div>
            )
        } else {
            return (
                <>
                <div style={ topBgImageStyle }></div>
                <div className="wrapper">
                    <h1><i className="fa fa-newspaper"></i> Press</h1>
                    <Grid fluid>
                        {this.state.articles.map((article, index) => (
                            <div key={index}>
                                <Row center="xs">
                                    <Col xs={12} className="s-margin-b">
                                        <h3>{article.title}</h3>
                                        <b className="dark-grey">{article.date}</b>
                                        <br/>
                                        <span className="dark-green cursor-pointer bold" onClick={() => this.toggleArticle(index)}>
                                            {!this.state.showArticleFlags[index] && (
                                                <span><i className="fa fa-eye"></i> VIEW</span>
                                            )}
                                            {this.state.showArticleFlags[index] && (
                                                <span><i className="fa fa-eye-slash"></i> CLOSE</span>
                                            )}
                                            
                                        </span>
                                    </Col>
                                </Row>
                                <div className={this.state.showArticleFlags[index] ? "pdf-container" : "hide"}>
                                    <iframe 
                                        src={`${article.pdfUrl}/preview`} 
                                        title={article.title}
                                        frameBorder="0" 
                                        height="800px" 
                                        width="100%">
                                        <p>
                                            This PDF could not be displayed, please download or view it 
                                            <a href={`${article.pdfUrl}`} >
                                                here.
                                            </a>
                                        </p>
                                    </iframe>
                                </div>
                            </div>
                        ))}
                    </Grid>

                    <h2>External Media</h2>
                    <Grid fluid>
                        {this.state.extArticles.map((article, index) => (
                            <div key={index}>
                                <Row center="xs">
                                    <Col xs={12} className="s-margin-b">
                                        <h3>{article.title}</h3>
                                        <b className="dark-grey">{article.date}</b>
                                        <br/>
                                        <span className="dark-green cursor-pointer bold" onClick={() => this.toggleExtArticle(index)}>
                                            {!this.state.showExtArticleFlags[index] && (
                                                <span><i className="fa fa-eye"></i> VIEW</span>
                                            )}
                                            {this.state.showExtArticleFlags[index] && (
                                                <span><i className="fa fa-eye-slash"></i> CLOSE</span>
                                            )}
                                            
                                        </span>
                                    </Col>
                                </Row>
                                <div className={this.state.showExtArticleFlags[index] ? "pdf-container" : "hide"}>
                                    <iframe 
                                        src={`${article.pdfUrl}/preview`} 
                                        title={article.title}
                                        frameBorder="0" 
                                        height="800px" 
                                        width="100%">
                                        <p>
                                            This PDF could not be displayed, please download or view it 
                                            <a href={`${article.pdfUrl}`} >
                                                here.
                                            </a>
                                        </p>
                                    </iframe>
                                </div>
                            </div>
                        ))}
                    </Grid>
                    
                </div>
                </>
            )
        }
       
    }
}
