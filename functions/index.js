"use strict";
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

exports.newContactMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    console.log("Create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h3>Contact Details:</h3>
            <p><u>Name:</u> ${newValue.name}</p>
            <p><u>Email:</u> ${newValue.email}</p>
            <h3>Body:</h3>
            <p>${newValue.body}</p>
        </div>
        `
        // Config it
        let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: functions.config().email.user, 
                pass: functions.config().email.password
            }
            
        })
        console.log("transporter = " + transporter)

        // Pack it
        let mailOptions = {
            from: `${newValue.email}`,
            to: 'info@theblairfamilyfoundation.org, douglasrcjames@gmail.com',
            replyTo: `${newValue.email}`,
            subject: `New Blair Family Foundation contact from ${newValue.name}`,
            text: newValue.body,
            html: htmlEmail
        }

        // Send it
        const response = await transporter.sendMail(mailOptions, (err) => {
            if(err){
                return console.error(err)
            } else {
                return console.log("Successfully sent mail with sendMail()!")
            }
        })
        console.log("sendMail response = " + response)

        return console.log("Finished try{}...")
    } catch (error) {
        return console.error(err)
    }
  });