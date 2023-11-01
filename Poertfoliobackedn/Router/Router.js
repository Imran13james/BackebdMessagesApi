const express = require("express")
const {sendMail,Checksms} = require("../Contrllers/Controllers")
const router= express.Router()

router.post("/mail",sendMail)
router.get("/checkmess",Checksms)
module.exports = router