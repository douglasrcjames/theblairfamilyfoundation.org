import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import * as yup from 'yup'
import { store } from 'react-notifications-component';

import { firestore } from "../../Fire.js";
import { Col, Grid, Row } from 'react-flexbox-grid';

const subscribeFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Email is required.")      
      .max(150,"Email must be at most 150 characters long.")
      .min(2,"Email must be at least 2 characters long."),
  })

class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.addSubscriber = this.addSubscriber.bind(this);
    }
    

    addSubscriber(values){
        firestore.collection('subscribers').add({
            email: values.email,
            subscribed: true,
            timestamp: Date.now(),
        }).then(
            store.addNotification({
                title: "Success!",
                message: "You've been subscribed successfully.",
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
        const initialFormState = {
            email: ""
          };

        return (
            <div className="horiz-center">
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addSubscriber(values);
                        actions.resetForm()
                    }}
                    validationSchema={subscribeFormSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit} className="form p-container">
                            <Grid>
                                <Row>
                                    <Col sm={12} md={10} className="s-margin-t-b p-container">
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            name="email"
                                            value={props.values.email}
                                        />
                                        
                                        <br/>
                                        {props.errors.email && props.touched.email ? (
                                            <b className="dark-red s-margin-t">{props.errors.email}</b>
                                        ) : (
                                            ""
                                        )}
                                        <label>Your email</label>
                                    </Col>
                                    <Col sm={12} md={2} className="s-margin-t-b">
                                        <button className="subscribe-btn" type="submit" disabled={!props.dirty && !props.isSubmitting}>Subscribe</button>
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

export default SubscribeForm;
