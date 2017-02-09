'use strict'
const T = require('./T')
const p = require('./twitParams')
const ura = require('unique-random-array')

const prom = new Promise((resolve, reject) => {
  T.get('search/tweets', p, function (err, data) {
    if (!err) {
      // resolve(data.statuses[0].id_str)
      console.log(`PARAMS`, p)
      // console.log(`STATUSES`, statusId.id_str)
      let randStat = ura(data.statuses)
      resolve(randStat().id_str)
    } else {
      reject(Error(`RETWEET ERROR`))
      // console.log(`RETWEET ERROR:`, err)
    }
  })
})

module.exports = prom
  .then(data => {
    // console.log(data)
    return data
  })
  .catch(err => {
    console.log(err)
    return Error(`RETWEET ERROR`)
  })
