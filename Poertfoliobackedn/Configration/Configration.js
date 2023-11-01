const mongoose = require('mongoose');
module.exports = () => {
    async function DDforMAil(){
        try {
             mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        } catch (error) {
            console.log("there is error contacting with the Database try after some time or check errr")
        }
    }
    DDforMAil();
}