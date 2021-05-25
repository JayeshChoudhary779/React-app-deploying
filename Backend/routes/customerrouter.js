
const express = require('express')
const router = express.Router()

const customercontroller= require("../controller/customercontroller");

router.post('/signUp', customercontroller.signUp)
router.post('/login', customercontroller.login)
router.get('/', customercontroller.getShop)
router.post('/add', customercontroller.addShop)
router.delete('/delete/:sname', customercontroller.deleteShop)

module.exports = router