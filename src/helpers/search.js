const T = require('./T')
const p = require('./twitParams')

const prom = new Promise((resolve, reject) => {
  T.get('search/tweets', p, function (err, data) {
    if (!err) {
      resolve(data.statuses[0].id_str)
    } else {
      console.log(`Can't RETWEET:`, err)
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
  })

