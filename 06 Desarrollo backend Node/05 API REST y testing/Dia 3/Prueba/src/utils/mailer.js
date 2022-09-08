const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const enviar = async (to, mensaje) => {
  return transporter.sendMail({
    from: `Roommates Gastos <${process.env.MAIL_USER}>`,
    to,
    subject: 'Se registra un nuevo gasto',
    text: `Se registra un nuevo gasto:\n${mensaje}`,
    html: `<h1>Se registra un nuevo gasto:</h1><p>${mensaje}</p>`
  });
};

module.exports = { enviar };