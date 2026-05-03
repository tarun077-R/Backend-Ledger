require("dotenv").config()
const app = require("./src/app")
const connectdb = require("./src/config/db")

connectdb();
app.listen(5000,()=>{
    console.log("Server is created")
})