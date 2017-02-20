var express = require('express');
var nodemailer = require("nodemailer");

var router = express.Router();

/*Mail configuration*/

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    //port:'587',
    //secure: true, // use TLS
    auth: {
        user: "mexprint3r@gmail.com",
        pass: "Mexprint3r+2014"
    }
});
/*------------------SMTP Over-----------------------------*/




/* GET users listing. */
router.get('/send/mail', function(req, res, next) {
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.end("error");
      }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
      }
    });

  //res.send('respond with a resource');
});

module.exports = router;
