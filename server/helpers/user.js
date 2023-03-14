require('dotenv').config()
const bcrypt = require('bcrypt');
const dbCollection = require('../config/dbCollection');
const db = require('../config/connection')

const { accountSid, authToken, serviceSid } = process.env
//console.log(accountSid,authToken,serviceSid);
const client = require('twilio')(accountSid, authToken);
module.exports = {
    generateOtp: ({ mobile }) => {

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
    },

    signup: ({ mobile, password }) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10).then((hash) => {
                db.get().collection(dbCollection.userCollection).insertOne({ mobile: mobile, password: hash }).then((obj) => {
                    console.log(obj);
                    resolve()
                })
            });
        })


    },

    login: ({ mobile, password }) => {
        return new Promise((resolve, reject) => {
            db.get().collection(dbCollection.userCollection).findOne({ mobile: mobile }).then((data) => {
                console.log(data);
                if(data){
                bcrypt.compare(password,data.password).then((result)=>{
                    resolve(result)
                });}
                else
                resolve(false)
            })

        })

    }
}