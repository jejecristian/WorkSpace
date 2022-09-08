const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

// transporter.verify()
//   .then(console.log)
//   .catch(console.log)

const enviar = async (to, subject, text, html, attachments) => {
  return transporter.sendMail({
    from: `Spam Economy Spa <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
    attachments
  });
}

module.exports = { enviar };