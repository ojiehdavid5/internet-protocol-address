require('dotenv').config();


const express= require('express');


const app= express();






const nodemailer = require("nodemailer");


const html=`<h1>helloworld</h1>   <p>Isn't nodemailer useful</p>`



const emails=[the email you are using]





async function main(){
nodeMailer.createTransport({
  host:"mail.openjavascript.info",
  port:465,
  secure:true,
  auth:{
    user:"1@1.com",
    password:"Nodemailer123!"


  }
  const info= await transporter.sendMail({



     from: // sender address
   from :emails,
     to:"adavies.ceo@gmail.com", // list of receivers

    
    subject: "Hello ✔", // Subject line
   text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body

  })


  console.log("message sent:"+info.messageId);



})




}




















// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {


//     const getIpAddress = async (req, res, next) => {
//         const ipAddress = req.header('x-forwarded-for') ||
//         req.socket.remoteAddress
//         req.user = ipAddress
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     // from: `"<${"Gideon"}" <${"gideonbabalola69@gmail.com"}>, // sender address
//     from :'"chuks" , "ojiehdavid5@gmail.com"',
//      to:"adavies.ceo@gmail.com", // list of receivers

    
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   //
//   // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//   //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//   //       <https://github.com/forwardemail/preview-email>
//   //
// }}

// main().catch(console.error)


// app.get("/" ,(req,res) => {
 
// }) ;











// app.listen(3000 ,() => {
//     console.log('server is running on 3000');
// })
