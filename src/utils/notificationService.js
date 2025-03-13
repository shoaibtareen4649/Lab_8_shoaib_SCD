const nodemailer = require('nodemailer');

const sendEmailNotification = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const scheduleNotification = (reminderTime, eventDetails) => {
    const now = new Date();
    const timeToReminder = reminderTime - now;

    if (timeToReminder > 0) {
        setTimeout(() => {
            sendEmailNotification(eventDetails.userEmail, `Reminder: ${eventDetails.name}`, `Don't forget about your event: ${eventDetails.description} on ${eventDetails.date} at ${eventDetails.time}`);
        }, timeToReminder);
    } else {
        console.log('Reminder time must be in the future');
    }
};

module.exports = {
    sendEmailNotification,
    scheduleNotification,
};