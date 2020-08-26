import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as yup from 'yup'
import { Formik, Field } from 'formik';
import { firestore } from "../Fire.js";
import { store } from 'react-notifications-component';
import '../assets/css/Cards.css'

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
      .min(10,"Body must be at least 10 characters long."),
})

const initialFormState = {
  email: "",
  name: "",
  body: ""
};

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);

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
            <div className="horiz-center">
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
                                    <Col xs={12} md={6} className="p-container m-margin-b">
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
                                    <Col xs={12} md={6} className="p-container m-margin-b">
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
        )
    }
}
