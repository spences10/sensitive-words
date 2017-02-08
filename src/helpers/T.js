const Twit = require('twit')
const config = require('../config')

const T = new Twit(config)

module.exports = T
