'use strict'
const strings = require('./strings')
const ura = require('unique-random-array')

let hashtags = ura(strings.searchQueryStrings)

// let hashtags = strings.searchQueryStrings.join(' OR ')

// hashtags = '#100daysofcode OR #301daysofcode'

module.exports = hashtags()
