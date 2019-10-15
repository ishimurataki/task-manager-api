const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'ishimurataki@gmail.com',
        subject : 'uwu',
        text : `Youve been hacked!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'ishimurataki@gmail.com',
        subject : 'ghjk',
        text : `Why did you cancel, ${name} :( uwu`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}