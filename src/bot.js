const query = require('./helpers/queryStrings')
const param = require('./helpers/twitParams')
const rt = require('./helpers/retweet')

console.log(param)
console.log(query)

rt
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
