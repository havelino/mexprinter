var express = require('express')
var nodemailer = require('nodemailer')

var router = express.Router()

/* Mail configuration */

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  // port:'587',
  // secure: true, // use TLS
  auth: {user: 'mexprint3r@gmail.com', pass: 'Mexprint3r+2014'}
})
/* ------------------SMTP Over----------------------------- */
/* GET users listing. */
router.post('/send/mail', function (req, res, next) {
  var customer={name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                message:req.body.message};

  var mailOpt={};

  var mailOptions = {
    to: 'mextech.mx@gmail.com',
    subject: 'Solicitud de informacion de '+customer.email,
    text: 'Ha llegado una nueva solicitud de información de :\r\n*'+customer.name+'\r\n*'+customer.email+'\r\n*'+customer.phone+'\r\n*'+customer.message,
  }

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      mailOpt= {
        to: customer.email,
        subject: 'Error en la solicitud de informacion',
        text: 'Lo sentimos la solicitud no se proceso correctamente, favor de enviar un correo a mextech.mx@gmail.com',
      }

      smtpTransport.sendMail(mailOpt, function (error, response) {});
      res.end('error')
    } else {
      mailOpt = {
        to: customer.email,
        subject: 'Gracias por tu interes',
        text: 'Gracias por contactarnos, en breve uno de nuestros colaboradores se pondrá en contacto, y resolvera tus dudas y comentarios.',
      }
      smtpTransport.sendMail(mailOpt, function (error, response) {});
      res.end('sent')
    }
  })


})

module.exports = router
