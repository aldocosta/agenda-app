const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODBSTRING,
 {useNewUrlParser: true})

module.exports = mongoose