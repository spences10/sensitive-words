# Example


![Renovate badge](https://badges.renovateapi.com/github/spences10/sensitive-words)

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
