const T = require('./T')
const s = require('./search')

s
  .then(data => {
    let searchId = data
    T.post('statuses/retweet/:id', {
      id: searchId
    }, function (err, response) {
      if (err) { // if error while retweet
        console.log(`ERROR! DUPLICATE TWEET`)
      } else {
        console.log(`RETWEET!`, response.retweeted_status.text)
      }
    })
  })
  .catch(err => {
    console.log(err)
  })
