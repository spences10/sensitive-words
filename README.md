# Example

[![Greenkeeper badge](https://badges.greenkeeper.io/spences10/sensitive-words.svg)](https://greenkeeper.io/)

```shell
$ yarn install sensitive-words -D
```

```javascript
const { sensitiveWords } = require('@spences10/sensitive-words')
// ES2015 modules
import { sensitiveWords } from '@spences10/sensitive-words'


const filtered = sensitiveWords(
  'The new apple macbook pro will have a touchbar',
  ['pro', 'touchbar']
)

console.log(filtered)
// expected result
// The new apple macbook ***** will have a *****
```