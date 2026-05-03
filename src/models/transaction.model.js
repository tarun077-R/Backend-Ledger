const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    fromAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:true,
        index:true
    },
    toAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:true,
        index:true
    },status:{
        type:String,
        enum:{
            values:["PENDING","COMPLETED","FAILED","REVERSED"],
            message:"Status must be either PENDING, COMPLETED, FAILED or REVERSED"
        }
    },
    amount:{
type:Number,
required:true,
min:[0.01,"Amount must be greater than 0"]
    },
    idempotencyKey:{
        type:String,
        required:true,
        index:true,
        unique:true,
    }
},{timestamps:true})

const transactionModel = mongoose.model("transaction",transactionSchema)
module.exports = transactionModel;