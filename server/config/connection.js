require('dotenv').config()
const { MongoClient } = require("mongodb");
const{dburl}=process.env
const state = {
    db: null

}

module.exports = {
    connect: function () {
        return new Promise((resolve, reject) => {
            //console.log("here");
            const url = dburl
            const dbname = 'Olx-clone'
            const client = new MongoClient(url);
            client.connect().then(()=>{
                state.db = client.db(dbname);
                resolve();
            }).catch((err)=>reject()) 
        })

    },


    get: function () {
        return state.db
    }
}