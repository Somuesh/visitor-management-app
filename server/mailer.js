const nodemailer = require('nodemailer');

async function sendMail(obj) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",  //use your outgoing mail server here
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "email-id", 
        pass: "password", 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Visitor App" <email-id>', // sender address
      to: obj.receiver, // list of receivers
      subject: obj.subject, // Subject line
      text: obj.text, // plain text body
      
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
  
//sendMail({text: "HELLO NEW MAIL", subject: "New Mail", receiver: "staff-1"} )

module.exports = {
    sendMail
}