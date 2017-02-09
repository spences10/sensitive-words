'use strict'
const T = require('./T')
const s = require('./search')

s
  .then(data => {
    let searchId = data
    T.post('favorites/create', {
      id: searchId
    }, function (err, response) {
      if (err) { // if error while 'favorite'
        console.log(`FAVORITE ERROR:`, err)
      } else {
        console.log(`FAVORITE`, response.text)
      }
    })
  })
  .catch(err => {
    console.log(err)
  })

module.exports = s
