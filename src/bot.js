const query = require('./helpers/queryStrings')
const param = require('./helpers/twitParams')
const s = require('./helpers/search')

console.log(param)
console.log(query)

s
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
