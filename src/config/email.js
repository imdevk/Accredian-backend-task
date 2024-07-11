const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (referrerEmail, refereeName, refereeEmail, course) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: refereeEmail,
            subject: 'You have been referred to a course!',
            html: `
        <h1>Hello ${refereeName},</h1>
        <p>You have been referred to the ${course} course by ${referrerEmail}.</p>
        <p>Visit our website to learn more and enroll!</p>
      `,
        });
        console.log('Referral email sent successfully');
    } catch (error) {
        console.error('Error sending referral email:', error);
    }
};

module.exports = sendEmail;