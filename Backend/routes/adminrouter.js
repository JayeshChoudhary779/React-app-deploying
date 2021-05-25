
const express = require('express')
const router = express.Router()

const admincontroller= require("../controller/admincontroller");

router.post('/signUp', admincontroller.signUp)
router.post('/login', admincontroller.login)
router.get('/', admincontroller.getCategory)
router.post('/add', admincontroller.addCategory)
router.delete('/delete/:name', admincontroller.deleteCategory)


module.exports = router