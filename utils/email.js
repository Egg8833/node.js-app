const nodemailer = require('nodemailer');



const sentEmail = async options => {
  const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "41e94895c55280",
    pass: "839a8e46463f4d"
  }
});


  const mailOptions = {
    from: 'Natours <8YV8o@example.com>',
    to: options.email,  // options.email
    subject: options.subject, // options.subject
    text: options.message // options.message
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sentEmail;