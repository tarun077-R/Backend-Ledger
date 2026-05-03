const mongoose = require("mongoose")

async function connectdb(){
    try{
       await mongoose.connect(process.env.MONGO_URL)
        console.log("Db is  connected")
    }
    catch(err){
        console.log("Error",err)
        process.exit(-1)

    }
}
module.exports = connectdb