import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { firestore } from "../Fire.js";
import { store } from 'react-notifications-component';
import * as yup from 'yup'
import { Formik, Field } from 'formik';

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Email is required.")      
      .max(150,"Email must be at most 150 characters long.")
      .min(2,"Email must be at least 2 characters long."),
    name: yup
      .string()
      .required("Your name is required.")
      .max(150,"Name must be at most 150 characters long.")
      .min(2,"Name must be at least 2 characters long."),
    body: yup
      .string()
      .required("A message body is required.")
      .max(30000,"Body must be at most 30000 characters long.")
      .min(30,"Body must be at least 10 characters long."),
})

const initialFormState = {
  email: "",
  name: "",
  body: ""
};

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.state = {
            messageName: "",
            messageEmail: "",
            messageBody: ""
        };
      }


    addMessage(values){
        firestore.collection('messages').add({
            email: values.email,
            name: values.name,
            body: values.body,
            timestamp: Date.now(),
        }).then(
            store.addNotification({
                title: "Success!",
                message: "Your message has been submitted.",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              })
        );
      }
    render() {
        return (
            <>
            <div class="bg-image"></div>
            <div class="bg-text">
                <img
                    className="responsive middle-logo"
                    alt="family"
                    src={require("../assets/images/logo-square.png")} />
                    <br/>
                {/* <h1 style={{ fontSize: "50px" }} className="m-margin-b">
                    <span className="cormorant-garamond-regular">The</span>
                    <span className="pinyon-script"> David and Mikel Blair </span>
                    <span className="cormorant-garamond-regular">Family Foundation</span> 
                </h1> */}

                <h1 style={{ fontSize: "50px" }} className="m-margin-b">Welcome to the Blair Family Foundation</h1>
            </div>

            <div className="wrapper">  
                <h2><a id="About Us" className="anchor" href="/#">About Us</a>About Us</h2>
                <p>
                The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. From literacy and equity in 
                education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the 
                world, when they are given access to opportunity. 
                </p>

                <p>
                The David and Mikel Blair Family Foundation was founded in 2008 and is funded by the generosity of David and Mikel Blair. 
                The family foundation is based in Montgomery County, MD and their philanthropic efforts touch communities on a national scale.
                </p>

                <p>
                David and Mikel Blair continue their commitment to a number of civic and charitable organizations by investing both time 
                and resources to economic development, educational opportunities, arts programs and health-based initiatives. 
                </p>

                <h2><a id="Partners" className="anchor" href="/#">Partners</a>Partners</h2>
                <Grid fluid>
                    {/* Row 1 */}
                    <Row center="xs">
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
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
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
                    </Row>
                    {/* Row 2 */}
                    <Row center="xs">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
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
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">
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
                    {/* Row 3 */}
                    <Row center="xs">
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

                <h2><a id="Contact Us" className="anchor" href="/#">Contact Us</a>Contact Us</h2>
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addMessage(values);
                        actions.resetForm()
                    }}
                    validationSchema={formSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                                {/* Row 1 */}
                                <Row>
                                    <Col sm={12} md={6} className="p-container m-margin-b">
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            name="name"
                                            value={props.values.name}
                                        />
                                        <br/>
                                        {props.errors.name && props.touched.name ? (
                                            <span className="red">{props.errors.name}</span>
                                        ) : (
                                            ""
                                        )}
                                        <label>Your name</label>
                                    </Col>
                                    <Col sm={12} md={6} className="p-container m-margin-b">
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            name="email"
                                            value={props.values.email}
                                        />
                                        <br/>
                                        {props.errors.email && props.touched.email ? (
                                            <span className="red">{props.errors.email}</span>
                                        ) : (
                                            ""
                                        )}
                                        <label>Your email</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="p-container m-margin-b">
                                        <Field
                                            component="textarea"
                                            required
                                            onChange={props.handleChange}
                                            name="body"
                                            value={props.values.body}
                                        />
                                        <br/>
                                        {props.errors.body && props.touched.body ? (
                                            <span className="red">{props.errors.body}</span>
                                        ) : (
                                            ""
                                        )}
                                        <label>Your message</label>
                                    </Col>
                                </Row>
                                <Row center="xs" className="m-margin-b">
                                    <Col xs={12} className="p-container">
                                        {/* TODO: if all fields complete, animate me! */}
                                        <button className="send-btn" type="submit" disabled={!props.dirty && !props.isSubmitting}>Send</button>
                                    </Col>
                                </Row>
                            </Grid>
                        </form>
                    )}
                </Formik>
               
            </div>
            </>
        )
    }
}
