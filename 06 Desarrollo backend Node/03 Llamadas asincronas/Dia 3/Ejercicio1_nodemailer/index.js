require('dotenv').config();
const nodemailer = require('nodemailer');

/* El transporter recibe un objeto de configuracion */
// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'elian75@ethereal.email',
//     pass: 'xqNjtzXUJKgvqDbyrM'
//   }
// });

/* Esto solamente sirve para verificar si nos podemos conectar con el servidor de correo */
// transporter
//   .verify()
//   .then(console.log)
//   .catch(console.log)

/*
user: desafio_latam_g17@outlook.com
pass: x74WSq^Y56*JzlhfEfSM
*/
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

console.log(process.env.MAIL_SERVICE);

transporter.sendMail({
  from: `Desafio Latam G17 <desafio_latam_g17@outlook.com>`,
  to: 'jejecristian@gmail.com',
  subject: 'Test desde NodeMailer',
  text: 'Este es un mensaje de Test desde NodeMailer'
})
.then(console.log)
.catch(console.log);
