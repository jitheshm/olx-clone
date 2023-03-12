require('dotenv').config()

const { accountSid, authToken, serviceSid } = process.env
//console.log(accountSid,authToken,serviceSid);
const client = require('twilio')(accountSid, authToken);
module.exports = {
    generateOtp: ({mobile}) => {

        return new Promise((resolve, reject) => {
            //console.log( `+91${mobile}`);
            client.verify.v2.services(serviceSid)
                .verifications
                .create({ to: `+91${mobile}`, channel: 'sms' })
                .then((verification) => {
                    console.log(verification.sid);
                    resolve(verification.sid);
                }).catch((err) => {
                    reject(err);
                })
        })

    },

    otpCheck: ({ mobile, otp }) => {

        return new Promise((resolve, reject) => {
            client.verify.v2.services(serviceSid)
                .verificationChecks
                .create({ to: `+91${mobile}`, code: otp })
                .then((verification_check) => {
                    // console.log(verification_check.status)
                    resolve(verification_check.status)
                }).catch((err) => {
                    reject(err);
                })
        })
    }
}