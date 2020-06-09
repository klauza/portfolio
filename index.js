require('dotenv').config();
var request = require('request');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sgMail = require('@sendgrid/mail');


const app = express();
app.use(helmet());


// accept cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001/send");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {

  if(
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
  ){
    return res.json({'success': false, "msg": "Please select captcha"});
  }

  // Secret key
  const secretCaptchaKey = process.env.CAPTCHA;
  
  // Verify URL
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretCaptchaKey}&response=${req.body.captcha}&remoteip${req.connection.remoteAddress}`;

  // make request to verify url
  request(verifyUrl, (error,response,body) => {
    body = JSON.parse(body);
    console.log(body);

    // checking if body is successfull
    // if NOT
    if(body.success !== undefined && !body.success){
      return res.json({'success': false, "msg": "Failed captcha verification"});
    }

    // if IT IS
    // 1 - send mail
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    if(process.env.NODE_ENV === 'production'){
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: [process.env.EMAIL_API, req.body.email],
        from: process.env.EMAIL_API,
        subject: 'A message from customr via your website',
        text: 'text',
        html: output,
      };
    
      sgMail.send(msg).then(() => {
        console.log('Message sent')
      }).catch((error) => {
        console.log(error.response.body)
      })
  
    } else {
      console.log('mail from localhost was sent');
    }
    
    // 2 inform user about success
    return res.json({'success': true, "msg": "Captcha passed"});

  })
    


})



if(process.env.NODE_ENV === 'production'){
  app.use( express.static( `${__dirname}/../frontend/build` ) );

  app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html')));
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));