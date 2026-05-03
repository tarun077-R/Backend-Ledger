const express = require("express")
const  authMiddleware = require("../middleware/auth.middleware")
const accountcontroller = require("../controller/account.controller")
const router = express.Router()

router.post("/",authMiddleware.authMiddleware,accountcontroller.createaccount)
router.get("/",authMiddleware.authMiddleware,accountcontroller.getuserAccount)
router.get("/balance/:accountId",authMiddleware.authMiddleware,accountcontroller.getuserBalance)
module.exports = router