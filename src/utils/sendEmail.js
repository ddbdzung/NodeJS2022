const nodeMailer = require('nodemailer')
const configs = require('../configs/config')

const sendEmail = async (to, subject, htmlContent) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: configs.mailHost,
            port: configs.mailPort,
            secure: false,
            auth: {
                user: configs.adminEmail,
                pass: configs.adminPassword,
            }
        })

        await transporter.sendMail({
            from: configs.adminEmail,
            to: to,
            subject: subject,
            html: htmlContent,
        })

        console.log('email sent successfully')
    } catch (err) {
        console.log(err, 'email not sent')
    }
}

module.exports = {
    sendEmail,
}