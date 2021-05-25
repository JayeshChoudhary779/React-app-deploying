const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')

const url = 'mongodb://localhost:27017/E-offers'

const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/userrouter')
const customerRouter = require('./routes/customerrouter')
const adminRouter = require('./routes/adminrouter')

app.use('/app/user',userRouter)

app.use('/app/customer',customerRouter)
app.use('/app/shop',customerRouter)

app.use('/app/category',adminRouter)
app.use('/app/admin',adminRouter)

app.listen(4555, () => {
    console.log('Server started')
})