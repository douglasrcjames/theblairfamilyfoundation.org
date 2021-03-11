"use strict";
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

exports.newContactMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    console.log("Message create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h2>New <u>blairfamilyfoundation.org</u> Website Contact</h2>
            <p>
                A new contact message has arrived! You can directly reply to this email to 
                contact the visitor back on their question or inquiry if need be. Their information and message is detailed below.
            </p>
            <h3>Details:</h3>
            <p><u>Name</u>: ${newValue.name}</p>
            <p><u>Email</u>: ${newValue.email}</p>
            <h3>Message:</h3>
            <p>${newValue.body}</p>
        </div>

        `
        // Config it
        let transporter = nodemailer.createTransport({
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
            from: `drcj.dev@gmail.com`,
            to: 'publicrelations@theblairfamilyfoundation.org, info@theblairfamilyfoundation.org, drcj.dev@gmail.com',
            replyTo: `${newValue.email}`,
            subject: `New blairfamilyfoundation.org contact from ${newValue.name}`,
            text: newValue.body,
            html: htmlEmail
        }

        // Send it
        return transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(error)
        return false;
    }
  });
