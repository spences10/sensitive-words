const strings = require('./strings')

let hashtags = strings.searchQueryStrings.join(' OR ')

hashtags = '#100daysofcode OR #301daysofcode'

module.exports = hashtags
