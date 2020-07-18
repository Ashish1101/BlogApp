const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')
const User = require('../models/User')
const crypto = require('crypto')
const async= require('async')
router.get('/', (req, res) => {
   res.send('in reset password')
})



router.post('/', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          const token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
            return res.status(404).json({msg: "No User with this email"})
          }
  
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        const smtpTransport = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port : 2525,
          auth: {
            user: '937236ce1a442d',
            pass: '6f7ef421db4b6c'
          }
        });
        const mailOptions = {
          to: user.email,
          from: "ashishskkumar321@gmail.com",
          subject: 'Node.js Password Reset',
          text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n
            Please click on the following link, or paste this into your browser to complete the process:\n
            http://localhost:3000/reset/${token} \n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          done(err, 'done');
        });
      }
    ], function(err) {
       if(err) {
           next()
           return res.status(501).send("Error in sending email")
       }
    });
  });


module.exports = router