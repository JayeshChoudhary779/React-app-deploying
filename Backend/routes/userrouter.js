
const express = require('express')
const router = express.Router()

const usercontroller= require("../controller/usercontroller");

router.post('/signUp', usercontroller.signUp)
router.post('/login', usercontroller.login)


module.exports = router