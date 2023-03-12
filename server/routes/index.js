var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/user');




router.post('/loginsms', function (req, res, next) {
  console.log(req.body);
  userHelper.generateOtp(req.body.mobile).then((verificationSid) => {
    console.log(`otp send successfully id:${verificationSid}`);
    res.json({ otpsend: true })
  }).catch((err) => {
    console.log(`otp not send errr:${err}`);
    res.json({ otpsend: false })
  })

});
router.post('/otpcheck', (req, res) => {
  userHelper.otpCheck(req.body).then((status) => {
    console.log(status);
    if (status === 'approved')
      res.json({ status: 'approved' })
    else if (status === 'pending')
      res.json({ status: 'pending' })
  }).catch((err) => {
    res.json({ message: "code expired" });
  })

})


module.exports = router;
