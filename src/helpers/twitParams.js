const q = require('./queryStrings')

// possible result_type: 'mixed', 'recent', 'popular'

const twitParams = {
  q: q,
  result_type: 'mixed',
  lang: 'en'
}

module.exports = twitParams
